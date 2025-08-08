import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getCaseList() {
  try {
    const { data, error } = await supabase
      .from('cases')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  } catch (err) {
    console.warn('Falling back to local cases', err);
    const res = await fetch('/data/cases.json');
    return res.json();
  }
}

export async function getCaseBySlug(slug) {
  try {
    const { data, error } = await supabase
      .from('cases')
      .select('*')
      .eq('slug', slug)
      .single();
    if (error) throw error;
    return data;
  } catch (err) {
    console.warn('Falling back to local case', err);
    const res = await fetch('/data/cases.json');
    const list = await res.json();
    return list.find((c) => c.slug === slug);
  }
}

export async function syncCases() {
  try {
    const res = await fetch('/data/cases.json');
    const cases = await res.json();
    await supabase.from('cases').upsert(cases);
  } catch (err) {
    console.warn('Supabase unavailable, using local data', err);
  }
}
