import styled from 'styled-components/macro'

const Main = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 700;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: Comfortaa;
`

function Logo() {
  return (
    <LogoContainer>
      <Main>bounty</Main>
    </LogoContainer>
  )
}

export default Logo
