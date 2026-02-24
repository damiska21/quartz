---
date: 2025-09-19T09:15
cssclasses:
---
- dynamický protokol na [[Router|routeru]] 
- využívá metodu next-hop
	- určuje nejkratší vzdálenost
- každý [[Router]] si drží routovací tabulku, kde je udaná vzdálenost do všech podsítí
- routery si mezi sebou sharujou routovací tabulky

- naplnění tabulky
	- vyplňují se přímo připojené podsítě
### Nevýhody
- starý
- routovací smyčky - packet se může zacyklit
	- řešení pomocí TTL
- kvůli vyměňování tabulek dochází ke zvýšenému provozu na síti