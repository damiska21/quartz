---
date: 2025-01-22T12:15
zdroj: https://en.wikipedia.org/wiki/IEEE_802.1X
---
- protokol pracuje na [[2. Linková Vrstva]]
- tento protokol preventuje fyzický útok připojení cizího zařízení do sítě a získat tak neoprávněný přístup k firmě např. pomocí lan turtelu
- pomocí tohoto protokolu vyžaduje Wi-fi či kabel autentizaci do sítě (připojení k LAN nebo WLAN)
	- standartně uživatelské jméno a heslo nebo nějaký typ certifikátu
	- přípojný bod (tedy router nebo switch) blokuje veškerý datový tok (kromě toku protokolu 802.1X) dokud se klient úspěšně neautentizuje
- tento protokol je implementován protokolem 802.11, který je používán pro WPA a WPA2

- vyžaduje tři strany: suplikant, autentikátor a autentizační server
	- suplikant
		- zařízení klienta, (laptop, telefon, atp.)
		- občas to taky referuje na software na klientově zařízení, které poskytuje rozhraní na přihlášení
	- autentikátor
		- zařízení, které zařizuje spojení mezi suplikantem a autentizačním serverem (router, ethernetový switch)
		- veškerá komunikace mezi autentikačním serverem a suplikantem je autentikátorem překládána do RADIUS a EAPOL, funguje jako překladač
	- autentizační server
		- ověřený server který může přijímat a odpovídat na žádosti pro přístup do sítě
		- autentikátoru pak posílá zpět data, zda je suplikant do sítě povolen, případně i s nastaveními, např. přístupu, které by měly platit pro něj
		- autentizační server může být jako software na autentikátoru
		- zpravidla běží na softwaru který podporuje RADIUS
## Radius
- protokol na straně autentizačního serveru
- zkratka: Remote Authentication Dial-In User Service
- AAA manažer - Autentikace, Authorizace, Účtování (Accounting)
- jednoduše řečeno je to protokol, který řeší účty na přihlašování, ověřování pokusů o přihlášení a dávání přístupu po ověření
- může být použito i třeba na NAS serveru, nejenom do sítě
### Roaming
- RADIUS je standartně používán i na roaming mezi sítěmi či ISPčkami
- Použití
	- Firmy mohou mít jeden globální set přihlašovacích údajů do několika veřejných sítí
	- Nezávislé, ale spolupracující firmy si mohou navzájem povolovat přihlášení pomocí údajů jiné firmy např. [eduroam](https://en.wikipedia.org/wiki/Eduroam)
#### Realmy
- ta věc před nebo za jménem
- dva příklady
	- prefix skola\damiska
	- postfix damiska@skola
- v dnešní době může být separátor cokoliv ale tohle je standartní practice
- teoreticky můžeš použít oba realmy najednou v ůčtu
## EAP
- extensible authentication protocol
- je to pouze framework pro přenos a použití parametrů z EAP metod
- těch metod je hodně např. EAP-MD5 (který je nebezpečný xd), EAP-PSK (který tvoří bezpečný komunikační kanál) nebo TEAP (vytváří bezpečný tunel pomocí [[TLS]])
## Schéma připojení
![[802-1X-connection.png]]

odzhora:
- klient připojí kabel do sítě nebo naklikne bezdrátové připojení
- dostane od autentikátoru na mac adrese _01:80:C2:00:00:03_ žádost o ověření
- suplikant pošle jeho nějaký identifikační číslo (User ID)
- autentikátor to zabalí do RADIUS access-requestu a pošle AS
- AS pošle EAP metodu k použití při autentikaci
	- suplikant může poslat že takhle to nepude a seznam možných EAP metod
- poté suplikant pošle informace ohledně přihlášení autentikátoru
- autentikační server buď pošle RADIUS access-accept nebo access-reject podle úspěšnosti authorizace