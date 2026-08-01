FROM webdevops/php-nginx:8.3-alpine

ENV WEB_DOCUMENT_ROOT=/app/public
ENV APP_ENV=production
ENV APP_DEBUG=false

COPY . /app
WORKDIR /app

RUN composer install --no-dev --optimize-autoloader --no-interaction \
    && mkdir -p storage/framework/cache \
               storage/framework/sessions \
               storage/framework/testing \
               storage/framework/views \
               storage/logs \
               bootstrap/cache \
               database \
    && touch database/database.sqlite \
    && chmod -R 775 storage bootstrap/cache database \
    && chmod 664 database/database.sqlite \
    && chown -R application:application storage bootstrap/cache database \
    && chmod +x docker-entrypoint.sh

CMD ["./docker-entrypoint.sh"]