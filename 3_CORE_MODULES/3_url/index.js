const url = require('url');
const address = 'https://knowyourmeme.com/search?q=baba+boey';
const parsedUrl = new url.URL(address);


console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('baba'));