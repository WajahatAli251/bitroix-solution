import { useConversation } from "@elevenlabs/react";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface VoiceAgentProps {
  agentId: string;
}

export function VoiceAgent({ agentId }: VoiceAgentProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to voice agent");
      toast({
        title: "Connected",
        description: "Voice agent is ready. Start speaking!",
      });
    },
    onDisconnect: () => {
      console.log("Disconnected from voice agent");
    },
    onMessage: (message) => {
      console.log("Message:", message);
    },
    onError: (error) => {
      console.error("Voice agent error:", error);
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Failed to connect to voice agent. Please try again.",
      });
    },
  });

  const startConversation = useCallback(async () => {
    setIsConnecting(true);
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Get token from edge function
      const { data, error } = await supabase.functions.invoke(
        "elevenlabs-conversation-token",
        {
          body: { agentId },
        }
      );

      if (error || !data?.token) {
        throw new Error(error?.message || "No token received");
      }

      // Start the conversation with WebRTC
      await conversation.startSession({
        conversationToken: data.token,
        connectionType: "webrtc",
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
      toast({
        variant: "destructive",
        title: "Failed to Start",
        description: error instanceof Error ? error.message : "Could not start voice agent",
      });
    } finally {
      setIsConnecting(false);
    }
  }, [conversation, agentId, toast]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border">
      <div className="flex items-center gap-2">
        {conversation.isSpeaking ? (
          <Volume2 className="h-5 w-5 text-primary animate-pulse" />
        ) : (
          <Mic className="h-5 w-5 text-muted-foreground" />
        )}
        <span className="text-sm font-medium">
          {conversation.status === "connected" 
            ? conversation.isSpeaking 
              ? "Agent Speaking..." 
              : "Listening..."
            : "Voice Agent"}
        </span>
      </div>

      {conversation.status === "disconnected" ? (
        <Button 
          onClick={startConversation} 
          disabled={isConnecting}
          className="gap-2"
        >
          <Mic className="h-4 w-4" />
          {isConnecting ? "Connecting..." : "Start Conversation"}
        </Button>
      ) : (
        <Button 
          onClick={stopConversation}
          variant="destructive"
          className="gap-2"
        >
          <MicOff className="h-4 w-4" />
          End Conversation
        </Button>
      )}
    </div>
  );
}
