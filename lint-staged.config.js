module.exports = {
  'src/**/*.{ts,tsx}': [
    (filenames) => `prettier --write --cache ${filenames.join(" ")}`,
    (filenames) => `next lint --fix --file ${filenames.join(" --file ")}`,
    (_) => 'tsc',
  ],
  'src/**/*.scss': [
    (filenames) => `prettier --write --cache ${filenames.join(" ")}`,
    (filenames) => `stylelint --fix --cache --cache-location 'node_modules/.cache/stylelint/' ${filenames.join(" ")}`,
  ],
};
