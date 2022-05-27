
let elements = document.getElementsByClassName("dis"); //querySelectorAll можно было, но хз 
let button = document.querySelector('.button');
/*button.onclick = function () {

for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('none');
}
};// FIX (можно сделать через for of, но я затупок, а переделывать лень )
*/
button.onclick = function () {
for(let element of elements) {
   element.classList.toggle('none');
}
};