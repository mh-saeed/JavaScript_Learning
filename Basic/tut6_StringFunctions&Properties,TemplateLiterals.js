// String Functions

/* 
In JavaScript, there are 3 types of quotes.
1. Double quotes: "Hello" .
2. Single quotes: 'Hello' .
3. Backticks: `Hello` . 
*/

const fname = `Muhammad`;
const lname = `Saeed`;

console.log(fname + ` ` + lname);

let paragraph = `My name is `;

paragraph = paragraph.concat(fname, ` `, lname, ` and I'm from Pakistan`);

console.log(paragraph);

console.log(paragraph.toLowerCase());
console.log(paragraph.toUpperCase());
console.log(paragraph.length);
console.log(paragraph[0]);
let x = 0;
// while (x<paragraph.length) {
//     console.log(paragraph[x]);
//     x++;
// }

console.log(paragraph.indexOf(`Saeed`));
console.log(paragraph.lastIndexOf(`a`));

console.log(paragraph.charAt(22));
console.log(paragraph.endsWith(`Pakistan`));
console.log(paragraph.includes(`is`));
console.log(paragraph.substring(0, 25)); // (from index, to index)
console.log(paragraph.slice(0, 5)); // first parameter is from which index should sliceing will start and 2nd parameter is for how many character should be sliced and slice(-4) will return last 4 characters of strings and slice(4) will remove for characters of string from starting point. (slice will return characters from string)

console.log(paragraph.split(` `)); // split(`any character present in string`)
console.log(paragraph.replace(`I'm`, `I am`));

// Template literals

let name = `Muhammad Saeed`;
let country = `Pakistan`;
let myHtml = `<p> Hello, My name is ${name} 
                and I live in ${country}
                </p>`;
document.body.innerHTML = myHtml;
// document.getElementsByTagName("body")[0].innerHTML = myHtml;
// document.write(myHtml);
