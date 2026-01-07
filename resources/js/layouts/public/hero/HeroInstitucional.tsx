export default function HeroInstitucional() {
  return (
    <section
      id="inicio"
      className="hero-institucional text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <span className="bg-acento text-institucional px-4 py-1 rounded-full text-sm font-semibold">
            Portal Oficial
          </span>

          <h1 className="text-4xl md:text-5xl font-bold my-6 leading-tight">
            Gobierno Municipal <br /> de Río Gallegos
          </h1>

          <p className="text-xl text-blue-100 mb-8">
            Gestión transparente, servicios eficientes y atención cercana al
            ciudadano.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#tramites"
              className="btn-institucional px-6 py-3 rounded font-semibold text-center"
            >
              Trámites en Línea
            </a>
            <a
              href="#transparencia"
              className="bg-white text-institucional px-6 py-3 rounded font-semibold text-center"
            >
              Transparencia Activa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
