// Array bidimensional donde se guardarán las preguntas junto a sus respuestas correctas correspondientes...
var preguntas = [																			// Pregunta Respuesta
		['Son el conjunto de habilidades que determinan la manera en la cual interactuamos con otras personas.', 'directivas'],
		['Está respaldado convenientemente por una serie de habilidades que refuerzan su efectividad y encumbran al éxito a quien las presenta. ', 'liderazgo de calidad '],
		['Ayuda a la comprensión de las situaciones y dinámicas sociales. ', 'inteligencia social'],
		['Se consideran a veces como un subconjunto de la inteligencia social.', 'habilidades interpersonales'],
		['Daniel Goleman en su obra apunta los aspectos más significativos de estas habilidades directivas, pero que también son importantes capacidades a cualquier otro nivel (y no únicamente en el plano profesional).', 'inteligencia emocional'],
		['Esta habilidad es determinante especialmente en entornos dinámicos y, muchos Project Managers podrían beneficiarse de sus ventajas.', 'prudencia'],
		['Esta manifestación de la valentía también se encuentra entre las principales habilidades directivas', 'coraje'],
		['estas habilidades directivas son importantes porque en los proyectos es habitual que se produzcan roces o se presenten fricciones entre grupos de interés o entre los propios miembros e los equipos de trabajo.', 'gestion de conflictos'],
		['Una de las competencias básicas para cualquier líder es la capacidad de ', 'toma de decisiones'],
		['Pueden considerarse como un complemento a la inteligencia social,ya que giran en torno a la capacidad de comunicación a nivel emocional, la habilidad para comprender las emociones de los demás, entendiendo las situaciones por las que atraviesan.', 'inteligencia emocional'],
		['La habilidad de comunicarse con audiencias de pequeño tamaño y también de gran volumen, y la decisión para hacerlo aunque no se conozca a los interlocutores resumen este tipo de habilidades directivas que resultan imprescindibles en cualquier proyecto.', 'habilidades interpersonales'],
		['Este tipo de habilidades directivas permiten tomar decisiones de manera efectiva en una variedad de situaciones sociales.', 'inteligencia social'],
		['Para muchos es sinónimo de sabiduría, para otros es inherente a la experiencia.', 'prudencia'],
		['La mejor manera de lograrlo es tratar de transmitir a las partes una visión positiva, la de que encontrar una solución donde todos ganen y nadie pierda es posible.', 'gestion de conflictos'],
		['Para experimentar este valor en la propia gestión es preciso revisar la propia escala de valores, las prioridades de uno mismo, y tratar de robustecerlos.', 'coraje'],
		['Tener una mente analítica, capacidad para escuchar, atención al detalle, capacidad para actuar correctamente bajo presión y saber cuándo es el momento de dar un paso atrás y dejar que otros decidan.', 'toma de decisiones'],
		['Es imprescindible la experiencia, pero, igual de importante y necesaria resulta la formación', 'toma de decisiones'],
		['Con las ideas más claras acerca de los puntos donde se pueden hacer concesiones, siendo flexibles y asumiendo que todos tendrán que renunciar a algo.', 'gestion de conflictos'],
		['Hay que saber pedir opiniones, hay que tener la capacidad de escuchar a los demás y, lo que es más complicado, hay que tener en cuenta toda esta información antes de dar ningún paso.', 'prudencia'],
		['Hace falta profundizar en la comunicación no verbal, aprender a regular y controlar los propios sentimientos y, por supuesto, saber expresarlos de manera apropiada.', 'inteligencia emocional']						// [9][0] y [9][1]
	],
	pregunta, respuesta,
	formuladas = 0,
	acertadas = 0;
hazPregunta();
/*
	Se programa que al pulsarse el botón "Siguiente Pregunta" se compruebe si se ha acertado la pregunta, en cuyo caso, se incrementa en una unidad 'acertadas'.
	También se comprueba si ya se han realizado las 5 preguntas, en cuyo caso, se llama a 'muestraResultado()' que mostrará el resultado del juego y terminará el programa, de lo contrario, se formula una nueva pregunta.
*/
document.getElementById('boton').addEventListener('click', function(){
	var entrada = document.getElementById("dato").value;
	if(entrada == respuesta){
		acertadas++;
	}
	if(formuladas < 5){			// Si aun no se han hecho 5 preguntas...
		hazPregunta();			// ... seguir preguntando
	}
	else{						// de lo contrario...
		muestraResultado();		// ... finaliza juego mostrando el resultado
	}
});
/*
	Formula una pregunta al usuario...
*/
function hazPregunta(){
	var e;			// simple variable auxiliar
	// se extrae una pregunta/respuesta al azar del array...
	e = preguntas.splice( numAleat(0, preguntas.length-1), 1 );
	pregunta = e[0][0];			// se guardan la pregunta y la respuesta 
	respuesta = e[0][1];
	document.getElementById('preg').innerHTML = pregunta;
	//ayudares1 = preguntas.splice( numAleat(0, preguntas.length-1), 1 ); 
	//ayudares2 = preguntas.splice( numAleat(0, preguntas.length-1), 1 );
	ayudares1 = preguntas.splice( Math.random(0, preguntas.length-1), 1 ); 
	ayudares2 = preguntas.splice( Math.random(0, preguntas.length-1), 1 );
	ayuda = respuesta + "<br>" + ayudares1[0][1] + "<br>" + ayudares2[0][1]
	document.getElementById('res').innerHTML = ayuda;        // se muestra la pregunta
	document.getElementById('dato').value = '';                  // se borra lo escrito anteriormente por el usuario
	formuladas++;
}
// Comprueba el número de preguntas acertadas y muestra mensaje en función de este...
function muestraResultado(){
    var resultado;      // para guardar el mensaje con el resultado
	switch(acertadas){
		case 0:
			resultado = 'No has acertado una sola pregunta, toca estudiar :-/';
			break;
		case 1:
			resultado = 'Bueno, al menos has acertado una pregunta :-)';
			break;
		case 2:
			resultado = 'Solo 2 preguntas acertadas de 5. Toca mejorar.';
			break;
		case 3:
			resultado = 'No está mal, 3/5 acertadas.';
			break;
		case 4:
			resultado = 'Muy bien, has acertado 4 preguntas :-)';
			break;
		case 5:
			resultado = '¡EXCELENTE, has acertado todas las preguntas! :-D';
			break;
	}
	if(acertadas >2){
		swal(
		      'Aciertos '+acertadas+ ' de 5',
		        resultado,
		        'success'
		    )
	}else{
		swal(
	      'Aciertos '+acertadas+ ' de 5',
	        resultado,
	        'error'
	    )
	}
	
    $('#dato').attr('disabled','disabled');
    $('#boton').hide();
    $('#repetir').show();
}
/*
	Devuelve un número aleatorio entero entre 'min' y 'max' (ambos inclusive)
*/
function numAleat(min, max){
	return Math.floor( Math.random() * (max - min + 1) ) + min;
}

$('#repetir').click(function(event) {
	$('#dato').removeAttr('disabled');
    $('#boton').show();
    $('#repetir').hide();
    //document.getElementById('resolucion').innerHTML = '';
    formuladas = 0;
	acertadas = 0;
	hazPregunta();
});

