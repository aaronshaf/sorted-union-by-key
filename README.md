# sorted-union-by-key

```bash
npm install sorted-union-by-key --save
```

```javascript
import sortedUnionByKey from 'sorted-union-by-key'

var result = sortedUnionByKey([
  { languageCode: 'en', value: 'foo' },
  { languageCode: 'es', value: 'Título' }
], [
  { languageCode: 'en', value: 'Title' },
  { languageCode: 'fr', value: 'Titre' }
], 'languageCode')
```

```javascript
[
  { languageCode: 'en', value: 'Title' },
  { languageCode: 'es', value: 'Título' },
  { languageCode: 'fr', value: 'Titre' }
]
```
