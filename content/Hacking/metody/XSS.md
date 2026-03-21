---
date: 2026-01-27T20:42
cssclasses:
---
[Cross-Site Scripting (XSS) Cheat Sheet - 2026 Edition | Web Security Academy](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet)
[What is cross-site scripting (XSS) and how to prevent it? | Web Security Academy](https://portswigger.net/web-security/cross-site-scripting)
https://cheatsheetseries.owasp.org/cheatsheets/XSS_Filter_Evasion_Cheat_Sheet.html

---
- umožňuje útočníkovi circumventnout same origin policy a dělat akce, které správně může dělat pouze oběť
- xss může vykonat jakoukoliv akci, kterou může vykonat uživatel, získat veškerá data ke kterým má přístup uživatel

- `alert()` je nejvíce common, ale chrome ho občas blokuje takže je nutné použít `print()`
```html
<script>alert()</script>
```
můj fav, je víc versatilní:
```html
<img src=1 onerror=alert(1)>
```

- způsob, pomocí kterého se html zobrazí zpět na klientu
	- `<script>` uvnitř kolonky jména, který se spustí 

- typy
	- persistent (stored) - exploit se načítá z databáze
	- non persistent (reflected) - exploit přichází ze současného reqestu
	- DOM - klient side
## Reflected
request:
`https://insecure-website.com/status?message=<script>/*+Bad+stuff+here...+*/</script>`
a na stránce:
`<p>Status: <script>/* Bad stuff here... */</script></p>`
## Stored
- to samý jako reflected, ale místo aby se exploit načítal ze současného http requestu tak se načítá z databáze, třeba reviews na stránce, kde uložil exploit útočník
## DOM
- exploit klient side javascriptu 

ukázka:
kód:
`html += "<img src='/static/level3/cloud" + num + ".jpg' />";`
payload:
` ' onerror=alert("nig")>`

```
onload="startTimer('{{ timer }}');"

);alert()
10');alert('

') &#x22; onmouseover=alert("nig")

```
