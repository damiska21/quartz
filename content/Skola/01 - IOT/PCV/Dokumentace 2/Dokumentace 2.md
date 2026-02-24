---
date: 2026-02-16T09:06
cssclasses:
---
- všechno nainstalovat
	- win server 2022, win klient 10 pro, ubuntu server 25.04 asi

- na server přidat služby ADDS a DHCP
![[Pasted image 20260216090948.png]]
-  pak zadat heslo a odklikat
- 

- udělat uživatele správce a dát mu tohle
	- ![[Pasted image 20260216092255.png]]
- pak se do tohoto účtu přihlásíme a už neodcházíme

- DHCP svítí ve vlaječce, otevřeme již pod AD správce účtem
- odklikáme a všechno by mělo fungovat
- program DHCP -> right click IPv4 -> Nový obor -> pojmenovat
- ![[Pasted image 20260216093021.png]]
- (zadat IP hlavního AD serveru)![[Pasted image 20260216093120.png]]
- zbytek proklikat a aktivovat obor

- klient - otevřít vlastnosti systému -> domény -> nastavit na vlastní doménu: `rohacek.local`
	- přihlásit se s předchozím admin účtem
	- restartovat počítač
- na serveru si vytvoříme nějakého uživatele
- na klientu se na uživatele přihlásíme
	- můžeme zkontrolovat, zda li dhcp fungovalo, ale pravděpodobně už by se něco pokazilo před tím `ipconfig` ![[Pasted image 20260216094222.png]]

- domovské složky
	- označíme všechny uživatele které chceme, aby měli home
	- right click -> vlastnosti -> Profil -> Domovská složka checkbox -> připojit k - `\\JmenoServeru\Homes\%username%`
	- tim se hodí domy všech uživatelů epesně yipeee

- omezíme uživatele ve složce speciální pomocí
	- Správa zásad skupiny -> right click OU -> Vytvořit objekt zásad skupiny v této doméně a propojit jej sem
	- ten objekt ZS rightclick -> upravit
	- naklikat 5 omezení uživatele
	- např. : Konfigurace uživatele -> Zásady -> Šablony pro správu: Definice zásad -> Plocha -> Zakázat všechny položky
		- zakáže všechny ikony na ploše pro danou OU
- ![[Pasted image 20260216110849.png]]
- moje vypnuté funkce - Windows AI, Multitasking, Plocha/Zakázání všech ikon, Zákaz otevření Ovládacích panelů a Nastavení, Zakázat Windows Copilot