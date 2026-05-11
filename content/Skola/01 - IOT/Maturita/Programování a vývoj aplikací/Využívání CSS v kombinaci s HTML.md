---
date: 2025-10-29T10:43
cssclasses:
---
# CSS
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
	- 
```css
/*tohle je css komentář, může být i na několik řádků*/
/*výběr všech elementů*/
h2 {
	/*parametr hodnota*/
	color: red;
}

/*výběr podle id*/
#navbar {
	background-color: blue;
}

/*výběr podle class */
.contact {
	text-align: center;
}

/*několik různých identifikátorů najednou*/
.seznam, h2 {
	color: blue
}

/*selektor podle atributu*/
/*veškeré inputy s typem text*/
input[type="text"] { něco}

/*pseudotřídy*/
.seznam:hover {
}

/*míchačka - pouze p elementy s class neco*/
p.neco {
	text-align: center;
}

/*universální selektor - applyne pro všechno*/
* {}
```
### Pseudotřídy
- volají specifické informace, které leží mimo document tree. např specifické stavy objektu
- nejpoužívanější:
	- `:hover` - když na element najedeš myší
	- `:link` / `:visited` - odkazy na stránky, na kterých uživatel nebyl / byl
	- `:checked` - když elementy jako checkboxy nebo radio buttony jsou zaškrtnuté
	- `:empty` - element, ve kterém není nic kromě whitespacu

## Stylopis
### Vložení uvnitř html souboru
- Do hlavičky dokumentu se napíše stylopis uzavřený mezi tagy `<style>zde můžeme psát styly</style>`
### Soubor
- Vytvoří se soubor, který se pojmenuje třeba `styly.css`:
```css
p {color: red}
```
Do hlavičky html dokumentu, který chci stylem ovlivnit, musíme napsat odkaz na tento soubor:
```html
<link rel="stylesheet" type="text/css" href="styly.css">
```
### Inline
styl můžeme často vpisovat přímo do atributu html tagu
```html
<span style="color:blue">blue</span>
```
### CSS preprocesory
- CSS preprocesor je nástroj, který vám ze zdrojového kódu zapsaného ve vlastní syntaxi vygeneruje CSS pro prohlížeč
- SASS, LESS a Stylus
- přináší 
	- proměnné, např. pro barvy
	- nesting selektorů pro snažší orientaci v kódu
	- úryvky kódů na použití
	- rozdělení kódu do více souborů

# Box Model
- jak se vykreslují elementy na obrazovce, a kde
- vlastnosti `content`, `border`, `margin`, `padding`
- ![[Pasted image 20260425185211.png]]
# Layout
- absolutní x relativní


- display
	- block, inline, inline-block, none
- flexbox
	- nejvíc ez technika na zarovnání elementů na stránce, nejpoužívanější v dnešní době
- grid
	- na tvorbu mřížek a layoutů celých stránek
- starý - float, position (static, relative, absolute, fixed)
- #todo tohle je dost odfláklý