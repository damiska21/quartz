---
date: 2026-03-04T12:45
cssclasses:
---

- u týhle otázky se sedí u počítače, u visual studia. *občas*
- panel nástrojů možná bude schovaný, je v Zobrazit -> Panel Nástrojů taknějak uprostřed, červený kufřík

- formulář
	- vzniká ve třídě s názvem Form1, která dědí od Form
		- vzniká **děděním**
	- v souboru Program.cs dáme instanci našeho Formuláře do procedury `Application.Run`
	- na tento formulář poté dáváme ovládací prvky z panelu nástrojů
		- button, label, checkbox, panel, scrollbar, listbox by bylo vhodný ukázat
- poté pojedeme po jednotlivých věcích co tam naházíme a popisujeme hlavní vlastnosti

- listbox
	- má položku Items, což je kolekce
- checkbox
	- nejdůležitější je, jestli je `checked` true, nebo false
	- nejdůležitější událost je `checkedChange`

- přepnutím na blesk máme události třídy, ty jsou taky důležité
- když označím několik prvků naráz tak se mi zobrazí jenom ty společné mezi označenými itemy

- co se stalo, když přetáhneš nový item na form?
	- **vytvořila se instance**
	- otevřít `Form1.Designer.cs` a ukázat ty deklarace ovládacích prvků, které tam máme
	- defaultně má název podle prvku + číslo, takže první tlačítko `button1`, druhý text bude `textBox2`
	- ukázat inicializaci
	- ukázat nějakou metodu, která byla přidána třeba tlačítku na onclick