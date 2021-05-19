import styled from 'styled-components'

import Header from './components/header'
import Statistics from './components/Products/statistics'
import List from './components/Products/list'
import Avaliables from './components/Products/avaliables'

import GlobalStyles from './globalStyles'

const Container = styled.div`
  margin-top:3rem;
  width: 45rem;
`

const Products = styled.div`
  position: relative;
  top: -10px;
  background-color: white;
  padding-left: 10px;
  height: 30rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

function App( ) {

  return (
    <Container>
      <GlobalStyles />

      <Header />

      <Products>
        <Avaliables />
        <List />
        <Statistics />
      </Products>

    </Container>
  );
}

export default App;
