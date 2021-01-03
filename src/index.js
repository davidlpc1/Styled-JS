function setElement(elementName,css){
    const element = document.createElement(elementName);
    const allLinesOfCss = css.split('\n')

    const withoutBlankLinesAndMarkdowns = allLinesOfCss.filter(
        line =>  !(line.trim().length === 0)
    )

    const cssCleaned = withoutBlankLinesAndMarkdowns.join(' ').trim()
    element.setAttribute("style", cssCleaned)
    return element;
}
const styled = {
    button(css){
        return setElement('button',css);
    },
    a(css){
        return setElement('a',css);
    },
    h1(css){
        return setElement('h1',css);
    },    
    p(css){
        return setElement('p',css);
    },
}

const button = styled.button(`
    padding:20px;
    background-color: red;
    outline: none;
    border:none;
    cursor: pointer;
    color: white;
`);
const p = styled.p(`
    color: white;
    text-decoration:underline;
`)

p.innerText = 'Send';
button.appendChild(p);

const body = document.querySelector('body');
body.appendChild(button);

module.exports = styled;