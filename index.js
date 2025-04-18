function bnt(){
    var random_color = Math.floor(Math.random()*100000);
    var plus = "#"+random_color;
    var item = document.getElementsByTagName("body")[0];
    var head = document.getElementsByTagName("h2")[0];
    // item.innerHTML = plus;
    head.innerHTML = plus;
    item.style.background = plus;
    console.log(plus)
}