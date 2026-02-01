---
date: 2025-10-09T12:41
cssclasses:
---

# Jazyk SQL
- zkratka Structured Query Language
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