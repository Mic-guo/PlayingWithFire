// Placeholder Dashboard
// import '../styles/index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Navigate } from 'react-router-dom';

const supabase = createClient('https://juvxmiodpjkrzownlfow.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dnhtaW9kcGprcnpvd25sZm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzNzg4MDUsImV4cCI6MjAyMTk1NDgwNX0.5W4aSbiCnzOhHcgDcJwMR6RI6omewuWJYB4ptXYZvtQ')

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
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (<Navigate to="/dashboard" />)
  }
}

export default Login;