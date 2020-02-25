let guzik = document.querySelector("button");
let par1 = document.getElementById("p1");
let par2 = document.getElementById("p2");
let guzikplus = document.getElementById("dod");
let guzikminus = document.getElementById("ode");
let guzikmnoz = document.getElementById("mno");
let ramka = document.getElementById("ekran");
let dana1;
let dana2;


guzik.onclick = function dane () {
    dana1 = prompt("Podaj 1 liczbę");
    dana2 = prompt("Podaj 2 liczbę");
    par1.textContent='Liczba 1 to: '+ dana1;
    par2.textContent='Liczba 2 to: '+ dana2;   
}



guzikplus.onclick = function dodawanie () {
  dana1=dana1/1;
  dana2=dana2/1;
  let result = dana1 + dana2;
  ramka.textContent = result;
}

guzikminus.onclick = function odejmowanie () {
  dana1=dana1/1;
  dana2=dana2/1;
  let result = dana1 - dana2;
  ramka.textContent = result;
}

guzikmnoz.onclick = function mnozenie () {
  dana1=dana1/1;
  dana2=dana2/1;
  let result = dana1 * dana2;
  ramka.textContent = result;
}

