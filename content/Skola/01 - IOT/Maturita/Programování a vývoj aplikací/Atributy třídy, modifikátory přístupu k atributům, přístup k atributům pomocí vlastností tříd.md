---
date: 2026-03-03T11:58
cssclasses:
---

## Atributy tříd
- vytváří základní vlastnosti budoucího objektu
- deklarují se na úrovni třídy, nad metodami, jsou to tedy globální proměnné
	- =můžeme je použít ve všech metodách třídy
- modifikátory přístupu zvenčí třídy - `public, private`
	- public - z vnějšku třídy viditelný
	- private - viditelný pouze uvnitř třídy
- konstantní/proměnné
	- konstanty - můžeme je naplnit pouze jednou
- jelikož jsou atributy třídy privátní, tak musíme konstruovat gettery a settery pro manipulaci s daty
- C# definuje vlastnosti, které automaticky mohou mít gettery a settery, když je hodnota public
	- `public string CestaKBitmape { get; set; }`
		- tohle je když nepotřebuju v getterech a setterech mít žádnou logiku
- v getterech a setterech mohou být podmínky a logika, protože to jsou normální funkce


- protože můžeme vytvořit třídu z každého podstatného jména, tak třeba: 
	- bankovní účet - jméno držitele, příjmení, heslo, zůstatek
