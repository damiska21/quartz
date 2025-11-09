---
date: 2025-10-22T11:02
cssclasses:
---
- slouží k dynamickému připojování konfigurace síťového rozhraní pomocí protokolu IP
- přiděluje IP, masku, gateway
## Připojení počítače 
- po připojení do sítě počítač vyšle DHCPDISCOVER
- dhcp server odpovídá s DHCPOFFER s nabídkou IP adresy
- klient si (často z několika adres) vybere jednu a o tu požádá pomocí DHCPREQUEST
- server mu ji potvrdí pomocí DHCPACK a počítač může IP používat 
- ke konci platnosti konfigurace klient požádá server pomocí packetu DHCPACK o prodloužení 
- 