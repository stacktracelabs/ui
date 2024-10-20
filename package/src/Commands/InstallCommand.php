<?php


namespace StackTrace\Ui\Commands;


use Illuminate\Console\Command;
use StackTrace\Ui\Setup\Installer;

class InstallCommand extends Command
{
    protected $signature = 'ui:install {feature?} {--auth}';

    protected $description = 'Install StackTrace UI';

    public function handle(): int
    {
        $installer = Installer::make()->withOutput($this->output);

        if ($feature = $this->argument('feature')) {
            if (! $installer->installed()) {
                $this->info("The UI is not installed. Before adding feature, run installer first with php artisan ui:install");

                return Command::SUCCESS;
            }

            $installer->installFeature($feature);

            $this->info("✔ {$feature} feature has been installed");
        } else {
            if ($installer->installed()) {
                $this->info("The UI is already installed. To install feature, run php artisan ui:install <feature>");

                return Command::SUCCESS;
            }

            $features = collect([
                'auth' => $this->option('auth'),
            ])->filter()->keys()->all();

            $installer->install($features);

            $this->info("✔ stacktrace/ui has been installed");
        }

        return Command::SUCCESS;
    }
}
