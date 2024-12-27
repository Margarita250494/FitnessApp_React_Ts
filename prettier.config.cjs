const { default: plugin } = require("tailwindcss");

/*module.exports = {
    plugins:[require("prettier-plugin-tailwindcss")]
}*/
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};