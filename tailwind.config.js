module.exports = {
    content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          red: {
            300: "#fca5a5", // exemplo para text-red-300
            // adicione outras tonalidades conforme necessário
          },
          gray: {
            200: "#e5e7eb", // para text-gray-200
            600: "#4b5563", // para text-gray-600
            800: "#1f2937", // para hover:text-gray-800
          },
          green: {
            100: "#d1fae5", // para text-green-100
          },
        },
      },
    },
    safelist: [
      'ml-auto', // Força a inclusão do ml-auto
    ],
    plugins: [],
  }
  