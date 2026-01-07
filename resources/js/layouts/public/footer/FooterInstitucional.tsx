export default function FooterInstitucional() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2">
              Municipalidad de Río Gallegos
            </h3>
            <p className="text-gray-400 text-sm">
              Gobierno Municipal comprometido con la comunidad.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Gobierno</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Intendencia</li>
              <li>Concejo Deliberante</li>
              <li>Secretarías</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Trámites</li>
              <li>Licencias</li>
              <li>Pagos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <p className="text-gray-400 text-sm">
              Av. San Martín 791<br />
              Río Gallegos – Santa Cruz
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © 2024 Municipalidad de Río Gallegos · Versión 1.0.0
        </div>
      </div>
    </footer>
  );
}
