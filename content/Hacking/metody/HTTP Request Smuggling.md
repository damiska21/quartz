---
date: 2026-02-01T13:08
cssclasses:
  - embed-white
---

- http server zpracovává requesty v pořadí jak příjdou, netuší, který patří jakému klientu
- můžeme takhle přesvědčit server, že request poslal někdo jiný (např. přilepíme request na request, který přijde hned po nás) nebo obejít frontend a komunikovat přímo s backendem
![[Pasted image 20260201131137.png]]
## Principy
- http requesty mohou definovat velikost pomocí `Content-Lenght` či pomocí `Transfer-Encoding`
- zneužíváme rozlišnosti v handlování těchto dvou headerů na frontendu a backendu


[^1]: https://portswigger.net/web-security/request-smuggling
