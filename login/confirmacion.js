var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id = check.checked;
    if(id==true){
        location.href="confirmacionEnglish.html"
    }
    else{
        location.href="confirmación.html"
    }
}