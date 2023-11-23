//console.log (window.document);

//recuperation de l'element input par son id firstColorEl
const firstColorElt=document.getElementById('firstcolor');

//recuperation de l'element input par son id secondcolorElt;
const secondcolorElt=document.getElementById('secondcolor');

//recuperation de l'element input par son id thirdcolor
const thirdcolorElt=document.getElementById('thirdcolor');

//recuperation de l'Element body
const bodyElt = document.querySelector('body');
//console.log(bodyElt);

firstColorElt.addEventListener('input', function() {
    //console.log(firstColorElt.value);
    bodyElt.style= `background:linear-gradient(to right,${firstColorElt.value},${secondcolorElt.value},${thirdcolorElt.value})`;
});
secondcolorElt.addEventListener('input', function() {
    //console.log(secondcolorElt.value);
    bodyElt.style= `background:linear-gradient(to right,${firstColorElt.value},${secondcolorElt.value},${thirdcolorElt.value})`;
});
thirdcolorElt.addEventListener('input', function() {
    //console.log(thirdcolorElt.value);
    bodyElt.style= `background:linear-gradient(to right,${firstColorElt.value},${secondcolorElt.value},${thirdcolorElt.value})`;
}); 