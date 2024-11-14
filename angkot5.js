var jmlhAngkot = 10
var angkotBeroprasi = 6


for(var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroprasi) {
        console.log(`Angkot ${noAngkot} sedang beroprasi`)
    } 
    else if(noAngkot === 8 || noAngkot === 10) {
        console.log(`Angkot ${noAngkot} sedang lembur`)
    }
    else {
        console.log(`Angkot ${noAngkot} tidak beroprasi`)
    }
}
