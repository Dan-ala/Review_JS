let form = document.getElementById("form")

form.addEventListener("submit",e=>{
    e.preventDefault()

    const feedback=document.querySelector("#campoNumero .feedback")

    let numberUsu = form.number.value

    if (numberUsu>0){
        //alert("El número es positivo")
        feedback.textContent="El número es positivo"
        feedback.style.setProperty("display","block")
        feedback.style.setProperty("opacity","1")

    }else{
        //alert("El número es negativo")
        feedback.textContent="El número es negativo"
        feedback.style.setProperty("display","block")
        feedback.style.setProperty("opacity","1")
    }

})