let btnon = document.getElementById('btnon')
let btnoff = document.getElementById('btnoff')
let divimage1 = document.getElementById('image1')
let divimage2 = document.getElementById('image2')

divimage1.style.display = "block";
btnon.addEventListener("click", function() {
    divimage1.style.display = "none";
    divimage2.style.display = "block";
})


btnoff.addEventListener("click", function() {
    divimage2.style.display = "none";
    divimage1.style.display = "block";
})