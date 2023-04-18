const todoButton = document.querySelector(".todo-button");
const primaryButton = document.querySelector(".primary-button");
const todoContainer = document.querySelectorAll(".todo-container-item");
const todoMenu = document.querySelector(".todo-menu");
let todoInput = document.querySelector(".todo-input");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalConfirmButton = document.querySelector(".modal-button-confirm");
const modalDeclineButton = document.querySelector(".modal-button-decline");
const divider = document.querySelector(".divider");

primaryButton.addEventListener("click", () => {
  todoContainer[0].classList.add("grow");
  todoContainer[1].style.display = "none";
});

todoButton.addEventListener("click", () => {
  let todoInputValue = document.querySelector(".todo-input").value;
  if (todoInputValue === "") {
    return;
  }
  createTask(todoInputValue);
  todoInput.value = "";
});

function createTask(todoInputValue) {
  const todoListItem = document.createElement("li");
  const todoContentContainer = document.createElement("div");
  const todoContent = document.createElement("p");
  const iconContainer = document.createElement("div");
  const closeIcon = document.createElement("i");
  todoListItem.classList.add("todo-list-item");
  todoContentContainer.classList.add("todo-menu-content-container");
  todoContent.classList.add("todo-menu-content");
  iconContainer.classList.add("icon-container");
  closeIcon.classList.add("fa-solid");
  closeIcon.classList.add("fa-xmark");
  closeIcon.classList.add("close-icon");
  todoMenu.appendChild(todoListItem);
  todoListItem.appendChild(todoContentContainer);
  todoListItem.appendChild(iconContainer);
  todoContentContainer.appendChild(todoContent);
  iconContainer.appendChild(closeIcon);
  todoContent.textContent = todoInputValue;
  todoMenu.style.marginTop = "32px";
  divider.style.display = "block";

  openModal(closeIcon);
}

function openModal(closeIcon) {
  closeIcon.addEventListener("click", (e) => {
    const listItem = e.target.parentElement.parentElement;
    overlay.style.display = "block";
    modal.style.display = "flex";
    deleteTask(listItem);
    closeModal();
  });
}

function deleteTask(listItem) {
  modalConfirmButton.addEventListener("click", () => {
    listItem.style.display = "none";
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  modalDeclineButton.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });
}

function closeModal() {
  overlay.addEventListener("click", (e) => {
    if (e) {
      modal.style.display = "none";
      overlay.style.display = "none";
    } else {
      return;
    }
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    overlay.style.display = "none";
  } else {
    return;
  }
});
