const hideForm = document.getElementById('login'), showTema = document.getElementById('tema'), hideMenu2 = document.getElementById('menu2'), showClues = document.getElementById('clues'), showAnswerInput = document.getElementById('userAnswer'), btnIniciar = document.getElementById('btnIniciar'), inputUserAnswer = document.getElementById('inputUserAnswer'), btnAnswers = document.getElementById('answersBtn'), showPastAnswerDiv = document.getElementById('showPastAnswer'), btnScore = document.getElementById('scoreBtn');

// defino const de buttons para la parte de mamiferos
const btnMamiferos = document.getElementById('mamiferosBtn'), btnMamiferosNextClue = document.getElementById('nextClueM'), btnMamiferosLastClue = document.getElementById('lastClueM'), btnUserAnswerM = document.getElementById('btnUserAnswerM'), answerM = document.getElementById('showAnswerM'), mamiferosControl = document.getElementById('mamiferosControl');

// defino const de buttons para la parte de aves
const btnAves = document.getElementById('avesBtn'), btnAvesNextClue = document.getElementById('nextClueA'), btnAvesLastClue = document.getElementById('lastClueA'), btnUserAnswerA = document.getElementById('btnUserAnswerA'), answerA = document.getElementById('showAnswerA'), avesControl = document.getElementById('avesControl');  

// defino const de buttons para la parte de plantas
const btnPlantas = document.getElementById('plantasBtn'), btnPlantasNextClue = document.getElementById('nextClueP'), btnPlantasLastClue = document.getElementById('lastClueP'), btnUserAnswerP = document.getElementById('btnUserAnswerP'), answerP = document.getElementById('showAnswerP'), plantasControl = document.getElementById('plantasControl'); 

// PARA LA PARTE DE STORAGE
const nombreUsuario = document.getElementById('nombre');

// FUNCION CONSTRUCTORA PARA MI ARRAY CON DATOS DE LA QUIZ
class respuesta {
    constructor(tema, palabra, pista1, pista2, pista3, id) {
        this.tema = tema
        this.palabra = palabra;
        this.pista1 = pista1;
        this.pista2 = pista2;
        this.pista3 = pista3;
        this.id = id;
    }
}

const respuestas = [
    new respuesta('mamiferos', 'carpincho', 'Primera pista: El mamífero misterioso es un -HERBÍVORO- se trata del mayor de los -ROEDORES- vivientes (no extinto) y habita en casi toda Sudamérica hasta el Sur de la Provincia de Buenos Aires', 'Segunda pista: Su peso ronda los 55 Kg y mide 1 m de largo, tiene una cola corta y no visible y se asemeja en su aspecto a un -COBAYO GIGANTE-', 'Tercera pista: El pelaje es rojizo. Son buenos nadadores, les gusta vivir en las cercanías de cuerpos de agua, aunque de vez en cuando se toman algún country', 1),
    new respuesta('aves', 'hornero', 'Primera pista: El ave misteriosa posee el título de -ave nacional argentina- aunque es un ave típica de toda América del Sur. Mide entre 16 y 23 cm y es normal encontrarla en una multitud de ambientes, incluidas las ciudades en donde es muy frecuente ver sus nidos.', 'Segunda pista: Sus alas son de color marrón rojizo  y el resto de sus plumas son de color marrón claro. Su canto se puede oír durante todo el año. Se alimenta de insectos como grillos, mariposas, escarabajos y hormigas mientras camina por el suelo', 'Tercera pista: ¡Es un gran constructor! Le gusta construir sus nidos en -BARRO- y los hace en forma de -HORNO-.', 2),
    new respuesta('plantas', 'ceibo', 'Primera pista: La planta miseriosa es una planta con flor y posee el título de -flor nacional argentina y uruguaya- aunque también es una planta típica de Brasil y Paraguay.', 'Segunda pista: La planta misteriosa es un árbol. Crece en las riberas del Río Paraná y del Río de La Plata aunque también cerca de cualquier río, lago o pantano. Su madera es muy liviana y se la utiliza para fabricar artículos de peso reducido como artesanías.', 'Tercera pista: Por la vistosidad de sus flores se la cultiva mucho para parquez, plazas, jardines y paseos. Sus flores son grandes y de un color rojo vivo.', 3),
]

function iniciar() { 
    hideForm.className = 'hide';
    showTema.className = 'show';
    localStorage.setItem('nombre',nombreUsuario.value);
}

btnIniciar.addEventListener('click', iniciar);

// creo funciones y funcionalidad del DOM para separar los quiz, de mamiferos, de aves y de plantas

///////////////////////
///PARTE MAMIFEROS////

function mamiferos() {
    let clean = document.getElementById('clues');
    clean.innerHTML = '';
    showTema.className = 'hide';
    hideMenu2.className = 'hide';
    mamiferosControl.className = 'show';
    avesControl.className = 'hide';
    plantasControl.className = 'hide';
    showPastAnswerDiv.className = 'hide';
    btnMamiferosNextClue.className = 'show';
    btnUserAnswerM.className = 'show';
    btnUserAnswerA.className = 'hide';
    btnUserAnswerP.className = 'hide';
    btnAvesNextClue.className = 'hide';
    answerM.className = 'hide';
    answerP.className = 'hide';
    answerA.className = 'hide';
    btnPlantasNextClue.className = 'hide';
    btnPlantasLastClue.className = 'hide';
    showClues.className = 'show';
    showAnswerInput.className = 'show';
    let clue1 = document.getElementById('clues');
    clue1.innerHTML += respuestas[0].pista1
}

btnMamiferos.addEventListener('click', mamiferos);

btnUserAnswerM.addEventListener('click', () => {
    let respuestaUser = inputUserAnswer.value.toLowerCase();
    if (respuestaUser == respuestas[0].palabra) {
        showTema.className = 'show';
        hideMenu2.className = 'show';
        let congrats = document.getElementById('clues');
        congrats.innerHTML = '';
        congrats.innerHTML += `<h2>¡Felicitaciones! resolviste la Quiz de mamíferos</h2>`;
        let puntajeM = 1
        localStorage.setItem('puntajeM',puntajeM);
    }
    else  {
        let tryAgain = document.getElementById('clues');
        tryAgain.innerHTML += `<h2>Intenta nuevamente, o de ser posible pide otra pista</h2>`;
    }
}) 
btnMamiferosNextClue.addEventListener('click', () => {
    let clue2 = document.getElementById('clues');
    clue2.innerHTML += `<br> <br>` + respuestas[0].pista2
    btnMamiferosNextClue.className = 'hide';
    btnMamiferosLastClue.className = 'show';
})

btnMamiferosLastClue.addEventListener('click', () => {
    let clue3 = document.getElementById('clues');
    clue3.innerHTML += `<br> <br>` + respuestas[0].pista3
    btnMamiferosLastClue.className = 'hide';
    answerM.className = 'show';
}) 

answerM.addEventListener('click', () => {
    showTema.className = 'show';
    hideMenu2.className = 'show';
    btnUserAnswerM.className = 'hide';
    let answer = document.getElementById('clues');
    answer.innerHTML += `<h3>El mamífero misterioso es: </h3>` + respuestas[0].palabra.toUpperCase();
    let puntajeM = 0;
    localStorage.setItem('puntajeM',puntajeM);
})


////////////////////////////////////
// PARTE DE AVES//

function aves() {
    let clean = document.getElementById('clues');
    clean.innerHTML = '';
    showTema.className = 'hide';
    hideMenu2.className = 'hide';
    mamiferosControl.className = 'hide';
    avesControl.className = 'show';
    plantasControl.className = 'hide';
    showPastAnswerDiv.className = 'hide';
    btnUserAnswerA.className = 'show';
    btnUserAnswerM.className = 'hide';
    btnUserAnswerP.className = 'hide';
    showClues.className = 'show';
    showAnswerInput.className = 'show';
    answerM.className = 'hide';
    answerP.className = 'hide';
    answerA.className = 'hide';
    btnAvesNextClue.className = 'show';
    btnMamiferosNextClue.className = 'hide';
    btnPlantasNextClue.className = 'hide';
    let clue1 = document.getElementById('clues');
    clue1.innerHTML += respuestas[1].pista1
}
btnAves.addEventListener('click', aves);

btnUserAnswerA.addEventListener('click', () => {
    let respuestaUser = inputUserAnswer.value.toLowerCase();
    if (respuestaUser == respuestas[1].palabra) {
        showTema.className = 'show';
        hideMenu2.className = 'show';
        let congrats = document.getElementById('clues');
        congrats.innerHTML = '';
        congrats.innerHTML += `<h2>¡Felicitaciones! resolviste la Quiz de Aves</h2>`;
        let puntajeA = 1
        localStorage.setItem('puntajeA',puntajeA);
    }
    else  {
        let tryAgain = document.getElementById('clues');
        tryAgain.innerHTML += `<h2>Intenta nuevamente, o de ser posible pide otra pista</h2>`;
    }
})

btnAvesNextClue.addEventListener('click', () => {
    let clue2 = document.getElementById('clues');
    clue2.innerHTML += `<br> <br>` + respuestas[1].pista2
    btnAvesNextClue.className = 'hide';
    btnAvesLastClue.className = 'show';
})

btnAvesLastClue.addEventListener('click', () => {
    let clue3 = document.getElementById('clues');
    clue3.innerHTML += `<br> <br>` + respuestas[1].pista3
    btnAvesLastClue.className = 'hide';
    answerA.className = 'show';
}) 

answerA.addEventListener('click', () => {
    showTema.className = 'show';
    hideMenu2.className = 'show';
    btnUserAnswerA.className = 'hide';
    let answer = document.getElementById('clues');
    answer.innerHTML += `<h3>El ave misteriosa es: </h3>` + respuestas[1].palabra.toUpperCase();
})


//////////////////////
// PARTE DE PLANTAS//

function plantas() {
    let clean = document.getElementById('clues');
    clean.innerHTML = '';
    showTema.className = 'hide';
    hideMenu2.className = 'hide';
    mamiferosControl.className = 'hide';
    avesControl.className = 'hide';
    plantasControl.className = 'show';
    showPastAnswerDiv.className = 'hide';
    btnUserAnswerP.className = 'show';
    btnUserAnswerM.className = 'hide';
    btnUserAnswerA.className = 'hide';
    answerM.className = 'hide';
    answerP.className = 'hide';
    answerA.className = 'hide';
    showClues.className = 'show';
    showAnswerInput.className = 'show';
    btnPlantasNextClue.className = 'show';
    btnMamiferosNextClue.className = 'hide';
    btnAvesNextClue.className = 'hide';
    let clue1 = document.getElementById('clues');
    clue1.innerHTML += respuestas[2].pista1
}
btnPlantas.addEventListener('click', plantas);

btnUserAnswerP.addEventListener('click', () => {
    let respuestaUser = inputUserAnswer.value.toLowerCase();
    if (respuestaUser == respuestas[2].palabra || respuestaUser == 'seibo') {
        showTema.className = 'show';
        hideMenu2.className = 'show';
        let congrats = document.getElementById('clues');
        congrats.innerHTML = '';
        congrats.innerHTML += `<h2>¡Felicitaciones! resolviste la Quiz de plantas</h2>`;
        let puntajeP = 1
        localStorage.setItem('puntajeP',puntajeP);
    }
    else  {
        let tryAgain = document.getElementById('clues');
        tryAgain.innerHTML += `<h2>Intenta nuevamente, o de ser posible pide otra pista</h2>`;
    }
})

btnPlantasNextClue.addEventListener('click', () => {
    let clue2 = document.getElementById('clues');
    clue2.innerHTML += `<br> <br>` + respuestas[2].pista2
    btnPlantasNextClue.className = 'hide';
    btnPlantasLastClue.className = 'show';
})

btnPlantasLastClue.addEventListener('click', () => {
    let clue3 = document.getElementById('clues');
    clue3.innerHTML += `<br> <br>` + respuestas[2].pista3
    btnPlantasLastClue.className = 'hide';
    answerP.className= 'show';
}) 

answerP.addEventListener('click', () => {
    showTema.className = 'show';
    hideMenu2.className = 'show';
    btnUserAnswerP.className = 'hide';
    let answer = document.getElementById('clues');
    answer.innerHTML += `<h3>La planta misteriosa es: </h3>` + respuestas[2].palabra.toUpperCase() + `<span> o SEIBO</span>`;
})


////////////////////////////////////////////////////////////////
/// MENU SECUNDARIO: RESPUESTAS ANTERIORES Y VER MIS PUNTAJES//

///////////////////////////
//RESPUESTAS ANTERIORES///

btnAnswers.addEventListener('click', () => {
    let hideClues = document.getElementById('clues');
    hideClues.className = 'hide';

    mamiferosControl.className = 'hide';
    avesControl.className = 'hide';
    plantasControl.className = 'hide';
    showAnswerInput.className = 'hide';
    showPastAnswerDiv.className = 'show';
    showPastAnswerDiv.innerHTML = '';
    showPastAnswerDiv.innerHTML += `<span>La solución anterior de la Bio-Quiz para el tema </span>` + respuestas[0].tema.toUpperCase() + `<span> era </span>` + respuestas[0].palabra.toUpperCase() + `<br><br>`;
    showPastAnswerDiv.innerHTML += `<span>para el tema </span>` + respuestas[1].tema.toUpperCase() + `<span> era </span>` + respuestas[1].palabra.toUpperCase() + `<br><br>`;
    showPastAnswerDiv.innerHTML += `<span>para el tema </span>` + respuestas[2].tema.toUpperCase() + `<span> era </span>` + respuestas[2].palabra.toUpperCase() + `<span> o SEIBO</span>`;
})

/////////////////////
//VER MIS PUNTAJES//
btnScore.addEventListener('click', () => {
    showPastAnswerDiv.className = 'show';
    showPastAnswerDiv.innerHTML = '';
    let nombreUsuario = localStorage.getItem('nombre');
    let puntajeMamiferos = localStorage.getItem('puntajeM');
    let puntajeAves = localStorage.getItem('puntajeA');
    let puntajePlantas = localStorage.getItem('puntajeP');
    showPastAnswerDiv.innerHTML += `<span>¡Hola </span>` + nombreUsuario +`<span>! <br>En cada Bio-Quiz acertada obtienes 1 punto <br>Tus puntajes acumulados en la Bio-Quiz hasta el día de hoy para cada tema son: <br> Mamíferos: </span>` + puntajeMamiferos + `<span><br>Aves: </span>` + puntajeAves + `<span><br>Plantas: </span>` + puntajePlantas + `<span><br><br>Regresa la semana que viene para otra Bio-Quiz<br>¡Guarda esta página los en favoritos de tu navegador así no te pierdes ninguna Quiz!<br>¡Gracias! hasta la próxima </span>`;
})