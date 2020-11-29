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
let containerBoxesSizes = document.getElementById('boxesSizes')
let boxProperties = containerBoxesSizes.querySelectorAll('.boxesProperties')
let boxWidth = document.querySelector('#boxWidth')
let boxHeight = document.getElementById('boxHeight')
let obs = document.querySelector('div#obs')

boxProperties.forEach((checkbox) => {
    checkbox.addEventListener('click', changeBoxesProperties)
})

obs.style.display = 'none'

function changeBoxesProperties(event) {
    let option = event.target
    let clickedCheckbox = option.id
    let checkColor = document.styleSheets[1]
    let pivo = checkColor.cssRules[3].style
    let pivo2 = checkColor.cssRules[4].style            

    if(clickedCheckbox == 'boxHeight') {
        if(boxHeight.checked == false) {
            changeRectHeightProperty.removeProperty("height")
            boxHeight.name = 'custom'
            sliderHeightRange.setAttribute("disabled", true)
            changeSlidersThumbs(sliderHeightRange)
        } else {
            changeRectHeightProperty.setProperty("height", `${sliderHeightRange.value}px`)            
            boxHeight.name = 'custom'
            sliderHeightRange.removeAttribute("disabled")
            changeSlidersThumbs(sliderHeightRange)
        }
    }
    else if(clickedCheckbox == 'boxWidth') {
        if (boxWidth.checked == false) {
            changeRectWidthProperty.removeProperty("width")
            boxWidth.name = 'custom'
            sliderWidthRange.setAttribute("disabled", true)
            changeSlidersThumbs(sliderWidthRange)
        } else {
            changeRectWidthProperty.setProperty("width", `${sliderWidthRange.value}px`)
            boxWidth.name = 'custom'
            sliderWidthRange.removeAttribute("disabled")
            changeSlidersThumbs(sliderWidthRange)
        }
    }
    setCombination()
    boxWidth.style.borderColor = '#00FFFF'
    boxHeight.style.borderColor = '#00FFFF'
    pivo.setProperty("color", "#00FFFF") 
    pivo2.setProperty("color", "#00FFFF")
    obs.style.display = 'block'
}

let customBoxesSizesContainer = document.querySelector('#customBoxesSizes')
let boxesSizes = customBoxesSizesContainer.querySelectorAll('.boxesSizes')
let sliderWidthRange = document.querySelector('#sliderWidthRange')
let sliderHeightRange = document.getElementById('sliderHeightRange')
let currentWidthValue = document.getElementById('currentWidthValue')
let currentHeightValue = document.querySelector('#currentHeightValue')

currentWidthValue.innerHTML = sliderWidthRange.value
currentHeightValue.innerHTML = sliderHeightRange.value

function changeBoxesSizes(event) {
    let option = event.target
    let clickedSlider = option.id

    if(clickedSlider == 'sliderWidthRange'){
        changeRectWidthProperty.setProperty('width', `${option.value}px`)
    } else if (clickedSlider == 'sliderHeightRange') {
            changeRectHeightProperty.setProperty('height', `${option.value}px`)
    }
    currentWidthValue.innerHTML = sliderWidthRange.value
    currentHeightValue.innerHTML = sliderHeightRange.value
}



function reload(){
    location.reload()
}

// Escutar clique nos botões de Flex Direction e alterar propriedades das caixas
let flexDirectionsInputs = document.querySelectorAll('.fdir')
let buttonAlignItems = 'stretch'
let changeRectWidthProperty = document.styleSheets[0].cssRules[0].style
let changeRectHeightProperty = document.styleSheets[0].cssRules[1].style
let changeSliderThumbWidth = document.styleSheets[2].cssRules[0].style
let changeSliderThumbHeight = document.styleSheets[2].cssRules[1].style

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
                changeRectHeightProperty.setProperty("height", `${sliderHeightRange.value}px`)
                boxHeight.setAttribute("checked", true)
            } else {
                changeRectHeightProperty.removeProperty("height")
                boxHeight.removeAttribute("checked")
            }
            break
        case 1:
            if (boxWidth.checked == true) {
                changeRectWidthProperty.setProperty("width", `${sliderWidthRange.value}px`)
                boxWidth.setAttribute("checked", true)
            } else {
                changeRectWidthProperty.removeProperty("width")
                boxWidth.removeAttribute("checked")
            }
            break
        case 2:
            if(boxHeight.checked == true) {
                changeRectHeightProperty.setProperty("height", `${sliderHeightRange.valuepx}`)                
                boxHeight.setAttribute("checked", true)
            } else {
                changeRectHeightProperty.removeProperty("height")
                boxHeight.removeAttribute("checked")
            }
            if (boxWidth.checked == true) {
                changeRectWidthProperty.setProperty("width", `${sliderWidthRange.value}px`)
                boxWidth.setAttribute("checked", true)
            } else {
                changeRectWidthProperty.removeProperty("width")
                boxWidth.removeAttribute("checked")
            }
            break
        default:
            if(buttonAlignItems == 'stretch') {
                if(buttonFlexDirection == 'row' || buttonFlexDirection == 'row-reverse'){
                    changeRectWidthProperty.setProperty("width", `${sliderWidthRange.value}px`)
                    boxWidth.setAttribute("checked", true)
                    sliderWidthRange.removeAttribute("disabled")
                    changeRectHeightProperty.removeProperty("height")
                    boxHeight.removeAttribute("checked")
                    sliderHeightRange.setAttribute("disabled", true)
                    changeSlidersThumbs(sliderWidthRange)
                    changeSlidersThumbs(sliderHeightRange)                   
                } else if(buttonFlexDirection == 'column' || buttonFlexDirection == 'column-reverse') {
                    changeRectHeightProperty.setProperty("height", `${sliderHeightRange.value}px`)
                    boxHeight.setAttribute("checked", true)
                    sliderHeightRange.removeAttribute("disabled")
                    changeRectWidthProperty.removeProperty("width")
                    boxWidth.removeAttribute("checked")
                    sliderWidthRange.setAttribute("disabled", true) 
                    changeSlidersThumbs(sliderWidthRange)
                    changeSlidersThumbs(sliderHeightRange)                   
                }
            } else if(buttonAlignItems != 'stretch') {
                if(buttonFlexDirection == 'row' || buttonFlexDirection == 'row-reverse') {
                    changeRectWidthProperty.setProperty("width", `${sliderWidthRange.value}px`)
                    boxWidth.setAttribute("checked", true)
                    sliderWidthRange.removeAttribute("disabled")
                    changeRectHeightProperty.removeProperty("height")
                    boxHeight.removeAttribute("checked")
                    sliderHeightRange.setAttribute("disabled", true)
                    changeSlidersThumbs(sliderWidthRange)
                    changeSlidersThumbs(sliderHeightRange)                   
                } else if(buttonFlexDirection == 'column' || buttonFlexDirection == 'column-reverse') {
                    changeRectHeightProperty.setProperty("height", `${sliderHeightRange.value}px`)
                    boxHeight.setAttribute("checked", true)
                    sliderHeightRange.removeAttribute("disabled")
                    changeRectWidthProperty.removeProperty("width")
                    boxWidth.removeAttribute("checked")
                    sliderWidthRange.setAttribute("disabled", true)
                    changeSlidersThumbs(sliderWidthRange)
                    changeSlidersThumbs(sliderHeightRange)
                }
            }
            break
    }   
}

// Alterar imagem dos thumbs do input Range e desabilitar alteração de tamanho, quando desabilitado
function changeSlidersThumbs(slider) {
    if(slider.disabled == true) {
        if(slider.id == 'sliderWidthRange'){
        changeSliderThumbWidth.background = 'url(../disabled_circle.png)'
        currentWidthValue.style.color = '#888'
        }
        else if(slider.id == 'sliderHeightRange') {
        changeSliderThumbHeight.background = 'url(../disabled_circle.png)'
        currentHeightValue.style.color = '#888'
        console.log('teste')
        }
    } else {
        if(slider.id == 'sliderWidthRange') {
        changeSliderThumbWidth.background = 'url(../circle.png)'
        currentWidthValue.innerHTML = sliderWidthRange.value
        currentWidthValue.style.color = '#FFF'
        }
        else if(slider.id == 'sliderHeightRange') {
        changeSliderThumbHeight.background = 'url(../circle.png)'
        currentHeightValue.innerHTML = sliderHeightRange.value
        currentHeightValue.style.color = '#FFF'
        }
    }
}

// Escutar clique nos botões de Flex Wrap e alterar propriedades das caixas
let flexWrapInputs = document.querySelectorAll('.fwrap')
let buttonFlexWrap = 'nowrap'

flexWrapInputs.forEach((input) => {
    input.addEventListener('click', changeFlexWrap)
})

function changeFlexWrap(event) {
    let fwrap = document.getElementById('fwrap')
    let inputItems = fwrap.getElementsByClassName('fwrap')
    let option = event.target
    let button = option.id
    buttonFlexWrap = option.id

    clearProperties(inputItems)

    cont.style.flexWrap = button
    option.style.background = '#b4b43b8a'

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

let buttonAlignContent = 'stretch'
let alignContentInputs = document.querySelectorAll('.acontent')

alignContentInputs.forEach((input) => {
    input.addEventListener('click', changeAlignContent)
})

function changeAlignContent(event) {
    let acontent = document.querySelector('#acontent')
    let inputItems = acontent.getElementsByClassName('acontent')
    let option = event.target
    let button = option.id
    buttonAlignContent = option.id

    clearProperties(inputItems)

    cont.style.alignContent = button
    option.style.background = '#b4b43b8a'
}