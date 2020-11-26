let cont = document.querySelector('div#container')
let initialRectWidth = cont.getElementsByClassName('rectW')
let initialRectHeight = cont.querySelectorAll('.rectH')
let rectWidth = cont.getElementsByClassName('rect1')
let rectHeight = cont.querySelectorAll('.rect2')

// Carregar cor inicial da Página ou manter cor previamente selecionada
initialPageColor()

// Atualizar cor do botão selecionado para amarelo e dos outros para a cor tema da página
function clearProperties(input) {
    for(let i = 0; i < input.length; i++) {
        if(colorIndex == 0) {
            input[i].style.background = '#50321e'
        } else {
            input[i].style.background = '#555'
        }
    }
}

// Escolher entre esconder ou mostrar caixas 1, 2 e 3
function hideOrShowBox() {
    let boxes = document.getElementById('boxes')
    let box = boxes.querySelectorAll('.boxes')
        for(let i = 0; i < rectWidth.length; i++){
            if (box[i].checked == false) {            
                rectWidth[i].style.display = 'none' 
            } else if (box[i].checked == true) {
                rectWidth[i].style.display = 'flex'
            }
        }
        hiddenBoxes()      
}

// Validar quantas caixas estão escondidas e caso sejam duas, impedir que a terceira seja escondida
function hiddenBoxes() {
    let boxes = document.getElementById('boxes')
    let box = boxes.querySelectorAll('.boxes')
    let checkColor = document.styleSheets[1]
    let hiddenBoxesValue = 0  
    
    for(let i = 0; i < rectWidth.length; i++){
        if (box[i].checked == false) {            
            hiddenBoxesValue++
        }
    }
    for(let i = 0; i < rectWidth.length; i++){
        if(hiddenBoxesValue >= 2) {
            if (box[i].checked == true && currentColor == 'brown') {            
                box[i].setAttribute("disabled", true)
                box[i].style.backgroundColor = '#8c6e5a'
                box[i].style.borderColor = '#888' 
                let pivo = checkColor.cssRules[i].style
                pivo.setProperty("color", "#BBB")    
            } else if (box[i].checked == true && currentColor == 'grey') {            
                box[i].setAttribute("disabled", true)
                box[i].style.backgroundColor = '#DDD'
                box[i].style.borderColor = '#888' 
                let pivo = checkColor.cssRules[i].style
                pivo.setProperty("color", "#BBB")
            }
        }
    }
    for(let i = 0; i < rectWidth.length; i++){
        if(hiddenBoxesValue <= 1){
            box[i].removeAttribute("disabled")
            if (currentColor == 'brown') {
                box[i].style.backgroundColor = '#50321e'
                box[i].style.borderColor = '#FFF'
                let pivo = checkColor.cssRules[i].style
                pivo.setProperty("color", "#AAA") 
            } else {
                box[i].style.backgroundColor = '#555'
                box[i].style.borderColor = '#FFF'
                let pivo = checkColor.cssRules[i].style
                pivo.setProperty("color", "#AAA") 
            }
            
        }
    }
}

// Alterar dimensões de largura e altura das caixas 1, 2 e 3
let containerCheckboxBoxesSizes = document.getElementById('boxesSizes')
let boxSizes = containerCheckboxBoxesSizes.querySelectorAll('.boxesSizes')
let boxWidth = document.querySelector('#boxWidth')
let boxHeight = document.getElementById('boxHeight')
let obs = document.querySelector('div#obs')

boxSizes.forEach((checkbox) => {
    checkbox.addEventListener('click', changeBoxesSizes)
})

obs.style.display = 'none'

function changeBoxesSizes(event) {
    let option = event.target
    let clickedCheckbox = option.id
    let checkColor = document.styleSheets[1]
    let pivo = checkColor.cssRules[3].style
    let pivo2 = checkColor.cssRules[4].style            

    if(clickedCheckbox == 'boxHeight') {
        if(boxHeight.checked == false) {
            changeRectHeightProperty.removeProperty("height")
            boxHeight.name = 'custom'
        } else {
            changeRectHeightProperty.setProperty("height", "50px")            
            boxHeight.name = 'custom'
        }
    }
    else if(clickedCheckbox == 'boxWidth') {
        if (boxWidth.checked == false) {
            changeRectWidthProperty.removeProperty("width")
            boxWidth.name = 'custom'
        } else {
            changeRectWidthProperty.setProperty("width", "50px")
            boxWidth.name = 'custom'
        }
    }
    setCombination()
    boxWidth.style.borderColor = '#00FFFF'
    boxHeight.style.borderColor = '#00FFFF'
    pivo.setProperty("color", "#00FFFF") 
    pivo2.setProperty("color", "#00FFFF")
    obs.style.display = 'block'
}

function reload(){
    location.reload()
}

// Escutar clique nos botões de Flex Direction e alterar propriedades das caixas
let flexDirectionsInputs = document.querySelectorAll('.fdir')
let buttonAlignItems = 'stretch'
let changeRectWidthProperty = document.styleSheets[0].cssRules[0].style
let changeRectHeightProperty = document.styleSheets[0].cssRules[1].style

flexDirectionsInputs.forEach((input) => {
    input.addEventListener('click', changeFlexDirections)
})

function changeFlexDirections(event) {
    let containerFDir = document.getElementById('fdirection')
    let inputItems = containerFDir.getElementsByClassName('fdir')
    let option = event.target
    let button = option.id
    buttonFlexDirection = option.id    

    clearProperties(inputItems)

    if(buttonAlignItems == 'stretch') {
        if(button == 'row' || button == 'row-reverse' && combination == 3){
            setCombination()
            cont.style.flexDirection = button
            option.style.background = '#b4b43b8a'
        } else if(button == 'column' || button == 'column-reverse' && combination == 3) {
            setCombination()
            cont.style.flexDirection = button
            option.style.background = '#b4b43b8a'
        } else {
            setCombination()
            cont.style.flexDirection = button
            option.style.background = '#b4b43b8a'
        }
    } else if(buttonAlignItems != 'stretch') {
        if(button == 'row' || button == 'row-reverse' && combination == 3) {
            setCombination()
            cont.style.flexDirection = button
            option.style.background = '#b4b43b8a'
        } else if(button == 'column' || button == 'column-reverse' && combination == 3) {
            setCombination()
            cont.style.flexDirection = button
            option.style.background = '#b4b43b8a'
        } else {
            setCombination()            
            cont.style.flexDirection = button
            option.style.background = '#b4b43b8a'
        }
    }
}

let combination = 3

function setCombination() {
    if(boxWidth.name == 'auto' && boxHeight.name == 'custom') {
        combination = 0
        setBoxesSizes(combination)
    } else if(boxWidth.name == 'custom' && boxHeight.name == 'auto') {
        combination = 1
        setBoxesSizes(combination)
    } else if(boxWidth.name == 'custom' && boxHeight.name == 'custom') {
        combination = 2
        setBoxesSizes(combination)
    } else {
        combination = 3
        setBoxesSizes(combination)
    }
}

function setBoxesSizes(n) {
    switch(n) {
        case 0:
            if(boxHeight.checked == true) {
                changeRectHeightProperty.setProperty("height", "50px")
                boxHeight.setAttribute("checked", true)
            } else {
                changeRectHeightProperty.removeProperty("height")
                boxHeight.removeAttribute("checked")
            }
            break
        case 1:
            if (boxWidth.checked == true) {
                changeRectWidthProperty.setProperty("width", "50px")
                boxWidth.setAttribute("checked", true)
            } else {
                changeRectWidthProperty.removeProperty("width")
                boxWidth.removeAttribute("checked")
            }
            break
        case 2:
            if(boxHeight.checked == true) {
                changeRectHeightProperty.setProperty("height", "50px")
                boxHeight.setAttribute("checked", true)
            } else {
                changeRectHeightProperty.removeProperty("height")
                boxHeight.removeAttribute("checked")
            }
            if (boxWidth.checked == true) {
                changeRectWidthProperty.setProperty("width", "50px")
                boxWidth.setAttribute("checked", true)
            } else {
                changeRectWidthProperty.removeProperty("width")
                boxWidth.removeAttribute("checked")
            }
            break
        default:
            if(buttonAlignItems == 'stretch') {
                if(buttonFlexDirection == 'row' || buttonFlexDirection == 'row-reverse'){
                    changeRectWidthProperty.setProperty("width", "50px")
                    boxWidth.setAttribute("checked", true)
                    changeRectHeightProperty.removeProperty("height")
                    boxHeight.removeAttribute("checked")
                } else if(buttonFlexDirection == 'column' || buttonFlexDirection == 'column-reverse') {
                    changeRectHeightProperty.setProperty("height", "50px")
                    boxHeight.setAttribute("checked", true)
                    changeRectWidthProperty.removeProperty("width")
                    boxWidth.removeAttribute("checked")
                }
            } else if(buttonAlignItems != 'stretch') {
                if(buttonFlexDirection == 'row' || buttonFlexDirection == 'row-reverse') {
                    changeRectWidthProperty.setProperty("width", "50px")
                    boxWidth.setAttribute("checked", true)
                    changeRectHeightProperty.removeProperty("height")
                    boxHeight.removeAttribute("checked")
                } else if(buttonFlexDirection == 'column' || buttonFlexDirection == 'column-reverse') {
                    changeRectHeightProperty.setProperty("height", "50px")
                    boxHeight.setAttribute("checked", true)
                    changeRectWidthProperty.removeProperty("width")
                    boxWidth.removeAttribute("checked")
                }
            }
            break
    }   
}

// Escutar clique nos botões de Justify-Content e alterar propriedades das caixas
let justifyContentInputs = document.querySelectorAll('.jcontent')
let buttonJustifyContent = 'flex-start'

justifyContentInputs.forEach((input) => {
    input.addEventListener('click', changeJustifyContent)
})

function changeJustifyContent(event) {
    let jcontent = document.getElementById('jcontent')
    let inputItems = jcontent.querySelectorAll('.jcontent')
    let option = event.target
    let button = option.id
    buttonJustifyContent = option.id

    clearProperties(inputItems)

    cont.style.justifyContent = button
    option.style.background = '#b4b43b8a'

}

let buttonFlexDirection = 'row'
let alignItemsInputs = document.querySelectorAll('input.aitems')

alignItemsInputs.forEach((input) => {
    input.addEventListener('click', changeAlignItems)
})

// Escutar clique nos botões de Align-Items e alterar propriedades das caixas
function changeAlignItems(event) {
    let aitems = document.querySelector('div#aitems')
    let inputItems = aitems.getElementsByClassName('aitems')
    let option = event.target
    let button = option.id
    buttonAlignItems = option.id

    clearProperties(inputItems)

    if(button != 'stretch') {
        if(buttonFlexDirection == 'row' || buttonFlexDirection == 'row-reverse') {
            cont.style.alignItems = button
            option.style.background = '#b4b43b8a'
        } else if (buttonFlexDirection == 'column' || buttonFlexDirection == 'column-reverse') {
            cont.style.alignItems = button
            option.style.background = '#b4b43b8a'
        }
    } else {
        setCombination()
        cont.style.alignItems = button
        option.style.background = '#b4b43b8a'
    }
}
