
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: Props) => (
  <div className={cn("bg-white shadow rounded-xl px-6 py-5 flex flex-col items-center text-center hover:shadow-lg transition")}>
    <div className="bg-[#E8F3FA] text-[#0FA0CE] rounded-full p-3 mb-3">{icon}</div>
    <h3 className="font-semibold text-xl mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default ServiceCard;
