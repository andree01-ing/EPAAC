var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id = check.checked;
    if(id==true){
        location.href="principalEnglishR.html"
    }
    else{
        location.href="principalRegistrado.html"
    }
}