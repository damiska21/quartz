---
date: 2025-11-20T15:00
cssclasses:
---

## Low Frequency (LF)
- nemá vůbec žádné zabezpečení
- moc pomalý na to, aby se dělalo zabezpečení
- většina skladů, zabezpečovaček atd
- prostě naklonuješ a použiješ jinde

## High Frequency (HF)
- hromada typů
- platební karty, ISIC


# Kreditka
- nejde klonovat celá kreditka s kontactless / nejde vyčíst pin
- na kreditce máš dva tracky v tom magnetickým pásu
	- tam je celý číslo karty, jméno, cvv, expiraci
	- celý ten magnetický pásek jde naklonovat
	- 
## Relay a replay útoky
- na jedný straně máš kartu přiloženou k útočícímu terminálu nebo k mobilu s nfc
- přes internet forwardneš veškerou komunikaci na druhej telefon, kterej actually platí

## Proxmark
`emv reader` - nasimuluje automat a naskenuje veškerý info, který dá sama
`emv exec -sat`