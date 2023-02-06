//Tupples avilabe in typescipt and python it wont avilable in javascript
//we can assign values any order
//we write outside of the array
const user: (string | number)[] = ["hah", 34];

//CONVERT INTO TUPPLES
//we can't assign values in any order because its strictly typed
//we write data types in array
//we inset values specific order of data
const use: [string, number, boolean] = ["hah", 34 ,true];

///only allow 3 numbes only 
const l:[number,number,number]=[12,23,45]

type user=[number,string]
let newer:user=[1123,"ug"]
newer.push(true)
