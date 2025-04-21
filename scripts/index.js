// for the profile edit button
const profileEditBtn = document.querySelector(".profile__edit-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");
const profileEditCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const newPostBtn = document.querySelector(".profile__add-btn");

const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileform = editProfileModal.querySelector(".modal__form");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const profileNameInput = editProfileModal.querySelector("#profile-name-input");
const profileDescriptionInput = editProfileModal.querySelector(
  "#profile-descripcion-input"
);

profileEditBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

profileEditCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

// for the new post button
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

profileform.addEventListener("submit", handleProfileFormSubmit);

const newPostForm = newPostModal.querySelector(".modal__form");
const cardImageInput = newPostModal.querySelector("#card-image-input");
const cardCaptionInput = newPostModal.querySelector("#card-Caption-input");

function handleNewPostFormSubmit(event) {
  event.preventDefault();
  console.log(cardImageInput.value);
  console.log(cardCaptionInput.value);

  editProfileModal.classList.remove("modal_is-opened");
  newPostModal.classList.remove("modal_is-opened");
}
newPostForm.addEventListener("submit", handleNewPostFormSubmit);
