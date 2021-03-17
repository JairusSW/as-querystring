# AS-Querystring
**Parse URL Querys In AssemblyScript**

## About
- AssemblyScript Compatible
- Isomorphic (Browser / Node)

## Installation
```bash
~ npm install as-querystring --save
```

## Usage

**Basic Usage**
```js
import { qs } from 'as-querystring'

const query = qs('https://example.com?username=JohnDoe&password=thesecretorange')
//=> [['username', 'JohnDoe'], ['password', 'thesecretorange']]
```

## API

### qs(url: string) -->> Array<Array<string>>
Parse a URL and output the queries