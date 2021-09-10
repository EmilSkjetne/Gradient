function subMenu(){


    var c = document.getElementById("kontaktOssMenu");

    if(c.style.display === "none") {
        c.style.display = "block";
    }
    else{
        c.style.display = "none";
    }
} 

function subYoutube(){

    var inholdFrame = document.getElementById("youtube")

    inholdFrame.style.display = "block";
}


function home(){
    var inholdFrame = document.getElementById("youtube")

    var c = document.getElementById("kontaktOssMenu");


    inholdFrame.style.display ="none";
    c.style.display = "none";
}