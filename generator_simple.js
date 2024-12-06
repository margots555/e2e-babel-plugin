import _template from "@babel/template";
import _generate from "@babel/generator";
import { parse } from "@babel/parser";
import * as t from "@babel/types";
import fs from "fs";

const template = _template.default;
const generate = _generate.default;

const code = "class Example {}";
const ast = parse(code);

const content = generate(
  ast,
  {
    /* options */
  },
  code
);

console.log("Content.code: " + content.code);

try {
  fs.writeFileSync("test_output/generated_simple.test.spec.ts", content.code);
  // file written successfully
} catch (err) {
  console.error(err);
}
