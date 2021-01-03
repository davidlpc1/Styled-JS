const styled = {
    button(css){
        const element = document.createElement('button');
        const allLinesOfCss = css.split('\n')
    
        const withoutBlankLinesAndMarkdowns = allLinesOfCss.filter(
            line =>  !(line.trim().length === 0)
        )
    
        const cssCleaned = withoutBlankLinesAndMarkdowns.join(' ').trim()
        element.setAttribute("style", cssCleaned)
        return element
    },
}

const button = styled.button(`
    color: 'grey';
    padding:20px;
    background-color: red;
    outline: none;
    border:none;
    cursor: pointer;
    color: white;
`);
button.innerText = 'Send'

const body = document.querySelector('body');

body.appendChild(button);