---
date: 2025-05-14T21:14
cssclasses:
---

### nastavení zabbix sítě
- tohle je přímo od malýho jenom bez komentáře
```
vi /etc/sysconfig/network-scripts/ifcfg-eth1

DEVICE="eth1"
BOOTPROTO=none
ONBOOT="yes"
NM_CONTROLLED="no"
TYPE=Ethernet
NAME="eth1"
IPADDR=192.168.1.2
PREFIX=24
DEFROUTE=no
PEERDNS=no
PEERROUTES=no

systemctl restart network.service
```

## pfSense Instal

funkční vagrantfile: (stejný je i na gitu od malýho)
```
IMAGE_NAME = "cs-c4300/pfsense"

Vagrant.configure("2") do |config|
  config.vm.guest = :freebsd
  config.vm.box = IMAGE_NAME
  config.ssh.shell = "sh"
  config.ssh.insert_key = false
  config.vm.synced_folder '.', '/vagrant', disabled: true

  config.vm.network :forwarded_port,
    guest: 443,
    host: 8989,
    host_ip: "127.0.0.1"

  config.vm.network "private_network",
    type: "dhcp",
    virtualbox__intnet: false

  config.vm.network "private_network",
    auto_config: false,
    virtualbox__intnet: "intnet"

  config.vm.provider "virtualbox" do |vb|
    vb.name = "pfsense-box"
    vb.memory = 1024
    vb.cpus = 2
  end
end
```
### SNMP
- web gui pfsensu - v liště Services -> SNMP
- ![[pfsense.png]]
	- hlavně to dole potvrdit!!!
	- system contact vyměnit za školní mail, součást požadovaného známkování
### v zabbix serveru

```
dnf install net-snmp-utils

snmpwalk -v2c -c public 192.168.1.1 system
```
- druhej command by měl navrátit dost řádků i s infem, co jsme tam zadali. výsledek nakopírovat malýmu
- web gui - Data collection -> Hosts -> Create host vpravo nahoře![[zabbix-host.png]]
- v Monitoring -> Hosts -> pfsense-box - Graphs se za chvíli objeví grafíky :D
- Data collection -> Templates -> Create template ![[zabbix-template.png]]
- vykuchti v Graphs -> Create Graph nějakej graf ![[zabbix-graf.png]]
- vykuchti v Dashboard -> Create Dashboard dashboard![[dahsboard.png]]
- pak něco poscreenshotovat a okopírovat, idk jdu si hodit lano
	- na tomhle jsem nechal tak 8 hodin svýho života