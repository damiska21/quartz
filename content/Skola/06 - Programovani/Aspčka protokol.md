---
date: 2025-01-30T09:19
cssclasses:
---
## Základní tvorba
- V projektech vyber Asp net core web app nebo webová aplikace asp net core
- ve visuálku - Zobrazit -> Ostatní okna -> Konzola Správce balíčků
- do tý konzole `database-update`
	- tohle vytváří databázi v mssql
	- když otevřeš `(localdb)\mssqllocaldb` tak tam bude v databases, pojmenovaná podle toho co máš napsaný v appsettings.json
	- teď už funguje registrování a přihlašování
## Přidání vlastní databáze
- Ve složkách Data -> Migrations -> 000 bla bla
	- tam je vytváření a mazání tabulek, svoje tabulky přidej do obojího
