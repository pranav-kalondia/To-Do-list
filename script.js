const details = document.getElementById("text"); // Get the element with ID "details"
const listContainer = document.getElementById("listcontainer"); // Get the element with ID "listcontainer"

function Addtask() {
    if (text.value === '') {
        alert("Please enter your task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = text.value;
        listContainer.appendChild(li); // Append the new list item to the list container
        // Clear the input field after adding the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";;
        li.appendChild(span);
    }
    text.value = ''; 
}
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});