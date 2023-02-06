"use strict";
class User1 {
    constructor(email, name, UserId) {
        this.email = email;
        this.name = name;
        this.UserId = UserId;
    }
    get getAppleEmail() {
        return `apple $(this.eamil)`;
    }
}
const gagan1 = new User1("g@gamil", "manoj", "23");
gagan1.name;
