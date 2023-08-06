import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


const createAdminUser = async () => {
  const { data,error } = await supabase.auth.signUp(
    {
      email: process.env.REACT_APP_ADMIN_EMAIL,
      password: process.env.REACT_APP_ADMIN_PASSWORD,
      options: {
        data: {
          username: 'admin',
          gender: '女性',
          admin: true,
        }
      }
    }
  )
  if(error){
    console.error(error.message)
  }
}

await createAdminUser();

