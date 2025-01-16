---
date: 2024-09-27T08:55
zdroj: https://github.com/sposdknl/2024-sposdk-osy/tree/main/Install/Ubuntu#install-ubuntu
---
# Install Ubuntu

## Install OS

[](https://github.com/sposdknl/2024-sposdk-osy/tree/main/Install/Ubuntu#install-os)

Návod na instalaci [Ubuntu server](https://ubuntu.com/tutorials/install-ubuntu-server#1-overview).

- Stáhněte ISO Ubuntu server (minimalized) 24.04.1 LTS z - [https://cz.releases.ubuntu.com/24.04.1/ubuntu-24.04.1-live-server-amd64.iso](https://cz.releases.ubuntu.com/24.04.1/ubuntu-24.04.1-live-server-amd64.iso)
- Nainstalujte do VirtualBoxu
- Seznamte se s nástrojem [Vagrant](https://www.vagrantup.com/)
- Najděte si Image na [Vagrant portale](https://portal.cloud.hashicorp.com/vagrant/discover)

```shell
apt install -y net-tools
apt install -y iputils-ping
apt install -y man
apt install -y git

dpkg -l | wc -l
dpkg -l > /tmp/minimalize-package.deb
unminimalize
dpkg -l | wc -l
dpkg -l > /tmp/unminimalize-package.deb

diff -u /tmp/minimalize-package.deb /tmp/unminimalize-package.deb
```

```shell

