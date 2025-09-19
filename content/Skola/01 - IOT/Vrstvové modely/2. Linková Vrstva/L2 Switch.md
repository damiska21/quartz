---
date: 2024-09-16T20:05
tags:
  - 
---
- má tabulku MAC adres, na základě tabulky propojuje porty
- pracuje s rámci, pro jejich analýzu používá metody:
	- cut and through
		- packet je poslán svým směrem okamžitě jakmile je zpracována destinace
	- store and forward
		- přečte a zkontroluje rámec před posláním dál
		- dá rámec do cacheky, přečte si hlavičku a podle MAC to pošle dál
		- dobré u vysoké chybovosti nebo proměnnosti rámců (hihi haha věta)
	- adaptive switching
		- vybírá mezi c&t a s&f podle výhodnosti
		- c&t je rychlejší, když je moc rámců používá ten, s&f je pomalejší a víc consistent
	- fragment free
- max 52 portů
- spojuje zařízení v síti do síťové topologie star


- switch posílá "hello packet": žádá nově připojené zařízení o MAC adresu, ty si ukládá do MAC tablu (tabulky MAC adres připojených zařízení)
	- broadcast

- port mirroring: virtuální překopírování MAC adres z PC na daný port switche 
	- to se děje na základě MAC tabulky
## Dělení
- 1)
	- SOHO - small office, home office
	- PRO
 - 2)
	 - s OS
	 - bez OS