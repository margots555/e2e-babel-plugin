export default function (babel) {
  // module.exports = function (babel) {
  const { types: t } = babel;

  return {
    name: "ast-transform", // not required
    visitor: {
      VariableDeclaration(path) {
        let { kind: declType, declarations: decl } = path.node;
        path.node.declarations[0].id.name =
          "&" + path.node.declarations[0].id.name;
        console.log(path.node.declarations[0].id.name);
      },
    },
  };
}
