import {  useSelector } from "react-redux"
import styled from "styled-components"
import { shade } from 'polished'

import { selectTags } from '../../store/Products/selectors'


const Container = styled.div`
    width: 75%;
    margin: 10px;
    h3{
        color: #444;
    }

`

const Tagname = styled.div`
    margin-top: 1rem;
    color: #444;
`

const ProgressBar = styled.div<{percentage: number}>`
    margin-bottom: 10px;
    height: 1rem;
    border-radius: 3px;
    width: ${props => props.percentage ? props.percentage : 0}%;
    background-color: ${props => props.percentage ? shade((props.percentage / 150),'#00ACAE' ) : ''};
    transition: 0.2s;
`

function Statistics() {
    const products = useSelector(selectTags)

    function getPorcentagem( num: number, total: number ){
        return Math.round((num / total ) * 100 )
    }

    return (
        <Container>
            <h3>
                Statistics
            </h3>
            {products.includes('cleaning') && (
                <>
                    <Tagname>
                        Cleaning: 
                    </Tagname>
                    <ProgressBar 
                        percentage = {getPorcentagem( products
                            .filter( product => product === 'cleaning' )
                            .length, 
                            products.length)}
                    />
                </>
            )}
            {products.includes('healthy') && (
                <>
                    <Tagname>
                        Healthy:
                    </Tagname>
                    <ProgressBar 
                        percentage = {getPorcentagem( products
                            .filter( product => product ==='healthy' )
                            .length, products.length)}
                    />

                </>
            )}
            {products.includes('condiment') && (
                <>
                    <Tagname>
                    Condiment:
                    </Tagname>
                    <ProgressBar 
                        percentage = {getPorcentagem( products
                            .filter( product => product === 'condiment' )
                            .length, products.length)}
                    /> 
                </>
            )}
            
            {products.includes('food') && (
                <>
                    <Tagname>
                    Food:
                    </Tagname>
                    <ProgressBar 
                        percentage = {getPorcentagem( products
                            .filter( product => product === 'food' )
                            .length, products.length)}
                    />
                </>
            )}
            
            {products.includes('junk') && (
                <>
                <Tagname>
                    Cleaning:
                </Tagname>
                <ProgressBar 
                    percentage = {getPorcentagem( products
                        .filter( product => product === 'junk' )
                        .length, products.length)}
                        />
                </>
            )}
            
            {products.includes('others') && (
                <>
                    <Tagname>
                        Others:
                    </Tagname>
                    <ProgressBar 
                        percentage = {getPorcentagem( products
                            .filter( product => product === 'others' )
                            .length, products.length)}
                    />
                </>
            )}
        </Container>
    )
}

export default Statistics

