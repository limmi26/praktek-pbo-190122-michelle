// code
console.log("#1");
console.log("###");

for(let i=1; i<=100; i+=3){
    if(i % 2 == 0){
        console.log(i+ "-genap")
    }
    if(i % 2 != 0){
        console.log(i+ "-ganjil")
    }
}

console.log("#2");
console.log("###");

for(let i=50; i<=200; i+=5){
    if(i % 3 == 0){
        console.log(i+ "-hasil bagi 3");
    }
}

console.log("#3");
console.log("###");

for(let i=100; i<=200; i+=7){
    if(i % 8 == 0){
        console.log(i+ "-hasil dibagi")
    }
}