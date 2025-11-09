---
date: 2025-02-12T12:54
cssclasses:
---
- 8 skupin 4 hexadecimálních číslic
- každá část má 16 bitů
- celý 128 bitů
- příklad: fe80:400:0:0:0:0:0:1

druhy
- unicast
	- identifikuje vždy jedno síťové rozhraní s kterým komunikuje
- multicast
	- identifikují skupinu uzlů, komunikace probíhá se všemi uzly
- anycast
	- identifikuje skupinu uzlů, komunikuje s jedním uzlem ve skupině

- výhody nad [[IPv4]]
	- vyšší rychlost
	- automatické nastavení, SLAAC (níže)
	- lepší připojení v P2P
	- silné zabezpečení
	- mnohem více adres
### Přidělování
- ručně: přiděluje admin sítě
- dynamicky: DHCPv6
- SLAAC
#### SLAAC
- Stateless Adress Auto-configuration
	- Stateless - žádný server nehlídá, které adresy jsou použité, které jsou v procesu nasazení počítačem, apod. 
		- každý počítač si sám najde adresu co by mohl použít, zkontroluje, jestli jí někdo má, a když jo tak znova, když ne tak je jeho
	- designovaná aby byla jednodušší automatické ipv6 adresování
	- v současné době neposkytuje DNS server adresaci

- počítač si většinou sám vygeneruje IPv6 na základě MAC adresy (algoritmus EUI-64)
	- ta bývá používaná jako lokální na komunikaci s routerem, pak udělá jinou pro komunikaci na internetu

další dělení
- global unicast
- local unicast
- link local
- site local