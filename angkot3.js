var jmlhAngkot = 10
var angkotBeroprasi = 6
var noAngkot = 1

if (noAngkot <= angkotBeroprasi ) {
    while (noAngkot <= angkotBeroprasi) {
    console.log("Angkot No. " + noAngkot + " beroprasi dengan baik")
    noAngkot++
    }
} 

if(noAngkot > angkotBeroprasi) {
    for(noAngkot; noAngkot <= jmlhAngkot; noAngkot++) {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi")
    }
}

