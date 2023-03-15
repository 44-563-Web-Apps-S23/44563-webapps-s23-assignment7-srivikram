function makeNewDiv() {
    let element = document.createElement("div")
    let newElement = document.getElementById("input").value
    element.innerHTML = newElement
    element.className = "delayQ"
    element.style.color = "red"

    let container = document.getElementById('target')
    container.appendChild(element)

}
function get() {
    let queueItems = document.getElementsByClassName("delayQ")
    let length_elements = queueItems.length
    if (length_elements > 0) {
        queueItems[0].remove()
    }
}
function delay() {
    let queueItems = document.getElementsByClassName("delayQ")
    let length_elements = queueItems.length
    if (length_elements == 0 || length_elements == 1) {
        console.log("Not enough elements to delay")
    } else {
        let removedItem = queueItems[length_elements - 1]
        queueItems[length_elements - 1].remove()
        let container_div = document.getElementById("target")
        container_div.insertBefore(removedItem, container_div.firstChild)
    }
}
function promote() {
    let queueItems = document.getElementsByClassName("delayQ")
    let length_elements = queueItems.length
    let num = Math.floor(Math.random() * length_elements)
    let randNum = queueItems[num]
    randNum.parentNode.insertBefore(randNum, randNum.parentNode.firstChild)
}