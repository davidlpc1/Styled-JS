import * as tagsModule from '../node_modules/get-all-tags-html/src/index'
const tags = tagsModule.getAllTags()

const styled = {}
for(let tag of tags){
    styled[tag] = (CSS) => setElement(tag,CSS)
}

const setElement = (elementName,css) => {
    let element = document.createElement(elementName)

    const allCssDividedInNormalAndFocus = css.split('&:focus')
    const allCssDividedInNormalAndHover = css.split('&:hover');
    const cssWithoutHoverEvent = allCssDividedInNormalAndHover[0]
    const allLinesOfNormalCSS = cssWithoutHoverEvent.split('\n')

    const withoutBlankLines = allLinesOfNormalCSS.filter(
        line =>  !(line.trim().length === 0)
    )
    
    const CSSCleaned = withoutBlankLines.join(' ').trim()
    element.setAttribute("style", CSSCleaned)

    const events = [
        { eventName:'&:hover',eventOver:'mouseover',eventOut:'mouseout' },
        { eventName:'&:focus',eventOver:'focusin',eventOut:'focusout'}
    ]

    events.forEach(({
        eventName,eventOver,eventOut
    }) => {
        element = setEvent(element,css,CSSCleaned,eventName,eventOver,eventOut)
    })

    return element
}

function setEvent(element,css,CSSCleaned,eventName,eventOver,eventOut){
    const allCssDividedInNormalAndThatEvent = css.split(eventName)
    if(allCssDividedInNormalAndThatEvent.length >= 2){
        const thatEvent = allCssDividedInNormalAndThatEvent[allCssDividedInNormalAndThatEvent.length - 1]
        const thatEventWithoutBlankLines = thatEvent
            .split('\n')
            .filter( line =>  !(line.trim().length === 0))
            .join(' ')
            .replace('{','').replace('}','')
            .trim()
        element.addEventListener(eventOver,() => {
            element.setAttribute("style", CSSCleaned + thatEventWithoutBlankLines)
        })
        element.addEventListener(eventOut,() => {
            element.setAttribute("style", CSSCleaned)
        })
    }

    return element;
}

const getRandomValue = () => {
    let randomArray = new Uint32Array(20);
    window.crypto.getRandomValues(randomArray);

    const randomValue = randomArray[Math.random() * 20]
    return randomValue
}

styled.keyframes = (cssOfAnimation) => {
    const nameOfAnimation = `styledJS-${getRandomValue()}`

    const head = document.querySelector('head');
    head.innerHTML += `
        <style>
            @keyframes ${nameOfAnimation} {
                ${cssOfAnimation.raw[0]}
            }
        </style>
    `

    return nameOfAnimation
}

// ================================================  Using Module  ================================================
document.addEventListener('DOMContentLoaded',() => {
    const rotate = styled.keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `
    
    const button = styled.button(`
        padding:20px;
        background-color: red;
        outline: none;
        border:none;
        cursor: pointer;
        color: white;
        transition:300ms;
        animation: ${rotate} 1s;
        &:hover{
            background-color: blue;
        }
        &:focus{
            background-color: black;
        }
    `)

    const p = styled.p(`
        font-size:20px;
        color: white;
    `)

    p.innerText = 'Send'
    button.appendChild(p)

    const body = document.querySelector('body')
    body.appendChild(button)

}) 