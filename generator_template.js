import _template from "@babel/template";
import _generate from "@babel/generator";
import { parse } from "@babel/parser";
// import _parse from "@babel/parser";
import * as t from "@babel/types";
import fs from "fs";

const template = _template.default;
const generate = _generate.default;

const buildRequire = template(`
  var %%importName%% = require(%%source%%);
`);

const ast = buildRequire({
  importName: t.identifier("Ziggy"),
  source: t.stringLiteral("Ziggy-module"),
});

//withoutplaceholders in use, to simply parse a string into an AST
// const ast = template.ast(`
//   var myModule = require("my-module");
// `);

let content = generate(ast);
console.log(content.code);

try {
  fs.writeFileSync("test_output/generated_template.test.spec.ts", content.code);
  // file written successfully
} catch (err) {
  console.error(err);
}
