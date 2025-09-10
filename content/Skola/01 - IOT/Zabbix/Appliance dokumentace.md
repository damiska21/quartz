---
date: 2025-03-21T08:18
cssclasses:
---
##  Install
- https://www.zabbix.com/download_appliance 
	- stáhnout, v virtual boxu import
	- v nastavení -> network -> port forwarding  nastavit tohle![[Screenshot_20250514_214628.png]]
	- spustit, mělo by to jet. login: root, heslo: zabbix
	- v prohlížeči http://localhost:8888
		- tam login: Admin, heslo: zabbix
### Namespace fix
- tohle jsem neviděl nikde jinde než na mým počítači ve škole, jestli další krok funguje tak skipnout
`vi /etc/resolv.conf`
paste:
`nameserver 8.8.8.8`
`nameserver 8.8.4.4`
test:
`ping -c 4 google.com`

### instal zabbix-agent2
```
dnf install -y zabbix-agent2

systemctl stop zabbix-agent
systemctl disable zabbix-agent

systemctl enable zabbix-agent2
systemctl start zabbix-agent2

tail -f /var/log/zabbix/zabbix_agent2.log
```
``
## Monitoring MySQL

### konzole:
```
mysql
use mysql

CREATE USER 'zbx_monitor'@'%' IDENTIFIED BY 'SPOS_2025_OSY';
GRANT REPLICATION CLIENT,PROCESS,SHOW DATABASES,SHOW VIEW ON *.* TO 'zbx_monitor'@'%';
```
### web gui:
![[Pasted image 20250321083111.png]]
Makra:
```
{$MYSQL.USER}		zbx_monitor
{$MYSQL.PASSWORD}	SPOS_2025_OSY
{$MYSQL.DSN}		tcp://localhost:3306
```

a v monitoring -> hosts -> MySQL Database budou grafíky

## Nginx monitoring
`sudo vi /etc/nginx/conf.d/zabbix.conf
tohle pastnout mezi zbytek to vyfeeluješ:
```
location /nginx_status {
    stub_status;
    allow 127.0.0.1;  # Allow access from the local machine
    deny all;
}
```
### web gui:
Host name: Nginx (je to jedno)
Templates: Nginx by HTTP
Host groups: Zabbix servers
Interfaces: Agent 127.0.0.1
Makra:
```
{$NGINX.STUB_STATUS.HOST}    127.0.0.1
{$NGINX.STUB_STATUS.PATH}    nginx_status
```
