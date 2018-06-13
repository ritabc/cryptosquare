function findColumnLength(userArray) {
  return Math.ceil(Math.sqrt(userArray.length))
}

function splitToRows(userArray) {
  var numberOfCols = findColumnLength(userArray)
  var metaArray = []
  for (var i = 0 ; i < userArray.length; i += numberOfCols) {
    var rowArray = userArray.slice(i, i + numberOfCols)
    metaArray.push(rowArray)
  } return metaArray
}

function transform(userArray) {
  var numberOfCols = findColumnLength(userArray)
  var metaArray = splitToRows(userArray)
  newRow = []
  for (i = 0; i < numberOfCols; ++i)
    metaArray.forEach(function(array) {
      char = array[i]
      newRow.push(char)
    })
    var outputStr = newRow.join("")
  return outputStr
}

$(document).ready(function(){
  var userInput = "Hello Everyone"
  var userArray = userInput.toLowerCase().replace(/\s/g, '').split("")
  var transformedArray = transform(userArray)
  console.log(transformedArray)
})
