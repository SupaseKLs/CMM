// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://eldxcanxwvrnsvxkoaiv.supabase.co', // <<< เปลี่ยน
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZHhjYW54d3ZybnN2eGtvYWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MTU3MTgsImV4cCI6MjA2MTM5MTcxOH0.kieZ_9HbEFgZUqzIfoK9ae09BopPbcSXzjEFavk7GGI'                    // <<< เปลี่ยน
)
