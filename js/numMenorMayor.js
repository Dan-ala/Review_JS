function validar (e){

    e.preventDefault()

    let f1=document.querySelector(".feedback1")

    let numero1=parseInt(document.getElementById("number1").value)
    let numero2=parseInt(document.getElementById("number2").value)

    if (numero1>numero2) {
        f1.textContent=`${numero1} es mayor`
        f1.style.setProperty("visibility", "visible")
        f1.style.setProperty("opacity", "1")
        //alert(`${numero1} es mayor`)
    }else{
        f1.textContent=`${numero2} es mayor`
        f1.style.setProperty("visibility", "visible")
        f1.style.setProperty("opacity", "1")
        //alert(`${numero2} es mayor`)
    }
}