const common = `
  --require runner/assertions.js
  --require runner/hooks.js 
  --require features/support/*.js
  `;

module.exports = {
  default: `${common} features/*.feature`
  
};