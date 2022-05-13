var wylosowanaLiczba=Math.floor(Math.random()*100)+1;
function losuj(){
    var ilosc=document.getElementById('zakres').value;
    document.getElementById('wybranaWartosc').value=ilosc;
    wylosowanaLiczba=Math.floor(Math.random()*ilosc)+1;
}

function sprawdz(){
    let dane=document.getElementById("liczbaUzytkownika")
    if(dane.value == wylosowanaLiczba){
        alert("wygrałeś");        
}else if(dane.value<wylosowanaLiczba){
    alert("za mala liczba");
}else{
    alert("za duza liczba");
}

}