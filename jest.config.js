module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    timers: 'fake',
    testPathIgnorePatterns: [
        '<rootDir>/test',
    ]
};
