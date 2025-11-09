---
date: 2024-11-03T10:07
cssclasses:
---

- 32 bitů dohromady, 4 oktety
	- x.x.x.x - velikost 32 bitů
	- x = oktet, 8 bitů
- **logická** adresa, napevno svázaná s maskou sítě


#### Speciální (vyhrazené) IP
0.0.0.0 - defaultní route, požadavek na adresu od DHCP
127.0.0.255 - loopback
169.254.0.1 - 169.254.255.254 - APIPA (Automatic Private IP Adressing)
	když je nedostupné DHCP, OS přidělí jednu IP z APIPI
### Přidělování
- ručně: přiděluje admin sítě
- dynamicky: DHCP
- OS - APIPA
## Třídy
- v rámci sítě musí být zachována třída, aby byla zachována komunikace

| Třídy | První čísla | Prefix | Host ID | Range                       |
| ----- | ----------- | ------ | ------- | --------------------------- |
| A     | 0           | /8     | 24 bit  | 0.0.0.0-127.0.0.0           |
| B     | 10          | /16    | 16 bit  | 128.0.0.0 - 191.255.255.255 |
| C     | 110         | /24    | 8 bit   | 192.0.0.0 - 255.255.255.255 |
![[maska.svg]]