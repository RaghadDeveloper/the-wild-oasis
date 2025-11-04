import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cviyxynthsdkfyqlwwrs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2aXl4eW50aHNka2Z5cWx3d3JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMTcwMzEsImV4cCI6MjA3Njg5MzAzMX0.ilmrGPbNPOWdxsuzsAd9onxnKQg0vwD-XpmdCf60S8s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
