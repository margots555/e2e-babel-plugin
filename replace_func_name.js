import _template from "@babel/template";
import _generate from "@babel/generator";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import * as t from "@babel/types";
import fs from "fs";

const template = _template.default;
const generate = _generate.default;
const traverse = _traverse.default;

const source = `
const babel = "cool";
function test(babel) {
  return babel;
}
`;

// var babel = "cool";

const ast = parse(source);

traverse(ast, {
  VariableDeclaration: (path) => {
    path.node.kind = "var";
  },
  Function: (path) => {
    path.scope.rename("babel", "newname");
  },
});

const content = generate(ast);

console.log("Content.code: " + content.code);

try {
  fs.writeFileSync("test_output/replace_func_name.ts", content.code);
  // file written successfully
} catch (err) {
  console.error(err);
}
