# Drupal + vuejs todo

This project is based on [drupal-composer/drupal-project](https://github.com/drupal-composer/drupal-project)

## Install backed

 * Make sure you have composer and all the stuff to run a drupal on you host.
 * Copy `\example.settings.local.php` into `settings.local.php` and customize the values (at least related with database) 
 * Run `composer project-install`
 * Make all the changes required for your webserver to make `http://drupal-vue-todo.localhost` serve the `web` folder of this repo.

## Install frontend
 * Make sure you have node and yarn installed on your host
 * Go to `frontend` folder
 * run `yarn install`
 * run `yarn dev`
