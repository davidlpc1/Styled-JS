import styled from './styled'

styled.onDOMContentLoaded(() => {
    styled.resetCSS()
    const rotate = styled.keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `

    const button = styled.button`
        padding:20px;
        background-color: red;
        outline: none;
        border:none;
        cursor: pointer;
        color: white;
        transition:800ms;
        animation: ${rotate} 1s;
        &:hover{
            background-color: blue;
        }
        &:focus{
            background-color: black;
        }
    `

    const p = styled.p`
        font-size:20px;
        color: white;
    `

    const div = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        background-color:lightblue;
        height:100vh;
    `

    p.innerText = 'Send'
    button.appendChild(p)
    div.appendChild(button)

    styled.addToBody(div)
}) 