import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
};

const WHATSAPP_NUMBER = "+40771234567"; // Replace with actual WhatsApp number
const WHATSAPP_MESSAGE = "Bună ziua! Aș dori să solicit o ofertă pentru serviciile dumneavoastră.";

const CTAButton = ({ className, fullWidth, onClick }: Props) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    e.preventDefault();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center gap-2 px-5 py-2 rounded-md font-semibold shadow transition bg-[#F97316] hover:bg-[#FF7D33] text-white",
        fullWidth && "justify-center w-full",
        className
      )}
    >
      <MessageCircle className="w-5 h-5" />
      Solicită o ofertă gratuită
    </button>
  );
};

export default CTAButton;
