// Función para mostrar y ocultar la respuesta
function toggleAnswer(questionNumber) {
    var answerElement = document.getElementById('answer-' + questionNumber);
    
    // Verifica si la respuesta está actualmente oculta
    if (answerElement.style.display === "none" || answerElement.style.display === "") {
        answerElement.style.display = "block"; // Muestra la respuesta
    } else {
        answerElement.style.display = "none"; // Oculta la respuesta
    }
}

// Al cargar la página, ocultar todas las respuestas inicialmente
window.onload = function() {
    var answers = document.querySelectorAll('.answer-text');
    answers.forEach(function(answer) {
        answer.style.display = 'none'; // Establecer display: none en todas las respuestas
    });
}

// Función para alternar la visibilidad del menú en dispositivos móviles
function toggleMenu() {
    // Seleccionamos el elemento <ul> que contiene los enlaces del menú
    const navList = document.getElementById('nav-list');
    
    // Alternamos la clase 'show' para mostrar u ocultar el menú
    navList.classList.toggle('show');
}
