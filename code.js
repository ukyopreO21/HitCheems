document.getElementById("pop").addEventListener("mousedown", function(){
    var bonk = new Audio ("bonk.mp3");
    bonk.play();
    pop.src = "p2.png";
});
document.getElementById("pop").addEventListener("mouseup", function(){
    pop.src = "p1.png";
});