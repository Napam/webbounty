import { auth } from './Firebase'
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button } from 'primereact/button'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';
import { Toolbar } from 'primereact/toolbar';
import Logo from './Logo'
import { useState } from 'react'

import styled from 'styled-components/macro'


const Container = styled.div`
  display: flex;
  min-height: 100%;
  margin: 0 auto;
  margin-top: 60px;
  max-width: 1264px;
`

const Sidebar = styled.div`
  min-width: 168px;
  height: 100%;
  position: sticky;
  top: 60px;
`

const Content = styled.div`
  padding: 24px;
  border: 1px solid lightgray;
  border-top: 0 none;
  border-bottom: 0 none;
  width: 100%;
`

const HeaderToolbar = styled(Toolbar)`
  padding: 0;
  color: gray;
  height: 100%;
  flex-wrap: false;
`

const Header = styled.header`
  border-bottom: 1px solid lightgray;
  position: fixed !important;
  top: 0 !important;
  width: 100%;
  z-index: 1000;
  header: 60px;
  background: white;
`

const HeaderContainer = styled.div`
  max-width: 1264px; 
  margin: 0 auto;
  padding: 0 8px;
`

const SpacedContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  gap: 14px;
  font-size: 0.8em;
`

const StyledListBox = styled(ListBox)`
  border: 0 none;
  border-radius: 0;
`

const LogoContainer = styled(Button)`
  color: var(--primary-color);
  background: transparent;
  &:enabled:focus {
    background: inherit;
  }

  &:enabled:hover {
    background: inherit;
    color: var(--primary-color);
  }
`


function Home() {
  const { pathname } = useLocation()
  const [user, authLoading] = useAuthState(auth)
  const navigate = useNavigate()

  const [selectedView, setSelectedView] = useState(pathname.split("/").at(-1))

  useEffect(() => {
    if (authLoading) return;
    if (!user) return navigate("/")
  }, [user])

  const options = [
    {label:"Dashboard", value: "dashboard" },
    {label:"References", value: "references" },
    {label:"Settings", value: "settings" }
  ]

  const headerStartContent = (
    <LogoContainer>
      <Logo />
    </LogoContainer>
  );

  const headerEndContent = (
    <SpacedContainer>
      <span>
        Logged in as {user?.displayName}
      </span>
      <Button icon="pi pi-sign-out" className="p-button-primary p-button-sm" label='Sign out' onClick={() => signOut(auth)} />
    </SpacedContainer>
  );
  
  function onSidebarEvent(event: ListBoxChangeEvent) {
    setSelectedView(event.value)
    navigate(event.value)
  }

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderToolbar start={headerStartContent} end={headerEndContent} />
        </HeaderContainer>
      </Header>
      <Container>
        <Sidebar>
          <StyledListBox
            onChange={onSidebarEvent}
            value={selectedView}
            options={options}
            optionLabel='label'
            optionValue='value'
          />
        </Sidebar>
        <Content>
          <Outlet/>
        </Content>
      </Container>
    </>
  )
}

export default Home

