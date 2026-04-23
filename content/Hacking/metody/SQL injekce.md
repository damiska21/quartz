---
date: 2026-03-15T18:55
cssclasses:
---
- útočník dokáže upravit sql query, získat admina, záznamy databáze apod.
## Main principy
- `'` - vyhazuje ze stringu query, za tím může být jakékoliv sqlko
- booleany jako `OR 1=1` jsou výborný na obcházení původního příkazu
- `--` je komentář v sql, když nechceme zbytek sql příkazu tak ho ukončíme hned po naší injekci

- dají se využívat payloady, které víme, že trvají dlouho na zpracování a když server dlouho neodpovídá víme, že je vulnerable

- když stránka vrací přímo odpovědi sql query tak to je peak :D
	- můžeme exfiltrovat celé databáze často
	- `UNION další select příkaz` takhle se dají vylistovat jiné tabulky než ve které orientuje původní příkaz