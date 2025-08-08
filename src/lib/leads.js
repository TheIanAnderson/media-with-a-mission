import { supabase } from './supabase';

export async function createLead(payload) {
  const { error } = await supabase.from('leads').insert(payload);
  if (error) throw error;
}
