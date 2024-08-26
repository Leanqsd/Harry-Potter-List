  // función para cargar y mostrar los datos
  async function loadData() {
    try {
        const response = await fetch('../assets/data.json');

        const data = await response.json();
        const list = document.querySelector('.data-list');

        // crea y muestra los elementos en la lista
        data.forEach(item => {
            const listItem = document.createElement('div');
            listItem.className = 'item-content';
            listItem.innerHTML = `
             <p>${item.id}</p>
             <p>${item.nombre}</p>
             <p>${item.casa}</p>
            `;
            list.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}

// Llama a la función al cargar la página
window.onload = loadData;