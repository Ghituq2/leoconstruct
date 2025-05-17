
type Project = {
  before: string;
  after: string;
  title: string;
  desc?: string;
};

const gallery: Project[] = [
  {
    title: "Casă - renovare fațadă",
    before: "/lovable-uploads/f3e72043-454e-477f-913c-609c965fcb07.png",
    after:  "/lovable-uploads/1603eab0-fbc1-4940-9654-37c896a8db53.png",
    desc: "Termoizolare și tencuială decorativă",
  },
  {
    title: "Montaj gresie și faianță",
    before: "/lovable-uploads/1438311a-dab7-42cb-a1dc-7c5072af5007.png",
    after: "/lovable-uploads/1438311a-dab7-42cb-a1dc-7c5072af5007.png",
    desc: "Pereți înainte și după finisare",
  },
  {
    title: "Fațadă locuință", 
    before: "/lovable-uploads/cf2f523e-9303-4f52-b76d-94522f997ba9.png",
    after:  "/lovable-uploads/803b909b-de2a-449d-a923-26cce96f216a.png",
    desc: "Tencuire și vopsire exterior",
  }
];

const ProjectGallery = () => (
  <div className="grid md:grid-cols-3 gap-8">
    {gallery.map((item, idx) => (
      <div key={idx} className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
        <div className="w-full mb-3 text-center font-medium">{item.title}</div>
        <div className="flex gap-2 w-full justify-center">
          <div className="flex flex-col items-center">
            <span className="text-xs mb-1 text-gray-500">Before</span>
            <img src={item.before} className="w-36 h-28 object-cover rounded shadow" alt={`before ${item.title}`}/>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs mb-1 text-gray-500">After</span>
            <img src={item.after} className="w-36 h-28 object-cover rounded shadow" alt={`after ${item.title}`}/>
          </div>
        </div>
        {item.desc && <div className="text-xs text-gray-500 mt-2">{item.desc}</div>}
      </div>
    ))}
  </div>
);
export default ProjectGallery;
