function isValidUrl(string) {
  const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
}


const url1 = 'https://lms.ithillel.ua/groups/626bce658f722e7214b0a79f/homeworks/';
console.log(isValidUrl(url1));

const url2 = 'http://uibakery.io/regex-library/url';
console.log(isValidUrl(url2));

const url3 = 'www.exlab.net/tools/sheets/regexp.html';
console.log(isValidUrl(url3));

const url4 = '';
console.log(isValidUrl(url4));

const url5 = 'lms.ithillel';
console.log(isValidUrl(url5));

var url6 = 'https://sdfasd';
console.log(isValidUrl(url6)); 