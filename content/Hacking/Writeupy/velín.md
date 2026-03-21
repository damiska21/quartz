---
date: 2025-10-23T16:40
cssclasses:
---

10.15.1.100 - panel

## Nmap
Not shown: 997 closed tcp ports (reset)
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
8080/tcp open  http-proxy
MAC Address: 00:80:64:E0:18:35 (Wyse Technology)

Nmap done: 1 IP address (1 host up) scanned in 5.80 seconds
  

## gobuster
/javascript           (Status: 301) [Size: 315] [--> http://10.15.1.100/javascript/]
/index.html           (Status: 200) [Size: 10701]
/phpmyadmin           (Status: 301) [Size: 315] [--> http://10.15.1.100/phpmyadmin/] - nemáme heslo
/server-status        (Status: 403) [Size: 276] - no permission
