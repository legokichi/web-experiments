FROM node:carbon as base

RUN apt-get update\
 && apt-get install -y curl\
 && apt-get clean -y\
 && apt-get autoremove -y\
 && rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*

ENV DOCKERIZE_VERSION v0.6.1
RUN curl -qLO https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz && \
    tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz && \
    rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz


FROM node:carbon

COPY --from=base /usr/local/bin/dockerize /usr/local/bin/dockerize

RUN mkdir -p /opt/app/bin/ &&\
    echo "#!/bin/bash" >> /opt/app/bin/server &&\
    echo "set -euvx" >> /opt/app/bin/server &&\
    echo "node /opt/node/index.js" >> /opt/app/bin/server &&\
    chmod +x /opt/app/bin/server

WORKDIR /opt/node
ADD ./package.json /opt/node/package.json
ADD ./package-lock.json /opt/node/package-lock.json
ADD ./index.js /opt/node
ADD ./node_modules /opt/node/node_modules

ENTRYPOINT ["dockerize", "-timeout", "15s", "-wait", "tcp://${rabbitmq_address}", "-wait", "tcp://${database_address}", "-wait", "tcp://${redis_url}"],
CMD ["/opt/app/bin/server"]

