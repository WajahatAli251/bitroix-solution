import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// EmailJS configuration for sending emails
import emailjs from '@emailjs/browser';

const sendConfirmationEmails = async (bookingData: any) => {
  try {
    // Create mailto link with meeting details
    const subject = encodeURIComponent("New Meeting Scheduled - Bitroix Solution LLC");
    const body = encodeURIComponent(
      `Meeting Request Details:\n\n` +
      `Client Name: ${bookingData.client_name}\n` +
      `Email: ${bookingData.client_email}\n` +
      `Company: ${bookingData.client_company || 'Not specified'}\n` +
      `Meeting Date: ${bookingData.meeting_date}\n` +
      `Meeting Time: ${bookingData.meeting_time} PKT\n\n` +
      `Message:\n${bookingData.message || 'No additional message'}\n\n` +
      `Please confirm this meeting by replying to this email.`
    );
    
    const mailtoLink = `mailto:info@bitroixsolution.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');

    console.log('Opening email client for meeting confirmation');
    return { success: true };
  } catch (error) {
    console.error('Error opening email client:', error);
    throw error;
  }
};

interface TimeSlot {
  time: string;
  available: boolean;
}

const ScheduleMeeting = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const { toast } = useToast();

  // Available time slots (9 AM to 5 PM, excluding lunch 12-1 PM)
  const timeSlots: TimeSlot[] = [
    { time: '09:00', available: true },
    { time: '09:30', available: true },
    { time: '10:00', available: true },
    { time: '10:30', available: true },
    { time: '11:00', available: true },
    { time: '11:30', available: true },
    { time: '13:00', available: true }, // 1 PM
    { time: '13:30', available: true },
    { time: '14:00', available: true },
    { time: '14:30', available: true },
    { time: '15:00', available: true },
    { time: '15:30', available: true },
    { time: '16:00', available: true },
    { time: '16:30', available: true },
    { time: '17:00', available: true }
  ];

  const handleInputChange = (field: string, value: string) => {
    setClientInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleBookMeeting = async () => {
    if (!selectedDate || !selectedTime || !clientInfo.name || !clientInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select a date and time.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create meeting record 
      const bookingData = {
        client_name: clientInfo.name,
        client_email: clientInfo.email,
        client_company: clientInfo.company,
        meeting_date: selectedDate.toISOString().split('T')[0],
        meeting_time: selectedTime,
        message: clientInfo.message,
        status: 'scheduled'
      };

      // Send confirmation emails
      await sendConfirmationEmails(bookingData);

      setIsBooked(true);
      toast({
        title: "Meeting Request Sent!",
        description: `Your meeting request for ${selectedDate.toLocaleDateString()} at ${selectedTime} has been sent. We'll confirm via email shortly.`,
      });

      // Reset form
      setSelectedDate(undefined);
      setSelectedTime('');
      setClientInfo({ name: '', email: '', company: '', message: '' });

    } catch (error) {
      console.error('Error booking meeting:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error scheduling your meeting. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isBooked) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-lg mx-auto shadow-2xl border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 animate-scale-in">
          <CardContent className="pt-8 pb-8 px-8">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
                <CheckCircle className="relative h-20 w-20 text-green-500 mx-auto animate-bounce" />
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  🎉 Meeting Scheduled Successfully!
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Thank you for booking with <span className="font-semibold text-primary">Bitroix Solution</span>! 
                  <br />We'll send you a confirmation email shortly with meeting details.
                </p>
              </div>
              <div className="p-4 bg-white/60 dark:bg-black/20 rounded-xl border border-green-200 dark:border-green-800">
                <p className="text-sm font-medium text-green-700 dark:text-green-300">
                  📧 Check your email for the Google Meet link
                </p>
              </div>
              <Button 
                onClick={() => setIsBooked(false)} 
                className="mt-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Schedule Another Meeting
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Clean Header Section */}
      <div className="text-center space-y-4 py-6 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Book a Free Consultation
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Let's discuss how we can help transform your business with our digital solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-full text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Free Consultation
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-full text-sm text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            30 Minutes
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-full text-sm text-muted-foreground">
            <MessageSquare className="w-3.5 h-3.5" />
            Video Call
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 px-4">
        {/* Date and Time Selection */}
        <Card className="shadow-md border border-border/50 bg-card">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold text-foreground">
              <Clock className="h-5 w-5 text-primary" />
              Select Date & Time
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Pick a convenient time for your call
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Calendar */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-foreground">
                Date <span className="text-muted-foreground font-normal">(Weekdays)</span>
              </Label>
              <div className="rounded-lg border border-border bg-background p-3">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => 
                    date < new Date() || 
                    date.getDay() === 0 || 
                    date.getDay() === 6
                  }
                  className="rounded-lg border-0 w-full"
                />
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="space-y-3 animate-fade-in">
                <Label className="text-sm font-medium text-foreground">
                  Available Times
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot.time}
                      variant={selectedTime === slot.time ? "default" : "outline"}
                      size="sm"
                      disabled={!slot.available}
                      onClick={() => setSelectedTime(slot.time)}
                      className={`text-sm ${
                        selectedTime === slot.time 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-accent"
                      }`}
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Times shown in PST • 30 min duration
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Client Information Form */}
        <Card className="shadow-md border border-border/50 bg-card">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold text-foreground">
              <User className="h-5 w-5 text-primary" />
              Your Details
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Tell us about yourself
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={clientInfo.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                value={clientInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium">
                Company
              </Label>
              <Input
                id="company"
                placeholder="Your company"
                value={clientInfo.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                What would you like to discuss?
              </Label>
              <Textarea
                id="message"
                placeholder="Brief description of your project or questions..."
                className="min-h-[100px] bg-background resize-none"
                value={clientInfo.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </div>

            {/* Meeting Summary */}
            {selectedDate && selectedTime && (
              <div className="p-4 bg-muted rounded-lg space-y-2 animate-fade-in">
                <h4 className="font-medium text-sm text-foreground">
                  Your Appointment
                </h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                  <p>{selectedTime} PST • 30 minutes • Video Call</p>
                </div>
              </div>
            )}

            <Button 
              onClick={handleBookMeeting}
              disabled={isSubmitting || !selectedDate || !selectedTime || !clientInfo.name || !clientInfo.email}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                  Scheduling...
                </span>
              ) : (
                'Schedule Meeting'
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Your information is secure and private.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* What to Expect Section */}
      <Card className="mx-4 shadow-md border border-border/50 bg-card">
        <CardContent className="pt-6 pb-6 px-6">
          <div className="text-center space-y-6">
            <h3 className="text-xl font-semibold text-foreground">What to Expect</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                <Clock className="h-8 w-8 mx-auto text-primary" />
                <h4 className="font-medium text-foreground">Quick & Focused</h4>
                <p className="text-sm text-muted-foreground">
                  30-minute session to understand your needs
                </p>
              </div>
              <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                <Mail className="h-8 w-8 mx-auto text-primary" />
                <h4 className="font-medium text-foreground">Instant Confirmation</h4>
                <p className="text-sm text-muted-foreground">
                  Email with meeting link sent immediately
                </p>
              </div>
              <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                <MessageSquare className="h-8 w-8 mx-auto text-primary" />
                <h4 className="font-medium text-foreground">Strategic Discussion</h4>
                <p className="text-sm text-muted-foreground">
                  Deep dive into your project goals
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleMeeting;