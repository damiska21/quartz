---
date: 2026-03-10T11:43
cssclasses:
---

- vybrat ovládací prvek, (formulář) vybral název události (Click), poklikáním se vytvoří hlavička obslužné metod
	- má dva argumenty - object sender a EventArgs e
	- `Form frm = (Form)sender;` - přetypování na daný typ senderu
		- tady tedy jde editovat objekt, který poslal event
	- `e` - udává informace o události, např polohu myši při kliknutí

- v designéru se přidala
	- `this.Click += new System.EventHandler(this.Form1_Click);`

- on otevře nějaký jeho kód, který musíme popsat. ve třídě ukazoval Trezor dědící od skříně, určitě to mam někde popsaný
	- ručně přidává obslužné metody

- pomocí událostí třída reaguje a změnu stavu, případně na její pokus