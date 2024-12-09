let a = Number(prompt("A sonini kriting:"));
let b = Number(prompt("B sonini kriting:"));
let c = Number(prompt("C sonini kriting:"));

if (a > b && a > c) {
  alert("A soni eng katta");
} else if (b > a && b > c) {
  alert("B soni eng katta");
} else if (c > a && c > b) {
  alert("C soni eng katta");
} else {
  alert("Sonlar teng");
}

//  ikkinchi misol

let d = Number(prompt("Aylananing diometrini kiriting:"));
const π = 3.14;

let L = π * d;
let r = d / 2;
let S = π * r * r;

alert(`Aylananing uzunligi: ${L}`);
alert(`Aylananing yuzasi: ${S}`);

// 3 misol

let A = Number(prompt("Kubning yon tomonini kiriting:"));

let V = a ** 3;
let B = 6 * a ** 2;

alert(`Kubning hajmi : ${V}`);
alert(`Kubning to'la sirti : ${S}`);

// to'ttinchi misol

let M4 = Number(prompt("Parallelepipedning A tomonini kiriting:"));
let N4 = Number(prompt("Parallelepipedning B tomonini kiriting:"));
let C4 = Number(prompt("Parallelepipedning C tomonini kiriting:"));

let S4 = a * b * c;
let D4 = 2 * (a * b + b * c + a * c);

alert(`Parallelepipedning hajmi : ${V}`);
alert(`Parallelepipedning to'la sirti : ${S}`);

// BESHINCHI misol

let E = Number(prompt("A sonini kiriting:"));
let F = Number(prompt("B sonini kiriting:"));

let M = (a + b) / 2;

alert(`O'rta arihmetig: ${M}`);
