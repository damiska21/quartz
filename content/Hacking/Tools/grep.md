---
date: 2025-10-10T16:46
cssclasses:
---
- `grep (slovo, který hledáš) (místo, kde ho hledáš) (flags)`
- piping - `cat neco.txt | grep slovo`
- jde hledat i v několika filech `grep link \*.html`

- defaultně case sensitive (jukni do flags)

## Flags
- -c 
	- printuje pouze number of occurences
- -i
	- case insensitive
- -v
	- opak, printne všechno co nemá vyhledávaný text
- -x
	- hledaný string musí být celý řádek
- -w
	- co matchuje celý string
	- grep abc  -> listne jenom abc, nikoliv abcd
- -e

- -A (počet)
	- zobrazit řádky hned po (After) najitém výsledku
- -B (počet)
	- zobrazit řádky přímo před (Before) najitým výsledkem
- -C (počet)
	- zobrazit řádky kolem najitého výsledku

