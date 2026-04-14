---
date: 2026-03-27T13:33
cssclasses:
---
tohle je pro mě, kdybych chtěl někdy někde použít ty commandy. jestli tohle někdo použije na neférový dokončení úlohy, tak bych byl smutnej :(¨
to platí o všech zápisech z haxagonu tady. jestli o někom uslyšim, že je zneužívá, všechny jdou dolu, máte smolíka
# první vlajka
```

Stojíte před ohromujícími vrcholky pohoří Zynthadar. Místní lidé vyprávějí, že v těchto horách se odehrávají zvláštní a podivuhodné věci, ale to jsou určitě pouze báchorky... že?

Vydali jste se vstříc dobrodružství, ale už po chvíli začala cesta mizet, až nakonec zmizela úplně. Co teď? Nenechte se však odradit, neboť pokračování vaší cesty vede následovně: http://ip-ulohy:50706/so_it_begins/kamTeď

Akorát místo kamTeď vložte název místa, kam se chcete vydat. A co takhle mrknout do seznamu, který naleznete zde: https://raw.githubusercontent.com/dolph/dictionary/master/popular.txt


    .                  .-.    .      *     _   .
           *          /   \              _/ \       *    .
         _    .   .--'\/\_ \     `      /    \  *   ___
     *  / \_    _/ ^      \/\'__       /\/\  /\  __/   \ *
       /    \  /    .'   _/  /  \  *' /    \/  \/ .`'\_/\   .
  .   /\/\  /\/ :' __  ^/  ^/    `--./.'  ^  `-.\ _    _:\ _
     /    \/  \  _/  \-' __/.' ^ _   \_   .'\   _/ \ .  __/ \
   /\  .-   `. \/     \ / -.   _/ \ -. `_/   \ /    `._/  ^  \
  /  `-.__ ^   / .-'.--'    . /    `--./ .-'  `-.  `-. `.  -  `.
@/        `.  / /      `-.   /  .-'   / .   .'   \    \  \  .-  \%
@&8jgs@@%% @)&@&(88&@.-_=_-=_-=_-=_-=_.8@% &@&&8(8%@%8)(8@%8 8%@)%
@88:::&(&8&&8:::::%&`.~-_~~-~~_~-~_~-~~=.'@(&%::::%@8&8)::&#@8::::
`::::::8%@@%:::::@%&8:`.=~~-.~~-.~~=..~'8::::::::&@8:::::&8:::::'
 `::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.'

První vlajka: haxagon{1b3c645a4a39dc62c80cbf40aae0409cbd06d33d}
```

# druhá vlajka
`gobuster dir -u http://13.60.91.163:50706/so_it_begins/ -w wordlists/popular.txt -t 64 -q`
výsledek mountaintop

```
curl http://13.60.91.163:50706/so_it_begins/mountaintop

Blahopřeji, dorazili jste na vrchol nejvyšší hory v pohoří Zynthadar. Tato hora je vskutku nevšední - přímo na jejím vrcholu se tyčí opravdu podivuhodné stavení. 



         |~        www   
        /.\       /#^^\_     /\   
       /#  \     /#%    \   /# \
      /#%   \   /#%______\ /#%__\
     /#%     \   |=     ||  |- |
     ~~|~~~|~~   |_=_-__|'  |[]|
       |[] |_______\__|/_ _ |= |`.
^V^    |-  /= __   __    /-\|= | :;
       |= /- /\/  /\/   /=- \.-' :;
       | /_.=========._/_.-._\  .:'
       |= |-.'.- .'.- |  /|\ |.:'
       \  |=|:|= |:| =| |~|~||'|
        |~|-|:| -|:|  |-|~|~||=|      ^V^
        |=|=|:|- |:|- | |~|~|| |
        | |-_~__=_~__=|_^^^^^|/___
        |-(=-=-=-=-=-(|=====/=_-=/\
        | |=_-= _=- _=| -_=/=_-_/__\ 
        | |- _ =_-  _-|=_- |]#| I II
        |=|_/ \_-_= - |- = |]#| I II
        | /  _/ \. -_=| =__|]!!!I_II!!
       _|/-'/  ` \_/ \|/' _ ^^^^`.==_^.
     _/  _/`-./`-; `-.\_ / \_'\`. `. ===`.
    / .-'  __/_   `.   _/.' .-' `-. ; ====;\
   /.   `./    \ `. \ / -  /  .-'.' ====='  >
  /  \  /  .-' `--.  / .' /  `-.' ======.' /


Nakoukli jste dovnitř a klidným hlasem vás přivítal malý starý mužíček. Úplně, jako kdyby věděl, že přijdete. Nabídl vám útočiště na noc, avšak s jednou podmínkou - musíte mu rozluštit tajemný text, nad nímž se už dlouho trápí. Prý se jedná o nějaký recept, který je napsaný anglicky.

yai ccdl zskx lo sozbwr 1 Zszbwr Ioxn, 1 Ylugzyjizu Sydoz Grcue, mbj 1 Qstqf Hiltxs. Yyl ub o Hlwwubm Mlazr oh s wqzr-pwnfwrulep oxys azr gxv tts Culed Punllq hu nze xccyj sxcz. Jdaos zbw Nqhnyj Wmfz cf tts zih sxcz ufd ioon xod wz ng tdotmxoda zbw wmhkl anfc Gqcwmfj Jgtuct. Hwxf, ojx lhq Urcktqfohy Mqzuh Kluqk ng tts Gqcwmfj Jgtuct ufd ioon xod hny lrmbyzgryozcgn fc lcfiev. Bialm! Muoj Izgzuft Tsgflh Bczcgn ug tio caavfwtq otx jemre ng bq quhkuysj. Xjizy aj snp tkyd tts xybuhstulizu kzxeohy ix tts viliab iimres zbjogun sgud puxq.

Pokud si myslíte, že jste text rozluštili, pošlete POST požadavek na http://ip-ulohy:50706/so_it_begins/mountaintop/answer

podle následujícího vzoru:

################################################
POST /so_it_begins/mountaintop/answer HTTP/1.1

text="rozluštěný text"
################################################

Druhá vlajka: haxagon{177c877e9a78a12a8fc3db711faa11549f66a1ca}
```
# třetí vlajka


```
curl -X POST "http://13.60.91.163:50706/so_it_begins/mountaintop/answer" \
--data-binary $'text=you will need to gather 1 Nether Wart, 1 Glistering Melon Slice, and 1 Water Bottle. Set up a Brewing Stand in a well-ventilated area and add the Water Bottle to the lower slot. Place the Nether Wart in the top slot and wait for it to transform the water into Awkward Potion. Next, add the Glistering Melon Slice to the Awkward Potion and wait for the transformation to finish. Voila! Your Instant Health Potion is now complete and ready to be consumed. Drink up and feel the rejuvenating effects of the potion course through your body.'
```

```

Děkuji, že jsi mi pomohl s rozluštěním toho tajemného textu. Jsem rád, že jsi přišel. Připravil jsem ti místnost pro odpočinek a klidný spánek, takže až budeš mít chuť, můžeš se prospat.

                    ____ 
                  .'* *.'
               __/_*_*(_
              / _______ \
             _\_)/___\(_/_ 
            / _((\- -/))_ \
            \ \())(-)(()/ /
             ' \(((()))/ '
            / ' \)).))/ ' \
           / _ \ - | - /_  \
          (   ( .;''';. .'  )
          _\"__ /    )\ __"/_
            \/  \   ' /  \/
             .'  '...' ' )
              / /  |  \ \
             / .   .   . \
            /   .     .   \
           /   /   |   \   \
         .'   /    b    '.  '.
     _.-'    /     Bb     '-. '-._ 
 _.-'       |      BBb       '-.  '-. 
(________mrf\____.dBBBb.________)____)

Ale než se vrhneš do postele, měl bych ti sdělit ještě jednu důležitou věc. Vím, že jsi se vydal na cestu, aby jsi vysvobodil princeznu, a proto bych ti chtěl poskytnout další informaci, která ti může být užitečná. Vím jak se dostat do zámku, kde přebývá. Tady je cesta k rozcestí před zámkem. Dál už trefíš sám.

http://ip-ulohy:50706/so_it_begins/mountaintop/signpost_cu4gktWYNb


Třetí vlajka: haxagon{c84a589a61770ed6a3e107d7f2a97476372675c8}
```


```
curl 13.60.91.163:50706/so_it_begins/mountaintop/signpost_cu4gktWYNb

Na rozcestí jste zpozorovali něco co jste jakživ neviděli. Krásnou vílu, jejíž křídla se třepotala v rytmu jejího vzdušného tance. Nikdy byste neveřili, že opravdu existují a teď je jedna přímo před vámi!

      .--.   _,
  .--;    \ /(_
 /    '.   |   '-._    . ' .
|       \  \    ,-.)  -= * =-
 \ /\_   '. \((` .(    '/. '
  )\ /     \ )\  _/   _/
 /  \\    .-'   '--. /_\
|    \\_.' ,        \/||
\     \_.-';,_) _)'\ \||
 '.       /`\   (   '._/
   `\   .;  |  . '.
     ).'  )/|      \
     `    ` |  \|   |
             \  |   |
              '.|   |
                 \  '\__
                  `-._  '. _
                     \`;-.` `._
                      \ \ `'-._\
                       \ |
                        \ )
                         \_\

Po krátkém představení jste víle řekli, že hledáte zámek, ze kterého chcete vysvobodit princeznu. Víla vám odpověděla, že takový zámek zná a dokonce tam byla jedonu sama vězněna, naštěstí se jí podařilo uniknout.

"K zámku se dostaneš tudy: http://ip-ulohy:50706/so_it_begins/mountaintop/signpost_cu4gktWYNb/castle_IhbND0uhuv"

Než mě ale opustíš musím ti říct jednu důležitou věc, která se ti bude hodit až na konci tvé cesty! Princezninu komnatu střeží hrozivé monstrum. Ani neztrácej síly na něj tasit meč. Zmůžeš jej pouze s jedinou magickou zbraní. Nepamatuju si přesně která to je, ale všechny najdeš zde:

Stačí pouze poslat GET požadavek na http://ip-ulohy:8123/findWeapon?weaponId=1234

Jedná se o zjednodušený server s databází všech itemů z World of Warcraft (je jich přes sto tisíc). Zbraň která porazí monstrum má id mezi 112500 a 113500.
```

```
curl 13.60.91.163:50706/so_it_begins/mountaintop/signpost_cu4gktWYNb/castle_IhbND0uhuv

Rozloučili jste se s vílou a vydali jste se na další krok vaší nebezpečné cesty. Po týdnech útrap jste konečně dorazili k zámku, kde se skrývá vaše vysněná princezna.

                           o                    
                       _---|         _ _ _ _ _ 
                    o   ---|     o   ]-I-I-I-[ 
   _ _ _ _ _ _  _---|      | _---|    \ ` ' / 
   ]-I-I-I-I-[   ---|      |  ---|    |.   | 
    \ `   '_/       |     / \    |    | /^\| 
     [*]  __|       ^    / ^ \   ^    | |*|| 
     |__   ,|      / \  /    `\ / \   | ===| 
  ___| ___ ,|__   /    /=_=_=_=\   \  |,  _|
  I_I__I_I__I_I  (====(_________)___|_|____|____
  \-\--|-|--/-/  |     I  [ ]__I I_I__|____I_I_| 
   |[]      '|   | []  |`__  . [  \-\--|-|--/-/  
   |.   | |' |___|_____I___|___I___|---------| 
  / \| []   .|_|-|_|-|-|_|-|_|-|_|-| []   [] | 
 <===>  |   .|-=-=-=-=-=-=-=-=-=-=-|   |    / \  
 ] []|`   [] ||.|.|.|.|.|.|.|.|.|.||-      <===> 
 ] []| ` |   |/////////\\\\\\\\\\.||__.  | |[] [ 
 <===>     ' ||||| |   |   | ||||.||  []   <===>
  \T/  | |-- ||||| | O | O | ||||.|| . |'   \T/ 
   |      . _||||| |   |   | ||||.|| |     | |
../|' v . | .|||||/____|____\|||| /|. . | . ./
.|//\............/...........\........../../\\\

Bohužel vás přivítala hlavní brána, která byla silně střežená a neproniknutelná. Avšak po pečlivém průzkumu okolí jste objevili další vchod, který nebyl střežen, ale byl zamčen zámkem s šestičíselným kódem.

Dveře se pokuste otevřít POST požadavkem na http://ip-ulohy:50706/so_it_begins/mountaintop/signpost_cu4gktWYNb/castle_IhbND0uhuv/door

podle následujícího vzoru:

##################################################################################
POST /so_it_begins/mountaintop/signpost_cu4gktWYNb/castle_IhbND0uhuv/door HTTP/1.1
Cookie: code=123456
##################################################################################
```

#todo udělat zápis na ffuf
`ffuf -w <(seq -w 000000 999999) -u http://13.49.46.58:50706/so_it_begins/mountaintop/signpost_cu4gktWYNb/castle_IhbND0uhuv/door -H "Cookie: code=FUZZ" -mc all -fc 401 -X POST`

```
curl -X POST "http://13.49.46.58:50706/so_it_begins/mountaintop/signpost_cu4gktWYNb/castle_IhbND0uhuv/door" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Cookie: code=155616"

Konečně... Uspokojující zvuk cvaknutí zámku se ozval a dveře se zvolna otevřely. 
 ______________
|\ ___________ /|
| |  /|,| |   | |
| | |,x,| |   | |
| | |,x,' |   | |
| | |,x   ,   | |
| | |/    |%==| |
| |    /] ,   | |
| |   [/ ()   | |
| |       |   | |
| |       |   | |
| |       |   | |
| |      ,'   | |
| |   ,'      | |
|_|,'_________|_|

Teď se stačí jen nenápadně vplížit dovnitř: http://ip-ulohy:50706/so_it_begins/mountaintop/signpost_cu4gktWYNb/castle_IhbND0uhuv/inside_TJCyMdUQPj

Čtvrtá vlajka: haxagon{063f24da9e434ab86647c988f4d298f68a359c76}
```


```
curl http://13.49.46.58:50706/so_it_begins/mountaintop/signpost_cu4gktWYNb/castle_IhbND0uhuv/inside_TJCyMdUQPj

Uvnitř zámku jste jednoduše splynuli s okolím. Stačí na sebe neupoutat moc pozornosti a všechno proběhne hladce. 

Stoupáte po schodech do nejvyššího poschodí věže - komnata princezny už je nadosah, ale najednou na vás vybafnula z pozarohu stvůra tak ohavná, až vás z toho zamrazilo.

                                             ,--,  ,.-.
               ,                   \,       '-,-`,'-.' | ._
              /|           \    ,   |\         }  )/  / `-,',
              [ ,          |\  /|   | |        /  \|  |/`  ,`
              | |       ,.`  `,` `, | |  _,...(   (      .',
              \  \  __ ,-` `  ,  , `/ |,'      Y     (   /_L\
               \  \_\,``,   ` , ,  /  |         )         _,/
                \  '  `  ,_ _`_,-,<._.<        /         /
                 ', `>.,`  `  `   ,., |_      |         /
                   \/`  `,   `   ,`  | /__,.-`    _,   `\
               -,-..\  _  \  `  /  ,  / `._) _,-\`       \
                \_,,.) /\    ` /  / ) (-,, ``    ,        |
               ,` )  | \_\       '-`  |  `(               \
              /  /```(   , --, ,' \   |`<`    ,            |
             /  /_,--`\   <\  V /> ,` )<_/)  | \      _____)
       ,-, ,`   `   (_,\ \    |   /) / __/  /   `----`
      (-, \           ) \ ('_.-._)/ /,`    /
      | /  `          `/ \\ V   V, /`     /
   ,--\(        ,     <_/`\\     ||      /
  (   ,``-     \/|         \-A.A-`|     /
 ,>,_ )_,..(    )\          -,,_-`  _--`
(_ \|`   _,/_  /  \_            ,--`
 \( `   <.,../`     `-.._ _ _,-`


Rychle jste se schovali a promýšlíte plán. "To musí být ta, jak o ní mluvila víla." Jestli si dobře vzpomínám, tak říkala, že ji zmůže pouze jedinná magická zbraň. Ještě že mi tenkrát poradila, kde takové zbraně najít :)

Na monstrum útočte pomocí POST požadavku
##########################################
POST /so_it_begins/mountaintop/signpost_cu4gktWYNb/castle_IhbND0uhuv/inside_TJCyMdUQPj/monster HTTP/1.1
Content-Type: application/x-www-form-urlencoded

weapon=jméno-zbraně
##########################################

Jako odpověď se vám vrátí aktuální životy monstra + poznámka jestli používáte správnou zbraň nebo ne. Pokud mu daná zbraň nic neudělá, tak budou životy stále 10/10. Pokud mu však ublíží, tak jste nalezli správnou zbraň. Opakujte request s danou zbraní až stvůru zabijete.

! Content-Type je důležité u některých nástrojů specifikovat (například u ffuf) !
```

```
curl -X POST http://13.49.46.58:50706/so_it_begins/mountaintop/signpost_cu4gktWYNb/castle_IhbND0uhuv/inside_TJCyMdUQPj/monster -H "Content-Type: application/x-www-form-urlencoded" -d "weapon=karabor-starsinger-staff"

Gratuluji! Příšera leží nehybně na zemi a princezna vás už vítá s otevřenou náručí. "Děkuju ti, zachránče... I když vím, že bych ti měla dát růži jako odměnu, mám pro tebe něco ještě lepšího. Tady máš pátou vlajku. haxagon{e2a7f72f5dbc1f4993dc00c768d4839791bf1a22}"

          /\                        
     __   ||            ...         
    /  \  ||           (()))        
    L {=) ||           {' ())       
     ) -  ||            )_ (()      
   (_   \====          (   (_)      
   | (___/{ }           \ _) |      
    \____\/)          {)=== /\      
    |    |     haxagon{  |    |     
    |_/\_|               |    |     
     |  |                |    |     
      ) )\               |    |     
    _/| |/               |    |     
   ( ,\ |_               '~~~~'     
    \_(___)               _/Y

                        ...
               ___     (()))
              / /_\    {' ())
              L( '}     )_ (()
               ) (_    (   (_)
             (_  / }{)===='_/
             | `/\/\     |   \
             L___/ |     |    |
              |  . \     |    |
              |_/ \_\    |    |
              ( ____ )   |    |
               | | | |   |    |
           ( --' | \ |_  '~~~~'
           /_/---) (___)  _/Y



                     (\/)
                      \/
                
                   ___  ...
                  / /_\(()))
                  L( '}{' ())
                  ) (   )_ (()
                (_   \ (   (_)
                | (__'__\_) |
                 \___|_(}==/ \
                 |    |  |    |
                 |_/\_|  |    |
                  |  |   |    |
                   ) )\  |    |
                 _/| |/  |    \
                ( ,\ |_  '~~~~/7
                 \_(___)  _/Y
```