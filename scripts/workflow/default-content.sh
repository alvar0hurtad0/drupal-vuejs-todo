#!/bin/bash

# Exit immediately on errors, and echo commands as they are executed.
set -ex

echo "Get composer dependencies."
composer install

echo "Import default content."
cd web
drush en dvt_default_content -y
drush cim -y --partial --source=modules/custom/dvt_default_content/config/optional/
drush mim --group=default_content --update
drush pm-uninstall migrate -y

echo "Clearing cache."
drush cr
