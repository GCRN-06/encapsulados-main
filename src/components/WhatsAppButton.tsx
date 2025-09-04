import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os produtos Gummy."
    );
    const phone = "5511999999999"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-14 h-14 rounded-full p-0 group"
      size="icon"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
      <span className="sr-only">Falar no WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;
