<?php


namespace StackTrace\Ui\Menu;


final readonly class ActiveRoute
{
    public function __construct(
        public string $name,
        public array $params = [],
    ) { }
}
