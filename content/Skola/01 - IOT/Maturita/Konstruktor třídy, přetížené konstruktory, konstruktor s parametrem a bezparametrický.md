---
date: 2026-03-04T12:32
cssclasses:
---

- část kódu ve třídě, která je *až na vyjímky* public
	- existují návrhové vzory, které nezveřejňují konstruktor, např. singleton
- nemá žádný návratový typ
- název má stejný jako je název třídy
- **konstruktor inicializuje třídu**
	- přiřazuje hodnoty atributům

/- konstruktor bez parametru
- 
\\- přetížené konstruktory
- v C# - `this.Barva = Barva;`
	- this. určuje, že mluvíme o atributu
	- nepotřebujeme vymýšlet další názvy parametru
	- atributu je přiřazena hodnota parametru konstruktoru

- konstruktorů můžeme mít tolik, kolik máme atributů + jeden bezparametrický

- vymyslet u maturity nějakou třídu a popsat nějaké konstruktory