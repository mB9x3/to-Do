const field = document.getElementById("field");
const toDo = document.getElementById("toDo");
const outerShape = document.getElementById("outer-shape");

toDo.addEventListener("click", function () {
    if (field.value == "") {
        alert("Please enter a task");
        return;
    }

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="h3-2icons-p">
            <div class="item">
                <div class="row-task">
                    <p class="taskText">${field.value}</p>
                    <div class="icons">
                        <i class="fa-solid fa-circle-check check"></i>
                        <i class="fa-solid fa-circle-xmark dele"></i>
                    </div>
                </div>
                <p class="status"></p>
            </div>
        </div>
    `;

    outerShape.appendChild(div);

    const dele = div.querySelector(".dele");
    const status = div.querySelector(".status");
    const check = div.querySelector(".check");
    const taskText = div.querySelector(".taskText");

    dele.addEventListener("click", function () {
        div.remove();
        updatePending(); 
    });

    check.addEventListener("click", function () {
        taskText.classList.toggle("incomplete");

        if (taskText.classList.contains("incomplete")) {
            status.textContent = "complete";
        } else {
            status.textContent = "";
        }

        updatePending();
    });

    updatePending();      
});

function updatePending() {
    const allTasks = document.querySelectorAll(".taskText");
    const completed = document.querySelectorAll(".taskText.incomplete");
    const pending = allTasks.length - completed.length;

    document.getElementById("pendingCount").textContent =
        `${pending} pending`;
}
