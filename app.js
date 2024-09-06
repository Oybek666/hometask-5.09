// 8mashq 
let son = prompt("Ko'paytirish jadvalini qaysi songacha chop etishni xohlaysiz?");


son = Number(son);


for (let i = 1; i <= son; i++) {
    for (let j = 1; j <= son; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
    console.log(""); 
}

// 9mashq

let son1 = prompt("Qaysi songacha bo'lgan tub sonlarni chop etishni xohlaysiz?");


son = Number(son);


console.log("1 dan " + son1 + " gacha bo'lgan tub sonlar:");

for (let i = 2; i <= son1; i++) {
    let tubmi = true; 

   
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            tubmi = false;
            break;
        }
    }

   
    if (tubmi) {
        console.log(i);
    }
}

