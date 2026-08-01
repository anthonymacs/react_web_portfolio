# --- Stage 1: build frontend assets ---
FROM node:20-alpine AS assets

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY resources resources
COPY vite.config.js ./
RUN npm run build


# --- Stage 2: PHP application ---
FROM webdevops/php-nginx:8.3-alpine

ENV WEB_DOCUMENT_ROOT=/app/public
ENV APP_ENV=production
ENV APP_DEBUG=false

COPY . /app
WORKDIR /app

# bring in the compiled JS/CSS from the assets stage
COPY --from=assets /app/public/build /app/public/build

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