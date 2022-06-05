const btn = document.querySelector('button');
const div = document.querySelector('div');
const img = document.querySelector('img');

const names = ["chybasilny", "seba_stanek", "pan_michau", "pan_filip_", "strongvet_", "dlmstr_patrick", "miiciiu", "piternoof", "no_i_pan_grzegorz", "zurekkous", "_olej_to", "mr.grecku", "pan_arnold", "normalny.fajny.chlopak.culejto", "chlorton", "adam.chudas", "szymokoks", "sebo_96", "b.bigaj"];


const nameGenerator = () => {
    const randomNumber = Math.floor(Math.random() * names.length);
    div.textContent = `Najprawdopodobniej najlepszym lifterem jest ${names[randomNumber]}. Gratulujemy!`;

}

document.addEventListener('click', nameGenerator);