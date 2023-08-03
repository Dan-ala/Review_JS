function numeros(e) {
    e.preventDefault()

    let numberOne=parseInt(document.getElementById("num1").value)
    let numberTwo=parseInt(document.getElementById("num2").value)
    let numberThree=parseInt(document.getElementById("num3").value)

    let f=document.querySelector(".feedback")

    if (numberOne>numberTwo & numberOne>numberThree) {
        f.textContent=`${numberOne} es el número mayor`
        f.style.setProperty("visibility","visible")
        f.style.setProperty("opacity","1")

        if(numberTwo>numberThree){
            f.textContent +=` y ${numberThree} es el número menor`
        }else{
            f.textContent +=` y ${numberTwo} es el número menor`
        }
    }
    else if(numberTwo>numberOne & numberTwo>numberThree){
        f.textContent=`${numberTwo} es el número mayor`
        f.style.setProperty("visibility","visible")
        f.style.setProperty("opacity","1")

        if(numberThree>numberOne){
            f.textContent +=` y ${numberOne} es el número menor`
        }else{
            f.textContent +=` y ${numberThree} es el número menor`
        }
    }
    else if(numberThree>numberOne & numberThree>numberTwo){
        f.textContent=`${numberThree} es el número mayor`
        f.style.setProperty("visibility","visible")
        f.style.setProperty("opacity","1")

        if (numberOne>numberTwo) {
            f.textContent +=` y ${numberTwo} es el número menor`
        }else{
            f.textContent +=` y ${numberOne} es el número menor`
        }
    }
}