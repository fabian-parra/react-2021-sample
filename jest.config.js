module.exports = {
  bail: 1,
  moduleDirectories: ['node_modules', 'src', 'test'],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
}
