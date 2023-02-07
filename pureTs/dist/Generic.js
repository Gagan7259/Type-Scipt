"use strict";
/* /* const score: Array<number> = [];
const names: Array<string> = []; */
///boolean or number
function identity1(val) {
    return val;
}
//any data type
//its accepts any datatype values return the values
function identity2(val) {
    return val;
}
//TYPE  datatype
//when we assign the 1st values its takes only that data types values only example we send numbers its takes only numbers and return also numbers only
function identity3(value) {
    return value;
}
/* identity3<bottle>({ assign values here })
 */
function getProduct(products) {
    const myIndex = 3;
    return products[myIndex];
}
///typescipt Arrow function a=<Generic type>():dataType{Definations or some caluclations}
const getmoreProducts = (productss) => {
    const myIbdex = 4;
    return productss[myIbdex];
};
///using type parameters in generic constrains
