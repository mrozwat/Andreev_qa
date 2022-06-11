let template = document.querySelector('#message-template').content;
let newMassenge = template.querySelector('.chat-message');
let mesanges = document.querySelector('.chat-content');
let inputMesage =  document.querySelector('.chat-form');

let del = function (mes){
  
  let delB = mes.querySelector('.chat-message-button');
    delB.addEventListener('click', function(){

   mes.remove();
    })
  };



inputMesage.addEventListener('submit', function (evt) {
  evt.preventDefault();
let textvalue = inputMesage.querySelector('.chat-form-input');
  let massage =newMassenge.cloneNode(true);
  let massageText = massage.querySelector('p');
  massageText.textContent = textvalue.value;
  
    del(massage);
 
  mesanges.appendChild(massage);
  textvalue.value ="";

  });
