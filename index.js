const babel = require("@babel/core");
const codeExample = "var a = 3";
const { code, ast } = babel.transform(codeExample);
console.log(code);
console.log(ast);