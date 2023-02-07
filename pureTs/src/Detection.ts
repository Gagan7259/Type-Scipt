function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toUpperCase
    }
    return val + 0
}


function providedId(id: null | string) {
    if (!id) {
        console.log("please provide id");
        return
    }
    id.toLowerCase
}



function printAll(strs: string | string[] | null) {
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