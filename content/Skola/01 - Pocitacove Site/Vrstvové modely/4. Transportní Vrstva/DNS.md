---
date:
  - 2024-10-09T09:34
cssclassescs: 
datetest:
---
- Domain Name System
- překládá doménové jméno na ip adresu
- internet i local

- internetová doména (registrátor)

### ŘÁDY
1) .cz .at .io ...
2) seznam.cz google.com
3) něco.webnode.cz
	- jm.seznam.cz  || seznam.cz/jm


- Registrátor - forpsi, wedos, banan


### Records
- A
	- směruje na IP
	- seznam.cz -> 85.49.251.64
- AAAA
- MX
	- mail exchange
	- mail.seznam.cz
- CNAME
	- na přesměrování
	- `*.seznam.cz
- TXT
	- záznamy na ověřování
		- ověření certifikátu atp

## Řazení
1) root name servery
	- je jich 13, označené A - M
2) autoritativní servery
	- registrátory, webhosty, datová centra
3) rekuzivní servery
	- cache
	- pamatuje si záznamy, které byli v nedávné době použity, častější používání -> déle zaznamenané pro rychlost

## Firmy
- IANA
	- vybírá organizace, které spravují root servery
	- spravuje doménové jména 
- IEEE
	- protokoly
### Domain Name Tree - Doménový Strom

Root name servery
- počet - 13
***
Webhosting - Forpsi    >> Autoritativní
- počet - dost
***
isp, dns, pc                   >> Rekuzivní
***
my, dns, pc                   >> Rekuzivní
- počet - úplně nejvíc