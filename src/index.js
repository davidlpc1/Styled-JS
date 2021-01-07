// Config babel with: https://imranhsayed.medium.com/install-and-set-up-babel-for-your-project-a6ce1fc37633
const tags = require('get-all-tags-html').getAllTags();

const styled = {};
for(let tag of tags){
    styled[tag] = (css) => setElement(tag,css);
}

function setElement(elementName,css){
    const element = document.createElement(elementName);
    const allCssDivided = css.split('&:hover')
    const cssWithoutEvents = allCssDivided[0];
    const allLinesOfCss = cssWithoutEvents.split('\n')

    const withoutBlankLines = allLinesOfCss.filter(
        line =>  !(line.trim().length === 0)
    )
    
    const cssCleaned = withoutBlankLines.join(' ').trim()
    element.setAttribute("style", cssCleaned)
    const hover = allCssDivided[allCssDivided.length - 1];
    const hoverWithoutBlankLines = hover.split('\n').filter(
        line =>  !(line.trim().length === 0)
    ).join(' ').replace('{','').replace('}','').trim()
    element.addEventListener('mouseover',() => {
        element.setAttribute("style", cssCleaned + hoverWithoutBlankLines)
    })
    element.addEventListener('mouseout',() => {
        element.setAttribute("style", cssCleaned)
    })
    return element;
}

// Using styleJS
const button = styled.button(`
    padding:20px;
    background-color: red;
    outline: none;
    border:none;
    cursor: pointer;
    color: white;

    &:hover{
        background-color: blue;
    }
`);
const p = styled.p(`
    font-size:20px;
    color: white;
`)

p.innerText = 'Send';
button.appendChild(p);

const body = document.querySelector('body');
body.appendChild(button);

module.exports = styled;