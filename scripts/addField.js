// Search for the button (argument: button id)
document.querySelector("#add-time")
// When the user clicks the button
.addEventListener("click", cloneField)

function cloneField() {
    // Gets copy of fields
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Gets all input fields inside the field container
    const fields = newFieldContainer.querySelectorAll("input")

    // For each input field, resets it
    fields.forEach(function(field) {
        field.value = ""
    })

    // Adds new duplicated field to the page
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}