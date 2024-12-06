import _template from "@babel/template";
import _generate from "@babel/generator";
import { parse } from "@babel/parser";
// import _parse from "@babel/parser";
import * as t from "@babel/types";
import fs from "fs";

const template = _template.default;
const generate = _generate.default;

//placeholders passed directly as part of the template literal
const source = "my-module";
const fn = template`
  var IMPORT_NAME = require('${source}');
`;

//placeholders passed into the template function
const ast = fn({
  IMPORT_NAME: t.identifier("myModule"),
});

//wihtout placeholders in use, simple way to parse a string into an AST
// const name = "My-module";
// const mod = "MyModule";
// const ast = template.ast`
//   var ${mod} = require("${name}");
// `;

let content = generate(ast);
console.log(content.code);

try {
  fs.writeFileSync(
    "test_output/generated_template_literal.test.spec.ts",
    content.code
  );
  // file written successfully
} catch (err) {
  console.error(err);
}
