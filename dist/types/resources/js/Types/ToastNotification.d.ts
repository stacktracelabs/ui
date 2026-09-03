export type ToastNotificationVariant = 'default' | 'destructive';
export type ToastNotification = {
    id: string;
    title: string;
    content: string | null;
    variant: ToastNotificationVariant;
};
