---
date: 2026-03-04T10:49
cssclasses:
---
- fyzická bezpečnost
- softwarová bezpečnost

# Fyzická bezpečnost
## Klient
- zamykatelná skříň na desktop
- zámek na kolo u notebooku ??
## Server
- zámek na dveřích
- místnost s omezeným přístupem
- zamykatelný rack
- neoznačená/utajovaná místnost

- recyklace disků z čehokoliv
	- závisí na citlivosti dat, ale data jsou *teoreticky* čitelná i po sedmi přepsaní informacích
	- důležitá data - formátovat, přepsat nulama celý disk, pak zkartovačka a rozdrtit disk na sračku

# Softwarová bezpečnost
- heslo
- certifikát
- různé tokeny
- dvoufázové ověření
	- biometrické ověření + heslo třeba
- faceID/scan sítnice
## OS
- aktuální verze
	- OS, ovladače, 
- firewall
- antimalware
- vpn
- zerotrust
- šifrování na disku
- backup
	- [[Paměť#RAIDová pole|Raidová pole]]
	- automatická záloha dat, mimo site ideálně
		- cloud služby - vlastní osobní cloud v pohodě, onedrive ne
		- MEGA, proton má šifrování dat na serverech
- nasazení SIEM systémů
- pro každý server jiný lokální administrátor s jiným heslem
- co služba, to jiný uživatel, to jiné heslo
- u serveru - pravidelná údržba dat - dokáže nahradit SIEM systém
# Yapping
- [[Digitální stopa v HTML]]
- 