import { ReactNode } from "react";
import PublicLayout from "@/layouts/public-layout";

export default function Gobierno() {
  return (
    <section id="gobierno" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="seccion-titulo text-3xl font-bold text-institucional mb-8">
          Gobierno Municipal
        </h2>

        {/* Cards principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Intendente */}
          <div className="card-institucional bg-gray-50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <div className="w-24 h-24 bg-secundario rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                IA
              </div>
              <h3 className="text-xl font-bold text-institucional">
                Intendente Municipal
              </h3>
              <p className="text-secundario">
                Pablo Miguel Ángel Grasso
              </p>
            </div>

            <p className="text-gray-600 text-center mb-4">
              Al frente de la gestión municipal desde 2023, impulsando el
              desarrollo integral de Río Gallegos.
            </p>

            <div className="text-center">
              <a
                href="#"
                className="text-secundario hover:text-institucional font-medium"
              >
                Ver mensaje del Intendente →
              </a>
            </div>
          </div>

          {/* Concejo */}
          <div className="card-institucional bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-institucional mb-2">
              Concejo Deliberante
            </h3>
            <p className="text-secundario mb-4">Órgano Legislativo</p>
            <p className="text-gray-600 mb-4">
              Integrado por 15 concejales. Sesiones ordinarias todos los martes a
              las 18:00.
            </p>
            <a
              href="#"
              className="text-secundario hover:text-institucional font-medium"
            >
              Ver ordenanzas →
            </a>
          </div>

          {/* Secretarías */}
          <div className="card-institucional bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-institucional mb-2">
              Secretarías Municipales
            </h3>
            <p className="text-secundario mb-4">Gestión Ejecutiva</p>
            <p className="text-gray-600 mb-4">
              Obras Públicas, Gobierno, Salud, Producción, Educación y más.
            </p>
            <a
              href="#"
              className="text-secundario hover:text-institucional font-medium"
            >
              Ver estructura →
            </a>
          </div>
        </div>

        {/* Tabla de autoridades */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
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
              <tr className="border-t">
                <td className="p-4 font-medium">Intendente</td>
                <td className="p-4">Pablo Miguel Ángel Grasso</td>
                <td className="p-4">Intendencia</td>
                <td className="p-4">intendente@riogallegos.gob.ar</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">Secretario de Gobierno</td>
                <td className="p-4">Martín López</td>
                <td className="p-4">Gobierno</td>
                <td className="p-4">gobierno@riogallegos.gob.ar</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">Secretaria de Salud</td>
                <td className="p-4">Laura Martínez</td>
                <td className="p-4">Salud Pública</td>
                <td className="p-4">salud@riogallegos.gob.ar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* Layout público */
Gobierno.layout = (page: ReactNode) => (
  <PublicLayout
    title="Gobierno Municipal | Río Gallegos"
    description="Autoridades y estructura del Gobierno Municipal de Río Gallegos"
  >
    {page}
  </PublicLayout>
);
