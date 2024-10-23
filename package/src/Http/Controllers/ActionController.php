<?php


namespace StackTrace\Ui\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Crypt;
use StackTrace\Ui\Selection;
use StackTrace\Ui\Table\Actions\Action;

class ActionController
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'selection' => ['required', 'array', 'min:1'],
            'action' => ['required', 'string'],
            'args' => ['required', 'string'],
        ]);

        $action = $request->input('action');
        $selection = new Selection($request->collect('selection'));

        if (!class_exists($action) || !in_array(Action::class, class_parents($action))) {
            abort(400, "The action is invalid.");
        }

        $args = Crypt::decrypt($request->input('args'));

        /** @var Action $action */
        $action = new $action(...$args);

        if (method_exists($action, "authorize")) {
            abort_unless($action->authorize(), 401, "You are not allowed to run this action.");
        }

        if (method_exists($action, "handle")) {
            App::call([$action, "handle"], [Selection::class => $selection]);
        }

        return back();
    }
}
