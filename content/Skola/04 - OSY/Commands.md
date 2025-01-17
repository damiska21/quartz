---
date: 2024-10-25T08:16
cssclasses:
---
- id
- man - stránka manuálu
- uname - vypíše jméno os
- awk '{print $5}'
- grep text - výsledky všechno s textem, na filtrování
	- -w  výsledky všechno až na text

cat /etc/passwd | awk -F ":" '{print $}'