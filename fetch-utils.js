const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnenNmc3Fhb2h0a3Z5d2x1a3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgxMzc4NzMsImV4cCI6MTk2MzcxMzg3M30.om7bZuYtorq0m3djqz_kSD3Nk_4yrHIUjDusyXl-Z9s';

const SUPABASE_URL = 'https://lgzsfsqaohtkvywluksc.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function signUp(email, password){
    const response = await client.auth.signUp({ email, password });
    return response;
}
export async function signIn(email, password){
    const response = await client.auth.signIn({ email, password });
    return response;
}

export async function getUser(){
    const user = await getUser();
    if (!user) location.replace('../');
}