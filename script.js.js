const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchMessage = document.getElementById('searchMessage');
const sportButtons = document.querySelectorAll('.sports button');
const sportMessage = document.getElementById('sportMessage');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const text = searchInput.value.trim();
  if (text === '') {
    searchMessage.textContent = 'Escribe un deporte para buscar.';
  } else {
    searchMessage.textContent = `Buscando noticias sobre: ${text}`;
  }
});

sportButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const sport = button.dataset.sport;
    sportMessage.textContent = `Has seleccionado ${sport}. Aquí puedes consultar sus noticias y resultados.`;
  });
});
