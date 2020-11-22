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