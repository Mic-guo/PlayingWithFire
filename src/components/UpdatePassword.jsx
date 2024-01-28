// import React from "react";
import { useEffect } from 'react'
import { createClient } from '@supabase/supabase-js';
import "../styles/index.css";

const supabase = createClient('https://crevzohrfpvqpihmgqip.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZXZ6b2hyZnB2cXBpaG1ncWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzOTk0MTMsImV4cCI6MjAyMTk3NTQxM30.ccJjDiz2E6PWKpA_wal7RtYS7mhvm0VtlP_zaddQG-Q')

function UpdatePassword() {
    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
          if (event == "PASSWORD_RECOVERY") {
            const newPassword = prompt("What would you like your new password to be?");
            const { data, error } = await supabase.auth
              .updateUser({ password: newPassword })
     
            if (data) alert("Password updated successfully!")
            if (error) alert("There was an error updating your password.")
          }
        })
      }, [])
    return(
        <></>
    )
}

export default UpdatePassword;