var reactTime = undefined
function recordTime() {
    reactTime = Date.now()
    console.log(reactTime)
}
function startTime() {
    let startCount = randCount()
    for (let i = 0; i < startCount; i++) {
        setTimeout(
            function () {
                console.log(i)
                document.getElementById("counter").innerHTML = i
            }, (startCount - i) * 1000
        )
    }
    setTimeout(
        function () {
            if (reactTime == undefined) {
                document.getElementById("target").innerHTML = "Too Slow"
            }
            else {
                let endTime = Date.now()
                document.getElementById("target").innerHTML = "Time was " + (endTime - reactTime)
            }
        }, 8000
    )
}
function randCount() {
    let num = Math.floor(Math.random() * 9) + 2;
    return num;
}