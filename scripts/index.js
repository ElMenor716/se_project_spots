// for the profile edit button
const profileEditBtn = document.querySelector(".profile__edit-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");
const profileEditCloseBtn = editProfileModal.querySelector(".modal__close-btn");

profileEditBtn.addEventListener("click", function() {
  editProfileModal.classList.add("modal_is-opened")
});

profileEditCloseBtn.addEventListener("click", function() {
  editProfileModal.classList.remove("modal_is-opened")
});

// for the new post button
const newPostBtn = document.querySelector(".profile__add-btn");

const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened")
});

newPostCloseBtn.addEventListener("click", function() {
  newPostModal.classList.remove("modal_is-opened")
});