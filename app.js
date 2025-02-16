//npm global command
//npm command

//local dependancy -use it only in this particular project
//npm i <package-name>

//global dependency -use it in any project
//npm i -g <packageName>

//package.json-manifest file
//using npm init
//or
//npm init -y(says yes to all)

const _=require('lodash');

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items);
console.log(newItems);
console.log("hello people");


