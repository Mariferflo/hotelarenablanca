var sliderIndex=1;
mostrarSlider(sliderIndex);

function mostrarSlider(n) {
    // body...

    var i;
    var slides=document.getElementsByClassName('miSlider')
    var puntitos=document.getElementsByClassName('puntito')
    var imagen_siguiente=document.getElementsByClassName('siguiente')
    if (n>slides.length) {sliderIndex=1;}
    if (n<1) {sliderIndex=slides.length;}

for (var i = 0; i < slides.length;i++) {
    slides[i].style.display="none";
}
for (var i = 0; i < puntitos.length;i++) {
puntitos[i].className=puntitos[i].className.replace(' Activo',"");
}
for (var i=0; i< imagen_siguiente.length; i++){
    imagen_siguiente[i].className=imagen_siguiente[i].className.replace('Activo')
}

slides[sliderIndex-1].style.display="block";
puntitos[sliderIndex-1].className=puntitos[i].className.replace(" Activo","");

}

function sliderActual(n) {
    // body...
    mostrarSlider(sliderIndex=n);
}
function imagen_siguiente() {
    // body...
    mostrarSlider(sliderIndex+=1);

}
function imagen_anterior() {
    // body...
    mostrarSlider(sliderIndex+=-1);
}