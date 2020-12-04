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
            } else if(inputs[i].id == 'sliderWidthRange' || inputs[i].id == 'sliderHeightRange'){
                inputs[i].style.backgroundColor = '#AAA'
            } 
            else {
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
            } else if(inputs[i].id == 'sliderWidthRange' || inputs[i].id == 'sliderHeightRange'){
                inputs[i].style.backgroundColor = '#7e624f'
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
    let inputs = containerPainel.querySelectorAll('input')
    let flexDirection = document.querySelector('#fdirection')
    let inputsFD = flexDirection.querySelectorAll('input')
    let flexWrap = document.querySelector('#fwrap')
    let inputsFW = flexWrap.querySelectorAll('input')
    let justifyContent = document.getElementById('jcontent')
    let inputsJC = justifyContent.getElementsByTagName('input')
    let alignItems = document.querySelector('#aitems')
    let inputsAI = alignItems.querySelectorAll('input')
    let alignContent = document.getElementById('acontent')  
    let inputsAC = alignContent.querySelectorAll('.acontent')
    let checkboxContainer = document.querySelector('#boxes')
    let checkboxes = checkboxContainer.querySelectorAll('.boxes')

    changeInputColor(inputsFD, buttonFlexDirection)
    changeInputColor(inputsFW, buttonFlexWrap)
    changeInputColor(inputsJC, buttonJustifyContent)
    changeInputColor(inputsAI, buttonAlignItems)
    changeInputColor(inputsAC, buttonAlignContent)

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
        for(let i = 0; i < boxProperties.length; i++){
            boxProperties[i].style.backgroundColor = '#555'
        }
        for(let i = 0; i < inputs.length; i++) {
            if(inputs[i].id == 'sliderWidthRange' || inputs[i].id == 'sliderHeightRange'){
                inputs[i].style.backgroundColor = '#AAA'
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
        for(let i = 0; i < boxProperties.length; i++){
            boxProperties[i].style.backgroundColor = '#50321e'
        }
        for(let i = 0; i < inputs.length; i++) {
                if(inputs[i].id == 'sliderWidthRange' || inputs[i].id == 'sliderHeightRange'){
                    inputs[i].style.backgroundColor = '#7e624f'
                }
        }     
        colorIndex--
        localStorage.setItem("pageColor", "brown")
        localStorage.getItem("pageColor")
        currentColor = localStorage.getItem("pageColor")
    }
}

function changeInputColor(input, inputButton) {
    if(colorIndex == 0) {
        for(let i = 0; i < input.length; i++) {
            if (input[i].id == inputButton) {
                input[i].style.backgroundColor = '#b4b43b8a'
            } else {
                input[i].style.backgroundColor = '#555'
            }
        }
    } else {
        for(let i = 0; i < input.length; i++) {
            if (input[i].id == inputButton) {
                input[i].style.backgroundColor = '#b4b43b8a'
            } else {
                input[i].style.backgroundColor = '#50321e'
            }
        }
    }
}