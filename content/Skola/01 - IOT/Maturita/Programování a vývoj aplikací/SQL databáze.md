---
date: 2025-10-09T12:41
cssclasses:
---

- data jsou uložená v tabulkách
- používá relace - vyžaduje id u každého záznamu
	- 1 ku 1
		- to, co by mohlo být v jedné tabulce je ve 2 (druhá je navázána na první pomocí id v té první, každé id z první tabulky je v druhé jednou)
		- v praxi zbytečné
	- 1 ku n
		- 1 hudební žánr hraje n kapel
		- hudební žánr má id, to má u sebe každá kapela
	- n ku n
		- n kapel hraje n typů žánrů, jedna kapela hraje víc žánrů najednou
		- pomocí propojovací tabulky
			- v té jsou pouze 2 hodnoty - id žánru, id kapely

# Jazyk SQL
- zkratka Structured Query Language

- funkce - CRUD
	- Create, Read, Update, Delete
	- `INSERT, SELECT, UPDATE, DELETE`
		- vědět restrikce
			- `where`
			- spojování logických podmínek - `or`, `and`
# Databázové systémy
- Mysql
- SQlite
- PostgreSQL
- MsSQL

- vymyšlený v 70. létech
- jeho předchůdcem byli ISAM a VSAM
	- výhody nad nimi
		- dokáže jedním příkazem přistupovat k datům z několika tabulek

- deklarativní jazyk 4. generace s elementy procedurálního jazyka
	- deklarativní - řekneš, co chceš, bez definování jak to má sehnat
		- `SELECT * FROM users WHERE age > 18;` - tohle najdi, ale jak, kde, jakou metodou, to si vyřeš sám
	- procedurální - řekneš počítači přesně co má kde udělat
		- for loopy, if, case, while, proměnné
```
procedurální - 
DO $$
BEGIN
    FOR i IN 1..10 LOOP
        INSERT INTO numbers(value) VALUES (i);
    END LOOP;
END $$;
```


- je doménově specifický
	- umí jenom jednu specifickou věc pro kterou byl utvořený
- v rozsahu jazyka je 
	- získávaní data
	- manipulace dat
		- vložit
		- změnit - update
		- smazat
	- definování dat
		- vytváření schém tabulek a jejich modifikace
	- kontrola přístupu k datům
		- přihlašování do správce tabulek, každý správce má práva na jiné tabulky např.
## Otázky, co říct
- začátek z databází
	- popsat datové typy, popsat způsob ukládání dat, řádky, sloupce
- vytvořit základní tabulky na papír a popsat je