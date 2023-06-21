const allImages = document.querySelectorAll(".images .img");
const lightbox = document.querySelector(".lightbox");
const closeImgBtn = lightbox.querySelector(".close-icon");

allImages.forEach(img => {
    // Lamamos la funcion showLightboxpasando img src como un argumento
    img.addEventListener("click", () => showLightbox(img.querySelector("img").src));
});

const showLightbox = (img) => {
    //Muestra lightbox y actualiza la fuente img 
    lightbox.querySelector("img").src = img;
    lightbox.classList.add("show"); 
    document.body.style.overflow = "hidden";
}

closeImgBtn.addEventListener("click", () => {
    //Oculta el lightbox al haceer clic en el icono de cerrar
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
});