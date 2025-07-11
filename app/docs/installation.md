# Installation

To add `stacktrace/ui` to your Laravel application, follow steps below. First, install a composer package.

```shell
composer require stacktrace/ui
```

After the package is installed, you can either do [Automatic Installation]() or [Manual Installation](). We recommend running automatic installation
only on new Laravel projects, or when you know what you are doing. The automatic installation works by replacing config files, and you may lose your existing configuration. 

## Automatic Installation

:::warning
Automatic installation removes or replaces some configuration files, such as `vite.config.ts`, `tsconfig.json` or `tailwind.config.js`. If you do not
want to lose changes you made in those files, continue rather with manual installation.
:::

The installation can be started with artisan command:

```shell
php artisan ui:install
```

Once finished, all necessary composer and npm packages will be installed and all configuration files will be updated. 

## Manual Installation

:::tip TODO
Add instructions for manual installation.
:::
