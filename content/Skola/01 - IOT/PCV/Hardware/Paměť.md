---
date: 2025-10-04T12:15
cssclasses:
---
# Pevný disk
- Paměťové zařízení s nejvyšší kapacitou v PC
- Jsou na něm uložena všechna +data, programy, dokumenty,..
![[proxy-image.jpg]]
### Dělení
- jak disk funguje
	- elektronický
		- SSD
	- mechanický
		- HDD
		- SSHDD - hybridní disk
			- 
- Rozhraní
	- SATA (I, II, III) - sériový přenos
		- Napájení: SATA power (standard, slimline, micro)
	- eSATA (eSATAp)
	- M.2
		- SATA (SATA sběrnice)
		- NVMe (využívá PCIe sběrnici)
	- PCIe
- Velikost
	- 2.5" - notebooky
	- 3.5" - desktopové a tower skříně, skříně do racku
- RAIDová pole
	- RAID 0 (stripping)
		- Jedná se o součet kapacit všech disků (1TB + 1TB => 2TB)
		- Trvalá ztráta dat při poškození 1 disku
		- RAID 0 vyžaduje alespoň 2 členy
	- RAID 1 (mirror = zrcadlení)
		- Data jsou stejně na obou discích (1TB a 1TB => 1TB)
		- RAID 1 vyžaduje alespoň 2 členy
	- RAID 5 (block-level striping with distributed parity)
		- Každá skupina bloků na disku má přiřazený právě jeden paritní blok
		- RAID 5 vyžaduje alespoň 3 členy
		- 

| RAID 0              | RAID 1              | RAID 5              | RAID 0+1             | RAID 1+0             |
| ------------------- | ------------------- | ------------------- | -------------------- | -------------------- |
| ![[raid0.png\|100]] | ![[raid1.png\|100]] | ![[raid5.png\|200]] | ![[raid01.png\|200]] | ![[raid10.png\|200]] |

## HDD
- **Mechanický disk** (uvnitř jsou pevné rotující plotny, na kterých jsou data zaznamenávána)
- Data jsou ukládána pomocí **magnetického záznamu**. Jde o zmagnetizování velmi drobných částeček nanesených na povrch disku
- Data jsou zaznamenávána v digitální podobě
- 3,5“ - 7200, 10 000, 16 000 otáček
- 2,5“ - 5400, 7200 otáček
- 1,8" -
- Data jsou uspořádána v kruzích (stopy) - obrázky s pojmy zde
	- https://cs.wikipedia.org/wiki/Cluster_(pevn%C3%BD_disk)
	- https://cs.wikipedia.org/wiki/Cylindr-Hlava-Sektor
- Cylindr (cluster) – stopy nad sebou
- Čtecí hlava se nesmí dotknout plotny - hrozí požkození plotny -> špatné sektory (častá závada)
- Mechanický – náchylný na poškození od otřesů

## SSD
- Rychlejší čtení i zápis, ale menší životnost
- Skládá se z flash čipů

## SSHD
- Kombinuje HDD a SSD
- SSD funguje jako cache

# ROM (Read Only Memory)
- Paměť pouze pro čtení, je zde většinou uložen firmware
- Uchování dat i po odpojení napájení
- Uchování neměnných dat/programů
- Zaznamenání dat již při výrobě, nelze je měnit
- **ROM** – Naprogramovaná již ve výrobě, nelze ji vymazat ani znovu naprogramovat
- **PROM** – Lze ji naprogramovat po výrobě (pouze 1x)
	- koupíš si prázdný čip a sám si ho naprogramuješ
- **EPROM** – Lze ji vymazat UV světlem a naprogramovat znovu
- **EEPROM** – Lze ji vymazat přivedeným napětí a naprogramovat znovu
	- electric erase programmable read only memory
- FLASH
- CMOS - bios, jde měnit pouze část, ve které jsou některá nastavení
- CD-ROM (RW) – 650 MB, 700 MB
- DVD-ROM (RW+, RW-, RAM) – 4,7 GB, 9,4 GB, 18,8 GB; + lakované, odolnější proti oděrům
- Data jsou uspořádána do spirály

# RAM (Random Access Memory)
- Volatilní paměť (k udržení dat je potřeba napájení - při jeho přerušení )
- Slouží k průběžnému ukládání instrukcí a dat, se kterými počítač aktuálně pracuje.
- Paměť s náhodným přístupem
- Umožňuje čtení i zápis
- Po přerušení napájení ztráta dat
- dělení
	- static - data, co tam uložíš tam zůstanou do shutdownu
	- dynamic - data musíš periodicky obnovovat aby tam zůstali
- čipy
	- SIMM
		- single in line
	- DIMM
		- double in line (ověřit)
- Data je potřeba obnovovat

- kapacita, časování, frekvence, uložení čipu (SIMM/DIMM)
## Formáty paměťových modulů
- **DIMM** - Slot pro desktop
- **SO-DIMM** - Slot pro notebooky

## Generace RAM
- **SDRAM** – 133 MHz (RAM pro PC)
- **DDR** – 266 MHz (RAM pro PC)
	- zápis je při downsignálu nevim jak bych to řekl, to zdvojnásobuje rychlost proti SDRAM
- **DDR2** – 800 MHz (RAM pro PC)
- **DDR3** – 1033 MHz, hodinový zápis je rychlejší
- **DDR4** – 2133-3200 MHz

# Kazetopásková paměť 
- Streamovací zařízení, používané k zálohování serverů (mechanika 5 1/4", do které se vkládá kazeta s datoouá magnetickou páskou
