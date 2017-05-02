var person = ['Jordy', 40];
var person2 = ['Angie', 26];

function greet(name, age) {
  return 'Hi ' + name + ' you are ' + age
}

console.log(greet(...person));
console.log(greet(...person2));

var names = ['Roxy', 'Star', 'Angelica'];
var final = ['Jordan', ...names];

function greeter(nick) {
  console.log('Hi, ' + nick);
}

console.log(final);

final.forEach(function (nick) {
  console.log('Hi, ' + nick);
});
