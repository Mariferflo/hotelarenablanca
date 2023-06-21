document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel");
  
    carousels.forEach(function(carousel) {
      const carouselImages = carousel.querySelectorAll("img");
      let currentImageIndex = 0;
  
      function showNextImage() {
        // Oculta la imagen actual
        carouselImages[currentImageIndex].classList.remove("active");
  
        // Calcula el índice de la siguiente imagen
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  
        // Muestra la siguiente imagen
        carouselImages[currentImageIndex].classList.add("active");
      }
  
      // Mostrar la primera imagen
      carouselImages[currentImageIndex].classList.add("active");
  
      // Cambiar de imagen cada 3 segundos
      setInterval(showNextImage, 3000);
    });
  });