

let count_el = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment () {
    count += 1
    count_el.textContent = count
}

function save() {
    let num = count + " - "
    saveEl.textContent += num
    count = 0
    count_el.textContent = 0
}

function reset() {
    count = 0
    count_el.textContent = count
}