// Nome
let firstName = prompt('Inserisci il tuo nome');

console.log(firstName);
//conognome
let lastName = prompt(`Ciao ${firstName}, inserici il tuo cognome`);

console.log(lastName);


// colore preferito
let color = prompt('Inserisci il tuo colore preferito');
console.log(color);

//OUTPUT PASSWORD
document.getElementById('password').innerHTML = `${firstName}${lastName}${color}21`;

a