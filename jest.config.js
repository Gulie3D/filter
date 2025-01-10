/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest', // Utilise ts-jest pour la compatibilité avec TypeScript
  testEnvironment: 'node', // Spécifie l'environnement Node.js pour les tests
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Remappe les extensions .js pour TypeScript
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transforme les fichiers TypeScript
  },
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'], // Correspond aux fichiers de test
  moduleFileExtensions: ['ts', 'js', 'json', 'node'], // Extensions de fichier supportéesyarn add -D jest ts-jest @types/jest
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\", // Ignore les fichiers dans node_modules
    "\\\\dist\\\\",         // Ignore les fichiers compilés dans dist
  ],
};
