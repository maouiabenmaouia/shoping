const heart = document.getElementsByClassName('fa fa-heart')
console.log(heart);

for (let i of heart)
    i.addEventListener('click', function () {

        if (i.style.color === "black") { i.style.color = "red" }
        else { i.style.color = "black" }
    })


var del = Array.from(document.getElementsByClassName("trash"));

for (let el of del) {
  el.addEventListener("click", function () {
    var r = confirm("Are you sure to delete this item?");
    if (r == true) {
    
      el.parentElement.parentElement.parentElement.remove()
      sum();
    }
  });
}


var dec= Array.from(document.getElementsByClassName('min'));
for (let el of dec){
el.addEventListener("click",function(){
   let t= (el.previousElementSibling).value;
   let s=parseInt(t,10);
    if (s > 0) {
        s--;
            } 
    (el.previousElementSibling).value = s;
    sum()
});
}

var inc= Array.from(document.getElementsByClassName('plus')); 
for (let el of inc){
el.addEventListener("click",function(){
   let t= (el.nextElementSibling).value;
   let s=parseInt(t);
        s++;
    (el.nextElementSibling).value = s;
    sum()
});
}

function sum() {
    var qte = Array.from(document.getElementsByClassName("QTY"));
  
    var price = Array.from(document.getElementsByClassName("unit_price"));
  
    var total = 0;
    for (let i = 0; i < price.length; i++) {
      total += parseInt(qte[i].value) * parseInt(price[i].innerText);
  
      console.log(parseInt(qte[i].value));
      console.log(parseInt(price[i].innerText));
    }
  
    console.log(total);
    return (document.querySelector(".total").innerText = "TOTAL: " + total );
  }