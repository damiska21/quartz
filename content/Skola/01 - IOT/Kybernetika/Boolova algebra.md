---
date: 2025-02-20T08:12
cssclasses: []
---

- Dva vstupy, jeden výstup
- používané pro logické brány
## AND
- pokud nejsou oba vstupy 1, vystupuje nula

|A|B|Y|
|---|---|---|
|0|0|0|
|0|1|0|
|1|0|0|
|1|1|1|
## OR
- pokud jeden, druhý, nebo oba vstupy jsou 1, vystupuje 1

| A   | B   | A OR B |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |
## NOR
- obrácený OR

| A   | B   | A NOR B |
| --- | --- | ------- |
| 0   | 0   | 1       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 0       |
## XOR
- pokud je pouze A nebo pouze B 1

| A      | B   | A XOR B |
| ------ | --- | ------- |
| 0      | 0   | 0       |
| 0      | 1   | 1       |
| 1      | 0   | 1       |
| 1      | 1   | 0       |
