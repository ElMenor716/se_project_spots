// ==========================
// Initial Data
// ==========================
const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

// ==========================
// Utility Functions
// ==========================
function openModal(modal) {
  modal.classList.add("modal_is-opened");

  // Add Escape key listener
  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      closeModal(modal);
    }
  }
  document.addEventListener("keydown", handleEscClose);

  // Store the handler so we can remove it later
  modal._handleEscClose = handleEscClose;

  // Add overlay click listener
  function handleOverlayClick(evt) {
    if (evt.target === modal) {
      closeModal(modal);
    }
  }
  modal.addEventListener("mousedown", handleOverlayClick);

  // Store the handler so we can remove it later
  modal._handleOverlayClick = handleOverlayClick;
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");

  // Remove Escape key listener
  if (modal._handleEscClose) {
    document.removeEventListener("keydown", modal._handleEscClose);
    modal._handleEscClose = null;
  }

  // Remove overlay click listener
  if (modal._handleOverlayClick) {
    modal.removeEventListener("mousedown", modal._handleOverlayClick);
    modal._handleOverlayClick = null;
  }
}

// ==========================
// Profile Modal Functionality
// ==========================
const profileEditBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const profileEditCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const profileform = editProfileModal.querySelector(".modal__form");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = editProfileModal.querySelector("#profile-name-input");
const profileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

profileEditBtn.addEventListener("click", function () {
  openModal(editProfileModal);
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  resetValidation(
    editProfileModal,
    [profileNameInput, profileDescriptionInput],
    settings
  );
});

profileEditCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(editProfileModal);
}

profileform.addEventListener("submit", handleProfileFormSubmit);

// ==========================
// New Post Modal Functionality
// ==========================
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");

const cardImageInput = newPostModal.querySelector("#card-image-input");
const cardCaptionInput = newPostModal.querySelector("#card-caption-input");

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

// ==========================
// New Post Form Submit
// ==========================
function handleNewPostFormSubmit(event) {
  event.preventDefault();

  const inputValues = {
    name: cardCaptionInput.value,
    link: cardImageInput.value,
  };

  const cardElement = getCardElement(inputValues);
  cardList.prepend(cardElement);

  // Clear the input fields after adding the card
  newPostForm.reset();
  const submitBtn = newPostForm.querySelector(settings.submitButtonSelector);
  disableButton(submitBtn, settings);

  // Close the modal
  closeModal(newPostModal);
}

newPostForm.addEventListener("submit", handleNewPostFormSubmit);

// ==========================
// preview image modal
// ==========================
const previewform = document.querySelector("#preview-form");
const previewClosebtn = previewform.querySelector(".modal__close-btn");
const previewImage = previewform.querySelector(".modal__preview-img");
const previewCaption = previewform.querySelector(".modal__preview-caption");

// ==========================
// Card Rendering
// ==========================

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");

  cardImageElement.src = data.link;
  cardTitleElement.alt = data.name;
  cardTitleElement.textContent = data.name;

  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-btn_active");
  });

  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewCaption.textContent = data.name;
    openModal(previewform);
  });

  previewClosebtn.addEventListener("click", () => {
    closeModal(previewform);
  });

  return cardElement;
}

// ==========================
// Initial Cards Rendering
// ==========================
initialCards.forEach(function (item) {
  //console.log(item.name);
  //console.log(item.link);
  const cardElement = getCardElement(item);
  cardList.append(cardElement);
});
