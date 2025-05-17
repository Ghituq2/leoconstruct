
import ServiceCard from "@/components/ServiceCard";
import { Building, Wrench, PaintRoller, Image, Calendar, Check } from "lucide-react";

const services = [
  {
    title: "Renovări apartamente și case",
    icon: <Building className="w-7 h-7" />,
    description: "Executăm renovări complete pentru apartamente și case, de la demolare la finisaje.",
  },
  {
    title: "Tencuit interior/exterior",
    icon: <Wrench className="w-7 h-7" />,
    description: "Realizăm tencuieli moderne pentru fațade și spații interioare.",
  },
  {
    title: "Placare fațade cu polistiren/vată bazaltică",
    icon: <Image className="w-7 h-7" />,
    description: "Izolăm termic cu materiale profesionale pentru economie și confort.",
  },
  {
    title: "Aplicare tinci, glet, vopsea decorativă",
    icon: <PaintRoller className="w-7 h-7" />,
    description: "Finisaje netede și estetice, cu durabilitate sporită.",
  },
  {
    title: "Montaj gresie și faianță",
    icon: <Check className="w-7 h-7" />,
    description: "Montăm gresie și faianță cu precizie și design personalizat.",
  },
  {
    title: "Rigips și zugrăveli",
    icon: <Calendar className="w-7 h-7" />,
    description: "Execuție rigips, glet, zugrăveli pentru spații perfect finisate.",
  },
];

const Services = () => (
  <div>
    <h2 className="text-3xl font-bold text-[#222] mb-8 text-center">Serviciile Noastre</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {services.map((svc, idx) => (
        <ServiceCard key={svc.title + idx} {...svc} />
      ))}
    </div>
  </div>
);

export default Services;
