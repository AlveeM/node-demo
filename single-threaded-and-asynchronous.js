console.log('first');

function logSecond() {
  console.log('second');
}
setTimeout(logSecond, 1000);
// setTimeout(() => console.log('second'), 1000);

console.log('third');