---
date: 2024-09-27T08:31
tags:
  - 
---


**Proxy server/proxy** 
- prostředník mezi klientem a serverem, zvyšuje anonymitu, obchází omezení, zrychluje načítání obsahu díky ukládání do cache.

**NAT (Network Address Translation)** 
- metoda, umožňuje překlad IP adres mezi soukromou a veřejnou sítí, čímž umožňuje více zařízením v lokální síti používat jednu veřejnou IP adresu pro přístup na internet.
- 
**ext4 (Fourth Extended Filesystem)**
-  Žurnálovací souborový systém používaný v Linuxu, který je vylepšenou verzí EXT3 a nabízí lepší výkon, vyšší kapacitu, rychlejší kontrolu disků a podporu souborů větších než 16 TB. (ve Windows třeba NTFS)

**Snapy**
- balíčky softwaru v Linuxu, zahrnují aplikace a všechny její závislosti do jednoho kontejneru. 
  Díky tomu mohou být aplikace izolované od zbytku systému a fungovat nezávisle na verzi systému nebo dalších knihovnách. 
  Snapy se instalují a spravují pomocí nástroje **snapd** a jsou distribuovány prostřednictvím **Snap Store**. 
  Hlavní výhodou snapů je jejich univerzálnost napříč různými distribucemi Linuxu a automatické aktualizace.
  
**TCP/IP**
-  Sada protokolů, umožňuje komunikaci mezi zařízeními na síti.
   **[[TCP]]** (Transmission Control Protocol) zajišťuje spolehlivé doručování dat 
   **[[IP adresa]]** (Internet Protocol) adresuje a směruje datové pakety mezi sítěmi.

**ICMP (Internet Control Message Protocol)** 
- Síťový protokol používaný k zasílání diagnostických a chybových zpráv (např. nedostupný server) mezi zařízeními v síti.

**Ping** 
- Nástroj, který využívá **ICMP** k odeslání zprávy na vzdálený server a měří dobu odezvy zpět, slouží k testování dostupnosti a rychlosti připojení k serveru.

**DNS (Domain name server)**
- Systém, který překládá čitelné doménové jméno (např. [www.example.com](http://www.example.com)) na IP adresu (např. 192.0.2.1), což umožňuje snadný přístup k webovým stránkám.

**Echo**
- Zpráva, kterou **Ping** odešle na cílový server (známá jako **ICMP Echo Request**), aby zjistil, zda je server dostupný.

**Reply**
- Odezva na **Echo**, tedy zpráva (**ICMP Echo Reply**), kterou cílový server pošle zpět, pokud je dostupný a funkční, což signalizuje úspěšné doručení a zpětnou komunikaci.

