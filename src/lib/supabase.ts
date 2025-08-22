import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://duoxtsfqjzpljwkabphm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1b3h0c2ZxanpwbGp3a2FicGhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NTQxNDcsImV4cCI6MjA3MTQzMDE0N30.BqIQLrAkmA8wkyf9I_uytqy5OKfWjkKpH5sLs8MoOw8';

// Debug logging
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key exists:', !!supabaseKey);

// Create supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

export const isSupabaseConfigured = !!supabase;