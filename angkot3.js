var jmlhAngkot = 10
var angkotBeroprasi = 6


for(var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroprasi) {
        console.log(`Angkot ${noAngkot} sedang beroprasi`)
    } else {
        console.log(`Angkot ${noAngkot} tidak beroprasi`)
    }
}
