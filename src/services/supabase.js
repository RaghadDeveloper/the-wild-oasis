import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://flomirszvlegjshytcex.supabase.co";
const supabaseKey = "sb_publishable_5ule_AAJc1o-y8UFMNGNzQ_-MwC6_99";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
