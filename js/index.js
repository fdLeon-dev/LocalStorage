// Obtener referencias a los elementos del DOM
const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

// Agregar event listener al botón
buttonText.addEventListener('click', function() {
    // Obtener el valor del input
    const textValue = inputText.value.trim();
    
    // Verificar que el input no esté vacío
    if (textValue !== '') {
        // Guardar el valor en localStorage
        localStorage.setItem('userData', textValue);
        
        // Limpiar el input después de guardar
        inputText.value = '';
        
        // Mostrar mensaje de confirmación (opcional)
        alert('¡Dato guardado exitosamente!');
    } else {
        // Mostrar mensaje si el input está vacío
        alert('Por favor, ingresa algún texto antes de guardar.');
    }
});

// Opcional: Permitir guardar también con Enter
inputText.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        buttonText.click();
    }
});
