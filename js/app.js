function izracunaj() {
    // varijable iz inputa
    let kilometri = document.querySelector('#udaljenost').value;
    let litara = document.querySelector('#potrosnja').value;
    let dinara = document.querySelector('#cena').value;
    //pretvaranje u number
    kilometri = parseFloat(kilometri);
    litara = parseFloat(litara);
    dinara = parseFloat(dinara);
    //racunica
    let racunica = 0;
    let cena_goriva = 0;
    racunica = kilometri * (litara / 100);
    racunica = racunica.toFixed(2);
    cena_goriva = racunica * dinara;
    //ispisivanje u HTML-u
    let new_element = document.createElement('div');
    new_element.className = 'ispisi';
    new_element.innerHTML = `<p>Za preci ${kilometri}km potrebno vam je ${racunica}L goriva, a kostace vas: ${cena_goriva}RSD.<p>`;
    document.querySelector('.container').appendChild(new_element);
}
function restart() {
    window.location.reload();
}
