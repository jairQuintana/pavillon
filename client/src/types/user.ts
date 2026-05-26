export interface User {
  id: string
  email: string
  name: string
  avatar_url: string
  created_at: string
  role: 'member' | 'admin'
  stripe_customer_id: string | null
}
