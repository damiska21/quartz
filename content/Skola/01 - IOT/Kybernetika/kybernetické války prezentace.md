---
date: 2026-01-07T11:02
cssclasses:
---

## 1) úvod
- kybernetika jako věda je o koloběhu informací, kybernetické války v základní myšlence jsou tedy válkami o informace
- základní principy jsou o poškození druhé strany ať už pomocí krádeže dat, nebo zamezení přístupu k datům (ransomware, DDoS), často sloužící k zisku peněž
- Většina kybernetické války se odehrává na internetu za pomoci počítačů či jiných síťových zařízení

## 2) historie
- Jako první kybernetické útoky by se dali počítat počítačové červy, které se sami dokázali šířit po síti
- První pokus byl Creeper, který spíše ukazoval, že je podobný program možný
- První reálný červ byl Morrisův, který se velmi efektivně rozšířil po většině tehdejšího internetu (60 000 počítačů v té době), Robert Tappan Morris za to získal 3 roky vězení s odvoláním, 400 hodin veřejně prospěšných prací a tučnou pokutu
- Reálné kybernetické útoky, většinou na státy, se začali dít až v druhé polovině nultých let

## 3) Reálné útoky
- Hodně útoků bylo mířené na různé státy, např. Spojené Státy, Jižní Korea, Indie či Rusko
- Útoky se dají rozdělit do několik kategorií: 
	- Kyberválka - mezi dvěma státy, jako Stuxnet
	- Destruktivní útoky - mířící zničit infrastrukturu či data, jako Vulcanbot (botnet útok ve Vietnamu)
	- Nerozlišující útoky - mířeno na každý počítač, nijak nerozlišující cíle, většinou červy, jako WannaCry nebo Petya

## 4) Bronze Soldier
- Velkoplošný útok na Estonské instituce, počínající v dubnu 2007
- Události byly způsobeny přesunutím sochy Bronzového Vojáka z Tallinnu, důležitého památníku Sovětské éry
- Jednalo se o několik DDoS útoků mířené na vládní weby, bankovní systémy či velká estonská média
- Distributed Denial of Service (DDoS) útok funguje na bázi posílání mnoha žádostí na server, čímž se přetíží, je těžko dostupný nebo dokonce dojde k výpadku

## 5) Stuxnet
- Stuxnet byl počítačový červ, který cílil na SCADA systémy, které ovládali různé továrnové stroje
- Neznámým činitelem byl zasazen do Íránkého Natanz jaderného zázemí 
- Když se dostal na SCADA systémy, měnil rychlost odstředivek, čímž je postupně znefunkčnil
- Tento útok zpozdilo Íránský jaderný výzkum na několik let
- Stuxnet zneužíval zero-day zranitelnosti Microsoft Windows, které SCADA systémy ovládaly

## 6) WannaCry
- WannaCry byl celosvětový ransomware útok, který se šířil pomocí počítačového červa
- ransomware je typ malwaru, který zašifrovává data na počítači, většinou dokud uživatel nezaplatí nějaký obnos peněz
- Vyřadil z provozu přes 300 000 počítačů např. špatně zabezpečených počítačů zdravotních služeb skoro celé Velké Británie
- Ačkoliv byl kód ransomware, zaplacení odškodného nijak neodblokovalo počítač
- Útok skoro až omylem zastavil Marcus Hutchins, když prohledával kód a našel neregistrovanou webovou doménu, jejíž registrování fungovalo jako nouzový vypínač

## 7) Aktéři
- Do kybernetických konfliktů vstupují různé skupiny s různými cíli
- Mezi hlavní typy lidí patří:
	- Státy - nejaktivnější: USA, Rusko, Čína, Severní Korea
	- Haktivisté - hackerské skupiny, např: 
		- Anonymous 
			- Útoky na vládu, korporace. Bojují za svobodu, protestují vůči některým režimům
		- LulzSec
			- Zesměšňování vládních institucí i firem. Prolomili CIA weby či databáze Sony Pictures

## 8) Metody útoků
- Elitní hackeři využívají čehokoliv, co mají k dispozici, jsou ale techniky, které jsou častější než jiné
- Mezi nejpoužívanější techniky patří DDoS či různé formy malwaru
- V dnešní době se také velmi rozrostlo použití sociálního inženýrství pro získávání přístupu namísto prolamování zabezpečení softwaru.

## 9) DDoS
- Denial of Service je metoda zahlcení serveru, čímž se velmi zpomalí nebo úplně vypne.
- Je založená na posílání velkého množství požadavků o komunikaci serveru, na které server musí odpovědět, ale tou dobou mu ze stejného počítače přijde dalších 10
- Distributed Denial of Service tuto metodu rozšiřuje do další dimenze pomocí vícero počítačů, většinou botnetů
	- Botnet - sada nakažených počítačů, ke kterým má přístup útočník. Většinou je poté používá na DDoS útoky, nebo těžení kryptoměn
## 10) Spyware
- Metoda častěji používána státy narozdíl od DDoS, který raději používají haktivisté
- Spyware je založen na nakažení důležitých počítačů, například vysoko postavených poslanců, a monitorovat jejich činnosti, často získávání jejich emailů či jiné komunikace.
- Tyto znalosti poté mohou tajné služby využít k lepšímu informování vlastního státu, či ovlivňování voleb
- Další typ spywaru pouze získá data a odešle je na cizí server, kde je poté vlastník přeprodává ve velkých balíčcích na darknetu.
## 11) Advanced persistent threat
- Podkategorií spywaru je APT, česky pokročilá trvalá hrozba.
- Při tomto útoku se malware nainstaluje do pozadí a zůstane tam delší dobu, sbírající informace.
- V dnešní době je velkou hrozbou APT na telefonech, kde získává přístup k telefonátům, textovým zprávám a dalším médiím.
## 12) Zero-day zranitelnosti
- Zero day zranitelnosti nedávno mnohonásobně vzrostly v popularitě na dark netu.
- Rozšířili se obchody, kde jedna zero-click (bez jakékoliv interakce od uživatele) zranitelnost prodává za miliony korun
- Zero-day je taková zranitelnost, o které vůbec neví tvůrce jejího softwaru.
- Takové zranitelnosti bývají nahlašované za jistou sumu samotnému tvůrci (pomocí bug bounty programů jako HackerOne), někteří ale preferují nahlašovat zranitelnost útočníkům, aby jí za větší peněžní obnos zneužili.

## 13) AI
- Umělá inteligence rozhodně mění pole kyberválky.
- Co dříve zvládali týmy útočníků dnes zvládne jeden s dobře nastavenou AI. Navíc může útočit i když útočník spí.
- Zároveň ale AI dokáže pomáhat obráncům a vývojářům při hledání zranitelností nebo při rychlé opravě zneužívané bezpečnostní mezery.
- Je to závod, kdo AI v dnešní době nevyužívá, bude pozadu.

## 14) Závěr 
- Kybernetická válka je v dnešní době v plném rozmachu a rozhodně nijak nezchyluje k jejímu konci.
- Musíme se naučit, jak se v ní orientovat a nejlépe jak bojovat na správné straně.

- Děkujeme za pozornost.

- právo
	- tallinn manual
	- regulace

- závěr
	- dopady na společnost