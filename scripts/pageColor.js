let colorIndex = 0
let currentColor = localStorage.getItem("pageColor")

function initialPageColor() {
    let containerPainel = document.getElementById('containerPainel')
    let boxesBorderColor = containerPainel.querySelectorAll('.boxesBorderColor')
    let inputs = containerPainel.querySelectorAll('input')
    let jcontent = document.getElementById('jcontent')
    let inputsJC = jcontent.getElementsByTagName('input')
    let checkboxContainer = document.querySelector('#boxes')
    let checkboxes = checkboxContainer.querySelectorAll('.boxes')
    
    if (currentColor == 'grey') {
        colorIndex = 1
    } else {
        colorIndex = 0
    }
    if(currentColor == 'grey') {
    body.style.backgroundColor = '#AAA'
    containerPainel.style.backgroundColor = '#666'
    cont.style.backgroundColor = '#444'
    document.getElementById('color').style.backgroundColor = '#555'
        for(let i = 0; i < boxesBorderColor.length; i++){
            boxesBorderColor[i].style.borderColor = '#AAA'
        }
        for(let i = 0; i < inputs.length; i++) {
            if (inputs[i].id == 'row' || inputs[i].id == 'nowrap' || inputs[i].id == 'stretch'){
            inputs[i].style.backgroundColor = '#b4b43b8a'
            } else {
            inputs[i].style.backgroundColor = '#555'
            }
        for (let i = 0; i < inputsJC.length; i++) {
            if (inputsJC[i].id == 'flex-start') {
                inputsJC[i].style.backgroundColor = '#b4b43b8a'
            }
            }
        for(let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].style.backgroundColor = '#555'
            }
        }
    } else {
    body.style.backgroundColor = '#7e624f'
    containerPainel.style.backgroundColor = '#5a3c28'
    cont.style.backgroundColor = '#462814'
    document.getElementById('color').style.backgroundColor = '#50321e'
        for(let i = 0; i < boxesBorderColor.length; i++){
            boxesBorderColor[i].style.borderColor = '#8c6e5a'
        }
        for(let i = 0; i < inputs.length; i++) {
            if (inputs[i].id == 'row' || inputs[i].id == 'nowrap' || inputs[i].id == 'stretch'){
            inputs[i].style.backgroundColor = '#b4b43b8a'
            } else {
            inputs[i].style.backgroundColor = '#50321e'
            }
        }
        for (let i = 0; i < inputsJC.length; i++) {
            if (inputsJC[i].id == 'flex-start') {
                inputsJC[i].style.backgroundColor = '#b4b43b8a'
            }
        }
        for(let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].style.backgroundColor = '#50321e'
        }
    }
}

// Alterar cor da página entre os temas Marrom ou Cinza
function buttonChangePageColor() {
    let containerPainel = document.getElementById('containerPainel')
    let boxesBorderColor = containerPainel.querySelectorAll('.boxesBorderColor')
    let fdirection = document.querySelector('#fdirection')
    let jcontent = document.getElementById('jcontent')
    let aitems = document.querySelector('#aitems')
    let inputsFD = fdirection.querySelectorAll('input')
    let inputsJC = jcontent.getElementsByTagName('input')
    let inputsAI = aitems.querySelectorAll('input')
    let checkboxContainer = document.querySelector('#boxes')
    let checkboxes = checkboxContainer.querySelectorAll('.boxes')

    if(colorIndex == 0) {
        containerPainel.style.backgroundColor = '#666'
        body.style.backgroundColor = '#AAA'        
        cont.style.backgroundColor = '#444'
        document.getElementById('color').style.backgroundColor = '#555'
        for(let i = 0; i < boxesBorderColor.length; i++){
            boxesBorderColor[i].style.borderColor = '#AAA'
        }
        for(let i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].disabled == true) {
                checkboxes[i].style.backgroundColor = '#DDD'
            } else {
                checkboxes[i].style.backgroundColor = '#555'
            }
        }  
        for(let i = 0; i < boxSizes.length; i++){
            boxSizes[i].style.backgroundColor = '#555'
        }
        for(let i = 0; i < inputsFD.length; i++) {
            if (inputsFD[i].id == buttonFlexDirection) {
                inputsFD[i].style.backgroundColor = '#b4b43b8a'
            } else {
                inputsFD[i].style.backgroundColor = '#555'
            }
        }
        for(let i = 0; i < inputsJC.length; i++) {   
            if (inputsJC[i].id == buttonJustifyContent) {
                inputsJC[i].style.backgroundColor = '#b4b43b8a'
            } else {
                inputsJC[i].style.backgroundColor = '#555'
            }
        }    
        for(let i = 0; i < inputsAI.length; i++) { 
            if (inputsAI[i].id == buttonAlignItems) {
                inputsAI[i].style.backgroundColor = '#b4b43b8a'
            } else {
                inputsAI[i].style.backgroundColor = '#555'
            }
        }              
        colorIndex++         
        localStorage.setItem("pageColor", "grey")
        localStorage.getItem("pageColor")
        currentColor = localStorage.getItem("pageColor")
    } else {
        containerPainel.style.backgroundColor = '#5a3c28'
        body.style.backgroundColor = '#7e624f'
        cont.style.backgroundColor = '#462814'
        document.getElementById('color').style.backgroundColor = '#50321e'
        for(let i = 0; i < boxesBorderColor.length; i++){
            boxesBorderColor[i].style.borderColor = '#8c6e5a'
        }
        for(let i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].disabled == true) {
                checkboxes[i].style.backgroundColor = '#8c6e5a'
            } else {
                checkboxes[i].style.backgroundColor = '#50321e'
            }        
        }
        for(let i = 0; i < boxSizes.length; i++){
            boxSizes[i].style.backgroundColor = '#50321e'
        }
        for(let i = 0; i < inputsFD.length; i++) {
            if (inputsFD[i].id == buttonFlexDirection) {
                inputsFD[i].style.backgroundColor = '#b4b43b8a'
            } else {
                inputsFD[i].style.backgroundColor = '#50321e'
            }
        }
        for(let i = 0; i < inputsJC.length; i++) {   
            if (inputsJC[i].id == buttonJustifyContent) {
                inputsJC[i].style.backgroundColor = '#b4b43b8a'
            } else {
                inputsJC[i].style.backgroundColor = '#50321e'
            }
        }    
        for(let i = 0; i < inputsAI.length; i++) { 
            if (inputsAI[i].id == buttonAlignItems) {
                inputsAI[i].style.backgroundColor = '#b4b43b8a'
            } else {
                inputsAI[i].style.backgroundColor = '#50321e'
            }
        }       
        colorIndex--
        localStorage.setItem("pageColor", "brown")
        localStorage.getItem("pageColor")
        currentColor = localStorage.getItem("pageColor")
    }
}