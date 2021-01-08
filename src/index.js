import * as tagsModule from '../node_modules/get-all-tags-html/src/index'
const tags = tagsModule.getAllTags()

const styled = {}
for(let tag of tags){
    styled[tag] = (CSS) => setElement(tag,CSS)
}

function setElement(elementName,css){
    const element = document.createElement(elementName)
    const allCssDividedInNormalAndHover = css.split('&:hover')
    const allCssDividedInNormalAndFocus = css.split('&:focus')
    const cssWithoutHoverEvent = allCssDividedInNormalAndHover[0]
    const allLinesOfNormalCSS = cssWithoutHoverEvent.split('\n')

    const withoutBlankLines = allLinesOfNormalCSS.filter(
        line =>  !(line.trim().length === 0)
    )
    
    const CSSCleaned = withoutBlankLines.join(' ').trim()
    element.setAttribute("style", CSSCleaned)

    if(allCssDividedInNormalAndHover.length >= 2){
        const hover = allCssDividedInNormalAndHover[allCssDividedInNormalAndHover.length - 1]
        const hoverWithoutBlankLines = hover.split('\n').filter(
            line =>  !(line.trim().length === 0)
        ).join(' ').replace('{','').replace('}','').trim()
        element.addEventListener('mouseover',() => {
            element.setAttribute("style", CSSCleaned + hoverWithoutBlankLines)
        })
        element.addEventListener('mouseout',() => {
            element.setAttribute("style", CSSCleaned)
        })
    }

    if(allCssDividedInNormalAndFocus.length >= 2){
        const focus = allCssDividedInNormalAndFocus[allCssDividedInNormalAndFocus.length - 1]
        const focusWithoutBlankLines = focus.split('\n').filter(line =>  
            !(line.trim().length === 0)
        ).join(' ').replace('{','').replace('}','').trim()
        element.addEventListener('focusin',() => {
            element.setAttribute("style", CSSCleaned + focusWithoutBlankLines)
        })
        element.addEventListener('focusout',() => {
            element.setAttribute("style", CSSCleaned)
        })
    }

    return element
}

// Using Module
const button = styled.button(`
    padding:20px;
    background-color: red;
    outline: none;
    border:none;
    cursor: pointer;
    color: white;
    transition:300ms;

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

export default styled