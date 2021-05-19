import { useDispatch, useSelector } from "react-redux"
import { selectAllProducts } from "../../store/Products/selectors"
import styled from "styled-components"
import { getChecked } from "../../store/Products/actions"
type Product = {
    id: string,
    type: string,
    name: string
    checked: boolean,
    price: number,
    tags: [
       string
    ]
}

const Container = styled.div`
    width: 13rem;
    color: #333;
    font-weight: 100;
    margin: 10px;
    height: 26rem;
    h3{
        color: #004D61
    }
`
const ProductContainer = styled.div`
    overflow-y: auto;
    height: 100%;
`
    
const ProductList = styled.div`
    margin-top: 10px;
    display: flex;
    align-itens: center;
`
const Checkbox = styled.button<{checked: boolean}>`
    transition: 0.2s;
    margin-right: 0.5rem;
    height: 1rem;
    width: 1rem;
    border: #004D61 solid 1.5px;
    border-radius: 0.5rem;
    ${props => props.checked ? 'background-color: #004D61;' : 'white'}
`

function Avaliables() {
    const products = useSelector(selectAllProducts) 
    const dispatch = useDispatch()
    return (
        <Container>
            <h3>
                Produtos Disponiveis:
            </h3>
            <ProductContainer>
                    {products.map( (product: Product) => (
                        <ProductList key={product.id}>
                            <Checkbox 
                                onClick={() => dispatch(getChecked(product.id))}
                                checked={product.checked}
                            />
                            {product.name}
                        </ProductList>
                    ))}
            </ProductContainer>
        </Container>
    )
}

export default Avaliables