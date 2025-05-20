import { useEffect } from "react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    MyAliceWebChat: {
      init: (config: {
        selector: string;
        number: string;
        message: string;
        color: string;
        channel: string;
        boxShadow: string;
        text: string;
        theme: string;
        position: string;
        mb: string;
        mx: string;
        radius: string;
      }) => void;
    };
  }
}

type Props = {
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
};

const CTAButton = ({ className, fullWidth, onClick }: Props) => {
  useEffect(() => {
    // Check if script is already loaded
    if (window.MyAliceWebChat) return;

    const script = document.createElement("script");
    script.src = "https://widget.myalice.ai/index.js";
    script.async = true;
    script.onload = () => {
      if (window.MyAliceWebChat) {
        window.MyAliceWebChat.init({
          selector: "myAliceWebChat",
          number: "",
          message: "",
          color: "#25D366",
          channel: "wa",
          boxShadow: "none",
          text: "",
          theme: "light",
          position: "right",
          mb: "20px",
          mx: "20px",
          radius: "20px"
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="myAliceWebChat" className={cn(
      "fixed bottom-5 right-5 z-[9999]",
      className
    )} />
  );
};

export default CTAButton;
