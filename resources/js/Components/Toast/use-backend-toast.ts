import { usePage } from '@inertiajs/vue3'
import { computed, watch } from 'vue'
import { useToast } from './use-toast'

const sent = new Map<string, boolean>()

interface BackendToast {
  id: string
  title: string
  content: string | null
  variant: 'default' | 'destructive'
}

export function useBackendToast() {
  const { toast } = useToast()

  const page = usePage<{
    toasts: Array<BackendToast>
  }>()

  const flash = (toasts: Array<BackendToast>) => {
    toasts.forEach(message => {
      if (sent.has(message.id)) {
        return
      }

      toast({
        title: message.title,
        description: message.content || undefined,
        variant: message.variant,
      })

      sent.set(message.id, true)
    })
  }

  const toasts = computed(() => page.props.toasts)
  flash(toasts.value)
  watch(toasts, toasts => flash(toasts))
}
