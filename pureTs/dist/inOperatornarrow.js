"use strict";
function isAdminorNot(account) {
    //"in" operator narrow  using
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
