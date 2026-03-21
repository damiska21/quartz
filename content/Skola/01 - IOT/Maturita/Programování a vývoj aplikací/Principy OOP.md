---
date: 2025-10-05T11:21
cssclasses:
---

třída, objekt, skládání, dědění, zapouzdření, delegování a polymorfizmus
7

## Třída  
- třída je kód odrážející okolní svět, proto můžeme vytvořit třídu pro cokoliv
- třídu tvoří atributy
- objekt je instance třídy
	- z jedné třídy může vznikat libovolný počet objektů
	- objekt vzniká pomocí konstruktoru
		- konstruktory mohou být bezparametrické (každá nová instance je identická) nebo parametrické (posíláme atributy)
### Objekt
- instance třídy
- vzniká pomocí operátoru new a názvu třídy vytvoříme objekt který přiřadíme proměnné stejného datového typu
```c#
Auto auto1 = new Auto();
```

## Skládání
```c#
//například - popsat slovně
Bod bod1 = new Bod(0,5);
Bod bod2 = new Bod(3,3);

Usecka usecka1 = new Usecka(bod1, bod2);
```

## Dědění
- objekt se může skládat z menších objektů

- tady šmíd začal vyprávět o druhohorách a o kapradinách asi 15 minut
	- Darwinova teorie o evoluci
	- "pokud někdo věří v boha tak to má jednoduchý"
	- želvy, které mají dlouhý krky aby dosáhly do větví keřů jsou skvělý
	- želva, která má krátký krk má smůlu protože se z keře nenažere
	- pak mu štefan začal vyprávět o fotosintetickém mlžovi :DDDD

- : dědění, `form1 : Form`
	- rozšiřování třídy, od které dědím

## Zapouzdření
- třída obsahuje metody, ty metody mohou být privátní, zvenku neviditelné, mohu zavolat public metodu, která si pak sama zavolá private metodu


## Delegování
- třída může delegovat některé činnosti
- objekt nekoná činnost sám, předá činnost jiné třídě na vykonání
	- třída `auto` deleguje funkci oprav třídě `mechanik`
- delegát
	- zastupuje procedůru
	- pomocí `event` lze vytvořit událost
	- pomocí `.NazevEventu += new NazevDelegata(nazevFunkce, ktera se pri eventu spusti)`

- podle IOC by si třída neměla generovat vlastní závislosti

## Polymorfismus
- když ve třídě vytvořím metodu `počítej`, se 2 parametry
- se stejným názvem a s 3 parametry vytvořím znovu
- a pak znovu se 4 parametry a všechny se chovají jinak, mohou mít kompletně jiné definice
- v type-safe jazycích jako C# to může být i stejný počet parametrů ale jiné typy (jednou to je `int`, podruhé je to `double`, třeba)

- nebo voláš metodu se stejným názvem na jiném objektu/třídě
	- `Pes.VydatZvuk()` a `Kocka.VydatZvuk()` se bude chovat jinak