/************************************************
 * 1) CARRUSEL PRINCIPAL (.carousel)
 ***********************************************/

// Seleccionamos todas las diapositivas (slides)
const slides = document.querySelectorAll(".carousel-slide");
// Seleccionamos los botones de navegación
const prevBtn = document.querySelector(".nav-arrow.prev");
const nextBtn = document.querySelector(".nav-arrow.next");
// Seleccionamos los indicadores (dots)
const dots = document.querySelectorAll(".carousel-indicators .dot");

let currentSlide = 0;

// Función para mostrar el slide actual
function showSlide(index) {
  // Ajustar si index se sale del rango
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  currentSlide = index;

  // Quitar la clase 'active' de todos los slides
  slides.forEach((slide) => slide.classList.remove("active"));
  // Quitar la clase 'active' de todos los dots
  dots.forEach((dot) => dot.classList.remove("active"));

  // Mostrar el slide actual
  slides[currentSlide].classList.add("active");
  // Activar el dot correspondiente
  dots[currentSlide].classList.add("active");
}

// Botón anterior
prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

// Botón siguiente
nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

// Dots (indicadores) para moverse al slide correspondiente
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Inicializamos mostrando el primer slide
showSlide(currentSlide);

/************************************************
 * 2) MINI CARRUSEL PERSONAS EXTRAVIADAS (.slider-extraviadas)
 ***********************************************/

// Seleccionamos las diapositivas del mini carrusel
const miniSlides = document.querySelectorAll(".slider-extraviadas .slide");
// Seleccionamos los dots del mini carrusel
const miniDots = document.querySelectorAll(".slider-extraviadas .dot");

let currentMiniSlide = 0;

// Función para mostrar la slide actual del mini carrusel
function showMiniSlide(index) {
  if (index < 0) index = miniSlides.length - 1;
  if (index >= miniSlides.length) index = 0;

  currentMiniSlide = index;

  // Quitar 'active' de todos los slides
  miniSlides.forEach((slide) => slide.classList.remove("active"));
  // Quitar 'active' de todos los dots
  miniDots.forEach((dot) => dot.classList.remove("active"));

  // Agregar 'active' al slide y dot correspondiente
  miniSlides[currentMiniSlide].classList.add("active");
  miniDots[currentMiniSlide].classList.add("active");
}

// Asignamos evento a cada dot del mini carrusel
miniDots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showMiniSlide(i);
  });
});

// Inicializamos mostrando la primera diapositiva
showMiniSlide(currentMiniSlide);

/************************************************
 * 3) PESTAÑAS (TABS) .tabs-container
 ***********************************************/

// Seleccionamos los botones de pestaña y los paneles
const tabButtons = document.querySelectorAll(".tabs-header .tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

// Función para mostrar el panel correspondiente
function showTab(tabIndex) {
  // Quitamos 'active' a todas las pestañas y paneles
  tabButtons.forEach((btn) => btn.classList.remove("active"));
  tabPanels.forEach((panel) => panel.classList.remove("active"));

  // Activamos la pestaña y el panel seleccionados
  tabButtons[tabIndex].classList.add("active");
  tabPanels[tabIndex].classList.add("active");
}

// Asignamos evento a cada pestaña
tabButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    showTab(i);
  });
});

// Iniciamos mostrando la primera pestaña (la que ya tiene clase .active en HTML)
// Pero si quieres forzarlo por JS, podrías usar: showTab(0);

