---
date: 2025-10-08T16:01
cssclasses:
---
- dopsat nějaký úvod, jinak mi to dalo na 10 minut
# Typy databází
## Key value
- používá klíč (například jméno uživatele) a hodnotu (například jejich bio)
- každý klíč je unikátní
- na stejném principu funguje C# dictionary
- příšerně rychlý (může být pod milisekundou na get)
- v praxi bývají používané jako cache vedle jiné databázové struktury s lepší organizací, jako SQL

- software
	- redis
	- memcached
	- etcd
#### Redis - jednoduchý příklad
- `SET uzivatel:2 "martin"` - nastaví klíč uživatel:2 na hodnotu martin
- `GET uzivatel:2` - navrátí martin

| KEY        | VALUE  |
| ---------- | ------ |
| uzivatel:1 | pepa   |
| uzivatel:2 | martin |
## NoSQL
### Wide column
- výborný na analýzu dat
- při správném navržení příšerně rychlý s velkým množství dat
- jednotlivé tabulky nemají striktní hodnoty, které musíš vyplnit jako v SQL, každý záznam může mít jiné vlastnosti a některé vlastnosti můžeš prostě vynechat a nebude tam null nebo undefined, prostě nic (jedna ze všech vět světa tpč)

- software
	- cassandra
	- apache hbase
#### Příklad - Cassandra
```
INSERT INTO posts (user_id, post_id, content, timestamp, photo_url)
VALUES (1001, p001, 'Dneska prší :(', toTimestamp(now()), 'https://pics.me/selfie.jpg');

```
##### Column family: users

| user_id | name   | email                                   | age |
| ------- | ------ | --------------------------------------- | --- |
| 1001    | Karel  |                                         | 23  |
| 1002    | Anička | [anicka@cool.cz](mailto:anicka@cool.cz) |     |
| 1003    | Boris  | [boris@swag.io](mailto:boris@swag.io)   | 31  |
##### Column family: posts

| user_id | post_id | content               | timestamp        | photo_url                  |
| ------- | ------- | --------------------- | ---------------- | -------------------------- |
| 1001    | p001    | „Dneska prší :("      | 2025-10-08T08:00 | https://pics.me/selfie.jpg |
| 1002    | p002    | „Miluju kafe ☕️“      | 2025-10-08T08:15 |                            |
| 1001    | p003    | „Nový projekt hotov!“ | 2025-10-08T10:00 |                            |

### Dokument
- každý dokument obsahuje jeden key-value pair
- nestrukturovaný
- nevyžaduje schéma
- dokumenty jsou seskupené do kolekcí
![[document-database.png]]
- trade-off - většinou je velmi rychlé sbírat data na zobrazení na frontendu, ale je mnohem pomalejší data zapisovat nebo přepisovat
- mnohem versatilnější než wide-columen nebo key-value
- špatný pro hodně provázané databáze (třeba facebook klon)
- software 
	- mongoDB
	- firestore
	- dynamoDB
	- couchDB
#### Search engine
- vyhledávací software zpravidla používá strukturu podobnou dokumentové db
- search databáze si sama udělá index vyhledávatelných hodnot (většinou slov)
- při vyhledávání  hledá db v jejím indexu a ne v user-created databázi
### Grafová
- přímo spojuje data, která k sobě patří
	- nevyžaduje extra spojovací tabulku jako relacionální tabulky
- software
	- neo4j
	- Dgraph
- 
## Relacionální
- používá SQL - Structured Query Language, pro ovládání hodnot
- vyžaduje schéma
- je ACID komplicitní
	- atomicity, consistency, isolation, durability
	- prostě ať se posere cokoliv, vrátí ti přesně to, o co si žádal
	- perfektní pro banky apod
- nejpoužívanější typ databáze všude
- software
	- MySQL
	- PostgreSQL
	- SQLite
## Multi-model
- existují databázové softwary, kterým naházíš, co chceš ukládat a jak k tomu chceš přistupovat, a on si sám vymyslí, jestli a kde použije Graph, Dokument, nebo Relacionální databázi na daný kus dat
- míchá tyhle tři mezi sebou
- perfektní na ohromný code báze se spoustou dat na porovnání
- software - FaunaDB
- o tomhle beztak Šmíd ani neslyšel xd