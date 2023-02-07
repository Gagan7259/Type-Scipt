
interface Database {
    connection: string,
    username: string,
    password: string
}



function functio<T, U extends Database>(valu: T, val: U): object {
    return {
        valu,
        val
    }
}
functio(3, { "mysql"| "gagan" | "ok" })