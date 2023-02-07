interface User {
    name: string,
    email: string
}
interface Admin {
    name: string,
    email: string
    isAdmin: boolean
}
function isAdminorNot(account: User | Admin) {
    //"in" operator narrow  using
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}