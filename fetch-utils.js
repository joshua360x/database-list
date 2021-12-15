




const supabaseUrl = 'https://nhbazqqortcneqwecrjp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNzU3MywiZXhwIjoxOTU1MDgzNTczfQ.ItAD5AYhCLq3yVOxHVfShkrOdhiFsmpg3uT9tBIISV0';
const client = supabase.createClient(supabaseUrl, SUPABASE_KEY);


export async function getRideshares() {
    const response = await client.from('rideshare').select();

  
    return response.data;
}

export async function getRideshare(id) {
    const response = await client.from('rideshare').select().match({ id }).single();

  
    return response.data;
}



