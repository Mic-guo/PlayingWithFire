// Placeholder Dashboard
// import '../styles/index.css'
import { useState, useEffect } from 'react'
// import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient'
// const supabase = createClient('https://crevzohrfpvqpihmgqip.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZXZ6b2hyZnB2cXBpaG1ncWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzOTk0MTMsImV4cCI6MjAyMTk3NTQxM30.ccJjDiz2E6PWKpA_wal7RtYS7mhvm0VtlP_zaddQG-Q')

function Login() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ 
      theme: ThemeSupa,
      style: {
        input: {background: 'white'}
      }
    }} />)
  }
  else {
    return (<Navigate to="/dashboard" />)
  }
}

export default Login;
