//Modules-encapsulated code
//commonJS ,every file is a module

const name=require("./4-name");
const sayHi=require("./5-utils");
const data=require('./6-alternative-flavour');
require('./7-mind-grenade')



sayHi('susan')
sayHi(name.peter)
sayHi(name.john)