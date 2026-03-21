---
date: 2026-03-18T15:02
cssclasses:
draft: "true"
---

# Nikto analysis
## Normal
+ Multiple IPs found: 37.9.175.211, 2a00:4b40:aaaa:2011::7
+ Target IP:          37.9.175.211
+ Target Hostname:    poradenstvikhk.cz
+ Target Port:        443
---------------------------------------------------------------------------
+ SSL Info:        Subject:  /CN=*.poradenstvikhk.cz
                   Ciphers:  TLS_AES_256_GCM_SHA384
                   Issuer:   /C=US/O=Let's Encrypt/CN=R13
+ Start Time:         2026-03-18 12:43:15 (GMT-4)
---------------------------------------------------------------------------
+ Server: openresty
+ /: The anti-clickjacking X-Frame-Options header is not present. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
+ /: Drupal Link header found with value: <https://poradenstvikhk.cz/wp-json/>; rel="https://api.w.org/", <https://poradenstvikhk.cz/wp-json/wp/v2/pages/2251>; rel="alternate"; title="JSON"; type="application/json", <https://poradenstvikhk.cz/>; rel=shortlink. See: https://www.drupal.org/
+ /: The site uses TLS and the Strict-Transport-Security HTTP header is not defined. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
+ /: An alt-svc header was found which is advertising HTTP/3. The endpoint is: ':443'. Nikto cannot test HTTP/3 over QUIC. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/alt-svc
+ /: The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type. See: https://www.netsparker.com/web-vulnerability-scanner/vulnerabilities/missing-content-type-header/
+ /WS5yjJG8.: Uncommon header 'x-redirect-by' found, with contents: WordPress.

## Old
+ /old/: Cookie PHPSESSID created without the secure flag. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
+ /old/: Cookie PHPSESSID created without the httponly flag. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
+ /old/: The anti-clickjacking X-Frame-Options header is not present. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
+ /old/: Drupal Link header found with value: <https://poradenstvikhk.cz/old/wp-json/>; rel="https://api.w.org/", <https://poradenstvikhk.cz/old/wp-json/wp/v2/pages/172>; rel="alternate"; type="application/json", <https://poradenstvikhk.cz/old/>; rel=shortlink. See: https://www.drupal.org/
+ /old/: The site uses TLS and the Strict-Transport-Security HTTP header is not defined. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
+ /old/: An alt-svc header was found which is advertising HTTP/3. The endpoint is: ':443'. Nikto cannot test HTTP/3 over QUIC. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/alt-svc
+ /old/: The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type. See: https://www.netsparker.com/web-vulnerability-scanner/vulnerabilities/missing-content-type-header/
+ /old/index.php?: Uncommon header 'x-redirect-by' found, with contents: WordPress.
+ No CGI Directories found (use '-C all' to force check all possible dirs)
+ /old/: The Content-Encoding header is set to "deflate" which may mean that the server is vulnerable to the BREACH attack. See: http://breachattack.com/
+ Server is using a wildcard certificate: \*.poradenstvikhk.cz. See: https://en.wikipedia.org/wiki/Wildcard_certificate


# Spicy gobuster outputs

shell.php            (Status: 466) [Size: 2541]
robots.txt           (Status: 200) [Size: 118]
class.php            (Status: 466) [Size: 2541]

# Leaking wp users
https://poradenstvikhk.cz/old/wp-json/wp/v2/users

- users:
	- `teapotdrea` - id 1, pravděpodobně admin
	- `Zuzana Kocourková`/`zuzkaedit` - id 4
- funguje jenom na /old, new je permission denied

# Subdomains
koha.poradenstvikhk.cz
koha-intra.poradenstvikhk.cz
- knihovní systém
stats.poradenstvikhk.cz
- matomo analytika přístupu na web
- Apache 2.4.65
katalog.poradenstvikhk.cz
- katalog literatury, spojený s kohou
- prázdný, ani jedna knížka bych řekl

# Důležité
/old/wp-login.php
- nemá žádný rate limitting
- leakuje zda-li uživatel existuje
/wp-login.php
- taky nemá žádný rate limitting na brute forcy

# Koha
- koha admin - knihovna@pppkhk.cz
	- leaking kdekoliv na koha.poradenstvikhk.cz, je tam mailto button na admina
- 