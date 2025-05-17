
import CTAButton from "@/components/CTAButton";

const Home = () => (
  <div>
    <section className="flex flex-col md:flex-row gap-8 items-center justify-between py-10">
      <div className="flex-1 flex flex-col items-start">
        <img 
          src="/lovable-uploads/3e96a9d9-95a5-4845-bfc1-ecd2ad29ba4a.png" 
          alt="LEO Construct Logo" 
          className="h-20 w-20 mb-4 drop-shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#222] leading-tight">
          LEO Construct<br />
          <span className="text-[#F97316]">Calitate, Seriozitate, Echipă Dedicată</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-xl">
          Oferim servicii complete de renovare și finisaje interioare/exterioare, cu o echipă de profesioniști dedicați și atenți la detalii.
        </p>
        <CTAButton />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/lovable-uploads/803b909b-de2a-449d-a923-26cce96f216a.png"
          alt="Imagine construcții"
          className="rounded-xl shadow-lg w-full max-w-md object-cover"
        />
      </div>
    </section>
    <section className="mt-12 flex flex-wrap gap-8 justify-center">
      {[
        {
          label: "Seriozitate",
          desc: "Abordăm fiecare proiect cu responsabilitate și transparență.",
        },
        {
          label: "Calitate",
          desc: "Folosim materiale și tehnici moderne pentru rezultate de durată.",
        },
        {
          label: "Echipă dedicată",
          desc: "Echipa noastră este formată din profesioniști cu experiență.",
        }
      ].map(({ label, desc }) => (
        <div 
          className="bg-[#F97316]/10 text-[#F97316] rounded-xl p-6 min-w-[200px] flex-1 max-w-xs text-center shadow"
          key={label}
        >
          <span className="text-lg font-bold">{label}</span>
          <div className="text-sm text-[#222] mt-1">{desc}</div>
        </div>
      ))}
    </section>
  </div>
);

export default Home;
