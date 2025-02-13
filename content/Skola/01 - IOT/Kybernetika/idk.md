---
date: 2025-01-29T11:50
cssclasses:
---
## Útok

1) získat přístup k wi-fi

                - stačil by deauth útok

                - odhlásím jakékoliv bezdrátové zařízení od routeru a budu naslouchat k jeho zpětnému automatickému přihlášení, poté vezmu zahashovaný heslo

                - odhashuju heslo, buďto přes web například onlinehashcrack, nebo na lokálním zařízení

                - alternativně se k síti mohu připojit drátem, pokud není síť zabezpečena pomocí protokole IEEE 802.1X

2) Po získání přístupu k síti jí oskenuju nmapem, a ozkouším různé základní útoky

- zkusit defaultní heslo na routeru

- stejné heslo, jako bylo od wi-fi

- zkusit často používaná hesla, a pokud po zabezpečení routeru povoluje slovníkový útok

- routery nebývají často aktualizované, mohu zkusit nalézt na internetu exploit pro starší verzi která na routeru běží

3) Využití

                - po získání přístupu lze připojit různé zařízení, např. počítače sítě, do botnetu, nebo je použít na těžení kryptoměn

                - pro pozdější využití lze nainstalovat někam do sítě backdoor k lepšímu přístupu

4) Úklid

                - po ukončení útoku je dobrý nápad smazat logy, primárně na routeru, ale i na jiných síťových zařízení

Obrana

-          Změnit všechny hesla v domácnosti na těžko tipnutelné, nikdy na ničem nenechávat základní heslo

-          Často aktualizovat router

-          Občasně kontrolovat přenos dat přes síť, zda-li není v síti více přenosu než by mělo být, indikující parazita v síti

Odstranění útočníka ze sítě

-          Zresetovat co nejvíce zařízení, která by mohla být nakažená malwarem, do továrního nastavení, následné změnění nastavení na bezpečnější

o   Na routeru je dobré zkontrolovat hesla, podívat se na nastavení firewallu a pokud byly v síti port-forwardy, zvážit jejich smazání

-          Prověřit, co mohlo být příčinou útoku a opravit tuto chybu