/* Descrizione problema:
Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: nomecognomecolorepreferito23 
Esempio: fabiopacificiblue23
confermate lettura come al solito e buon divertimento!! :baby-yoda: */

//prompt * 3
//lenght
//console.log + inner HTML


//nome
const userName = prompt('Come ti chiami?');

//cognome
const userSurname = prompt("Qual' è il tuo cognome?");

//colore
const userFavCol = prompt("Qual'è il tuo colore preferito?");

//numero generato in base alla lunghezza del testo
const num = (userName + userSurname + userFavCol).length;

//genero una costante con il testo finale
const pwd = ('La tua password sicurissima è:' + ' ' + userName + userSurname + userFavCol + num );

//risultato in console
console.log(pwd);

//risultato in pagina web
document.getElementById('your_psw').innerHTML = pwd;