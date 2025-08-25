module.exports = {
  content: [
    './views/**/*.handlebars',
    './public/**/*.html',
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'doodle-light': "url('./bg/doodle-light.png')",
        'doodle-dark': "url('./bg/doodle-dark.png')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
