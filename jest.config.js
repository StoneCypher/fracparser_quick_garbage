
module.exports = {

  testEnvironment            : 'node',

  moduleFileExtensions       : ['js', 'ts'],
  coveragePathIgnorePatterns : ["/node_modules/", "/src/ts/tests/"],
  testMatch                  : ['**/*.spec.ts'],

  transform                  : { '^.+\\.ts$': 'ts-jest' },

  verbose                    : false,

};
