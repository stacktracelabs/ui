<?php


namespace StackTrace\Ui\Setup;


final class InstallationResult
{
    public function __construct(
        public readonly array $installed = []
    ) { }
}
