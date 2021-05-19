import styled from "styled-components"

const Container = styled.div`
    height: 4rem;

    display: flex;
    align-items: center;
    padding: 0 30px;
    gap: 1rem;

    border-radius: 1rem;

    background-color: #00ACAE;
    text-align: center;
`

const Shopping = styled.span`
    color: white;
    font-weight: 600;
    font-size: 20px;
`

function Header() {
    
    return (
        <Container>
            <Shopping>
                Shopping
            </Shopping>
        </Container>
    )

}

export default Header