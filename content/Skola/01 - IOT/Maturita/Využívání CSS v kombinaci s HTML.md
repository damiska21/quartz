---
date: 2025-10-29T10:43
cssclasses:
---

- používaný pro stylování dokumentů psaných v markup jazycích jako HTML nebo XML
- společně s HTML a Javascriptem mezi hlavními způsoby psaní stránek
### Zápis
- Přímý styl - Styl zapisujeme přímo jako atribut elementu - style=""
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