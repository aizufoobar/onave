/** @type {import("prettier").Config} */

// コメ無しはデフォルト値。公式サイトの並び順。
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: false, // デフォルトはtrue
  bracketSameLine: false,
  arrowParens: "always",
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false,
  plugins: ["prettier-plugin-organize-imports"],  // importの並び替え用プラグイン
};
