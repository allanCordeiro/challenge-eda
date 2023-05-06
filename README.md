# challenge-eda

Para praticar mais, neste challenge criei um evento que envia mensagem a um tópico no Kafka sempre que um account for criado. Desta forma, o único dado gerado do lado do Wallet core são os usuários. O restante é gerado à partir de um worker que observa o tópico e vai criando/atualizando os dados.

Para subir o ambiente e os serviços, executar o docker compose como o exemplo a seguir:

```
docker compose up -d --build
```

Na raiz do projeto existe o arquivo `challenge.http`, utilizado para a extensão do API Rest do VSCode. Nele já está pré-configurado as requisições. A única observação

```
POST http://localhost:8080/accounts HTTP/1.1
Content-Type: application/json

{
    "client_id": "e7d3ae24-560a-4a77-9660-3bb5bbf927b6"    
}

@account_id_1 = ##### coloque o id account que retorna do response (sem "")

###
```
é necessário popular os `@account_id_x` com account id retornado nas requisições de criação de accounts. São 2 no total. Depois disso é executar as requisições de transação (wallet core, feito em Go acompanhando o curso) e balance, que é um serviço à parte, desenvolvido em NestJS.