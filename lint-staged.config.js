module.exports = {
  'src/**/*.{ts,tsx}': [
    (filenames) => `prettier --write ${filenames.join(" ")}`,
    (filenames) => `next lint --fix --file ${filenames.join(" --file ")}`,
    (_) => 'tsc',
  ],
  'src/**/*.scss': [
    (filenames) => `prettier --write ${filenames.join(" ")}`,
    (filenames) => `stylelint --fix ${filenames.join(" ")}`,
  ],
};
