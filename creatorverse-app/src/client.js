import { createClient } from '@supabase/supabase-js';

const URL = 'https://zgnkiayrbioyabamrist.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnbmtpYXlyYmlveWFiYW1yaXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDMyMDEsImV4cCI6MjA3MTU3OTIwMX0.QlU2LZGRKMPkum7-snyAnBhYZUhsoCvoWogqQfoOaj0';

 const supabase = createClient(URL, API_KEY);
 export default supabase;
