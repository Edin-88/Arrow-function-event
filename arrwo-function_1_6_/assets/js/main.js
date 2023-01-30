// Eventhandler change
const my_select = document.querySelector("#my_select")
const option_selected = document.querySelector("#option_selected")

my_select.addEventListener("change", () => option_selected.textContent = my_select.value)

