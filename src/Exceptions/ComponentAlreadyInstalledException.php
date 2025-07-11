<?php


namespace StackTrace\Ui\Exceptions;


use RuntimeException;

class ComponentAlreadyInstalledException extends RuntimeException
{
    public function __construct(public readonly string $component)
    {
        parent::__construct("The {$this->component} component is already installed");
    }
}
