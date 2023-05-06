FROM golang:1.20.3 AS builder

WORKDIR /usr/src/app
COPY go.mod go.sum ./
RUN go mod download && go mod verify

RUN apt-get update && apt-get install -y librdkafka-dev
COPY . .


RUN CGO_ENABLED=1 GOOS=linux GOARCH=amd64 go build -v -o /walletcore cmd/walletcore/main.go 

FROM golang:1.20.3

RUN apt-get update && apt-get install -y wget
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz


COPY --from=builder /walletcore /walletcore
COPY --from=builder /usr/src/app/sql/migrations/ sql/migrations/

CMD [ "/walletcore" ]


