export default function HeaderInstitucional() {
  return (
    <div className="header-institucional text-white shadow-elevado">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-white p-2 rounded">
              <div className="w-12 h-12 bg-secundario rounded flex items-center justify-center">
                <span className="font-bold text-white text-xl">RG</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Municipalidad de Río Gallegos
              </h1>
              <p className="text-sm text-blue-200">
                Gobierno Municipal – Santa Cruz
              </p>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-sm text-center md:text-right">
            <div className="mb-1">
              <strong>Tel:</strong> 2966 457021
            </div>
            <div>
              <strong>Atención:</strong> Lun a Vie · 8:00 a 20:00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
