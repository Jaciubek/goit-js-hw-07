import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const markup = galleryItems
    .map((image) => `  <li class="gallery__item">
                        <a class="gallery__link" href="${image.original}">
                            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
                        </a>
                    </li>`
  )
    .join("");
  
gallery.insertAdjacentHTML("afterbegin", markup);

const lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: "alt",
    captionDelay: 250,
});

console.log(galleryItems);
