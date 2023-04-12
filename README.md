# Product List App API
API ini merupakan crud sederhana untuk menambah, mengupdate, menghapus, dan melihat semua list product dan detailnya.

## Usage

#### Get all items

```http
 GET https://product-list-api.up.railway.app/api/product
```
###### Example

```javascript
import axios from 'axios;

var options = axios({
  method: 'GET',
  url: 'https://product-list-api.up.railway.app/api/product',
});
```

###### Response
```json
 {
  "_id": "6434bf867b6385ade4c0add1",
  "name": "Samsung s10",
  "price": 4000000,
  "stock": 10,
  "status": false,
  "__v": 0
 }
```

#### Get one item

```http
 GET https://product-list-api.up.railway.app/api/product/{id}
```
###### Example

```javascript
import axios from 'axios;

var options = axios({
  method: 'GET',
  url: 'https://product-list-api.up.railway.app/api/product/{id}',
});
```

#### Add item

```http
 POST https://product-list-api.up.railway.app/api/product/
```
###### Example

```javascript
import axios from 'axios;

var options = axios({
  method: 'POST',
  url: 'https://product-list-api.up.railway.app/api/product/',
 data: {name: string, price: number, stock: number, status: boolean}
});
```

#### Update item

```http
 PUT https://product-list-api.up.railway.app/api/product/{id}
```
###### Example

```javascript
import axios from 'axios;

var options = axios({
  method: 'PUT',
  url: 'https://product-list-api.up.railway.app/api/product/{id}',
 data: {name: string, price: number, stock: number, status: boolean}
});
```

#### Delete item

```http
 DELETE https://product-list-api.up.railway.app/api/product/{id}
```
###### Example

```javascript
import axios from 'axios;

var options = axios({
  method: 'DELETE',
  url: 'https://product-list-api.up.railway.app/api/product/{id}',
});
```
