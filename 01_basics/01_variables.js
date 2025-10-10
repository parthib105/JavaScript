const accountID = 144553
let accountEmail = "parthibg0@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountID = 234     // not allowed

accountEmail = "pg@ghosh.com"
accountPassword = "3425"
accountCity = "Kolkata"

// console.log(accountID)

// other way to print
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

/*
 * var -> scope issue, doesn't care about scopes, if changed, all values in and out of the scope changes
 * let -> resolved the issue of var
*/