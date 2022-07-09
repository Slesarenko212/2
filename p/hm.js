var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.addEventListener('DOMContentLoaded', function (event) {
    let b = document.getElementById("mybutt");
    b.addEventListener("click", function (event) {
        let psw_var = document.getElementById("psw");
        
	      if (psw_var.value == "Слесаренко")
            document.location.replace("https://slesarenko212.github.io/2/p/hm_1.html");
    });
});
