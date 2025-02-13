---
date: 2025-01-08T23:08
cssclasses:
---
# 1
- věci co měníš se ukládají jenom do running configu
- Ukládání do startup configu: ```copy running-config startup-config``` pak enter
- ? je jako help
	- příkaz ? je help commandu
- pomocí | můžeš filtrovat výsledek výpisu
- když si ve switchy tak se můžeš připojit k jinýmu switchi ssh, tellnetem apod
	- ```ssh adresa```
- ```no``` před příkazem příkaz zruší/vynuluje
### Uživatelské režimy
- uživatelský mód - EXEC - SWITCH>
	- default, omezené příkazy
- privilegovaný mód - EXEC - SWITCH#
	- privilegiovaný EXEC
	- umožňuje zobrazení různých údajů
- globální konfigurační mód - global configuration - SWITCH(config)#
	- na konfiguraci celého systému
- komfigurace interfacu - interface configuration - SWITCH(config-if)
	- vlastnosti specifického interfacu
```
SWITCH> 				// uživatelský mód
SWITCH>**enable** 				// přepnutí  do privilegovaného modu
SWITCH#**configure  terminal** 		// přepnutí do globální konfigurace
SWITCH(config)#**interface {jméno}**	// přepnutí do  konfigurace interfacu 
SWITCH(config-if)# 			// konfigurace interfacu
```
 - exit do nižší úrovně je command exit


```
//výpis flash paměti
show flash:
dir
```

- show soubor
	- version
	- running-config
	- history //poslední commandy
	- cdp neighbor //okolní cisco switche
	- cdp neighbors detail
	- processes //běžící procesy
	- sessions //aktuální telnetová spojení
	- ssh //-//- ssh
	- users - logged in users
	- line - idk
	- interface
	- interfaces
		- {jmeno_interfacu}
		- {jméno_interfacu} switchport - podpobnosti o vlan
		- status - popis a stav
		- summary - seznam + statistika přenosu
		- stats - stats pro interfaces
		- trunk - info o existujících truncích
	- vlan - info o vlanech a přiřazení portů
	- mac-address-table - MAC tabulka
	- arp - apr tabulka
	- ip interface - acl a routování na interface
	- ip route - směrovací tabulky

8:
[[Access Control List]]
