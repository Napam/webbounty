import styled from 'styled-components/macro'

const Main = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  font-weight: 400;
`

const Sub = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 0.8em;
  font-weight: 200;
  margin-top: -4px;
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
