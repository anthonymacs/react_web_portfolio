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
    && chmod -R 775 storage bootstrap/cache \
    && chown -R application:application storage bootstrap/cache \
    && chmod +x docker-entrypoint.sh

CMD ["./docker-entrypoint.sh"]