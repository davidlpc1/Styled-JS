import { getAllTags } from '../node_modules/get-all-tags-html/src/index'
const tags = getAllTags()

const styled = {}
for(let tag of tags){
    styled[tag] = (css,...values) => {
        let allCSS = ''; 
        css.forEach((rawCSS,index) => {allCSS += String(rawCSS + values[index]);})
        return setElement(tag,allCSS)
    }
}

styled.events = [
    { eventName:'&:hover',eventOver:'mouseover',eventOut:'mouseout' },
    { eventName:'&:focus',eventOver:'focusin',eventOut:'focusout'}
]

const setElement = (elementName,css,thatElementsAlreadyExists=false) => {
    let element;
    if(!thatElementsAlreadyExists) { 
        element = document.createElement(elementName)
    }
    else {
        element = document.querySelector(elementName)
    }

    const allCssDividedInNormalAndEvent = css.split('&:');
    const cssWithoutEvent = allCssDividedInNormalAndEvent[0]
    const allLinesOfNormalCSS = cssWithoutEvent.split('\n')

    const withoutBlankLines = allLinesOfNormalCSS.filter(
        line =>  !(line.trim().length === 0)
    )
    
    const CSSCleaned = withoutBlankLines.join(' ').trim()
    element.setAttribute("style", CSSCleaned)

    styled.events.forEach(({
        eventName,eventOver,eventOut
    }) => {
        element = setEvent(element,css,CSSCleaned,eventName,eventOver,eventOut)
    })

    return element
}

const setEvent = (element,css,CSSCleaned,eventName,eventOver,eventOut) => {
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

styled.addCSSInHead = (css) => {
    const head = document.querySelector('head');
    head.innerHTML += `
        <style>
            ${css}
        </style>
    `
}

styled.keyframes = (cssOfAnimation) => {
    const getRandomValue = () => parseInt(Math.random() * (Math.random() * 100000000000000))
    const nameOfAnimation = `styledJS-${getRandomValue()}`

    styled.addCSSInHead(`
        @keyframes ${nameOfAnimation} {
            ${cssOfAnimation.raw[0].trim()}
        }
    `)

    return nameOfAnimation
}

styled.addToBody = (element) => {
    const body = document.querySelector('body')
    body.appendChild(element)
}

styled.removeFromBody = (element) => {
    const body = document.querySelector('body')
    body.removeChild(element)
}

styled.body = (css) => setElement('body',css,true)
styled.html = (css) => setElement('html',css,true)

styled.resetCSS = () =>  {
    styled.body(`margin: 0; padding: 0; box-sizing: border-box;`)
    styled.html(`margin: 0; padding: 0; box-sizing: border-box;`)
}

styled.onDOMContentLoaded = (callback) => {
    document.addEventListener('DOMContentLoaded',callback)
}

styled.mediaQuery = (Event,css) => {
    styled.addCSSInHead(`
        @media ${Event} {
            ${css.trim()}
        }
    `)
}

export default styled