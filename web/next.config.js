// necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')(['core']);

module.exports = withTM();
