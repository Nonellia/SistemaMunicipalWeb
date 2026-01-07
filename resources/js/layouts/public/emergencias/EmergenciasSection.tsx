export default function EmergenciasSection() {
  const emergencias = [
    { numero: "144", titulo: "Violencia de Género" },
    { numero: "107", titulo: "Emergencias Médicas" },
    { numero: "103", titulo: "Defensa Civil" },
    { numero: "100", titulo: "Policía Municipal" },
  ];

  return (
    <section
      id="emergencias"
      className="bg-institucional text-white py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Emergencias y Contacto Urgente
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {emergencias.map((e) => (
            <a
              key={e.numero}
              href={`tel:${e.numero}`}
              className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition"
            >
              <div className="text-4xl font-bold mb-2">{e.numero}</div>
              <div className="text-sm">{e.titulo}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
