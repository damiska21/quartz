---
date: 2025-11-23T13:18
cssclasses:
---
**Abstraktní třída** – obaluje normální třídy, je nad nimi, obsahuje slovo abstract, pomocí konstruktoru jim nelze vytvořit instanci, kompilátor to nedovolí, obsahuje abstraktní metody

**Generická třída** je třída, která pracuje s neurčeným datovým typem.  
Neurčený datový typ označujeme vždy písmenem T  
Datový typ se určí až když vytváříme instanci

**Interface** je společným rozhraním tříd  
Interface obsahuje hlavičky společných metod, které jsou společné třídám, které ho implementují, název se často tvoří jako "I" + "použití"  
To je dobré pro to, že pak lze přistupovat k objektům pomocí jednotlivých objektů - to dělá Servant

**Messenger** se používá, pokud je potřeba přenést ze třídy více než jednu hodnotu, datový typ (jeden získáme pomocí funkce, např. getteru)  
Vytvoříme si proto "přepravku", kterou je právě Messenger  
Vytvoříme novou třídu se stejnými atributy, ty musí být public (chceme se k nim dostat i odjinud) a budou asi i final (aby nešly omylem/neoprávněně měnit)  
V původní třídě, ze které chceme získat data vytvoříme metodu, která nám data předá (tedy funkci) a do ní dáme slůvko "return" a za to všechny atributy
