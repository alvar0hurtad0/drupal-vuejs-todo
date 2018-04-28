#!/bin/bash

# Exit immediately on errors, and echo commands as they are executed.
set -ex

echo "Get composer dependencies."
composer install

echo "Reinstall project."
cp settings.local.php web/sites/default/
cd web
drush site-install minimal -y
drush cset "system.site" uuid "alvar0hurtad0/drupal-vuejs-todo" -y
drush config-import sync -y
drush user-password admin --password=admin

echo "Import default content."
drush en dvt_default_content -y
drush cim -y --partial --source=modules/custom/dvt_default_content/config/optional/
drush mim --group=default_content --update
drush pm-uninstall migrate -y

echo "Clearing cache."
drush cr
