const { defaults: tsjPreset } = require('ts-jest/presets');

export default {
    transform: tsjPreset.transform,
    testEnvironment: 'node',
    verbose: true,
    watchPathIgnorePatterns: ['globalConfig'],
    collectCoverageFrom: [
        "src/**/*.{js,ts}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ]
};


