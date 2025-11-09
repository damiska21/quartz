---
date: 2025-10-06T08:34
cssclasses:
---
NET USE Q: \\\SDÍLENÁ-SLOŽKA


right click sdílené složky -> vlastnosti -> tab sdílení -> tlačítko Sdílení;
tady si nastavíme, které skupiny chceme, aby měli přístup k složce

![[screenshot_1762158120.png]]

## Domovská složka
všichni k ní mají přístup
- v right clicku složky nastavit v názvu sdílené složky na konci $
- v uživatelé a počítače služby Active Directory -> označit klidně několik uživatelů najednou -> right click Vlastnosti -> Profil -> Domovská složka - Připojit - H: k \\SERVER\Home$\%username% - automaticky se to přepíše na jméno uživatele
## Automatický mapování
- Správa zásad skupiny -> right click SPOS.local -> Vytvořit objet zásad skupiny bla bla -> pojmenovat, rightclicknout -> upravit
![[screenshot_1762635084.png]]