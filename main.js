let str = `
010-1234-5678.
td-ddsa
thewonseok@gmail.com
https://regexr.com/frozen
The quick brown fox jump over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

// 생성자 방식
// const regexp = new RegExp('the', 'gi')
// 리터럴 방식 
const regexp = /fox/gi;
console.log(str.match(regexp));
console.log(regexp.test(str));
console.log(str.replace(regexp, 'AAA'));
// str = str.replace(regexp, 'AAA');
console.log(str);

const regexp2 = /\.$/gim;
console.log(str.match(regexp2));

const regexp3 = /d$/gm;
console.log(str.match(regexp3));

const regexp4 = /^t/gim;
console.log(str.match(regexp4));
console.log(str.match(/./g));
console.log(str.match(/h..p/g));
console.log(str.match(/fox|dog/g));
console.log(str.match(/https?/g));
console.log(str.match(/d{2}/g));
console.log(str.match(/d{2,}/g));
console.log(str.match(/d{2,3}/g));


console.log(str.match(/\w{2,3}/g));
console.log(str.match(/\b\w{2,3}\b/g));
console.log(str.match(/[fox]/g));
console.log(str.match(/[a-z]/g));
console.log(str.match(/[A-Z]/g));
console.log(str.match(/[0-9]{1,}/g));
console.log(str.match(/[가-힣]{1,}/g));

console.log(str.match(/\w/g));
console.log(str.match(/\bf\w{1,}\b/g));
console.log(str.match(/\d{1,}/g));
console.log(str.match(/\s/g));

const h = `  the hello  world   !

`
console.log(h.replace(/\s/g,''));

console.log( str.match(/.{1,}(?=@)/g))
console.log( str.match(/(?<=@).{1,}/g))