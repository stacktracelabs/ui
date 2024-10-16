<?php


namespace StackTrace\Ui\Commands;


use Illuminate\Console\Command;
use StackTrace\Ui\Installer;

class InstallCommand extends Command
{
    protected $signature = 'ui:install';

    protected $description = 'Install StackTrace UI';

    public function handle(): int
    {
        $installer = Installer::make();

        if ($installer->installed()) {
            $this->info("The UI is already installed.");
            return Command::SUCCESS;
        }

        $installer->withOutput($this->output)->install();

        return Command::SUCCESS;
    }
}
