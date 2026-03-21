---
date: 2025-11-23T13:18
cssclasses:
---
# Interface
- samostatná třída definující **společné rozhraní tříd**
* obsahuje veřejné metody nějakého objektu
* ovládají se přes něj třídy, které od něj implementujou
* třídy implementují interface
* nedá se od něj dědit.
* třída může implementovat libovolný počet interfaců najednou
	* narozdíl od dědění, které je pouze od jedné třídy
* v bluej se nemusí psát implements a jde to spojit graficky šipkami, jde na ní kliknout vlevo nahoře pod nová třída

## Příklad
```java
// interface ptáka
public interface IPtak
{
    public void Pipni();
}

//třída, která implementuje interface
public class Vrana implements IPtak
{
  @Override
  public void Pipni() {System.out.println("KráKrá");}
}
```
# Servant (Služebník)
* přidání dodatečné funkcionality skupině tříd, aniž bychom museli tyto třídy měnit a dávat do nich stejný/podobný kód
* instance Služebníka obsluhují instance tříd požadujících novou funkčnost
* např. posunutí geometrického tvaru o x

# Generické třídy
* umožňují **parametrizovat některý datový člen**
* Výhodou tohoto přístupu je znovupoužitelnost kódu 
* Typickým příkladem jsou kolekce, které mohou udržovat jakýkoliv typ a zároveň být **strongly typed** (specifikovat přesně jaký typ objektu obsahují). 

## Příklad
```C#
/// <summary>
/// Třída s parametrem typu barvy (jak budeme barvu reprezentovat).
/// </summary>
/// <typeparam name="TColor"></typeparam>
class Car<TColor>
{
    private TColor m_color;
    
    public Car(TColor color)
    {
        // V tomto příkladě nám někdo musí sdělit defaultní barvu, protože v době psaní
        // třídy ji nemůžeme určit.
        m_color = color;
    }
    
    public void ChangeColor(TColor color)
    {
        m_color = color;
    }
    
    public TColor GetColor()
    {
        return m_color;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // barvu budeme ukládát reprezentovat stringem
        Car<string> car1 = new Car<string>("Red");
        // barvu budeme reprezentovat strukturou Color, která je součástí C#/.NET
        Car<Color> car2 = new Car<Color>(Color.Red);
    }
}
```
# Messenger (přepravka)
* používá se ke sloučení několika samostatných informací do jednoho objektu
* počet atributů = počet přenášených hodnot
* atributy třídy jsou veřejné konstanty
  - lze k nim přistupovat přímo
  - nelze je dále měnit
* lze definovat přístupové metody (gettery), příp. další užitečné metody (Ale potom se z přepravky spíše přibližuje běžným objektům)
* atributy třídy jsou nastaveny v konstruktoru, dále je nelze měnit (bezpečné předání dat)

## Příklad
```java
public class Pozice
{
  public final int x;
  public final int y;

  public Pozice( int x, int y )
  {
    this.x = x;
    this.y = y;
  }
}
```