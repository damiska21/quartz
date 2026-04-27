---
date: 2025-10-04T16:47
cssclasses:
---
## HTML
- Název značkovacího jazyka používaného pro tvorbu webových stránek, které jsou propojeny hypertextovými odkazy. HTML je hlavním z jazyků pro vytváření stránek v systému World Wide Web, který umožňuje publikaci dokumentů na Internetu. Dnes se používá HTML5.
- Klient-server architektura

### HTML Tagy
- Tagy = značky
- HTML soubor je obyčejný text obalený značkami, které se nazývají tagy
- Tagy určují, jak bude text vypadat, tedy jakou bude mít formu
- Všechny tagy jsou uzavřeny v <ostrých závorkách>
- Co není v ostrých závorkách, je text, který se bude zobrazovat
- Tagy jsou párové a nepárové
	- párové - každý má začátek a konec, (`<h1></h1>`)
	- nepárové - jsou jenom jeden, nic neobalují (`<img>, <br/>`)
		- v html5 to lomítko na konci být může či nemusí, [[Webové prezentace ve formátu HTML5#XHTML|více]]
- Příklady tagů:
	- `<h1>`, `</h1>`
	- vymezení nadpisu první úrovně (lze použít až šest úrovní nadpisů tedy až `<h6>`).
    - Vykreslují se různě velké podle důležitosti.
- \<p>, \</p>
      - vymezení odstavce. Možná vůbec nejpoužívanější tag. Po jeho konci prohlížeč automaticky zalomí řádek a udělá vertikální mezeru.
- \<b>, \</b>
	- **ztuční text**
- \<i>, \</i>
	- *zkurvízuje text*
- \<span>, \</span>
	- dvojice tagů vymezující nějak odlišný text
	- jako div, ale pro inline text, takže uvnitř `<p>`
	- snadno stylovatelný pomocí CSS nebo JS
- `<div></div>`
	- odděluje sekci stránky, primárně na práci s CSS
- \<br>
	- Zalomí řádek. Text po tomto tagu bude vždy začínat na novém řádku, ale není to nový odstavec.
### Formuláře
- obaluje tag  `<form>`
	- atributy
		- `action` - akce na vykonání, kam má výsledek být poslán na vyhodnocení
		- `method` - [[HTTP - hyper text transfer protocol|HTTP]] metoda - GET či POST, nebo jiné ale tohle je main
	- vstupní pole - `<input>`
		- typy - text, password, submit, checkbox, radio
		- html5 typy - email, date, number
			- přinášejí automatickou validaci vstupu na klientské straně, web to uživatele nenechá odeslat
### Nové HTML5 tagy
- sémantické - zvyšují přehlednost kódu i jeho accessibility
	- `<header>`
		- určuje úvodní obsah stránky
	- `<aside>
		- na postraní stránky - navigation sidebar, reklamy
	- `<nav>`
		- pro hlavní navigační blok, čtečky obrazovek ho mohou přeskočit
	- `<footer>
		- pro patičku stránky, copyrighty, kontakty apod.
	- `<main>`
		- pro hlavní unikátní obsah stránky
	- `<article>`
		- pro jednotlivé části hlavního obsahu
	- `<section>`
		- určuje sekci v dokumentu
		- není specifikované jestli by se mělo používat section uvnitř articlu nebo obráceně, je to preference
	- jsou další, ale tyhle jsou ty hlavní

### Meta tagy
- Definují metadata HTML dokumentu
- Metadata nejsou zobrazena na stránce
  ```
  <meta charset="UTF-8">
  <meta name="description" content="Popis obsahu webové stránky">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

### Viewport
- Prohlížeč na mobilních zařízení stránku zmenšuje, aby se na display vešla celé
- Většina webů je ale navržená tak, aby byla responzivní a je nežádoucí, aby prohlížeč měnil velikost, proto využijeme viewport
```html
  <meta name="viewport" content="width=device-width,initial-scale=1">
```

### SEO
- Search Engine Optimization (zkratka SEO, optimalizace pro vyhledávače nebo též optimalizace nalezitelnosti)
- metodika vytváření a upravování webových stránek takovým způsobem, aby jejich forma a obsah byly vhodné pro automatizované zpracování v internetových vyhledávačích
- cílem SEO je získat ve výsledcích vyhledávání lepší pozici (odkaz na stránky bude zobrazen mezi prvními), a tím i četnější a zároveň cílené návštěvníky

## HTML struktura
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Má první stránka</title>
  </head>

  <body>
    Moje první html stránka.
    A nějaké další texty.
  </body>
</html>
```

##### Validace
- Ověřování zdrojového kódu, zda je správně napsán podle standardů.
- V případě nalezení chybného zápisu napíše chybu.
- Buď ji validátor sám opraví, nebo to musíte přepsat vy. (Záleží na validátoru)
- [W3C validátor](https://validator.w3.org/)

## XHTML
* eXtensible hypertext markup language- rozšiřitelný hypertextový značkovací jazyk
* snaha zpřísnit zápis html aby seděl do standartů xml
* použití se masově neprosadilo, ale jeho myšlenky jsou považovány za good practice
* Striktnější než html
	* Nepodporuje křížení tagů (např. `<b><i>text</b></i>` - špatně, `<b><i>text</i></b>` - správně)
	* Nepárové tagy musí končit lomítkem - `<br/>`
	* Všechny atributy mají hodnoty v uvozovkách
	* Dokument by měl mít XML prolog `<?xml version="1.0" encoding="UTF-8"?>`

## Reference
* [Jak psát web - HTML, CSS, JS](https://www.jakpsatweb.cz/) (cs)
* [W3Schools - HTML, CSS, JS, XML, SQL, PHP, ...](https://www.w3schools.com/) (en)
* [YouTube - Fireship - SEO for Developers in 100 Seconds](https://youtu.be/-B58GgsehKQ) (en)