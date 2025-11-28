---
date: 2025-10-29T10:43
cssclasses:
---

- používaný pro stylování dokumentů psaných v markup jazycích jako HTML nebo XML
- společně s HTML a Javascriptem mezi hlavními způsoby psaní stránek
- CSS umožňuje rozdělení rozložení stránky (HTML) a jeho prezentací (CSS)
	- to umožňuje
		- rozdělení stylu prezentace pro rozdílné zařízení
		- použití jednoho souboru stylů pro několik stránek (urychlení načítání stránky když je css cached)
- cascading ve jméně znamená řetězení/kaskádování stylů
	- pokud má jeden element upravované nějaké hodnoty na více místech (třeba víckrát margin:" ") css vždy stejně vybere, který má přednost
		- 1 - důležitost - !important - přebíjí všechny ostatní styly
		- 2 - původ - styl autora stránky > styl definovaný uživatelem > defaultní styl prohlížeče
		- 3 - selektor - id > class > tag
		- 4 - pokud se rovnají na úrovni, platí styl, který je definovaný později v kódu
## Zápis
- syntax používá anglická klíčová slova
### Selektor
- vybírá, pro jakou část markupu styl platí
- typy selektorů
	- všechny elementy specifického typu - `<h2>, <p>, <table>`
	- specifický matching atribut
		- id
		- class
```
výběr všech emementů
h2 {
	color: red;
}

výběr podle id
#navbar {
	background-color: blue;
}

výběr podle class 
.contact {
	text-align: center;
}

míchačka - pouze p elementy s class neco
p.neco {
	text-align: center;
}
```

- Stylopis - Do hlavičky dokumentu se napíše stylopis uzavřený mezi tagy `<style>``</style>`
- Soubor
	- Vytvoří se soubor, který se pojmenuje třeba `styly.css`:
	```css
	p {color: red}
	```
	Do hlavičky html dokumentu, který chci stylem ovlivnit, musím napsat odkaz na tento soubor:
	```html
	<link rel="stylesheet" type="text/css" href="styly.css">
	```

### CSS preprocesory
- CSS preprocesor je nástroj, který vám ze zdrojového kódu zapsaného ve vlastní syntaxi vygeneruje CSS pro prohlížeč
- SASS, LESS a Stylus