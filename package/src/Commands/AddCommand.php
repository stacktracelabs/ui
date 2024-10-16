<?php


namespace StackTrace\Ui\Commands;


use Illuminate\Console\Command;
use StackTrace\Ui\ComponentLibrary;
use Throwable;

class AddCommand extends Command
{
    protected $signature = 'ui:add {name} {--force} {--forceDeps}';

    protected $description = 'Install UI component to application';

    public function handle(): int
    {
        $library = ComponentLibrary::make();

        try {
            $library->withOutput($this->output)->add(
                name: $this->argument('name'),
                force: $this->option('force'),
                forceDeps: $this->option('forceDeps'),
            );

            return Command::SUCCESS;
        } catch (Throwable $e) {
            $this->error($e->getMessage());

            return Command::FAILURE;
        }
    }
}
