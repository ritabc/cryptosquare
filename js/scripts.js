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
  var metaArray = splitToRows(userArray)
  // for each array in metaArray, we want to get the first element, and push that to transformedArray
  metaArray.forEach(function(array) {
    char = array[0]
    var transformedArray = []
    transformedArray.push(char)
  })
}

$(document).ready(function(){
  var userInput = "Hello Everyone"
  var userArray = userInput.toLowerCase().replace(/\s/g, '').split("")
  var rows = splitToRows(userArray)
  console.log(rows)
})
