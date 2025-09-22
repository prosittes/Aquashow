import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

export const supabase = createClient(
  'https://gyommnaimmbabbnfxwp.supabase.co', // Project URL do seu Supabase
  'SUA-ANON-KEY' // cole aqui a anon key (Settings > API > anon public key)
)
