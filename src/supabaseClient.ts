import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mqqywaurxxwhtisckdmm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xcXl3YXVyeHh3aHRpc2NrZG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwNTI4MjQsImV4cCI6MjAzMzYyODgyNH0.koT3sOgKVcWwKYzRh4qtgXumrcxyNZUtcb8LFoKJSRI"

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
