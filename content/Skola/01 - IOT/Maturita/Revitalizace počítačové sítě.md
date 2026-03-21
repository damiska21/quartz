---
date: 2026-03-13T08:57
cssclasses:
---

- obnovení stavu sítě do původní podoby po kybernetickém incidentu

#todo doplnit odkazy tady
- vložit počítačová síť definice
	- propojení dvou a více zařízení za účelem komunikace, sdílení dat a hardwaru
- druhy pc sítí
	- P2P x C-S
- kybernetický útok a incident, hrozba - někde v úvodu

## Ransomwarový útok
1. zjistit z neinfikovaného zařízení stav záloh, izolovat zálohy od infikované sítě
2. diagnostika a zjišťování poškození sítě
	- zjištění typu ransomwaru
	- zvolení správného procesu pro obnovu
3. izolace nakažených počítačů od zdravých
4. nahlásit NÚKIBu (měl by navrhnout řešení)
5. odpojení nakaženého počítače od sítě a kompletní reinstalace (pak-li jsou dostupné zálohy, obnovovat ze záloh)
6. po kompletní obnově zařízení lze počítač připojit do zdravého segmentu
	- u kritické infrastruktury - prioritní jsou důležité počítače/servery, ty se obnovují a do zdravé sítě se připojují první
7. obnova méně důležitých zařízení a přenesení do zdravého segmentu taky
8. analyzovat data
	- odkud útok přišel
	- kdo útok spustil
	- procházení SIEM systémů
9. návrh řešení zabezpečení
	- nutné odsouhlasení manažerem kybernetické bezpečnosti
		- manažer kyb. bezpečnosti je většinou nějakej higher up rando který dělá jenom birokracii
10. aplikace bezpečnostního návrhu
11. pokud jedeme podle checklistu/procesu, aktualizace checklistu/procesu na aktuálnější info
12. nahlášení núkibu, že problém je vyřešen
13. proškolení zaměstnanců (většinou je chyba v nějakém zaměstnanci)
14. penetrační test
	- na zaměstnance/na firmu, závisí kde byl probém
	- microsoft A5 má scénáře na penetrační testy, třeba fishing nebo tak

