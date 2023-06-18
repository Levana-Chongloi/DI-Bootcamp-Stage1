// script.js
document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var startDate = new Date(document.getElementById("startDate").value);
    var endDate = new Date(document.getElementById("endDate").value);
    var isCompleted = false;

    var task = {
        name: name,
        description: description,
        startDate: startDate,
        endDate: endDate,
        isCompleted: isCompleted
    };

    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    window.location.href = "task.html";
});
