---
date: 2025-12-18T14:16
cssclasses:
---

## Instalace na kali
kvůli kali - 
`sudo apt install python3-venv`
`python3 -m venv ~/myenv`
`source ~/myenv/bin/activate`

`pip install --upgrade probequest`

## Setting interface na monitor mód
bez tohohle scrapy (python modul) crashne
```
sudo ip link set wlan0 down 
sudo iw dev wlan0 set type monitor
sudo ip link set wlan0 up
```
## Run
`sudo ~/myenv/bin/probequest wlan0`
sudo je nezbytný
parametr je síťový interface

- když to chvíli funguje a pak crashne, problém nastal v parseru názvu, když má wifi třeba smajlík v názvu. stačí restartovat a zase pojede