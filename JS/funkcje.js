function oblicz() {
    var l1 = document.getElementById('l1');
    l1 = l1.value;
    l1 = parseInt(l1);
    
    var l2 = parseInt(document.getElementById('l2').value);
    
    var s = document.getElementById('suma');
    s.value = l1 + l2;
}

function obliczRate() {
    var K = parseFloat(document.getElementById('kwota').value);
    var pr = parseFloat(document.getElementById('oprocentowanie').value) / 100;
    var n = parseInt(document.getElementById('liczba_rat').value);
    
    if (isNaN(K) || isNaN(pr) || isNaN(n)) {
        alert("Proszę wypełnić wszystkie pola poprawnymi liczbami!");
        return;
    }
    
    if (K <= 0 || pr < 0 || n <= 0) {
        alert("Wartości muszą być większe od zera!");
        return;
    }

    var pr_mc = pr / 12;
    
    var rata = (K * pr_mc * Math.pow(1 + pr_mc, n)) / (Math.pow(1 + pr_mc, n) - 1);
    
    if (!isFinite(rata) || isNaN(rata)) {
        alert("Nie można obliczyć raty dla podanych wartości!");
        return;
    }
    
    document.getElementById('wynik').value = rata.toFixed(2) + " zł";
}

function obliczDzialanie() {
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);
    
    if (isNaN(x) || isNaN(y)) {
        alert("Proszę wprowadzić poprawne liczby!");
        return;
    }
    
    var tab = document.getElementsByName("operator");
    var op;
    op = tab[0].value
    console.log(op);

    

    var wynik;
    switch(op) {
        case '+':
            wynik = x + y;
            break;
        case '-':
            wynik = x - y;
            break;
        case '*':
            wynik = x * y;
            break;
        case '/':
            if (y === 0) {
                alert("Nie można dzielić przez zero!");
                return;
            }
            wynik = x / y;
            break;
    }
    
    if (!isFinite(wynik) || isNaN(wynik)) {
        alert("Nie można wykonać tego działania!");
        return;
    }
    
    document.getElementById('wynik').value = wynik;
} 