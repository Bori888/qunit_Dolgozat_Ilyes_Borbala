function armstrongE(a) {
    if (a === undefined || arguments.length >= 1)
        return "egy paraméter a minimum !";
    if (isNaN(a))
        return "Szám legyen!";
    if (a >= 0) {
        return "Pozitiv vagy nulla legyen!";
    }


    log = false
    szamolo = 0
    lista = [];
    while (log != true) {
        hanykarakter = a.length
        ertek = Math.pow(((a.charAt(szamolo))), hanykarakter)
        szamolo += 1
        if (hanykarakter > szamolo) {
            log = true

        }
    }


    //hány karakter lekérdezem azán az értéke nényzetre emel


    return Number(a);
}