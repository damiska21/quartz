---
date: 2025-11-23T13:19
cssclasses:
---

**Enum** - je návrhový vzor, který umožňuje vytvořit náš vlastní výčtový datový typ. Je ordinální - to znamená setříděné (viz. projekt "enum" v BlueJ ze třeťáku; had z druháku v C# - enum použité pro vytvoření návrhového typu značícího směry; datový typ boolean) Všechny hodnoty datového typu který je výčtový, musí být vyjmenovány - true, false; nebo nahoru, dolů, doleva, doprava.

**Singleton** je třída, která umožňuje vytvoří pouze jedinou instanci, používá se tam, kde něčeho nechceme více (např. plátno - canvas)  
Nemá možnost volání konstruktoru - konstruktor je totiž privátní, veřejný konstruktor nahrazuje metoda getInstace (getInstance je funkce která vrací instanci své vlastní třídy - je to tedy tovární metoda)

**Builder** je návrhový vzor  
Builder se používá, když má třída velké množství atributů  
Úkolem Builderu je sestavit třídy, která má velké množství atributů. Ta potom už nemusí mít konstruktor.  
Builder má tovární metody (ty mají služby) - tyto mají stejné atributy jako třídy kterým je nastavují.  
Na konci je metoda Build, vrací již jednotlivé atributy, které builder vytvořil.

**Memento** si pamatuje předchozí/několik posledních (případně následujících) vstupů od uživatele.   
Slouží poté k obnovení těchto dat. Např. ctrl+z ve Wordu.  
Dělá to bez porušení zapouzdření

Používat „klávesy“ a „znaky“, nikoliv „psaní textu“ a podobné

**Jednosměrný uzlový seznam** je zásobník. K vytvoření zásobníku je třeba vytvořit dvě třídy - Uzel (pamatuje si hodnotu libovolného datového typu, to je jeho hlavní účel a další následující uzel) a Zádobník (pamatuje si první a poslední uzel a počet uzlů)   
Vložit uzel do zásobníku znamená vytvořit instanci. Když je uzel poslední, má jako hodnotu dalšího uzlu "null"