let $parrafo2 = document.getElementById('parrafo2');

document.getElementById('parrafo1').innerHTML = 'Este es un párrafo 1';

$parrafo2.innerHTML = 'Este es un párrafo 2';

// * Toggle
const $btnToggle = document.getElementById('toggle');
const $focusOn = document.getElementById('focusOn');
const $focusOff = document.getElementById('focusOff');

$btnToggle.onclick = function() {
  $focusOff.classList.toggle('hide');
  $focusOn.classList.toggle('hide');
}

// * Incrementar - decrementar
const $p3 = document.getElementById("parrafo3");
let size = 16;
const incrementar = () => {
  size++;
  $p3.style.fontSize = `${size}px`;
}

const decrementar = () => {
  size--;
  $p3.style.fontSize = `${size}px`;
}

// * Validación
const $input = document.querySelector('#input');
const $btnValidar = document.querySelector('#validar');
const isOnRange = (value) => (value >= 1 && value <= 10);

$btnValidar.addEventListener('click', (e) => {
  e.preventDefault();
  let value = $input.value; 
  if (!value) return;
  if (isNaN(value)) {
    alert('No es un número');
    return;
  }
  (isOnRange(value))
    ? alert(value) 
    : alert('Fuera de rango');
});

// * Renderizado
const students = [
  { 
    name: 'Juan', 
    enroll: '2018030428', 
    group: 'TCI9-2' 
  },
  { 
    name: 'Enrique', 
    enroll: '2018030429', 
    group: 'TCI9-2' 
  },
  { 
    name: 'Javier', 
    enroll: '2018030430', 
    group: 'TCI9-1' 
  }
];

const $table = document.getElementById('table');
const $tbody = $table.children[1];

students.forEach((student, index) => {
  $tbody.innerHTML += `
  <tr>
    <th scope="row">${ index + 1 }</th>
    <td>${ student.name }</td>
    <td>${ student.enroll }</td>
    <td>${ student.group }</td>
  </tr>`;
});

// * Animación
const rotar = () => {
  const $card = document.getElementById('card');
  let deg = $card.getAttribute('deg');
  const setDeg = (deg) => {
    $card.style.transform = `rotateY(${deg}deg)`;
    $card.setAttribute("deg", deg);
  };
  (deg == 0)? setDeg(180) : setDeg(0);
}

