module.exports = {
  bail: 1,
  moduleDirectories: ['node_modules', 'src', 'test'],
  moduleNameMapper: {
    "\\.less$": "<rootDir>/test/__mocks__/styleMock.js"
  },
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.js"],
  testEnvironment: "jsdom"
}
