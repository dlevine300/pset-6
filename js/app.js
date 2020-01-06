document.addEventListener("DOMContentLoaded", function () {
     var add = document.getElementById("addTaskButton");
     var removeFinished = document.getElementById("removeFinishedTasksButton");
     var task = document.getElementById("taskInput");
     var list = document.getElementById("taskList");
     var body = document.querySelector("body");
     var prior = document.getElementById("taskPriority");

     //To do counter
     var toDo = document.createElement("span");
     body.insertBefore(toDo, list);
     var allTasks = document.querySelectorAll("li");
     allTasks.className = 'allTasks'
     var counter = allTasks.length;
     toDo.innerHTML = "Tasks to do: " + counter;
     //Add task
     add.addEventListener("click", function () {
         if (task.value.length >= 5 &&
         task.value.length <= 100 &&
         prior.value > 0 &&
         prior.value <= 10) {

     //Add task to the list

        var newTask = document.createElement("li");
        newTask.dataset.priority = prior.value;
        var all = document.querySelectorAll("li");
        var index = all.length;

        for (var i = 0; i < all.length; i++) {
            if (parseInt(newTask.dataset.priority) > parseInt(all[i].dataset.priority)) {
                index = i;
                break;
            }
        }

        list.insertBefore(newTask, all[index]);
        var taskName = document.createElement("h1");
        newTask.appendChild(taskName);
        taskName.innerHTML = task.value;

        //Add delete button
        var delBtn = document.createElement("button");
        delBtn.className ="delBtn"
        newTask.appendChild(delBtn);
        delBtn.innerHTML = "Delete";
        delBtn.classList.add("delete");

        //Add complete button
        var complBtn = document.createElement("button");
        complBtn.className = 'check'
        newTask.appendChild(complBtn);
        complBtn.innerHTML = "Complete";
        complBtn.classList.add("complete");

        counter++;
        toDo.innerHTML = "Tasks to do: " + counter;

        //Mark completed in red and adjust counter
        const check = function () {
            if (this.parentElement.style.color === "") {
                this.parentElement.style.color = "blue";
                this.parentElement.setAttribute("done", "yes");
                counter--;
                toDo.innerHTML = "Tasks to do: " + counter;
            } else if (this.parentElement.style.color === "blue") {
                this.parentElement.style.color = "";
                this.parentElement.removeAttribute("done");
                counter++;
                toDo.innerHTML = "Tasks to do: " + counter;
            }
          }
          check.className = 'addcheck'
        complBtn.addEventListener("click", check);

        //Delete selected item and adjust counter
        delBtn.addEventListener("click", function () {
            this.parentElement.parentNode.removeChild(this.parentElement);
            counter--;
            toDo.innerHTML = "Tasks to do: " + counter;
        });

        task.value = "";
        prior.value = "";

    } else {

        event.preventDefault();
        alert("Task should have from 5 to 100 characters. Priority should be an integer between 1 and 10");
    }
});

//Remove completed items
removeFinished.addEventListener("click", function () {
    var tasks = document.querySelectorAll("li");
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].hasAttribute("done")) {
            tasks[i].parentNode.removeChild(tasks[i]);
        }
    }
});

});
