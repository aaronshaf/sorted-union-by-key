var objectAssign = require('object-assign')
var objectValues = require('object-values')

module.exports = function sortedUnionByKey (oldRecords, newRecords, key) {
  oldRecords = oldRecords || []
  newRecords = newRecords || []

  const mergedRecords = objectValues(objectAssign({},
    indexBy(oldRecords, key),
    indexBy(newRecords, key)
  ))
  const sortedRecords = mergedRecords.sort((record1, record2) => {
    return record1[key] > record2[key]
  })
  return sortedRecords
}

function indexBy (records, key) {
  var obj = {}
  records.forEach(function (record) {
    if (typeof record[key] !== 'undefined') {
      obj[record[key]] = record
    }
  })
  return obj
}
