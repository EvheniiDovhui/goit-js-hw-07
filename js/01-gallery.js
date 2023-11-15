import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<div class="js-gallery-item gallery__item">
        <a href="${item.original}" class="js-gallery-link gallery__link">
        <img class="js-gallery-img gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
        </a>
      </div>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
divRef.innerHTML = addGalleryMarkup;

divRef.addEventListener("click", onImgClick);

function onImgClick(evt) {
  blockStandardAction(evt);

  if (!evt.target.classList.contains("js-gallery-img")) {
    return;
  }

  evt.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  divRef.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}

function blockStandardAction(evt) {
  evt.preventDefault();
}
