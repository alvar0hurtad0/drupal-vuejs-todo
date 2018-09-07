# Drupal + vuejs todo
[![Build Status](https://travis-ci.org/alvar0hurtad0/drupal-vuejs-todo.svg?branch=master)](https://travis-ci.org/alvar0hurtad0/drupal-vuejs-todo)

This project is based on [drupal-composer/drupal-project](https://github.com/drupal-composer/drupal-project)
## Short overview
This is an example about how to build a decoupled drupal + vuejs application. Even it's not ready for production is a
good starting point if you just need to understand how this kind of application can work together.

Most of the backend lives on the `web` folder and the fronted lives on the `frontend` folder.

After the installation you can expect a drupal website just needed to store the data and manage user permissions, and a
javascript application that is the real interface for the users.

## Install backend

 * Make sure you have composer and all the stuff to run a drupal on you host. PHP 7.1 or higher is required
  (https://www.drupal.org/docs/8/system-requirements)
 * Copy `web/sites/default/example.settings.local.php` into `web/sites/default/settings.local.php` and customize the
 values (at least related with database)
   ```
   cp web/sites/default/example.settings.local.php web/sites/default/settings.local.php
   vim web/sites/default/settings.local.php
   ```
 * Run `composer project-install`
 * Make all the changes required for your webserver to make `http://drupal-vuejs-todo.localhost` serve the `web` folder
 of this repo.

## Install frontend
 ###Requirements:
 * Node js v9.8.0: Follow this steps to install:
 https://nodejs.org/en/download/package-manager/
 
 You can upgrade your version of nodejs with those commands
 ```
 sudo npm cache clean -f
 sudo npm install -g n
 sudo n stable
 ```
 
 * Yarn 1.6.0 (optional):
 https://yarnpkg.com/en/docs/install/
 
 ###Run the dev environment:
 * Go to `frontend` folder
 * run `npm install` or `yarn install`
 * run `npm run dev` or `yarn dev`

## Expected result after install the project
 * 4 users are created (user/password):
   * user1/user1 (with 3 todos)
   * user2/user2 (with 1 todo)
   * user3/user3
   * user4/user4
   
   For more info about the created default content, please check this link
   https://github.com/alvar0hurtad0/drupal-vuejs-todo/tree/master/web/modules/custom/dvt_default_content/default_content
   
 * Admin user for backed is admin/admin
 
## Troubleshooting
### I can't serve the drupal in http://drupal-vuejs-todo.localhost
Just change the {BASE_API_URL} here:
https://github.com/alvar0hurtad0/drupal-vuejs-todo/blob/master/frontend/webpack.config.js#L91

### Yarn can not find install on Ubuntu
There's a problem with package cmdtest on `ubuntu` that throws this error:
```
00h00m00s 0/0: : ERROR: [Errno 2] No such file or directory: 'install'
```

you can just try npm or remove old package and isntall the good one:
```
sudo apt remove cmdtest
sudo apt remove yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```
### I'm very interested but I can't do it run
I can provide some basic suppor on twitter: https://twitter.com/alvar0hurtad0
