export default function Navbar() {
  return (
    <nav className="bg-secundario">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="hidden md:flex space-x-6 py-3">
            {[
              ["Inicio", "#inicio"],
              ["Gobierno", "#gobierno"],
              ["Trámites", "#tramites"],
              ["Transparencia", "#transparencia"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-white font-medium py-2 border-b-2 border-transparent hover:border-acento hover:text-acento transition"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="py-3">
            <a
              href="https://portal.riogallegos.gob.ar"
              className="bg-acento text-institucional px-4 py-2 rounded font-semibold hover:shadow-lg transition"
            >
              Acceso Ciudadano
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
