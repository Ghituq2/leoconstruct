
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
};

const CTAButton = ({ className, fullWidth, onClick }: Props) => (
  <Link
    to="/contact"
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 px-5 py-2 rounded-md font-semibold shadow transition bg-[#F97316] hover:bg-[#FF7D33] text-white",
      fullWidth && "justify-center w-full",
      className
    )}
  >
    <Mail className="w-5 h-5" />
    Solicita o ofertă gratuită
  </Link>
);

export default CTAButton;
