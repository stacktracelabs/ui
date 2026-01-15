<?php


namespace StackTrace\Ui;


use Inertia\Inertia;

class Toaster
{
    /**
     * The flash notification key.
     */
    protected ?string $flashKey = null;

    /**
     * Get notification flash key.
     */
    public function flashKey(): string
    {
        return $this->flashKey ?: 'toast';
    }

    /**
     * Set a custom flash key.
     */
    public function useFlashKey(string $key): static
    {
        $this->flashKey = $key;

        return $this;
    }

    /**
     * Send a new Toast message.
     */
    public function make(string $title, ?string $content = null, string $variant = 'default'): static
    {
        Inertia::flash($this->flashKey(), [
            'title' => $title,
            'content' => $content,
            'variant' => $variant,
        ]);

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
