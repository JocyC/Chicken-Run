const chickenDOM = document.querySelector(".single-chicken");
const runBtnDOM = document.querySelector(".run-btn");
const backBtnDOM = document.querySelector(".back-link");

const params = window.location.search;
const id = new URLSearchParams(params).get("id");

let tempSteps;

const showChicken = async () => {
  try {
    const {
      data: { chicken },
    } = await axios.get(`/api/v1/chicken/${id}`);
    const { name, birthday, weight, steps, isRunning } = chicken;
    tempSteps = steps;
    const chickenDOMContent = `    
      <img src="./chickenhead.png" alt="chicken head" />
      <p>name : ${name}</p>
      <p>weight : ${weight} kg</p>
      <p>birthday : ${
        birthday ? new Date(birthday).toDateString() : "unknown"
      }</p>
      <p>steps : ${steps}</p>
      <p>is running : ${isRunning}</p>
    
`;
    chickenDOM.innerHTML = chickenDOMContent;
  } catch (error) {
    console.log(error);
  }
};

showChicken();

runBtnDOM.addEventListener("click", async (e) => {
  runBtnDOM.textContent = "Loading";
  e.preventDefault();
  try {
    const {
      data: { chicken },
    } = await axios.patch(`/api/v1/chicken/${id}`, {
      steps: tempSteps + 1,
      isRunning: true,
    });
    const { name, birthday, weight, steps, isRunning } = chicken;
    tempSteps = steps;
    const chickenDOMContent = `    <div class="single-chicken">
      <img src="./chickenhead.png" alt="chicken head" />
      <p>name : ${name}</p>
      <p>weight : ${weight} kg</p>
      <p>birthday : ${birthday || "unknown"}</p>
      <p>steps : ${steps}</p>
      <p>is running : ${isRunning}</p>
    </div>
`;
    chickenDOM.innerHTML = chickenDOMContent;
  } catch (error) {
    console.error(error);
  }
  runBtnDOM.textContent = "Run";
});
