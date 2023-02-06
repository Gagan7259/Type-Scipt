"use strict";
class User1 {
    constructor(email, name, UserId) {
        this.email = email;
        this.name = name;
        this.UserId = UserId;
        this._cousercont = 1;
    }
    deleteToken() {
        console.log("token delwtwd");
    }
    get getAppleEmail() {
        return `apple $(this.eamil)`;
    }
    get cousercont() {
        return this._cousercont;
    }
    set cousercont(cnum) {
        if (cnum <= 3) {
            throw new Error("poyi saavu pora");
        }
        this._cousercont = cnum;
    }
}
const gagan1 = new User1("g@gamil", "manoj", "23");
gagan1.name;
//gagan1.deleteToken();
