import { ReactNode } from "react";
import PublicLayout from "@/layouts/public-layout";

type Tramite = {
  titulo: string;
  descripcion: string;
  estado: "online" | "turno";
};

const tramites: Tramite[] = [
  {
    titulo: "Pago de Tasas Municipales",
    descripcion: "ABM, Tasa Retributiva y Servicios",
    estado: "online",
  },
  {
    titulo: "Licencia de Conducir",
    descripcion: "Renovación y obtención",
    estado: "online",
  },
  {
    titulo: "Habilitaciones Comerciales",
    descripcion: "Inicio y renovación de actividad",
    estado: "online",
  },
  {
    titulo: "Certificados",
    descripcion: "Libre deuda, domicilio y otros",
    estado: "turno",
  },
];

export default function Tramites() {
  return (
    <section id="tramites" className="py-16 bg-gris-claro">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="seccion-titulo centrado text-3xl font-bold text-institucional inline-block">
            Trámites y Servicios Digitales
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Realizá tus trámites municipales de forma rápida y segura, sin filas
            ni demoras.
          </p>
        </div>

        {/* Grid de trámites */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tramites.map((t) => (
            <div
              key={t.titulo}
              className="card-institucional bg-white p-6 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-bold text-institucional text-lg mb-2">
                {t.titulo}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {t.descripcion}
              </p>

              <div className="flex justify-between items-center">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded ${
                    t.estado === "online"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {t.estado === "online" ? "En línea" : "Con turno"}
                </span>

                <a
                  href="#"
                  className="text-secundario hover:text-institucional font-medium text-sm"
                >
                  Ingresar →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sistema de turnos */}
        <div className="bg-white rounded-lg shadow p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-institucional text-xl mb-2">
                Sistema de Turnos Online
              </h3>
              <p className="text-gray-600">
                Reservá tu atención presencial y evitá esperas innecesarias.
              </p>
            </div>

            <a
              href="#"
              className="btn-institucional px-6 py-3 rounded font-semibold"
            >
              Solicitar turno
            </a>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg text-center border">
            <div className="text-3xl font-bold text-institucional mb-1">
              15.842
            </div>
            <div className="text-gray-600 text-sm">
              Trámites online 2024
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg text-center border">
            <div className="text-3xl font-bold text-institucional mb-1">
              2.5 h
            </div>
            <div className="text-gray-600 text-sm">
              Tiempo promedio
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg text-center border">
            <div className="text-3xl font-bold text-institucional mb-1">
              94%
            </div>
            <div className="text-gray-600 text-sm">
              Satisfacción ciudadana
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg text-center border">
            <div className="text-3xl font-bold text-institucional mb-1">
              24/7
            </div>
            <div className="text-gray-600 text-sm">
              Disponibilidad
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Layout público */
Tramites.layout = (page: ReactNode) => (
  <PublicLayout
    title="Trámites Municipales | Río Gallegos"
    description="Trámites y servicios digitales de la Municipalidad de Río Gallegos"
  >
    {page}
  </PublicLayout>
);
