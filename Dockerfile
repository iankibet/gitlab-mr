# Stage 2: PHP with Laravel requirements
FROM node:20.11-alpine3.18

RUN apk add --no-cache \
    bash \
    curl \
    freetype-dev \
    g++ \
    gcc \
    gcompat \
    git \
    icu-dev \
    icu-libs \
    libc-dev \
    libzip-dev \
    openssh-client \
    rsync \
    zlib-dev


RUN node --version
RUN npm --version

#RUN mkdir -p ~/.npm-global \
#    && npm config set prefix '~/.npm-global'

RUN npm install -g @iankibetsh/gitlab-mr

RUN echo 'export PATH="$PATH:/root/.npm-global/bin"' >> ~/.bashrc \
    && source ~/.bashrc

RUN gitlab-mr -h

WORKDIR /app

CMD ["gitlab-mr", "-h"]

# run an unending process to prevent the container from exiting
#CMD ["tail", "-f", "/dev/null"]
