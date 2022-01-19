/* pseudocode */
/* INPUT "Jumlah Baju" dengan angka 0
INPUT "Kapasitas Cuci" dengan angka 20
cek Jumlah Baju
    a. jika JB < KP lanjut kestep b
    b. JB + 1
    c. jika JB = KP lanjut step
DISPLAY "lampu mesin cuci nyala"
END */

// code
let JBM = 0;
let JBT = 20;

for(let i=1; i<= JBT; i++){
    if(JBM < JBT){
        JBM+=1;
    }
    if(JBM === JBT){
        console.log("lampu nyala")
        break;
    }
}