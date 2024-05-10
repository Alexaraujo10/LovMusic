
function carregar() {
    var data = new Date();
    var hora = data.getHours();

    if (hora >= 18 || hora < 6) {
        
        document.body.style.background = '#45137eb9'

    }
}
