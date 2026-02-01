---
date: 2025-10-10T17:17
cssclasses:
---
- skener IP adres


## Flags
- -s
	- L
		- list - pouze vyloguje ipčka a názvy zařízení
	- P
	- n
		- ping

- sudo nmap -O -sC -sV -Pn 10.15.0.103
  -Pn: Treat all hosts as online -- skip host discovery
  -O: Enable OS detection
  -sV: Probe open ports to determine service/version info
  -sC: equivalent to --script=default
  -sC to enable the most common scripts