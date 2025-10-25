---
date: 2024-09-16T20:27
tags: 
cssclasses: []
---


- 32 bitů dohromady, 4 oktety
## Protokol IP
- část rodinných protokolů TCP/IP
	- IP pracuje na L3
	- [[TCP]] na L4
- má na starost: adresaci síťových zařízení pomocí IP
## Dělení
- verze
	- [[IPv4]]
	- [[IPv6]]
- dle umístění
	- privátní
		- nevhodné k použití 
		- v lokálních sítích
		- v rámci jedné sítě jedinečná
			- můžou se opakovat v různých lokálních sítích, nikoliv v jedné
	- veřejné
		- pouze v internetu
		- v rámci internetu je každá jedinečná
		- přístupné odkudkoliv na světě
		- číslování veřejných serverů a routerů

### Vlastnosti
- jedinečnost
- v rámci sítě musí být zachována třída, aby byla zachována komunikace
- **logická** adresa, napevno svázaná s maskou sítě
- z pohledu síťového adaptéru vázána i na MAC adresu
#### Speciální (vyhrazené) IP
0.0.0.0 - defaultní route, požadavek na adresu od DHCP
127.0.0.255 - loopback
169.254.0.1 - 169.254.255.254 - APIPA (Automatic Private IP Adressing)
	když je nedostupné DHCP, OS přidělí jednu IP z APIPI
### Přidělování
- ručně: přiděluje admin sítě
- dynamicky: DHCP
- OS - APIPA



![[maska.svg]]

| Třídy | První čísla | Prefix | Host ID | Range                       |
| ----- | ----------- | ------ | ------- | --------------------------- |
| A     | 0           | /8     | 24 bit  | 0.0.0.0-127.0.0.0           |
| B     | 10          | /16    | 16 bit  | 128.0.0.0 - 191.255.255.255 |
| C     | 110         | /24    | 8 bit   | 192.0.0.0 - 255.255.255.255 |
