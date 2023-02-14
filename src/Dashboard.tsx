import { auth } from './Firebase'
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { ListBox } from 'primereact/listbox';
import { Toolbar } from 'primereact/toolbar';
import Logo from './Logo'
import { useState } from 'react'

import styled from 'styled-components/macro'


const Container = styled.div`
  display: flex;
  height: 100%;
  margin: 0 auto;
  margin-top: 60px;
  width: 1264px;
`

const Sidebar = styled.div`
  min-width: 168px;
  max-width: 200px;
  height: 100%;
`

const Content = styled.div`
  padding: 24px;
  max-width: 1200px;
  border: 1px solid lightgray;
  border-top: 0 none;
`

const HeaderToolbar = styled(Toolbar)`
  padding: 0 8px 0 8px;
  color: gray;
  height: 100%;
`

const Header = styled.header`
  border-bottom: 1px solid lightgray;
  position: fixed !important;
  top: 0 !important;
  width: 100%;
  z-index: 1000;
  height: 60px;
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

function getContent(view: string) {
  return {
    Dashboard: "Dashboard content ".repeat(1000),
    References: "References content",
    Settings: "Settings content",
  }[view]
}

function Dashboard() {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const [selectedView, setSelectedView] = useState('Dashboard')


  useEffect(() => {
    if (!user) {
      return navigate("/")
    }
  }, [user])

  const options = [
    { name: "Dashboard" },
    { name: "References" },
    { name: "Settings" }
  ]

  const startContent = (
    <Button className="p-button-text">
      <Logo />
    </Button>
  );

  const endContent = (
    <SpacedContainer>
      <span>
        Logged in as {user?.displayName}
      </span>
      <Button icon="pi pi-sign-out" className="p-button-primary p-button-sm" label='Sign out' onClick={() => signOut(auth)} />
    </SpacedContainer>
  );

  return (
    <div>
      <Header>
        <HeaderToolbar start={startContent} end={endContent} />
      </Header>
      <Container>
        <Sidebar>
          <StyledListBox
            onChange={e => setSelectedView(e.value)}
            value={selectedView}
            options={options}
            optionLabel='name'
            optionValue='name'
          />
        </Sidebar>
        <Content>
          {getContent(selectedView)}
        </Content>
      </Container>
    </div>
  )
}

export default Dashboard

