const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
    // Type check TypeScript files
    '**/*.(ts|tsx)': () => 'npm run tsc --noEmit',

    // Lint then format TypeScript and JavaScript files
    '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}