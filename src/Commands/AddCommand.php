<?php


namespace StackTrace\Ui\Commands;


use Illuminate\Console\Command;
use StackTrace\Ui\Exceptions\ComponentAlreadyInstalledException;
use StackTrace\Ui\Setup\ComponentLibrary;
use Throwable;

class AddCommand extends Command
{
    protected $signature = 'ui:add {name} {--force} {--force-deps}';

    protected $description = 'Install UI component to the application';

    public function handle(): int
    {
        $library = ComponentLibrary::make();

        try {
            $result = $library->withOutput($this->output)->add(
                name: $this->argument('name'),
                force: $this->option('force'),
                forceDeps: $this->option('force-deps'),
            );

            foreach ($result->installed as $component) {
                $this->info("✔ Component [$component] has been installed");
            }

            return Command::SUCCESS;
        } catch (ComponentAlreadyInstalledException $e) {
            $this->error("The component [$e->component] is already installed. Run with --force flag to reinstall the component.");

            return Command::FAILURE;
        } catch (Throwable $e) {
            $this->error($e->getMessage());

            return Command::FAILURE;
        }
    }
}
