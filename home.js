let lgnBtn = document.getElementById("lgnBtn");
lgnBtn.innerHTML = `Logged in as ${localStorage.getItem("user")}`;

let select = document.querySelectorAll("select");
console.log(select);
let arrOfDrpDwn = Array.from(select);
console.log(arrOfDrpDwn);
arrOfDrpDwn.map(sel => {
  let x = Math.random() * 3000;
  let clr = Math.round(x);
  console.log(clr);
  sel.style.background = `#${clr}`;
  //   document.body.style.background = `#${clr}`;
  sel.style.height = "25px";
  sel.style.color = "black";
  sel.style.border = "2px solid white";
  sel.style.borderRadius = "5px ";
});``