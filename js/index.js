const btnDeslogear = document.getElementById("deslogear");

document.addEventListener("DOMContentLoaded", function(){
    function comprobarLogin(){
        return ((localStorage.getItem("email") != null) && (localStorage.getItem("password") != null))
    }
    if (!comprobarLogin()){
        location.href = "login.html"
    } 

    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    btnDeslogear.addEventListener("click", () => {
        localStorage.clear();
        location.href = "login.html"
    })
});
