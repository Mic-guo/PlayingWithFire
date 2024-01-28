// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://crevzohrfpvqpihmgqip.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZXZ6b2hyZnB2cXBpaG1ncWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzOTk0MTMsImV4cCI6MjAyMTk3NTQxM30.ccJjDiz2E6PWKpA_wal7RtYS7mhvm0VtlP_zaddQG-Q';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

