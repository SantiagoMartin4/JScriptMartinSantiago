


// agrego método de string.toUpperCase para simplificar el acceso sin tener que distinguir entr mayusculas y minusculas

function iniciar() {

    let inicio = true;

    while (inicio) {
        let palabraUsuario = prompt('Para empezar con el quiz escribe la palabra "INICIAR"');

        if (palabraUsuario.toUpperCase() == 'INICIAR') {
            alert('Empezamos con la trivia del día, ¡Diviértete! \nPresiona la tecla Enter o da en -Aceptar- para continuar');
            inicio = false;
            break;
        }
        else {
            alert('para comenzar el juego debés escribir la palabra "iniciar", intentalo de nuevo (pssstt: escribelo sin las comillas  ;D )')
        }
    }
}

// Este era mi "inicio de trivia" anterior, usaba ciclo for con iteraciones, pero una vez que llegaba al límite de las iteraciones entraba de manera automática, lo reemplazo por el while, (para la próxima entrega se borra para ir limpiando código basura)

/*     for (let i = 0; i < 10; i++) {
        let palabraUsuario = prompt('Para empezar con el quiz escribe la palabra "iniciar" (recuerda, solo minúsculas O mayúsculas');

        if (palabraUsuario == 'iniciar' || palabraUsuario == 'INICIAR') {
            alert('Empezamos con la trivia del día, ¡Diviértete! \nPresiona la tecla Enter o da en -Aceptar- para continuar');
            nextSect = true;
            break;
        }
        else {
            alert('para comenzar el juego debés escribir la palabra "iniciar", intentalo de nuevo (pssstt: es sin las comillas  ;D )')
        }
    } */

iniciar()
let opcion = prompt('MENÚ QUIZ \nElige un tema para tu quiz (ingresa el número 1 - 2 - 3 o X): \n1 - Mamíferos \n2 - Aves \n3 - Plantas \n4 - Ingresá una X para ir al siguiente menú donde encontrarás las respuestas de las Bio-Quizz anteriores');
while (opcion != 'x' && opcion != 'X') {
    switch (opcion) {

        case '1':
            alert('Primera pista: El mamífero misterioso es un -HERBÍVORO- se trata del mayor de los -ROEDORES- vivientes (no extinto) y habita en casi toda Sudamérica hasta el Sur de la Provincia de Buenos Aires ');
            let respuestaMamiferos = prompt('¡Adivina!');
            if (respuestaMamiferos.toLowerCase() == 'carpincho') {
                alert('¡Felicitaciones! Resolviste la quiz de -Mamíferos- en el primer intento \nPresiona la tecla ENTER o da en -Aceptar- para regresar al menu de Quiz');
            }
            else {
                alert('¡Intentá nuevamente! \nSegunda pista: Su peso ronda los 55 Kg y mide 1 m de largo, tiene una cola corta y no visible y se asemeja en su aspecto a un -COBAYO GIGANTE-');
                let respuestaMamiferos = prompt('¡Adivina!');
                if (respuestaMamiferos == 'carpincho' || respuestaMamiferos == 'CARPINCHO') {
                    alert('¡Felicitaciones! Resolviste la quiz de -Mamíferos- en el segundo intento \nPresiona la tecla ENTER o da en -Aceptar- para regresar al menu de Quiz');
                }
                else {
                    alert('¡Intentá nuevamente! \nTercera pista: El pelaje es rojizo. Son buenos nadadores, les gusta vivir en las cercanías de cuerpos de agua, aunque de vez en cuando se toman algún country')
                    let respuestaMamiferos = prompt('¡Adivina!');
                    if (respuestaMamiferos == 'carpincho' || respuestaMamiferos == 'CARPINCHO') {
                        alert('¡Felicitaciones! Resolviste la quiz de -Mamíferos- en el tercer intento \nPresiona la tecla ENTER o da en -Aceptar- para regresar al menu de Quiz');
                    }
                    else {
                        alert('Lamentablemente se acabaron las pistas, el mamífero misterioso es el -carpincho- (Hydrochoerus hydrochaeris). \n \nPresiona la tecla ENTER o da en -Aceptar- para regresar al menu de Quiz')
                    }
                }
            }
            break;
        case '2':
            alert('Primera pista: El ave misteriosa porta el título de "ave nacional argentina" aunque es un ave típica de toda América del Sur. Mide entre 16 y 23 cm y es normal encontrarla en una multitud de ambientes, incluidas las ciudades en donde es muy frecuente ver sus nidos.');
            let respuestaAves = prompt('¡Adivina!');
            if (respuestaAves == 'hornero' || respuestaAves == 'HORNERO') {
                alert('¡Felicitaciones! Resolviste la quiz de -Aves- en el primer intento \nPresiona la tecla ENTER o da en -Aceptar- para regresar al menu de Quiz');
            }
            else {
                alert('¡Intentá nuevamente! \nSegunda pista: Sus alas son de color marrón rojizo  y el resto de sus plumas son de color marrón claro. Su canto se puede oír durante todo el año. Se alimenta de insectos como grillos, mariposas, escarabajos y hormigas mientras camina por el suelo.');
                let respuestaAves = prompt('¡Adivina!');
                if (respuestaAves == 'hornero' || respuestaAves == 'HORNERO') {
                    alert('¡Felicitaciones! Resolviste la quiz de -Aves- en el segundo intento \nPresiona la tecla ENTER o da en -Aceptar- para regresar al menu de Quiz');
                }
                else {
                    alert('¡Intentá nuevamente! \nTercera pista: ¡Es un gran constructor! Le gusta construir sus nidos en -BARRO- y los hace en forma de -HORNO-.')
                    let respuestaAves = prompt('¡Adivina!');
                    if (respuestaAves == 'hornero' || respuestaAves == 'HORNERO') {
                        alert('¡Felicitaciones! Resolviste la quiz de -Aves- en el tercer intento \nPresiona la tecla ENTER o da en -Aceptar- para regresar al menu de Quiz');
                    }
                    else {
                        alert('Lamentablemente se acabaron las pistas, el ave misteriosa es el -HORNERO- (Furnarius rufus). \n \nPresiona la tecla ENTER o da en -Aceptar- para regresar al menu de Quiz')
                    }
                }
            }
            break;
        case '3':
            alert('Primera pista: La planta miseriosa misteriosa es una planta con flor y porta el título de "flor nacional argentina y uruguaya" aunque también es una planta típica de Brasil y Paraguay.');
            let respuestaPlantas = prompt('¡Adivina!');
            if (respuestaPlantas == 'ceibo' || respuestaPlantas == 'CEIBO' || respuestaPlantas == 'seibo' || respuestaPlantas == 'SEIBO') {
                alert('¡Felicitaciones! Resolviste la quiz de -Plantas- en el primer intento \nPresiona la tecla ENTER o da en -Aceptar- para regresar al menu de Quiz');
            }
            else {
                alert('¡Intentá nuevamente! \nSegunda pista: La planta misteriosa es un árbol. Crece en las riberas del Río Paraná y del Río de La Plata aunque también cerca de cualquier río, lago o pantano. Su madera es muy liviana y se la utiliza para fabricar artículos de peso reducido como artesanías.');
                let respuestaPlantas = prompt('¡Adivina!');
                if (respuestaPlantas == 'ceibo' || respuestaPlantas == 'CEIBO' || respuestaPlantas == 'seibo' || respuestaPlantas == 'SEIBO') {
                    alert('¡Felicitaciones! Resolviste la quiz de -Plantas- en el segundo intento \nPresiona la tecla ENTER o da en -Aceptar- para regresar al menu de Quiz');
                }
                else {
                    alert('¡Intentá nuevamente! \nTercera pista: Por la vistosidad de sus flores se la cultiva mucho para parquez, plazas, jarines y paseos. Sus flores son grandes y de un color rojo vivo.')
                    let respuestaPlantas = prompt('¡Adivina!');
                    if (respuestaPlantas == 'ceibo' || respuestaPlantas == 'CEIBO' || respuestaPlantas == 'seibo' || respuestaPlantas == 'SEIBO') {
                        alert('¡Felicitaciones! Resolviste la quiz de -Plantas- en el tercer intento \nPresiona la tecla ENTER o da en -Aceptar- para regresar al menu de Quiz');
                    }
                    else {
                        alert('Lamentablemente se acabaron las pistas, la planta misteriosa es el -CEIBO- o -SEIBO- (Erythrina crista-galli). \n \nPresiona la tecla ENTER o da en -Aceptar- para regresar al menu de Quiz')
                    }
                }
            }
            break;
        default:
            alert('No elegiste ninguna de las opciones válidas del menú Quiz, vuelve a intentarlo')
    }
    opcion = prompt('MENÚ QUIZ \nElige un tema para tu quiz: \n1 - Mamíferos \n2 - Aves \n3 - Plantas \n4 - Ingresá una x para ir al siguiente menú de respuestas anteriores');
}


// Defino mi función constructora para los objetos "respuestas con sus respectivas pistas" y así poder mostrarle al usuario a medida que el código vaya creciendo las respuestas de las trivias anteriores


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
    new respuesta('aves', 'hornero', 'Primera pista: El ave misteriosa porta el título de -ave nacional argentina- aunque es un ave típica de toda América del Sur. Mide entre 16 y 23 cm y es normal encontrarla en una multitud de ambientes, incluidas las ciudades en donde es muy frecuente ver sus nidos.', 'Segunda pista: Sus alas son de color marrón rojizo  y el resto de sus plumas son de color marrón claro. Su canto se puede oír durante todo el año. Se alimenta de insectos como grillos, mariposas, escarabajos y hormigas mientras camina por el suelo', 'Tercera pista: ¡Es un gran constructor! Le gusta construir sus nidos en -BARRO- y los hace en forma de -HORNO-.', 2),
    new respuesta('plantas', 'ceibo o seibo', 'Primera pista: La planta miseriosa misteriosa es una planta con flor y porta el título de -flor nacional argentina y uruguaya- aunque también es una planta típica de Brasil y Paraguay.', 'Segunda pista: La planta misteriosa es un árbol. Crece en las riberas del Río Paraná y del Río de La Plata aunque también cerca de cualquier río, lago o pantano. Su madera es muy liviana y se la utiliza para fabricar artículos de peso reducido como artesanías.', 'Tercera pista: Por la vistosidad de sus flores se la cultiva mucho para parquez, plazas, jarines y paseos. Sus flores son grandes y de un color rojo vivo.', 3),
]

console.log(respuestas);



let temaElegido = prompt('Escribe el nombre del tema para que te mostremos sus respuestas anteriores (mamiferos, aves, plantas), de lo contrario da en Aceptar o Enter para ver todas las respuestas anteriores');

const filtrado = respuestas.filter((respuesta)=>respuesta.tema.toLowerCase().includes(temaElegido.toLowerCase()))

if (filtrado.length==0){
    alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo');
}else{
    const imprimible = filtrado.map((respuesta)=>respuesta.palabra);
    alert('Las respuestas de las Bio-Quizz anteriores que coinciden con la búsqueda son:\n- ' + imprimible.join('\n- '));
}

alert('Gracias por tu visita, no olvides pasar la semana siguiente por una nueva Bio-Quizz ¡Adiós!')




// ESTE PEDAZO DE CÓDIGO QUE SIGUE NO LO PUDE HACER ANDAR:
// no pude encontrar la forma para que no me salte el error de "Array is undefined" entiendo que tengo que instanciar la clase, pero no encontré la forma de hacerlo.


/* alert('Bienvenido/a al Menú de respuestas, presiona Aceptar o da Enter para buscar entre las respuestas anteriores')
let filtrarPor = prompt('Elige una opción:\n1 - Mostrar Temas \n2 - Mostrar Respuestas (de la A a la Z) \n3 - Presiona x para salir ');

function ordenarRespuestas(filtrarPor,array) {
    let arrayFiltrado = array.slice(0);

    while (opcion != 'x' && opcion != 'X') {

        switch (filtrarPor) {
            case '1':
                let porTema = arrayFiltrado.sort((a, b) => a.tema.localeCompare(b.tema));
                return porTema;
            case '2':
                let porRespuesta = arrayFiltrado.sort((a, b) => b.palabra.localeCompare(a.palabra));
                return porRespuesta;
            default:
                alert('No ingresaste una opción válida');
                break;
        }
    };
}

function stringFiltro(array) {
    let contenido = '';

    array.forEach(elemento => {
        contenido += 'Estos son los resultados: Tema: ' + elemento.tema + '\nRespuesta:' + elemento.palabra
    });

    return contenido;
}

alert(stringFiltro(ordenarRespuestas(filtrarPor,respuestas)))


 */


