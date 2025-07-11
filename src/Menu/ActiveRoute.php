<?php


namespace StackTrace\Ui\Menu;


final class ActiveRoute
{
    public function __construct(
        public readonly string $name,
        public readonly array $params = [],
    ) { }
}
