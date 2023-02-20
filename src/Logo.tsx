import styled from 'styled-components/macro'

const Main = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.4em;
  font-weight: 400;
`

const Sub = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 0.7em;
  font-weight: 200;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function Logo() {
  return (
    <LogoContainer>
      <Main>BOUNTY</Main>
      <Sub>TRÉSOR</Sub>
    </LogoContainer>
  )
}

export default Logo
