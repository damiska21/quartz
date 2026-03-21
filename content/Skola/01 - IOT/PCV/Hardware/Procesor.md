---
date: 2025-10-04T12:15
cssclasses:
---
- Vykonává strojový kód spuštěného počítačového programu
- Integrovaný nebo zapojený v socketu
- Skládá se ze dvou základních částí: **Aritmetickologické jednotky** (provádí výpočty), **Řadič** (komunikuje s ostaními komponentami)
- Výrobci: `AMD (PGA - Piny), Intel (LGA - Kontaktní destičky), Qualcom, Broadcom, Apple, HiSillicon, Rockchip, Texas instruments`
- důležité parametry
	- Frekvence u moderních desktopových procesoru se běžně udává v **GHz**
	- počet jader
	- počet vláken
- Napájení: 4pin (+ 4pin)

- hyperthreading
	- povoluje jednomu jádru fungovat jako dvě virtuální
	- na úrovni hardwaru, jedno fyzické jádro se OS tváří jako dvě, čímž může přijímat data z dvou vláken, případně pomoct jedno virtuální jádro druhému pokud první nemá co na práci, čeká na nějaká data, třeba z ram
- multitasking
	- procesor je schopný zpracovávat několik procesů najednou
	- procesor rychle střídá zpracovávání několika funkcí najednou, což umožňuje i starým jednocorovým CPU mít otevřených několik oken ve windowsu, pro uživatele je to plynulé protože je střídá tak rychle
- hypertransport - pouze AMD
	- vysoká rychlost komunikace mezi hardwarem za účelem nízké latence
	- (amd je spíše na videohry, nižší latenci chceš na klikání hlav :D)
### Instrukční sady
- Instrukční  sada  je  seznam  všech  instrukcí  a  jejich  variant,  které  dokáže  procesor  identifikovat  a  vykonat
- **RISC** – redukovaná instrukční sada (optimalizovaná sada strojových instrukcí)
- **CISC** – plná instrukční sada
