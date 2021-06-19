function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    status = hrs < 12 ? 'AM' : `PM`;
    hrs = hrs > 12 ? hrs - 12 : hrs;
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;


    let time = `${hrs}:${mins}:${secs}   ${status}`
    let clockshow = document.getElementById(`clockwatch`)
    clockshow.innerHTML = time

}
setInterval(function() { clock() }, 1000);

let startbtn = document.getElementById('start')
let stopbtn = document.getElementById('stop')
let resetbtn = document.getElementById('reset')






startbtn.addEventListener('click', function() {
    var stops = Number(document.getElementById('stops').innerHTML);
    var stopm = (document.getElementById('stopm').innerHTML);
    var stoph = (document.getElementById('stopm').innerHTML);

    function startTimer() {
        stops = Number(stops)
        stops += 1;
        if (stops < 10) {
            stops = String(stops);
            stops = `0` + stops;

        }
        document.getElementById('stops').innerHTML = stops;
        stops = Number(stops)
        if (stops > 60) {
            stopm = Number(stopm)
            stopm += 1;
            stops = 00;
            if (stopm < 10) {
                stopm = String(stopm);
                stopm = `0` + stopm;
            }
            document.getElementById('stopm').innerHTML = stopm;
            stopm = Number(stopm)
        }
        if (stopm > 60) {
            stoph = Number(stoph)
            stoph += 1;
            stopm = 00;
            if (stoph < 10) {
                stoph = String(stoph);
                stoph = `0` + stoph;
            }
            document.getElementById('stoph').innerHTML = stoph;
            stoph = Number(stoph)
        }
    }

    var myvar = setInterval(function() { startTimer() }, 16.66666666666667);
    stopbtn.addEventListener('click', function() {
        clearInterval(myvar)
    })


})

resetbtn.addEventListener("click", function() {
    document.getElementById('stops').innerHTML = `00`;
    document.getElementById('stopm').innerHTML = `00`;
    document.getElementById('stoph').innerHTML = `00`;
})