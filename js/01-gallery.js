import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

function createGalleryItem(item) {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.setAttribute("data-source", item.original);
  image.alt = item.description;

  link.link;
  appendChild(image);
  listItem.appendChild(link);

  galleryList.appendChild(listItem);

  // Add click event listener to open the modal
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const instance = basicLightbox.create(
      `<img src="${item.original}" alt="${item.description}">`
    );
    instance.show();
  });
}

galleryItems.forEach(createGalleryItem);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const lightboxCloseButton = document.querySelector(
      ".basicLightbox__wrapper"
    );
    if (lightboxCloseButton) {
      lightboxCloseButton.click();
    }
  }
});
