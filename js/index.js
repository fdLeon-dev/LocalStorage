// obtener referencias a los elementos del DOM
const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

// agregar event listener al botón
buttonText.addEventListener('click', function() {
    // obtener el valor del input
    const textValue = inputText.value.trim();
    
    // verificar que el input no esté vacío
    if (textValue !== '') {
        //  el valor en localStorage
        localStorage.setItem('userData', textValue);
        
        // limpiar el input después de guardar
        inputText.value = '';
        
        // mensaje de confirmación
        alert('¡Dato guardado exitosamente!');
    } else {
        //  mensaje si el input está vacío
        alert('Por favor, ingresa algún texto antes de guardar.');
    }
});

// permitir guardar también con Enter
inputText.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        buttonText.click();
    }
});
