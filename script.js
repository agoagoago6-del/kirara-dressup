// ドレス着せ替え

const dress = document.getElementById("dress");

const items = document.querySelectorAll(".dressItem");

items.forEach(function(item){

 item.addEventListener("click", function(){

   dress.src = item.src;

 });

});



// アイテム着せ替え

const accessory = document.getElementById("accessory");

const accessories = document.querySelectorAll(".accessoryItem");

accessories.forEach(function(item){

 item.addEventListener("click",function(){

  accessory.src = item.src;

 });

});

// 靴着せ替え

const shoes = document.getElementById("shoes");

const shoesItems = document.querySelectorAll(".shoesItem");

shoesItems.forEach(function(item){

 item.addEventListener("click",function(){

  shoes.src = item.src;

 });

});

// タブ切り替え

function showTab(tabName){

const tabs = document.querySelectorAll(".tab");

tabs.forEach(function(tab){

 tab.style.display = "none";

});

document.getElementById(tabName).style.display = "flex";

}