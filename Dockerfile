# Stage 2: PHP with Laravel requirements
FROM php:latest

# Install necessary PHP extensions, composer and mbstring
RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    libzip-dev \
    libonig-dev \
    curl \
    && docker-php-ext-install zip pdo_mysql mbstring \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

ENV NODE_VERSION=16.13.0
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

RUN npm install -g @iankibetsh/gitlab-mr

# make nodejs and npm available in the PATH and also node command

# Verify installation

ENTRYPOINT ["tail", "-f", "/dev/null"]