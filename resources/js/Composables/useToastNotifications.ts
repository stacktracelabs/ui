import type { ToastNotification } from '@/Types'
import { useFlash } from './useFlash'

const displayedToastNotificationLimit = 500
const displayedToastNotificationIds = new Set<string>()

function shouldDisplayToastNotification(id: string): boolean {
  if (displayedToastNotificationIds.has(id)) {
    return false
  }

  displayedToastNotificationIds.add(id)

  if (displayedToastNotificationIds.size > displayedToastNotificationLimit) {
    const oldestToastNotificationId = displayedToastNotificationIds.values().next().value

    if (oldestToastNotificationId !== undefined) {
      displayedToastNotificationIds.delete(oldestToastNotificationId)
    }
  }

  return true
}

export function useToastNotifications(callback: (notification: ToastNotification) => void): void {
  useFlash('toast', value => {
    const notification = value as ToastNotification

    if (!shouldDisplayToastNotification(notification.id)) {
      return
    }

    callback(notification)
  })
}
