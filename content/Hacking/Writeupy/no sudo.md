---
date: 2026-03-31T15:33
cssclasses:
---

net.ipv4.ip_forward = 1
```
_wake_alarm,cap_block_suspend,cap_audit_read,cap_perfmon,cap_bpf,cap_checkpoint_restore
  CapEff: 0x000001ffffffffff=cap_chown,cap_dac_override,cap_dac_read_search,cap_fowner,cap_fsetid,cap_kill,cap_setgid,cap_setuid,cap_setpcap,cap_linux_immutable,cap_net_bind_service,cap_net_broadcast,cap_net_admin,cap_net_raw,cap_ipc_lock,cap_ipc_owner,cap_sys_module,cap_sys_rawio,cap_sys_chroot,cap_sys_ptrace,cap_sys_pacct,cap_sys_admin,cap_sys_boot,cap_sys_nice,cap_sys_resource,cap_sys_time,cap_sys_tty_config,cap_mknod,cap_lease,cap_audit_write,cap_audit_control,cap_setfcap,cap_mac_override,cap_mac_admin,cap_syslog,cap_wake_alarm,cap_block_suspend,cap_audit_read,cap_perfmon,cap_bpf,cap_checkpoint_restore
  CapBnd: 0x000001ffffffffff=cap_chown,cap_dac_override,cap_dac_read_search,cap_fowner,cap_fsetid,cap_kill,cap_setgid,cap_setuid,cap_setpcap,cap_linux_immutable,cap_net_bind_service,cap_net_broadcast,cap_net_admin,cap_net_raw,cap_ipc_lock,cap_ipc_owner,cap_sys_module,cap_sys_rawio,cap_sys_chroot,cap_sys_ptrace,cap_sys_pacct,cap_sys_admin,cap_sys_boot,cap_sys_nice,cap_sys_resource,cap_sys_time,cap_sys_tty_config,cap_mknod,cap_lease,cap_audit_write,cap_audit_control,cap_setfcap,cap_mac_override,cap_mac_admin,cap_syslog,cap_wake_alarm,cap_block_suspend,cap_audit_read,cap_perfmon,cap_bpf,cap_checkpoint_restore
  CapAmb: 0x000001ffffffffff=cap_chown,cap_dac_override,cap_dac_read_search,cap_fowner,cap_fsetid,cap_kill,cap_setgid,cap_setuid,cap_setpcap,cap_linux_immutable,cap_net_bind_service,cap_net_broadcast,cap_net_admin,cap_net_raw,cap_ipc_lock,cap_ipc_owner,cap_sys_module,cap_sys_rawio,cap_sys_chroot,cap_sys_ptrace,cap_sys_pacct,cap_sys_admin,cap_sys_boot,cap_sys_nice,cap_sys_resource,cap_sys_time,cap_sys_tty_config,cap_mknod,cap_lease,cap_audit_write,cap_audit_control,cap_setfcap,cap_mac_override,cap_mac_admin,cap_syslog,cap_wake_alarm,cap_block_suspend,cap_audit_read,cap_perfmon,cap_bpf,cap_checkpoint_restore

PID 189 (systemd-journal) user=root
  CapInh: 0x0000000000000000=
  CapPrm: 0x00000025402800cf=cap_chown,cap_dac_override,cap_dac_read_search,cap_fowner,cap_setgid,cap_setuid,cap_sys_ptrace,cap_sys_admin,cap_audit_control,cap_mac_override,cap_syslog,cap_audit_read
  CapEff: 0x00000025402800cf=cap_chown,cap_dac_override,cap_dac_read_search,cap_fowner,cap_setgid,cap_setuid,cap_sys_ptrace,cap_sys_admin,cap_audit_control,cap_mac_override,cap_syslog,cap_audit_read
  CapBnd: 0x00000025402800cf=cap_chown,cap_dac_override,cap_dac_read_search,cap_fowner,cap_setgid,cap_setuid,cap_sys_ptrace,cap_sys_admin,cap_audit_control,cap_mac_override,cap_syslog,cap_audit_read
  CapAmb: 0x0000000000000000=

PID 502 (systemd-resolve) user=systemd-resolve
  CapInh: 0x0000000000002000=cap_net_raw
  CapPrm: 0x0000000000002000=cap_net_raw
  CapEff: 0x0000000000002000=cap_net_raw
  CapBnd: 0x0000000000002000=cap_net_raw
  CapAmb: 0x0000000000002000=cap_net_raw
```

```
═╣ /sys/kernel/debug readable ..... No
═╣ /sys/class/thermal present ..... Yes
═╣ /sys/class/thermal readable .... Yes
═╣ /sys/kernel/security present ... Yes
```

```
═╣ Host-like processes visible .... dbus-daemondbus-daemon
sshdsshd
systemdsystemd
```

```
═╣ Root filesystem mode ........... rw
```

```
═╣ NoNewPrivs ..................... disabled (0)
```

```
CVE: CVE-2023-0386 | Name: OverlayFS suid smuggle | Match data: pkg=linux-kernel,ver>=5.11,ver<=6.2,CONFIG_USER_NS=y,sysctl:kernel.unprivileged_userns_clone==1 | Tags: ubuntu=22.04.1{kernel:5.15.0-57-generic} | Rank: 1 | Details: CONFIG_USER_NS needs to be enabled && kernel.unprivileged_userns_clone=1 required
CVE: CVE-2024-1086 | Name: double-free in nf_tables | Match data: pkg=linux-kernel,x86_64,ver>=5.14,ver<=6.6,CONFIG_NF_TABLES=y,CONFIG_USER_NS=y,sysctl:kernel.unprivileged_userns_clone==1 | Tags: debian=12,ubuntu=22.04 | Rank: 1 | Details: CONFIG_USER_NS and CONFIG_NF_TABLES need to be enabled && kernel.unprivileged_userns_clone=1 required
═╣ Kernel vulns found: 2
```

CVE-2024-1086 - pravděpodobně nefunguje, nebo jsem ass
CVE-2023-0386