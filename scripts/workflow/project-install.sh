#!/bin/bash

# Exit immediately on errors, and echo commands as they are executed.
set -ex

echo "Get composer dependencies."
composer install

echo "Reinstall project."
cp settings.local.php web/sites/default/
cd web
drush site-install -y
drush cset "system.site" uuid "alvar0hurtad0/drupal-vuejs-todo"
drush config-import sync -y

echo "Clearing cache."
drush cr