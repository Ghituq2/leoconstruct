
import ProjectGallery from "@/components/ProjectGallery";

const Projects = () => (
  <div>
    <h2 className="text-3xl font-bold text-[#222] mb-8 text-center">Proiecte Finalizate</h2>
    <ProjectGallery />
    <div className="mt-6 text-center text-gray-600 text-sm">Pentru mai multe imagini sau detalii despre proiectele noastre, <a href="/contact" className="text-[#F97316] hover:underline">contactați-ne</a>.</div>
  </div>
);

export default Projects;
