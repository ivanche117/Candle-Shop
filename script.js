function redirectToZephyr() {
    window.location.href = "zephyr.html";
}

function redirectToShop(){
    window.location.href = "shop.html";
}

var counter = 1;
setInterval(function (){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>4){
        counter = 1;
    }
}, 5000);





