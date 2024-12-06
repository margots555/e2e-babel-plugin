// const Parser = require("@babel/parser");
// var babel = require("@babel/core");
import { transform } from "@babel/core";
import * as babel from "@babel/core";
import fs from "fs";

let code = "var a = 1;var b = 2;var c = a + b;";
//let code = "simple-sample.js";

// let filename = "test_src/simple-sample.js";
let filename = "test_src/search.general.spec.ts";
let source = fs.readFileSync(filename, "utf8");

let codeAST = await babel.parseAsync(source, {
  // parse in strict mode and allow module declarations
  //sourceType: "module",
  //plugins: [
  // enable jsx and flow syntax
  //"./example-plugin.js",
  //],
});

babel.traverse(codeAST, {
  enter(path) {
    console.log(
      //   //   "PATH:" + path + " TYPE:" + Object.prototype.toString.call(path)
      //   "PATH:" + path.node.name + " TYPE:" + Object.keys(path.node)
      "PATH:" +
        path.node.name +
        " TYPE: " +
        path.node.type +
        " PathInList:" +
        path.inList +
        " Path Key:" +
        path.key +
        " List Key:" +
        path.listKey
    );
    // Object.keys(obj).forEach((prop)=> console.log(prop));
  },
});

// console.log("AST:" + JSON.stringify(codeAST, null, 2));

// FileASTCode();

async function FileASTCode() {
  const filename = "simple-sample.js";
  const source = fs.readFileSync(filename, "utf8");
  // Load and compile file normally, but skip code generation. transformFromAstAsync
  const { ast, code, map } = await babel.transformAsync(source, {
    filename,
    ast: true,
    code: false,
    //   plugins: ["./example-plugin.js"],
    babelrc: false,
    configFile: false,
  });

  console.log("CODE:" + code);
  console.log("MAP:" + map);
}
