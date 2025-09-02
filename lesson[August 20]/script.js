$(document).ready(function () {
    document.getElementById("demo").innerText="Hello Javascript!";
    document.getElementById("box").style.backgroundColor="lightblue";
    document.getElementById("btn").onclick = function() { 
    document.getElementById("demo").style.display = "none";
};
    document.getElementById("btn").onclick = function() { 
    document.getElementById("demo").style.display = "block"; 
}; 
    document.getElementById("btn").onclick = function() { 
        let el = document.getElementById("demo"); 
        if(el.style.display === "none") { 
            el.style.display = "block"; 
        } else { 
            el.style.display = "none";}
};
    document.getElementById("demo").classList.add("highlight");
    document.getElementById("demo").classList.remove("highlight");
    document.getElementById("btn").onclick = function() { 
    document.getElementById("demo").classList.toggle("highlight"); 
};


    
});