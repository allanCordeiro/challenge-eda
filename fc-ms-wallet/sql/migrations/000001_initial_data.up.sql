USE wallet;


CREATE TABLE IF NOT EXISTS clients
(id varchar(255), name varchar(255), email varchar(255), created_at timestamp);

CREATE TABLE IF NOT EXISTS accounts
(id varchar(255), client_id varchar(255), balance float, created_at timestamp);

CREATE TABLE IF NOT EXISTS transactions
(id varchar(255), account_id_from varchar(255), account_id_to varchar(255), amount float, created_at timestamp);

INSERT INTO clients (id, name, email) VALUES('e7d3ae24-560a-4a77-9660-3bb5bbf927b6', 'John Doe', 'john.doe@gmail.com');
INSERT INTO clients (id, name, email) VALUES('e2afa43c-de24-4d83-b5a5-581a1d740d4c', 'Jane Doe', 'jane.doe@gmail.com');
