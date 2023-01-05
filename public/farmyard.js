const chickenDOM = document.querySelector(".chicken");
const loadingDOM = document.querySelector(".loading-text");

// get all the chicken from this farmyard
const showChicken = async () => {
  loadingDOM.style.visibility = "visible";
  try {
    const {
      data: { chicken },
    } = await axios.get("/api/v1/chicken");
    if (chicken.length < 1) {
      tasksDOM.innerHTML =
        '<h5 class="empty-list">No chicken in your yard</h5>';
      loadingDOM.style.visibility = "hidden";
      return;
    }
    const allChicken = chicken
      .map((chick) => {
        const { name, steps, isRunning, _id: chickenID } = chick;
        return `    <div class="single-chicken">
      <img src="./chickenhead.png" alt="chicken head" />
      <p>name : ${name}</p>
      <p>steps : ${steps}</p>
      <p>is running : ${isRunning}</p>
      <div class="chicken-links">
        <!-- edit link -->
        <a href="chicken.html?id=${chickenID}" class="btn edit-link"> detail </a>
        <!-- delete btn -->
        <button type="button" class="btn delete-btn" data-id="${chickenID}">
          delete
        </button>
      </div>
    </div>
`;
      })
      .join("");
    chickenDOM.innerHTML = allChicken;
  } catch (error) {
    chickenDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>';
  }
  loadingDOM.style.visibility = "hidden";
};

showChicken();

// delete chicken /api/chicken/:id
chickenDOM.addEventListener("click", async (e) => {
  const el = e.target;
  if (el.parentElement.classList.contains("delete-btn")) {
    loadingDOM.style.visibility = "visible";
    const id = el.parentElement.dataset.id;
    try {
      await axios.delete(`/api/v1/tasks/${id}`);
      showTasks();
    } catch (error) {
      console.log(error);
    }
  }
  loadingDOM.style.visibility = "hidden";
});
