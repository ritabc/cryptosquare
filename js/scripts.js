var userInput = "Hello Everyone"
var userArray = userInput.toLowerCase().replace(/\s/g, '').split("")

function findColumnLength(userArray) {
  return Math.ceil(Math.sqrt(userArray.length))
}

function splitToRows(userArray) {
  var numberOfCols = findColumnLength(userArray)
  var metaArray = []
  for (i = 0 ; i <= numberOfCols - 1; ++i) {
    var rowArray = userArray.slice(0, numberOfCols)
    metaArray.push(rowArray)
    // remove this rowArray from userArray
    userArray.splice(0, 4)
  }
}
