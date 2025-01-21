---
date: 2024-10-11T08:05
tags:
  - 
---
Struktura adresářů a jejich popisy

## /bin
Příkazy potřebné při zavádění systému, které mohou použít i normální uživatelé.
## /sbin
Stejně jako /bin, příkazy nejsou určeny pro normální uživatele, ale mohou je použít.
## /etc
Konfigurační soubory specifické pro daný počítač.
## /root
Domovský adresář superuživatele, obvykle nepřístupný ostatním uživatelům.
## /lib
Sdílené knihovny pro programy v kořenovém souborovém systému.

## /lib/modules
Zaveditelné moduly jádra systému pro zavedení a zotavení po havárii.
## /dev
Soubory zařízení.
## /tmp
Dočasné soubory.
## /boot
Soubory používané zavaděčem operačního systému, například obrazy jádra.

## /mnt
Přípojné místo pro dočasná připojení dalších systémů souborů správcem systému.

## /proc
Virtuální souborový systém poskytující informace o běžících procesech a stavu systému.
## /usr
Obsahuje všechny příkazy, knihovny, manuálové stránky a jiné neměnné soubory.
## /var
Obsahuje soubory, které se v čase mění, například logy, e-maily a dočasné soubory.
## /home
Domovské adresáře uživatelů, obsahující jejich osobní data.

  

# Soubory a adresáře v /etc

## /etc/
Adresář obsahující systémové konfigurační soubory.
## /etc/shadow
Obsahuje šifrovaná hesla uživatelů.
## /etc/passwd
Obsahuje seznam uživatelů a základní informace o nich.
## /etc/fstab
Definuje souborové systémy, které se mají připojit při startu systému.
## /etc/hosts
Statická tabulka hostitelů pro překlad doménových jmen na IP adresy.
## /etc/hostname
Obsahuje jméno hostitelského počítače (hostname) používaného sítí.
## /etc/issue
Zpráva zobrazovaná před přihlášením uživatele.
## /etc/motd
Message of the Day, zobrazí se po přihlášení.
## /etc/group
Seznam skupin uživatelů.
## /etc/gshadow
Šifrovaná hesla skupin.
## /etc/login.defs
Výchozí nastavení pro správu uživatelů a hesel.
## /etc/init.d/
Skripty pro inicializaci služeb při startu.
## /etc/mtab
Seznam aktuálně připojených souborových systémů.
## /etc/logrotate.conf
Konfigurace rotace a komprese logů.