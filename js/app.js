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

// 6 - misol

let H6 = Number(prompt("Bir katet a ni kiriting:"));
let N6 = Number(prompt("Ikkinchi katet b ni kiriting:"));

let c6 = Math.sqrt(H6 ** 2 + N6 ** 2);
let P6 = H6 + N6 + c6;

alert(`Gipotenuza (c): ${c}`);
alert(`Perimetr (P): ${P}`);

// 7

let r1 = Number(prompt("Birinchi aylananing radiusini kiriting (r1):"));
let r2 = Number(prompt("Ikkinchi aylananing radiusini kiriting (r2):"));

const π7 = 3.14;

let N1 = π * r1 * r1;
let C1 = π * r2 * r2;
let S1 = π * (r1 ** 2 - r2 ** 2);

alert(`Birinchi aylananing yuzasi (S1): ${S1}`);
alert(`Ikkinchi aylananing yuzasi (S2): ${S2}`);
alert(`Yuzalar ayirmasi (S): ${S}`);

// Boolean9. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".

let A9 = Number(prompt("A sonini kiriting:"));
let B9 = Number(prompt("B sonini kiriting:"));
let C9 = Number(prompt("C sonini kiriting:"));

let positiveCount = 0;

if (A9 > 0) positiveCount++;
if (B9 > 0) positiveCount++;
if (c9 > 0) positiveCount++;

if (positiveCount === 2) {
  alert("Jumla rost: faqat ikkita musbat son bor.");
} else {
  alert("Jumla yolg'on: ikki musbat son yo'q.");
}

// Begin8. Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.

let L8 = Number(prompt("Aylananing uzunligini kiriting (L):"));
const π8 = 3.14;

let R8 = L / (2 * π);
let S8 = π * R * R;

alert(`Aylananing radiusi (R): ${R8}`);
alert(`Aylananing yuzasi (S): ${S8}`);

// Boolean3. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".

let A3 = Number(prompt("A sonini kiriting:"));
let B3 = Number(prompt("B sonini kiriting:"));
let C3 = Number(prompt("C sonini kiriting:"));

if ((B3 > A3 && B3 < C3) || (B3 > C3 && B3 < A3)) {
  alert("Jumla rost: B soni A va C orasida yotadi.");
} else {
  alert("Jumla yolg'on: B soni A va C orasida yotmaydi.");
}

// Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".

let A4 = Number(prompt("A sonini kiriting:"));
let B4 = Number(prompt("B sonini kiriting:"));

if (A4 % 2 !== 0 && B4 % 2 !== 0) {
  alert("Jumla rost: A va B sonlari toq sonlar.");
} else {
  alert("Jumla yolg'on: A va B sonlarining har ikkalasi ham toq emas.");
}

// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".

let A5 = Number(prompt("A sonini kiriting:"));
let B5 = Number(prompt("B sonini kiriting:"));

if (A5 % 2 !== 0 || B5 % 2 !== 0) {
  alert("Jumla rost: A va B sonlarning hech bo'lmaganda bittasi toq son.");
} else {
  alert("Jumla yolg'on: A va B sonlarining ikkalasi ham juft.");
}

// Boolean7. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".

let A7 = Number(prompt("A sonini kiriting:"));
let B7 = Number(prompt("B sonini kiriting:"));
let C7 = Number(prompt("C sonini kiriting:"));

if (A7 > 0 && B7 > 0 && C7 > 0) {
  alert("Jumla rost: A, B, C sonlarning har biri musbat.");
} else {
  alert("Jumla yolg'on: A, B, C sonlarning har biri musbat emas.");
}

// Begin1. Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin.

let R1 = Number(prompt("Doiraning radiusini kiriting (R):"));
const π1 = 3.14;

let L1 = 2 * π * R1;
let S2 = π * R1 * R1;

alert(`Doiraning uzunligi (L): ${L}`);
alert(`Doiraning yuzasi (S): ${S}`);

// Integer3. Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi programma tuzilsin.

let number = Number(prompt("Uch xonali sonni kiriting:"));

if (number >= 100 && number <= 999) {
  let yuzlar = Math.floor(number / 100);
  alert(`Yuzlar xonasidagi raqam: ${yuzlar}`);
} else {
  alert("Iltimos, uch xonali son kiriting!");
}

// Begin4. X kg konfet A so`m turadi. 1 kg va Y kg konfet qancha turishini aniqlovchi programma tuzilsin.

let X4 = Number(prompt("X kg konfet narxini kiriting (so'mda):"));
let F4 = Number(prompt("X kg konfetning umumiy narxini kiriting (so'mda):"));
let Y4 = Number(prompt("Necha kg konfet uchun narxni hisoblamoqchisiz?"));

if (X4 > 0 && F4 > 0) {
  let pricePerKg = F4 / X4;
  let totalPriceY = pricePerKg * Y4;

  alert(`1 kg konfet narxi: ${pricePerKg.toFixed(2)} so'm`);
  alert(`${Y4} kg konfet narxi: ${totalPriceY.toFixed(2)} so'm`);
} else {
  alert("Iltimos, X va F qiymatlarini musbat son sifatida kiriting!");
}
