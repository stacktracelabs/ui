<?php


namespace StackTrace\Ui\Menu;


final class ActivePath
{
    public function __construct(
        public readonly string $path
    ) { }
}
