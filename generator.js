import _template from "@babel/template";
import _generate from "@babel/generator";
import { parse } from "@babel/parser";
// import _parse from "@babel/parser";
import * as t from "@babel/types";
import fs from "fs";

const template = _template.default;
const generate = _generate.default;
// const parse = _parse.default;

//syntactic placeholder used
// const buildRequire = template(`
//   import { test, expect } from '@playwright/test';

//   test('%%testName%%', async ({ page }) => {
//     //test will come here...
//     });
// `);

//identifier placeholders used
// const buildRequire = template(`
//   import { test, expect } from '@playwright/test';

//     test(TEST_NAME, async ({ page }) => {
//     //test will come here...
//     });
// `);

//none placeholders used
// const buildRequire = template(`
//   import { test, expect } from '@playwright/test';
//     test('First Test', async ({ page }) => {
//       test.slow();
//       await page.goto('/');
//     });
// `);

//var %%importName%% = require(%%source%%);
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

// const ast = template.ast`
//   import { test, expect } from '@playwright/test';
// `;

// ast.push(template.statement(`var t = 2;`));
// ast = template.*.ast`
// ${val} * 2
// `;

// console.log("Type of BuildRequire: " + typeof buildRequire);
// console.log("BuildRequire: " + buildRequire);

// const ast = buildRequire();
// const ast = buildRequire({
//syntactic placeholder used
// testName: t.stringLiteral("First-Test"),
//identifier placeholders used
// TEST_NAME: t.stringLiteral("First-Test"),
// });

// console.log(generate(ast).code);
// let content = generate(ast).code;

try {
  fs.writeFileSync("test_output/generated.test.spec.ts", content.code);
  // file written successfully
} catch (err) {
  console.error(err);
}
