let min = 1;
let max = 100;
let RanN = Math.floor(Math.random() * (max - min + 1)) + min;

let entry = window.prompt(`guess a number between ${min} and ${max}`);
let flag = 0;

while (flag == 0) {
  entry = Number(entry);

  console.log(entry, RanN);

  if (entry === RanN) {
    window.prompt(`u got the right answer ${entry}`);
    flag = 1;
  } else if (entry < RanN) {
    entry = window.prompt(`go higher`);
  } else if (entry > RanN) {
    entry = window.prompt(`go lower`);
  }
}
