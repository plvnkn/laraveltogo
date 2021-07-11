FROM php:8.0-fpm

RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

ENV DEBIAN_FRONTEND noninteractive

RUN apt update \
        && apt install -y \
            build-essential \
            default-mysql-client \
            libpng-dev \
            libjpeg62-turbo-dev \
            libfreetype6-dev \
            libzip-dev \
            libpq-dev \
            libbz2-dev \
            libicu-dev \
            libonig-dev \
            locales \
            zip \
            vim \
            unzip \
            git \
            curl \
            wget \
        && apt-get clean && rm -rf /var/lib/apt/lists/* \
        && docker-php-ext-install \
            intl \
            opcache \
            pdo \
            pdo_mysql \
            mbstring \
            exif \
            pcntl \ 
            bz2 \
            pgsql \
        && pecl install xdebug \
        && docker-php-ext-enable xdebug

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN wget https://raw.githubusercontent.com/eficode/wait-for/master/wait-for && mv ./wait-for /usr/bin/wait-for && chmod +x /usr/bin/wait-for

WORKDIR /var/www

USER www

EXPOSE 9000

CMD ["php-fpm"]
