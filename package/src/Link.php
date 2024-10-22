<?php


namespace StackTrace\Ui;


class Link
{
    public function __construct(
        public readonly string $url,
        public readonly bool $isExternal = false
    ) { }

    /**
     * Create new link to given destination.
     */
    public static function to(string $url, bool $isExternal = false): static
    {
        return new static($url, $isExternal);
    }
}
