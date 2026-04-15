document.addEventListener("DOMContentLoaded", function(){

    const ribbon = document.getElementById("ribbon-img");
    const ribbonOn = document.getElementById("ribbon-on");
    const ribbonOff = document.getElementById("ribbon-off");
    const reset = document.getElementById("reset-btn");

    // リボンをつける
    ribbonOn.addEventListener("click", function(){
        ribbon.classList.remove("hidden");
    });

    // リボンを外す
    ribbonOff.addEventListener("click", function(){
        ribbon.classList.add("hidden");
    });

    // リセット
    reset.addEventListener("click", function(){
        ribbon.classList.add("hidden");
    });

});