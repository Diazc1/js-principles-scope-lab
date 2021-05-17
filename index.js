// Write your solution in this file!

// declare customerName to be bob in global scope
// ✓ returns the customerName
var customerName = "bob"
const leastFavoriteCustomer = 'some initial value'


// upperCaseCustomerName()
// ✓ modifies the customerName variable
function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
}


// setBestCustomer()
// ✓ setBestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'
}


// overwriteBestCustomer()
// ✓ overwrites the best customer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'billy'
}