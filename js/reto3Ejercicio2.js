const a1 = document.getElementById("ingreDatos")
a1.addEventListener("click",e=>{
    e.preventDefault()

    window.scrollTo({
        top: 650,
        left: 100,
        behavior: "smooth"
    })
    
})

const a2 = document.getElementById("infoClientes")
a2.addEventListener("click",e=>{
    e.preventDefault()

    window.scrollTo({
        top:1270,
        left: 100,
        behavior: "smooth"
    })
})

//SOLUCIÓN DEL RETO
let form = document.getElementById("form")
let datosCliente1 = []
let datosCliente2 = []
let datosCliente3 = []
let estado = ['Acreedor','Deudor','Nulo']

form.addEventListener("submit",e=>{
    e.preventDefault()

    let dato1
    const dato2 = document.getElementById("nomClie").value
    const dato3 = parseInt(document.getElementById("saldoAct").value)

    do{
        dato1 = parseInt(document.getElementById("noCuenta").value)
        if (dato1>=0) {
            const newData = datosCliente1.push(dato1)
            const newData2 = datosCliente2.push(dato2)
            const newData3 = datosCliente3.push(dato3)

            /*console.log(newData)
            console.log(newData2)
            console.log(newData3)*/

            updateList()
            estadoCuenta()
            
        }else{
            alert("Ha ingresado un número negativo en la cuenta")
            break;
        }
        
    }while(dato1>=0)
})

function updateList(){
    document.getElementById("form").reset()

    document.getElementById("noCuenta").value=""
    document.getElementById("nomClie").value=""
    document.getElementById("saldoAct").value=""

    //This code is to update the header row
    const countRows = document.getElementById("countRow")
    countRows.innerHTML = `<th scope="row" colspan"5">${datosCliente1.length}</th>`




    const d1 = document.getElementById('datosC1')
    d1.innerHTML=""

    for (let index = 0; index < datosCliente1.length; index++) {
        const element = document.createElement('td')
        element.textContent=datosCliente1[index]
        d1.appendChild(element)
    }

    const d2 = document.getElementById('datosC2')
    d2.innerHTML=""

    for (let index2 = 0; index2 < datosCliente2.length; index2++) {
        const element2 = document.createElement('td')
        element2.textContent=datosCliente2[index2]
        d2.appendChild(element2)
    }

    const d3 = document.getElementById('datosC3')
    d3.innerHTML=""

    for (let index3 = 0; index3 < datosCliente3.length; index3++) {
        const element3 = document.createElement('td')
        element3.textContent=datosCliente3[index3]
        d3.appendChild(element3)
    }

    

}

function estadoCuenta(){
    const d4 = document.getElementById('estadoCuenta1')
    d4.innerHTML=""

    let sumaAcreedores
    
    if(datosCliente3>0){
        for (let index4 = 0; index4 < datosCliente3.length; index4++) {
            const element4 = document.createElement('td')
            element4.textContent=datosCliente3[index4]
            element4.style.setProperty("color","green")
            sumaAcreedores+=datosCliente3[index4]
            d4.appendChild(element4)
        }
        alert(`la suma total de los acreedores es: ${sumaAcreedores}`)
        alert(estado[0])
        //element4.textContent=(`${estado[0]}`)
    }

    else if(datosCliente3<0){
        for (let index5 = 0; index5 < datosCliente3.length; index5++) {
            const element5 = document.createElement('td')
            element5.textContent=datosCliente3[index5]
            element5.style.setProperty("color","red")
            d4.appendChild(element5)
        }
        
        alert(estado[1])
        //element5.textContent=(`${estado[1]}`)
    }

    else if(datosCliente3===0){
        for (let index6 = 0; index6 < datosCliente3.length; index6++) {
            const element6 = document.createElement('td')
            element6.textContent=datosCliente3[index6]
            element6.style.setProperty("color","blue")
            d4.appendChild(element6)
        }
    
        alert(estado[2])
        //element6.textContent=(`${estado[2]}`)
        
    }
}