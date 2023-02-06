/* const score: Array<number> = [];
const names: Array<string> = []; */

///boolean or number
function identity1(val: boolean | number): boolean | number {
  return val;
}

//any data type
//its accepts any datatype values return the values
function identity2(val: any): any {
  return val;
}

//TYPE  datatype
//when we assign the 1st values its takes only that data types values only example we send numbers its takes only numbers and return also numbers only
function identity3<Type>(value: Type): Type {
  return value;
}
