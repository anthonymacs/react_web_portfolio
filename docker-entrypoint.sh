#!/bin/sh
php artisan migrate --force
php artisan config:cache
supervisord