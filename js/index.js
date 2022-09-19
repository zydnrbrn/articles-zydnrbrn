fetch('./data/post.json', {mode: "no-cors"})
.then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
.then(data => console.log(data));

const obj = JSON.parse(txt);
document.getElementById("data").innerHTML = obj.title + ", " + obj.glossDiv;