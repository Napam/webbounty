import { auth } from './Firebase'
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function Dashboard() {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      return navigate("/")
    }
  })

  return (
    <div>
      <div>Hello {user?.displayName}</div>
      <Button label="Log out" onClick={() => signOut(auth)} />
    </div>
  )
}

export default Dashboard
