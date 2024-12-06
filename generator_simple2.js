import _template from "@babel/template";
import _generate from "@babel/generator";
import { parse } from "@babel/parser";
// import _parse from "@babel/parser";
import * as t from "@babel/types";
import fs from "fs";

const template = _template.default;
const generate = _generate.default;

//var %%importName%% = require(%%source%%);
const ast = template.ast`
  import { test, expect } from '@playwright/test';
`;

// ast.push(template.statement(`var t = 2;`));
// ast = template.*.ast`
// ${val} * 2
// `;

let content = generate(ast);
console.log(content.code);

try {
  fs.writeFileSync("test_output/generated_simple2.test.spec.ts", content.code);
  // file written successfully
} catch (err) {
  console.error(err);
}
