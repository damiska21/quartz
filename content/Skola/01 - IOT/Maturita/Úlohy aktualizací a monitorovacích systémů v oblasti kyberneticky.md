---
date: 2026-03-18T10:53
cssclasses:
---
# Aktualizace
- kód, který opravuje bezpečností díry v nějaké aplikaci
- rovněž může přinášet novou verzi programu, čímž se zvyšuje zabezpečení

- dělení
	- kritické
		- instalovat vždycky, opravují nejhorších bezpečnostních děr
	- důležité
		- opravují méně kritické bezpečnostní chyby
	- volitelné
		- ovladače, aplikace od stejné firmy

- co aktualizovat odzhora podle důležitosti
	- aktualizace operačního systému
	- využívaný software, softwarové aktualizace
	- antimalwarový systém, aktualizace virových databází
	- ovladače
	- firmware/bios [[Základní deska|základní desky]]

- v případě kritické infrastruktury nejdříve ozkoušet aktualizace na digitálním dvojčeti (testovací model sítě) a až poté nasadit do provozu


- do aktualizací spadají pravidelné aktualizace hesel - NIST 2026 norma
	- jak má vypadat správně heslo
		- odpadají speciální znaky, velké malé písmena
		- minimální počet znaků 12 - 16
		- odpadá častá změna hesla, nyní 3 měsíce na jedno heslo
- aktualizace směrnic a interních dokumentů
# Monitorovací systém
- zabbix
- specializované softwary na sledování a monitoring dění v počítačové síti
- historie- logy -> log managementy -> siem systémy
- obsluhuje síťový analytik, případně manažer kybernetiky
## typy
- log managementy
- SIEM systémy
## Log management
- každé síťové zařízení si ukládá tkz. log soubory (textový dokument), ve kterém jsou záznamy o přístupu, kritické stavy zařízení (nějaké chyby softwaru), chování uživatelských účtů: přihlášení, neúspěšné přihlášení, změna hesla uživatele...
	- na síťovém zařízení - různé chování síťových zařízení/toky dat
- defakto: Prohlížeč událostí na windowsu je log management

## SIEM systém
- Elisa, wazuh, zabbix
- sbírá data

# extra yap
- firemní politika
- operační systémy