import { auth } from './Firebase'
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { CentralizedContainer } from './Components';
import styled from 'styled-components/macro'


const LayoutWrapper = styled.div`
`

const LayoutSidebarWrapper = styled.div`
  z-index: 1000;
  position: fixed;
  width: 6em;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LayoutSidebarHeader = styled.div`

`

const LayoutSidebarContainer = styled.ul`
  height: 100%;
  list-style: none;
`

const LayoutSidebarFooter = styled.div`

`

const LayoutMainContainer = styled.div`
  margin-left: 7em;
`

const SidebarItem = styled.li`
  padding: 4px;
  list-style: none;
  margin-left: 0;
`

function Dashboard() {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      return navigate("/")
    }
  }, [user])

  return (
    <LayoutWrapper>
      <LayoutSidebarWrapper>
        <LayoutSidebarHeader>
          B
        </LayoutSidebarHeader>
        <LayoutSidebarContainer>
          <SidebarItem>
            <Button label='References' />
          </SidebarItem>
          <SidebarItem>
            <Button label='Settings' />
          </SidebarItem>
          <SidebarItem>
            <Button label='Ignore' />
          </SidebarItem>
        </LayoutSidebarContainer>
        <LayoutSidebarFooter>
          Test
        </LayoutSidebarFooter>
      </LayoutSidebarWrapper>
      <LayoutMainContainer>
        Test alsdjfalsj fasdfj aklsdfj kasldjf kløasdfjkalsd fjdasklfj akfjdksalfjas kd
        jfklasdjf klasdjf alksdjfawoiem ioamdio amdfmawdc aklwdm
      </LayoutMainContainer>
    </LayoutWrapper>
  )
}

export default Dashboard

