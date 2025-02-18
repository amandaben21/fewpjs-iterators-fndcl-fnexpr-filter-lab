// Code your solution here

/* returns all drivers that match the passed in name
   returns matching drivers if case does not match but letters do
   returns an empty array if there is no match */
function findMatching(drivers, string) {
    return drivers.filter (diver => diver.toLowerCase() === string.toLowerCase())
}


/* returns a driver if beginning provided letters match
   does not return drivers if only middle or ending letters match
   does not return drivers if only middle or ending letters match*/

function fuzzyMatch(drivers, string) {
    return drivers.filter(diver => diver.slice(0, string.length) === string)
}

//accesses the data structure to check if name matches
function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
  }