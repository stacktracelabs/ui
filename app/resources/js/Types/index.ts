import { type BackendToast } from '@/components/ui/sonner'

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
  auth: {
    user: User
  }
  toasts: Array<BackendToast>
}
