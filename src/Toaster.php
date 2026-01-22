<?php


namespace StackTrace\Ui;


use Illuminate\Session\SessionManager;
use Illuminate\Support\Str;

class Toaster
{
    public function __construct(
        protected SessionManager $session
    ) { }

    /**
     * Get list of sent messages.
     */
    public function getMessages(): array
    {
        return $this->session->get('toasts', []);
    }

    /**
     * Send a new Toast message.
     */
    public function make(string $title, ?string $content = null, string $variant = 'default'): static
    {
        $messages = $this->session->get('toasts', []);

        $messages[] = [
            'id' => Str::uuid()->toString(),
            'title' => $title,
            'content' => $content,
            'variant' => $variant,
        ];

        $this->session->flash('toasts', $messages);

        return $this;
    }

    /**
     * Send a new default toast message.
     */
    public function default(string $title, ?string $content = null): static
    {
        return $this->make($title, $content);
    }

    /**
     * Send a new destructive toast message.
     */
    public function destructive(string $title, ?string $content = null): static
    {
        return $this->make($title, $content, variant: 'destructive');
    }
}
