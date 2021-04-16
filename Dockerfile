FROM telkomindonesia/alpine:nodejs-14

# Set Arguments On Build
ARG ARGS_NODE_BUILD=development

# Set Environment Variable
ENV ARGS_NODE_START=${ARGS_NODE_BUILD}
ENV BABEL_DISABLE_CACHE=1

# Set Working Directory
WORKDIR /usr/src/app

# Copy Node Packages Requirement
COPY package*.json ./

# Install Node Modules Based On Node Packages Requirement
RUN apk add --update --no-cache --virtual .build-dev \
      build-base \
      python \
      python-dev \
    && npm i -g npm \
    && npm i -g node-gyp \
    && npm i \
    && apk del .build-dev

# Copy Node Source Code File
COPY . .

# Build Node Source Code File
RUN npm run build \
    && chown -R user:root . \
    && chmod 775 \
        src \
        src/.next \
    && find src/.next -type d -exec chmod 775 {} \; \
    && find src/.next -type f -exec chmod 664 {} \;

# Change Working User to "User"
USER user

# Expose Application Port
EXPOSE 3000

# Run The Application
CMD ["npm", "start"]