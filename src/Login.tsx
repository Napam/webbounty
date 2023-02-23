import { auth } from './Firebase'
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CentralizedContainer, Title, Subtitle } from './Components';

async function signIn() {
  const provider = new GoogleAuthProvider();
  try {
    console.log("Signing in")
    await signInWithPopup(auth, provider)
    console.log("Successfully signed in")
  } catch (e) {
    console.error("Could not log in: " + e)
  }
}

function Login() {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const navigateToDashboard = () => navigate('/dashboard')

  useEffect(() => {
    console.log(user)
    if (user) (
      navigate("/dashboard")
    )
  }, [user])

  return (
   <CentralizedContainer>
      <Title>Bounty</Title>
      <Subtitle>A flextime tracker for Harvest</Subtitle>
      <Button label="Log in with Google" className="p-button-rounded" onClick={signIn} />
    </CentralizedContainer>
  )
}

export default Login

