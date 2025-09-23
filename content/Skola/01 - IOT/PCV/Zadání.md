---
date: 2025-09-22T11:04
cssclasses:
---
2xServer Windows + klient +Linux server 

========================== 

Vyberte si vhodný virtualizační nástroj, doporučuji VirtualBox, který je zdrarma, nebo VMWare 

Všechny nainstalované počítače budou ve VNITŘNÍ SÍTI!!!! 

K veškerému SW nepotřebujete licenční klíče, buď jsou volně ke stažení nebo lze použit trial verzi. 

Nainstalujte 2x server Windows server 2019 (2-3Gb RAM v případě potřeby můžete i více, HDD stačí 50GB) , instalace v ISO souboru na sdíleném disku 

Nainstalujte Linuxový webový server ubuntu (1-2Gb RAM v případě potřeby můžete i více, , HDD stačí 50GB) , instalace v ISO souboru na sdíleném disku, nebo na oficiálním webu 

Nainstalujte klienta Windows (2Gb RAM v případě potřeby můžete i více, , HDD stačí 50GB), instalace v ISO souboru na sdíleném disku 

## Windows Server 1:  

Na prvním serveru nainstalujte novou doménu název SPOS 

V AD bude - min 1x administrátorský učet, OU SPRAVCE 

- min 10x účet domain user, OU ZAMESTNANCI (Zaměstnance rozdělte do 5 OU – Učetní, THP, Vedení, učitelé, záci. Každá OU bude vlastnit 2 uživatelské účty) 

- Každý uživatelský učet bude mít vlastní domovskou složku s ochranou proti vstupu cizích uživatelů 

 V případě potřeby zaveďte uživatele zálohování (bez domovské složky) 

- Domovské složky budou členěny do stromové struktury (pomocí OU) dle členění zaměstnanců 

- Dále AD bude obsahovat organizační jednotku pro skupiny (alespoň 5ks skupin), a organizační jednotku pro sdílené složky (minimální počet 5ks sdílených složek viz níže), organizační jednotku pro tiskárny (1ks) 

Na místním disku C: (použijte sdílení pomocí odepírání práv, práva nastavujte pro vytvořené skupiny) 

- Home (H:) – zabezpečena proti vstupu nepřihlášeného uživatele 

- Install (I:)- v této složce mohou všichni data pouze číst, jen správce má možnost data mazat a upravovat 

- Faktury (F:) – vstup zamezte všem zaměstnancům krom THP a účetní, ty v této složce mohou ukládat, měnit a mazat veškerý obsah složky) 

- Ucetnictvi (U:) – vstup zamezte všem zaměstnancům krom THP a účetní, ty v této složce mohou ukládat, měnit a mazat veškerý obsah složky) 

- Spolecne_dokumenty (S:) – zde mohou všichni zaměstnaci ukládat sdílené dokumenty 

- Zalohy (Z:) – přístup pouze správce, a software pro zálohování 

Vhodně nastavte oprávnění pro jednotlivé skupinky z AD na sdílených jednotkách( viz popis u sdílených složek) 

Všechny tyto sdílené složky budou namapované jednotlivým uživatelům, dle Vašeho rozhodnutí. 

Dále nainstalujte DHCP a ověřte funkčnost na lokální stanici 

V GPE: 

- jednou zásadou vyřešte mapování jednotek a tiskárny (tiskárna viz níže) 

- druhou zásadou vyřešte politiky pro všechny uživatele (všichni zaměstnanci krom administrátora budou mít zakázaný přístup do ovládacích panelů a nastavení, dále pak zákaz ikon na ploše) 

Na serveru bude nainstalován poštovní server Kerio (naleznete v souboru maturita.iso, nebo lze zkušební verzi stáhnout z internetu. Starší verze se jmenuje kerio mail server, nová pak kerio connect) 

- každý uživatel bude míst vlastní poštovní schránku 

- omezení poštovní schránky kapacitou bude na 1Gb 

- vhodně nakonfigurujte firewall 

Na serveru bude nainstalovaný role tiskového serveru 

. jako zdroj tiskárny nastavte sw PDFCreator (Naleznete v maturita.iso , nebo lze stáhnout z internetu) 

- tiskárnu publikujte v adresáři a připojte ji každému uživateli (nejlépe pomocí politiky v GPE) 

- vhodně nastavte oprávnění pro (print operators, apod., skupinu everyone z tisku odeberte) 

Vhodně zabezpečte server pomocí antiviru, firewallu apod. omezte přihlášení pouze na administrátory. 

## Windows Server 2: 

Zajistěte zálohování dat pomocí softwarového raidu (mirror) 

Tento server nakonfigurujte jako záložní řadič domény SPOS 

## Linuxový server 

Linuxový server založte na ubuntu server (verzi nechám na Vás buď ji naleznete ve sdílené složce, nebo si můžete stáhnout aktuální verzi ze oficiálního webu) 

Linuxový server bude sloužit jako webový server. 

Na webový server následně nainstalujte Wordpress, který bude přístupný všem uživatelům firmy SPOS 

Server bude součástí domény SPOS !!!!! 

Můžete vyřešit zálohování webu (volitelné) 

## Klientská stanice: 

Klientská stanice bude připojena do vytvořené domény 

KAŽDÝ uživatel bude mít: 

- namapované jednotky včetně domovské 

- nastavenou poštu pomocí protokolu IMAP, kerio obsahuje certifikát, použijte šifrované spojení!!!! (emailového klienta nechám na Vás, osobně používám Mozilla Thunderbird – rovněž naleznete v souboru maturita.iso, nebo lze stáhnout z internetu), emailového klienta vyzkoušejte tak že si budete posílat emaily mezi jednotlivými uživateli. 

- nainstalovanou tiskárnu ze serveru PDFCreator (mapovanou pomocí GPE) 

- vyřešené zálohování lokálních souborů v dokumentech, na server do složky zálohy (pro zálohování použijte Cobian Backup naleznete v maturita.iso, nebo lze stáhnout z internetu) 

- Vhodně zabezpečte klienta pomocí antiviru, firewallu apod.