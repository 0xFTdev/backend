// console.log("Hallo Welt!");
// console.log({ global }); // NodeJSs window, das element das im scope um alles rum liegt
// console.log(module);

const { add } = require("./namedExport");
const sayHi = require("./defaultExport");

sayHi();
