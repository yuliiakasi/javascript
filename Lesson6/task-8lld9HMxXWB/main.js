//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

const s1 = str1.toUpperCase();
const s2 = str2.toUpperCase();
const s3 = str3.toUpperCase();

let strings = [s1, s2, s3]

for (const string of strings) {
  console.log(string);
}
