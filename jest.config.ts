/** @type {import('@jest/types').Config.InitialOptions} */

const config = () => {
  return {
    testEnvironment: "jsdom",
    transform: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/fileTransformer.ts",
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
      "\\.(css|scss)$": "identity-obj-proxy",
    },
    preset: "ts-jest",
  };
};

export default config;
