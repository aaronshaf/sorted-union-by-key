var test = require('tape')
var sortedUnionByKey = require('./index')

test('sortedUnionByKey', function (t) {
  t.plan(2)

  var inventory = [
    { warehouseCode: '1', quantity: 1 },
    { warehouseCode: '2', quantity: 1 },
    { warehouseCode: '3', quantity: 1 },
    { warehouseCode: '4', quantity: 1 }
  ]
  var newInventory = [
    { warehouseCode: '1', quantity: 2 }
  ]
  var mergedInventory = sortedUnionByKey(inventory, newInventory, 'warehouseCode')
  t.deepEqual(mergedInventory, [
    { warehouseCode: '1', quantity: 2 },
    { warehouseCode: '2', quantity: 1 },
    { warehouseCode: '3', quantity: 1 },
    { warehouseCode: '4', quantity: 1 }
  ])

  var title = [
    { languageCode: 'en', value: 'Title' },
    { languageCode: 'fr', value: 'Titre' }
  ]
  var newTitle = [
    { languageCode: 'es', value: 'Título' }
  ]
  var mergedTitle = sortedUnionByKey(title, newTitle, 'languageCode')
  t.deepEqual(mergedTitle, [
    { languageCode: 'en', value: 'Title' },
    { languageCode: 'es', value: 'Título' },
    { languageCode: 'fr', value: 'Titre' }
  ])
})
