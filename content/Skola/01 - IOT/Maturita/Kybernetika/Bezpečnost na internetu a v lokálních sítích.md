---
date: 2026-04-23T09:06
cssclasses:
---

- na naší síť můžou útočit dvě různé hrozby
	- vnější hrozby - snaží se proniknout z internetu, nezabezpečená služba, mezera ve firewallu
	- vnitřní hrozby - 
		- úmyslná - nespokojený zaměstnanec
		- neúmyslná - zaměstnanec klikne na phishingový email, omylem do sítě zanese malware (klidně i jinak)
# Lokální síť
- síť nepřístupná z internetu
- bezpečnost je řízena firemní politikou, řády a směrnicemi
	- fyzická bezpečnost
	- softwarová bezpečnost
		- šifrování, antiviry, firewally na gatewayích, zálohování...
### Softwarová bezpečnost
- [[IEEE 802.1X]] (institute of electrical and electronics engineers standart)
- [[VLAN]]
- VPN
	- Virtual Private Network
	- bezpečný zašifrovaný tunel, který vede skrz veřejnou síť
	- protokoly
		- OpenVPN - open source, dokáže běžet na TCP i UDP
		- L2TP/IPSec - tunelovací protokol (L2TP) spojený se silným šifrovacím protokolem (IPSec)
		- Twingate - my favorite, zero-trust VPN na vzdálený přístup do LAN (zadarmíko pro domácí použití)
	- u VPN musíme důveřovat poskytovateli VPN služby
		- má přístup k celé komunikaci, může ty data prodat, a nebo může být napaden
		- samozřejmě neplatí když si to self-hostujeme jako Twingate
- Šifrování na wi-fi
	- WPA3 - používá AES (velmi silný symetrický šifrovací protokol), což chrání proti útokům MitM+hrubou silou (handshake sniffing). chrání wi-fi siť ikdyž si zvolíme slabé heslo

### Fyzická bezpečnost
- zamknutá, těžko nalezitelná serverovna
- zamknuté pc skříně
- vstup do budovy na rfid karty, klíče, čipy

### Firemní politika
- ve škole, ve firmách...

- fyzické přístupy - čipové karty, biometrika, klíče
- pravidla pro přihlášení, hesla (parametry hesla (NIS 2 např.))
- pravidla přístupu ke sdíleným diskům, definované skupiny, práva a oprávnění (generally správné nastavení AD serveru)
- směrnice určující, co se má dít při jakých situacích
	- scénář postupu při ransomwarovém útoku
	- scénář postupu při vyřazení aktiva, ať úmyslně či neúmyslně

# Internet
## rizika
- [[Malware]]
- phishing a sociální inženýrství
- nebezpečné přílohy/odkazy
## doporučení
- zabezpečení komunikace - HTTPS
- cookies - malé soubory které webovky ukládají na klientech, obsahují preference (darkmode/lightmode např.)
	- zákonem musí být uživatel notifikován, že je stránka používá a musí mít možnost je odmítnout
	- je důležité pravidelně cookies mazat
- bezpečné chování
	- hesla
		- NIS2
		- unikátní - klidně v password manageru
		- 2 faktorové ověření
- můžeme používat VPN (zmíněno výše)
- při přenosu dat používat certifikované úložiště s šifrováním dat, např proton či MEGA

- Digitální stopa
	- druhy digitálních stop
		- úmyslná - fotky na instagramu, sdílení polohy
		- neúmyslná - v rámci protokolů, jako [[Digitální stopa v HTML|htmi]]
	- [[Digitální stopa v poště]]

čím je definován kybernetický prostor? definovaný v zákoně o kybernetické bezpečnosti z roku 2025

# kdo se o to stará
1) NÚKIB
	- vládní CERT GovCERT.CZ
	- nestará se o soukromé firmy, řeší zabezpečení státní správy, ministerstvev a kritické infrastruktury státu
2) CZ.NIC
	- CSIRT.CZ
	- národní koordinátor pro český kyberprostor, řeší incidenty firem, operátorů, poskytovatelů internetu i běžných občanů
3) CESNET (Sdružení vysokých škol a Akademie Věd ČR)
	- CESNET-CERTS (zastřešuje však i skupinu CESNET CSIRT)
	- chrání internetovou infrastrukturu akademického sektoru - sítě vysokých škol, vědeckých ústavů a Akademii věd ČR