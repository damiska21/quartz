---
date: 2026-02-04T10:55
cssclasses:
---
- software, který zprostředkovává komunikaci mezi uživatelem a hardwarem
- holý počítač je bez OS, bez dalšího softwaru

## Dělení
### podle použití
- desktopový
	- windows, MacOS, Linux
- servery
	- Windows server, Linux Server, Mac Server

### Podle Architektury
- 32 bit
- 64 bit
	- v dnešní době skoro exklusivně toto
### Podle Licence
- GNU/GPL
	- zdarma na použití, placená podpora
	- Linux
- EULA - End User License Agreement
	- Microsoft
- ASLA - Apple Software License Agreement
- open-source
	- react os - linux, běžící s winem

## Hyper Threading
- k jednomu fyzickému jádro je jedno logické
- operační systém se rozhoduje, kterému dá operaci
## Multi tasking
- provádění několik akcí najednou
- jedna aktivní akce má větší prioritu
## Části
- kernel - jádro
- uživatelské rozhraní
	- CLI - příkazový řádek
	- GUI - grafické uživatelské rozhraní
- aplikace
- aplikace třetích stran

## Stromová struktura
- linux nezná složky, složka v linuxu je soubor označený jako složka
- windows zná složky

- linux začíná v / (root)
- windows začíná na označení disku, třeba C:/

- windows vznikl z unixu - důkaz: drivers/etc/host
	- druhý firewall windowsu
	- více robustní, více rootový, na ojebávky windowsu jako je vypínání telemetrie
### Rooty
#### Windows
- Windows
	- nejdůležitější složky - System32, SysWOW64 a System
- Programfiles (x64 a x86)
- Users
	- profily uživatelů
- ProgramData
	- skrytá složka
	- globální konfigurace OS a aplikací 
#### Linux
- kořen - / 
	- závorky jsou porovníní s windowsem (C:\\)

- bin
	- základní spustitelné soubory
	- (C:\\Windows\\System)
- boot
	- umístění jádra, kernelu, zavaděče - grub, initrd
- dev
	- fyzické zařízení linuxu, ovladače
	- (C:\\Windows\\System32\\Drivers)
- etc
	- globální konfigurační soubory
	- (C:\\Windows\\System32)
- home
	- domovské složky uživatelů
- lib
	- podpůrné knihovny operačního systému
	- (C:\\Windows\\System32)
- mnt nebo media nebo mount
	- do podsložek se připojují další disky
- proc
	- soubor nastavení a stavu systému a jednotlivých procesů
	- (Task manager - správce úloh)
- root
	- domovská složka administrátora
	- z bezpečnostních důvodů oddělené od zbytku homu, nejde přemapovat jinam. home/ totiž může být oddělen na jiném disku, ale root musí být načten se systémem
- sys
	- virtuální systémový adresář - uložený kousek jádra
- tmp
	- dočasné soubory pro ukládání věcí co zrovna potřebuje systém, třeba odrarované rary na náhled, otevřené instalační soubory...
	- automaticky se nemaže
	- (C:\\Windows\\temp) nebo (C:\\user\\jmeno\\appdata\\local\\temp)
- usr
	- další nastavení pro programy
	- (C:\\Users\\uživatel\\AppData\\)
- var
	- soubory, které se často za běhu mění, nejdůležitější
	- (C:\\Windows\\System32) (C:\\Windows\\System)
- run

# idk
- desktopové systémy slouží pouze pro lokální stanice a jsou určeny pro koncové uživatele, oproti serverovým nabízejí síˇtové služby

- serverové operační systémy pracují s tkzv. rolemi
	- [[DHCP]] server
		- slouží k přiřazování ip pro lokální stanice
	- Active Directory
		- slouží ke správě uživatelů a skupin v síti
	- [[DNS]]
		- slouží k překladu doménových jmen na IP adresy (včetně lokální domény)
	- printserver
		- slouží ke správě sdílení tiskáren v síti
	- fileserver
		- slouží jako úložiště dat a mapování jednotek
	- atd.

- po tomhle můžeme vyprávět báje až do konce 15 minut, o AD
	- porovnat [[peer to peer (p2p)]] a [[Klient server (c-s)]]