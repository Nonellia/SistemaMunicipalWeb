import { ReactNode } from "react";
import PublicLayout from "@/layouts/public-layout";

// Definimos las interfaces según tus archivos .sql
interface GovernmentSection {
  id: number;
  type: 'intendente' | 'concejo' | 'secretaria';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

interface Authority {
  id: number;
  position: string;
  name: string;
  area: string;
  email: string;
}

interface Props {
  sections: GovernmentSection[];
  authorities: Authority[];
}

export default function Gobierno({ sections = [], authorities = [] }: Props) {
  return (
    <section id="gobierno" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="seccion-titulo text-3xl font-bold text-institucional mb-8">
          Gobierno Municipal
        </h2>

        {/* Cards principales dinámicas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sections.map((section) => (
            <div key={section.id} className="card-institucional bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              {section.type === 'intendente' && (
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-secundario rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                    {section.image ? (
                     /* <img src={`/storage/${section.image}`} alt={section.title} className="w-full h-full object-cover" />*/
                     <img src="https://riogallegos.gob.ar/rgl/wp-content/uploads/2023/12/intendente.jpg" className="w-full h-full object-cover" />
                    ) : (
                      section.title.substring(0, 2).toUpperCase()
                    )}
                  </div>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-institucional mb-2">
                {section.title}
              </h3>
              <p className="text-secundario mb-4">{section.subtitle}</p>
              <p className="text-gray-600 mb-4">{section.description}</p>
              
              <div className="text-center">
                <a
                  href={section.link || "#"}
                  className="text-secundario hover:text-institucional font-medium inline-block"
                >
                  Saber más →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tabla de autoridades dinámica */}
        <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-100">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-institucional">
                <th className="p-4 text-left">Cargo</th>
                <th className="p-4 text-left">Nombre</th>
                <th className="p-4 text-left">Área</th>
                <th className="p-4 text-left">Contacto</th>
              </tr>
            </thead>
            <tbody>
              {authorities.length > 0 ? (
                authorities.map((auth) => (
                  <tr key={auth.id} className="border-t hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium text-gray-800">{auth.position}</td>
                    <td className="p-4 text-gray-700">{auth.name}</td>
                    <td className="p-4 text-gray-600">{auth.area}</td>
                    <td className="p-4">
                      <a href={`mailto:${auth.email}`} className="text-secundario hover:underline">
                        {auth.email}
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    No hay autoridades registradas actualmente.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

Gobierno.layout = (page: ReactNode) => (
  <PublicLayout
    title="Gobierno Municipal | Río Gallegos"
    description="Autoridades y estructura del Gobierno Municipal de Río Gallegos"
  >
    {page}
  </PublicLayout>
);