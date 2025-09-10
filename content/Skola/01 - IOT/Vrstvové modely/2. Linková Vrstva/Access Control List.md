---
date: 2025-02-12T10:04
cssclasses:
---
- seznam pravidel, které řídí přístup k určitému objektu
- řazený seznam pravidel permit (povolit) a deny (zakázat) (=Access Control Entities)
- pravidlo first-fit - seznam se projíždí odzhora a první aplikovatelné pravidlo je aplikováno
	- na konci je defaultní pravidlo deny all
	- prázdný ACL seznam propouští vše
- pro tip: umisťovat specifičtější pravidla na začátek a broader pravidla na konec
- pokud je vyhodnoceno deny, tak je poslán signál unreachable / nedosažitelný

### Cisco ACL
- součást IOSu
- nejčastěji používané na filtrování packetů (=řízení síťového provozu)

- typy CISCO ACL
	- IP a MAC, může být i IPv6 
	- Port (na [[2. Linková Vrstva]]), Router (na [[3. Síťová Vrstva]]) a VLAN

	- všechny věci (port, ip, mac atd) jdou míchat mezi sebou

- cisco používá wildcard masky / inverzní masky
	- počítá se: prostě obráceně maska
		- maska - 255.255.192.0 
		- inverzní - 0.0.63.255

- dělení dle verze
	- standart acl - starší a jednodušší verze
	- extended acl - novější a složitější s více nastaveníma
	- těch ACl je víc, třeba někdy dopíšu

### Standart ACL
- používá čísla 1-99 a v rozšířeném módu 1300-1999
- ez na configure
- vyhodnocuje pouze zdrojové adresy
- používá se na blokování provozu v blízkosti cíle

template:
SWITCH(config)#**access-list _číslo {deny|permit}_ {host|source source-wildcard|any} [log]**``
příklady:
SWITCH(config)#**access-list 5 deny host 10.5.1.10**
SWITCH(config)#**access-list 5 permit 10.5.1.10 0.0.0.255**``
### Extended ACL
- používá čísla 100-199 a v rozšířeném módu 2000-2699
- vyhodnocuje jak zdrojové adresy tak cílové
- může blokovat provoz jakkoli daleko (nejlépe blízko zdroje)

- může kontrolovat
	- z [[3. Síťová Vrstva]]: IP adresy, protokol, údaje ToS (type of service)
	- z [[4. Transportní Vrstva]]: v [[TCP]] hlavičce: porty a protokoly, v [[UDP]] hlavičce: porty, v ICMP hlavičce: typ zprávy

template:
SWITCH(config)#**access-list _číslo {deny|permit} protokol_ {host|source source-wildcard|any} [port] {host| destination destination-wildcard|any} [port]**``
- toho shitu tam může bejt víc btw

- operátory omezení na port
	- eq - rovná se
	- neq - nerovná se
	- gt - větší než
	- lt - menší než
příklad: povoluje přístup na 10.5.1.10 odkudkoli, ale pouze na tcp port 80
SWITCH(config)#**access-list 105 permit tcp any host 10.5.1.10 eq 80**``


### Named ACL
- použitelné pro standart i extended
- umožňuje edit (narozdíl od předchozích)

- vytvoření acl pravidla
	- SWITCH(config)#**ip access-list {standard|extended} jmeno**``
- poté nás to přepne do acl pravidlo edit módu, kde po jednom zapisujeme parametry

- klíčová slova
	- host - nahrajuje 0.0.0.0
	- any - nahrazuje 0.0.0.0 255.255.255.255
### Aplikace ACL
- acl se navazuje na specifický interface, takže rozdílné vlany, sériové linky, nebo porty mohou mít různá nastavení
- můžeme mít jenom jeden acl pro interface, smě a protokol. 
	- pro např. tcp/ip můžeme mít max dvě acl, vstupní a výstupní

```**SWITCH(config-if)#ip access-group {číslo|jméno ACL} {in|out}**```
- na L2 interfacech není podporovaný směr out

příklad:
```
SWITCH(config)#interface serial0
SWITCH(config-if)#ip access-group 5 in
```

- vstupní a výstupní: 
	- vstupní omezuje packety přicházející do switche
		- dobré daleko od cílového zařízení
	- výstupní omezuje packety odcházející směr cíl
		- dobré blízko k cílovému zařízení

```
SWITCH#**show ip interface      ** // zobrazí info interface a je zde vidět, pokud je aplikován ACL
SWITCH#**show access-lists**       // seznam ACL (IP i MAC) s pravidly
SWITCH#**show ip access-lists**    // seznam IP ACL
SWITCH#**show** **running-config**     // v běžící konfiguraci jsou take vidět ACL i jejich aplikace
```

mac access-list yap yap dělá to samí pro MAC adresy
