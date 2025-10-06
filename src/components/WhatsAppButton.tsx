import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "923352222578"; // Pakistani format: +92 3352222578
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.location.href = whatsappUrl;
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        onClick={handleClick}
        className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-white/20"
        size="icon"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;
