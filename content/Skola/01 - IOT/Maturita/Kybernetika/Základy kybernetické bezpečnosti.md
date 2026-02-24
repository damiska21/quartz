---
date: 2025-10-08T10:54
cssclasses:
---
- tahle otázka je hrozný yappachíno z mojí strany, jestli si budeš pamatovat tohle všechno tak si macek cumne do kalhot (ale beztak bude stačit mnohem míň)

- obor informatiky, který se zabývá ochranou počítačových systémů a sítí před neoprávněným přístupem k informacím či systémům
	- chrání před narušením nebo zneužitím poskytovaných služeb - před kybernetickým útokem

Počítačová ochrana ve třech krocích:  
- prevence – ochrana před hrozbami (riziky)  
- detekce – odhalení neoprávněných činností a slabých míst v systému  
- náprava – odstranění slabých míst v systému 
    
## Principy zabezpečení informací
- metody pro zabezpečení informací uložených v počítačích a na prevenci hrozeb spojených s jejich používáním

- **Fyzická bezpečnost** – omezení přístupu k počítačům a ochraně zařízení před manipulací 
	- vstup do místnosti na kartu/klíč, zaheslovaný BIOS, Bitlocker
- **Řízení přístupu** – přístup pouze pro oprávněné osoby podle bezpečnostních pravidel 
	- úrovně přístupu, rfid karty, 
- **Ochrana dat** – ochrana proti krádeži, kopírování a poškození dat (včetně hardwarových klíčů) 
	- k datům mají přístup pouze vybraní zaměstnanci
- **Bezpečné chování programů** – využití bezpečnostních mechanismů operačního systému 
	- omezení přístupu programu na pouze nezbytná práva
	- linux - uživatelé na jednotlivé programy, které mají čtení/psaní práva na složky, ve kterých fungují
	- nikdy nespouštět program na serveru pod rootem, není li to nezbytně nutné
- **Minimalizace důvěry** – omezení počtu programů, kterým je nutné důvěřovat 
	- nepoužívat cizí programy na malichernosti, kde můžeme mít kód vlastní
	- celkově omezit programy, které jsou nutné ve firmě na minimum
- **Evidence změn** – logování a verzování systémů a programů 
	- SIEM (security information and event management) systémy na serveru, se správně nastavenými upozorněními administrátorů
	- verzování programů ve vývoji - Git - přesně dohledatelné, kdo přidal zlomyslný kód (nebo nebezpečnou chybu) do programu
	- verzování systémů
		- snapshoty - zaznamenání stavu systému a možnost se ke stavu navrátit (program - [Timeshift](https://github.com/linuxmint/timeshift))
		- kontejnery a neměnné systémy - služby běžící např. v docker kontejnerech
		- real verzování systému - Nix / NixOS - deklarativní systém, plně reprodukovatelný se stejným konfiguračním souborem
			- nix deklaruje jenom programy, dependencies a služby, nikoliv všechny soubory v systému
			- při špatné konfiguraci stačí vybrat starší verzi systému při bootu
- **Zabezpečení OS** – využití vestavěných bezpečnostních funkcí operačního systému 
	- vestavěný firewall
- **Šifrování** – bezpečná komunikace a přenos dat pomocí kryptografie 
- **Zálohování** – bezpečné ukládání a pravidelné zálohování dat 
- **Řešení incidentů** – plán reakce na bezpečnostní incidenty a útoky 
- **AAA + integrita** – zajištění autentizace, autorizace a integrity dat 

## Zranitelnosti 
- Zranitelností chápeme citlivá místa či nedostatky systému, správa slabých míst je opakující se praxe identifikace, třídění, nápravy a zmírnění zranitelností, když jsou objeveny. 
- Využitelnou zranitelností chápeme takovou zranitelnost, pro kterou existuje alespoň jeden fungující útok nebo "Exploit" 
- Kategorie hrozeb: 
    - Backdoors  
        - metoda obcházení normální kontroly pro ověření a zabezpečení             
        - Mohou vzniknout díky špatné konfiguraci, úmyslně přidaná developerem či útočníkem 
    - Denial of Service 
        - útoky navrženy tak, aby zařízení nebo síťové zdroje byly nedostupné pro jeho plánované uživatele 
        - zatěžuje daný systém, většinou požadavky na komunikaci, které jsou hned po odeslání zahozeny, ale server je stejně musí zpracovat
        - DDoS - Distributed Denial of Service
	        - používá několik zařízení na útok najednou
	        - používají se botnety, často kupované na darknetu
    - Přímý přístup 
        - Neoprávněný uživatel, který získá fyzický přístup k počítači, je s největší pravděpodobností z něj schopen přímo kopírovat data. 
    - Odposlech  
        - poslouchání soukromých rozhovorů, typicky mezi hosty v síti 
        - Man in the Middle útok
    - Spoofing 
        - Padělání 
        - komunikace odeslána z neznámého zdroje, který se tváří jako zdroj známý přijímači 
        - imitace známých wi-fi sítí aby se zařízení automaticky připojili
    - Zasahování 
        - popisuje škodlivou modifikaci produktů nebo dat 
    - Phishing 
        - snaha získat citlivé informace, jako jsou uživatelská jména, hesla či informace o kreditní kartě, přímo od uživatelů 
    - Zero day 
        -  označení pro zranitelnosti softwaru, které jsou odhaleny ještě před vydáním aktualizace 
        - zero day referuje na timeline dnů chyby
	        - den 1 - zjištění zranitelnosti, den 2 - enumerace problému atd (tohle je jenom ilustrativně)
	    - zero day zranitelnosti jsou velmi vyhledávané na dark netu, nejlepší jsou no-click zranitelnosti (nakažení zařízení bez jakékoliv akce na cíleném zařízení), za jejichž znalost útočníci platí často přes 2 miliony korun (cena bývá 100 000 dolarů a více)
    - Clickjacking 
        - technika ve kterém útočník oklame uživatele, aby kliknul na tlačítko nebo odkaz na webovou stránku, zatímco uživatel měl v úmyslu kliknout na vrchní úroveň stránky 
    - Sociální inženýrství 
        - snaha přesvědčit uživatele, aby dobrovolně prozradil své citlivé údaje, například hesla pro přístup k soukromým službám 
    - Malware 
    - Krádež identity 
    - Brute force 

## CIA triáda
- Confidentiality (důvěrnost) – data jsou dostupná pouze oprávněným osobám 
- Integrity (integrita) – data nejsou neoprávněně měněna 
- Availability (dostupnost)  – data a služby jsou dostupné, když je potřebujeme 

## Úrovně zabezpečení 

| Stupeň (Class) zabezpečení | Laický popis                                                                                                                                                                                                                 | Běžné označení v komerční sféře | Označení podle zákona č. 412/2005 |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | --------------------------------- |
| C0                         | Jedná se o informace, které sice nemusely být nutně <br>zveřejněné, ale kdyby k tomu došlo, nic by se nestalo.                                                                                                               | Veřejné                         | Veřejné                           |
| C1                         | Tyto informace zveřejnit rozhodně nechceme, na druhou stranu, život by se nám kvůli tomu také nezhroutil.                                                                                                                    | Citlivé                         | Vyhrazené (Restricted)            |
| C2                         | Únik takových informací by byl osudový. Odolnost proti běžným hackerům a policii (při běžném vyšetřování)                                                                                                                    | Interní                         | Důvěrné (Confidential)            |
| C3                         | Únik informací z této kategorie by už mohl někoho stát život. Od této úrovně bychom řešili i například to, že nás někdo může mučit, abychom mu informace poskytli. Odolnost proti profesionálním hackerům či tajným službám. | Chráněné                        | Tajné (Secret)                    |
| C4                         | Zde platí totéž jako v úrovni C3.                                                                                                                                                                                            | /                               | Přísně tajné (Top Secret)         |

Opatření: 
- Silná hesla 
- Více faktorové ověření 
- Antivir 
- Pravidelné aktualizace 
- Zálohování dat 
- Detekce útoků - IDS 
- Šifrování komunikace 
- Firewall 
- VLAN  
- VPN 

Firewall 
- síťové zařízení, které slouží k řízení a zabezpečování síťového provozu mezi sítěmi s různou úrovní důvěryhodnosti a zabezpečení 
- Slouží jako kontrolní bod 
- Kategorie 
    - Packetové filtry 
    - Aplikační brány 
    - Stavové packetové filtry 
    - Stavové packetové filtry s IDS 
- Síťový firewall - samostatné hardwarové řešení pro ochranu počítačové sítě (PfSense)
- Personální firewall - realizovaný na koncových stanicích (pc) 

Autentizace, autorizace a audit 
- Autentizace – ověření identity uživatele 
- Autorizace – přidělení oprávnění 
- Audit – záznam a kontrola činností 

Reakce na bezpečnostní incident 
- identifikace incidentu 
- Izolace problému 
- odstranění hrozby 
- obnova systému 
- vyhodnocení incidentu