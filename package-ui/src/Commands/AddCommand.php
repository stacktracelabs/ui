<?php


namespace StackTrace\Ui\Commands;


use Illuminate\Console\Command;
use StackTrace\Ui\Setup\ComponentLibrary;
use Throwable;

class AddCommand extends Command
{
    protected $signature = 'ui:add {name} {--force} {--force-deps}';

    protected $description = 'Install UI component to application';

    public function handle(): int
    {
        $library = ComponentLibrary::make();

        try {
            $library->withOutput($this->output)->add(
                name: $this->argument('name'),
                force: $this->option('force'),
                forceDeps: $this->option('force-deps'),
            );

            return Command::SUCCESS;
        } catch (Throwable $e) {
            $this->error($e->getMessage());

            return Command::FAILURE;
        }
    }
}
