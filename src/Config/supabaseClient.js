// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qzeahyrssfadjqaxouap.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6ZWFoeXJzc2ZhZGpxYXhvdWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM4NTE3MjIsImV4cCI6MTk4OTQyNzcyMn0.YGXXoaBNJmVx_0zmT-Ffmjm1h4DSHL9NLB2I63Hntdg";

export const supabase = createClient(supabaseUrl, supabaseKey);
// export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);
