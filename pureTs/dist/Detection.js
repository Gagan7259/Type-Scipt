"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toUpperCase;
    }
    return val + 0;
}
function providedId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    id.toLowerCase;
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") { }
        console.log(strs);
    }
}
