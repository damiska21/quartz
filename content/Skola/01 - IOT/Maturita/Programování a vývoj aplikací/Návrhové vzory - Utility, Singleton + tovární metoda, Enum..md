---
date: 2025-11-23T13:19
cssclasses:
---
# Utility (Knihovní třída)
* Není třeba vytvářet instanci třídy a dokonce se to považuje za nežádoucí
* Nemusí se od ní dědit

## Výhody
* Dobrá testovatelnost
* Zvýšení přehlednosti (metody se sdružují na jednom jasně určeném místě)
* Je dostupná celému systému
* Může snižovat počet duplicit podobného kódu (Pokud je dostatečně obecná)

## Nevýhody
* Jde proti základní myšlence objektového programování (umisťování dat a funkcí s nimi souvisejících blízko sebe.)

## Postup
1. Vytipovat související statické metody, které by mohly být užitečné i jiným částem systému (např. IsNumber, IsText)
2. Vytipované metody přesunout do nově vytvořené knihovní třídy
3. Zamezit možnosti vytvořit instanci knihovní třídy (např. jediný privátní konstruktor)
4. Zamezit možnosti vytvořit potomka knihovní třídy (např. klíčové slovo final)
5. Původní volání přesunutých metod nahradit voláním metod v knihovně

# Singleton
* Má jenom jednu globálně sdílenou instanci třídy (A nesmí být možné vytvořit další)
* Používá se např. u databází (je třeba jenom jedno připojení/instance)

## Základní implementace
* má společný soukromý konstruktor, který zaručí, že nedojde k vytvoření další instance. 
* Požadovaná instance se vytvoří uvnitř třídy a její odkaz se uloží do statického atributu.

## Příklady
```java
public class Singleton {
    
    private static final Singleton instance = new Singleton(); // Instance se vytvoří ihned po inicializaci třídy
    
    private Singleton(){} // Konstruktor je privátní, aby nebylo možné vytvářet instance z jiných tříd

    public static Singleton getInstance(){
        return instance;
    }
}
```

```java
public class Singleton {

   private static Singleton instance;
   
   private Singleton(){} // Konstruktor je privátní, aby nebylo možné vytvářet instance z jiných tříd
   
   public static Singleton getInstance(){
   
      if(instance == null)
         instance = new Singleton(); // Instance se vytvoří až při zavolání funkce - getInstance()
         
      return instance;
   }
}

```

# Tovární metoda
* **Je to funkce, která vrací instanci své vlastní třídy**
* její účel je vytvořit novou instanci nějakého objektu a vytvořenou instanci vrátit
* Druh objektu i jeho počáteční vlastnosti jsou dané přijatými parametry, případně i stavem objektu, který tovární metodu poskytuje.

## Instanční tovární metoda
* používá se tam, kde je vytvářený objekt nějakým způsobem odvozený od aktuální instance třídy
* používá se hlavně u konstantních tříd

### Příklad
```java
public class Rectangle {
  private final int a;
  private final int b;

  public Rectangle(int a, int b) {
    this.a = a;
    this.b = b;
  }

  // první dvě tovární metody vytváří novou instanci se změnou jednoho rozměru

  public Rectangle setA(int newA) {
    return new Rectangle(newA, this.b);
  }

  public Rectangle setB(int newB) {
    return new Rectangle(this.a, newB);
  }

  // další tovární metoda vytváří obdélník s násobenými rozměry

  public Rectangle grow(int factor) {
    return new Rectangle(this.a * factor, this.b * factor);
  }
}

```

## Statická tovární metoda
* Všechny informace nutné pro vytvoření objektu dostane jako parametry.
* ze statických továrních metod lze vytvořit tovární třídu

### Tovární třída
* obsahuje zpravidla spolu související statické tovární metody

### Příklad
```java
public static Rectangle createRectangle(int a, int b) {
    return new Rectangle(a, b);
}

public static Rectangle createSquare(int a) {
    return new Rectangle(a, a);
}
```
# Enum (Výčtový typ)
* datový typ tvořený konečnou omezenou množinou pojmenovaných hodnot.
* Každý člen výčtového typu je tvořen identifikátorem a konstantou
* je určený pro omezenou neměnnou sadu nazývaných hodnot (např. dny v týdnu, měsíce)

## Výhody
* větší přehlednost, čitelnost a srozumitelnost kódu
* Zlepší se nejen sebe-dokumentace ale i bezpečnost celého kódu. 
* Samotné užití výčtového typu se velmi často pojí s konstrukcí switch-case.

## Příklad

```java
public enum Mesic
{
     NEURCENY, LEDEN, UNOR, BREZEN, DUBEN, KVETEN, CERVEN,
     CERVENEC, SRPEN, ZARI, RIJEN, LISTOPAD, PROSINEC

}
```