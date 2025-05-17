
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // Nu trimit email real (demo)
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formRef.current?.reset();
    alert("Vă mulțumim! Vă vom contacta rapid.");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow rounded-xl p-8 mt-4 mb-8">
      <h2 className="text-3xl font-bold text-[#222] mb-6 text-center">Contact</h2>
      <form ref={formRef} className="flex flex-col gap-4" onSubmit={onSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <input className="flex-1 border rounded px-4 py-2" placeholder="Nume" required />
          <input type="email" className="flex-1 border rounded px-4 py-2" placeholder="Email" required />
        </div>
        <input className="border rounded px-4 py-2" placeholder="Telefon" required />
        <textarea className="border rounded px-4 py-2" rows={4} placeholder="Mesaj" required />
        <button className="mt-2 bg-[#F97316] hover:bg-[#ff7d33] px-5 py-2 rounded-md text-white font-semibold" type="submit">
          Trimite mesajul
        </button>
      </form>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-700"><Phone className="w-5 h-5" /> <a href="tel:+40722123456" className="hover:underline">0722 123 456</a></div>
          <div className="flex items-center gap-2 text-gray-700"><Mail className="w-5 h-5" /> <a href="mailto:leoconstruct@email.com" className="hover:underline">leoconstruct@email.com</a></div>
          <div className="flex items-center gap-2 text-gray-700"><MapPin className="w-5 h-5" /> Strada Exemplu 99, București</div>
        </div>
        <div className="rounded-xl overflow-hidden w-full md:w-72 h-56 border border-gray-200 shadow">
          <iframe
            title="Google Maps Leo Construct"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.049396984952!2d26.102538315142754!3d44.4267679791026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff38bc839e15%3A0x88cddaa5232ae1e6!2sBucharest!5e0!3m2!1sen!2sro!4v1589985484840!5m2!1sen!2sro"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
