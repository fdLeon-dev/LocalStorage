// Obtener referencia al elemento donde se mostrará el dato
const dataSpan = document.getElementById('data');

// Función para mostrar el dato del localStorage
function showData() {
    // Obtener el dato del localStorage
    const savedData = localStorage.getItem('userData');
    
    // Verificar si existe un dato guardado
    if (savedData !== null) {
        // Mostrar el dato en el span
        dataSpan.textContent = savedData;
    } else {
        // Mostrar mensaje si no hay datos
        dataSpan.textContent = 'No hay datos guardados';
    }
}

// Ejecutar la función cuando se carga la página
document.addEventListener('DOMContentLoaded', showData);

// También ejecutar inmediatamente por si el DOM ya está cargado
showData();
