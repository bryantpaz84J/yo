// Seleccionamos todas las diapositivas (slides) e indicadores (dots)
const slides = document.querySelectorAll('.slider-container .slide');
const dots = document.querySelectorAll('.dots .dot');

// Índice de la diapositiva actual
let currentIndex = 0;

// Función para mostrar una diapositiva específica
function showSlide(index) {
  // Validar que el index no se salga de rango
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentIndex = index;

  // Ocultar todas las diapositivas
  slides.forEach(slide => slide.classList.remove('active'));
  // Marcar todas las dots como inactivas
  dots.forEach(dot => dot.classList.remove('active'));

  // Mostrar la diapositiva actual
  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

// Añadir evento de clic a cada dot
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const index = parseInt(e.target.getAttribute('data-index'));
    showSlide(index);
  });
});

// Mostrar el primer slide al cargar
showSlide(currentIndex);

// Seleccionamos los botones de pestaña y sus paneles
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Desactivar todas las pestañas
    tabButtons.forEach(b => b.classList.remove('active'));
    // Ocultar todos los paneles
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Activar el botón actual
    btn.classList.add('active');
    // Mostrar el panel correspondiente
    const target = btn.getAttribute('data-tab');
    document.getElementById(target).classList.add('active');
  });
});
