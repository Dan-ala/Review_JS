//const answer = prompt("vamos ingresar numeros?: yes or no")
let form = document.getElementById("form")
let inputValues = []

//while(answer=="yes"){

form.addEventListener("submit", e=>{
    e.preventDefault()
    
        const inp = parseInt(document.getElementById("numeros").value)

        if (isNaN(inp)) {
            alert("Hey! Lo que ha ingresado NO es un numero")
        }else{

            if (inputValues.length<=10) {
                const hola = inputValues.push(inp)
                console.log(hola)
                updateList()

                if (inputValues.length==10){
                    sumList()
                }
            }
            /*else{
                alert("NO se pueden ingresar más valores")
            }*/   
        }
})


function updateList() {
    document.getElementById("form").reset()
    for(let i=0;i<inputValues.length;i++){
        if (inputValues.value!=""){
            inputValues.value=""
        }
        
    }
    /*const inputs=document.getElementById('numIngresados')
    inputs.innerHTML=""

    for (let index = 0; index < inputValues.length; index++) {
        const lastNum = document.createElement('li')
        lastNum.textContent = inputValues[index]
        inputs.appendChild(lastNum)
        
    }*/

}

function sumList() {
    alert(`el num 10, es:${inputValues[9]}  el num 9, es: ${inputValues[8]}   el num 8, es ${inputValues[7]}   el num 7, es ${inputValues[6]}   el num 6, es ${inputValues[5]}`)
    
    let sum = inputValues[9]+inputValues[8]+inputValues[7]+inputValues[6]+inputValues[5]

    let result = document.body.textContent=`El total de los últimos 5 numeros es: ${sum}`
    //alert(`el total de los ultimos 5 numero son:  ${sum}`)
}
/*}

    alert("gracias, si deseas.... Recarga la página")*/