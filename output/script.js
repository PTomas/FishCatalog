// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(div => {
//   div.addEventListener('click', () => {
//     const modal = document.querySelector(div.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }
// const fs = require(fs);


var animalData
var animalType
var animal
var animalD
var textArea

// const submit = document.getElementById ("submit")
// submit.addEventListener ("click", showDetails(animal));

function showDetails(animal) {
  animalType = animal.getAttribute("data-animal-type");
  //alert("The animal is a " + animalType + ".");
  var title = document.getElementById("exampleModalLabel");
  var text = document.createTextNode(animalType);
  title.replaceChildren(text);
  console.log("show details")

  textArea = document.querySelector("textarea");
  
  animalD = JSON.parse(localStorage.getItem(JSON.stringify(animalType)));

  animal = animalD["name"];

  // if (JSON.stringify(animalType).hasOwnProperty(animalType)){
  //   animal = "test";
  //   textArea.value = "";
  //   console.log("null")
  // }
  

  
  console.log(animal);
  console.log(animalType);

  // document.getElementById("exampleModal").reset();
  if(animal == animalType){
    // var note = document.createTextNode(animalData);
    textArea.value = animalD["data"];
    console.log(animalD);

  }else{
    textArea.value = "";
  }
    
  
}

// const save = document.getElementById ("saveBtn")
// save.addEventListener ("click", saveData);

function saveData() {

  animalData = {
    "name": animalType,
    "data": document.getElementById("note").value
  }
  //animalData = document.getElementById("note").value

  var el = document.getElementById('note');
  el.setAttribute('data-note', animalData["data"]);

  console.log("working")
  // var textArea = document.getElementById("note");
  // var note = document.createTextNode(animalData["data"]);
  // el.replaceChildren(note);

  // animalArray.push(animalData);
  localStorage.setItem(JSON.stringify(animalType), JSON.stringify(animalData));

  // console.log(animal)
}

// exports.animalData = animalData;
