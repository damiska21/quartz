---
date: 2025-10-04T12:14
cssclasses:
---
- Je základem počítače a propojuje jednotlivé součásti do fungujícího celku
- Komponenty se připojují pomocí slotů (Grafika, paměť RAM), konektorů (Disk, Optická mechanika) nebo patice (CPU)
- Na základní desce je umístěná paměť ROM (EEPROM), ve které je uložen systém **BIOS**/**UEFI**, používá se při startu počítače pro inicializaci a konfiguraci připojených hardwarových zařízení a následnému spuštění operačního systému, kterému je pak předáno další řízení počítače
- Vybíráme podle: velikosti skříně, procesoru, slotu pro paměti, napajeci faze (taktovani), parametrů sběrnice

### Patice (socket - patice pro součástku)
- **Socket** - Místo, kam se připojuje procesor
	- **Pin grid array (PGA)** `AMD` - **krátké piny** procesory jsou uspořádány do čtvercového pole tak, aby souhlasily s otvory v patici
	- **Land grid array (LGA)** `Intel` - pracuje s dotykem **kontaktních plošek**. 
	- **Ball grid array (BGA)** - Kuličky cínu se při zahřátí horkým vzduchem nebe infračervenou lampou roztaví a vytvoří tak kontakt mezi plošným spojem a integrovaným obvodem

### Slot (konektor pro přímé připojení desky s plošným spojem)
- **DIM/SO-DIM** - připojení RAM paměti
- **AGP** (3.3V, 1.5V, Universal, Pro 3.3V, Pro 1.5V, Pro Universal) – slot pro grafiku (Starší)
- **PCIe** x1, x4, x8, x16 – sběrnice (x16 se používá pro připojení grafiky)

### Čipová sada (chipset)
- Několik pevně připojených čipů (integrovaných obvodů), které zajišťují komunikaci mezi hardwarem
- Do čipsetu patří také různá integrovaná zařízení jako grafická, zvuková a síťová karta
- U stolních počítačů rozlišujeme dva čipy na MB
	- **Northridge** (severní můstek - **systémový řadič**) 
		- ovládá 3 základní komponenty (CPU, GPU, RAM) a zajišťuje spojení s jížním můstkem
		- je blíž k procesoru a zajišťuje rychlé přesuny mezi klíčovými oblastmi PC 
		- Pracuje s jedním nebo dvěma typy procesorů a zpravidla s jednou pamětí RAM
	- **Southbgidge** (jižní můstek - **vstupně-výsupní řadič**) 
		- realizuje pomalejší funkce MB v architektuře se severním a jižním můstkem (USB, Ethernet, SATA, PCI) 
- Intel – integrovaný v MB (Severní můstek nově integrovaný na Procesoru)
- AMD – severní můstek integrovaný v CPU, jižní můstek umístěný na MB
