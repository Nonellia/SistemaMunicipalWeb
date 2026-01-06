module.exports = {
  content: ["./index.html"],
      theme: {
        extend: {
          colors: {
            'institucional': '#1e3a5f',      // Azul institucional
            'secundario': '#2c5282',         // Azul secundario
            'acento': '#d4a017',             // Dorado institucional
            'gris-claro': '#f8fafc',
            'gris-medio': '#e2e8f0',
            'gris-oscuro': '#4a5568'
          },
          fontFamily: {
            'serif': ['Georgia', 'Times New Roman', 'serif'],
            'sans': ['Arial', 'Helvetica', 'sans-serif']
          },
          boxShadow: {
            'elevado': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            'card': '0 2px 8px rgba(0, 0, 0, 0.08)'
          }
        }
      },
  plugins: [],
}
