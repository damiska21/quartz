---
date: 2026-04-25T19:13
cssclasses:
---

# 0 -> 1

```
 The previous analyst left in a hurry.
 His terminal is still open. His files — still here.
 Find what he left behind.
```

```
ls
README  workspace
ghost0@breachlab:~$ cat README                                                                        
ANALYST WORKSTATION — KAEL
Last active: 2026-03-28 02:47 UTC
Status: Abandoned

If you're reading this, you found my terminal.
I left in a hurry. Didn't have time to clean up.

Nothing in this shell is hidden. It's just here.
If you can't see it, you're not looking hard enough.

Don't leave traces.

— KAEL
```

```
cat notes.txt                                                           
OPERATIONAL NOTES — KAEL
========================
Target: internal network segment 10.4.x.x
Method: passive recon, no active scanning
Status: ongoing

Credentials filed separately in archive/.
Do not store passwords in plaintext notes.
```

```
ls                                                              
credentials
ghost0@breachlab:~/workspace/archive$ cat credentials                                                 
W3lc0m3T0Gh0st
```

# 1 -> 2
```
ls
 -   --help   MANIFEST  'file name'
ghost1@breachlab:~$ cat MANIFEST                                             
NOTES — KAEL
────────────
I named my files to watch careless analysts
give up before they even read them.

Most people who poke around this directory
will quit before they open the first one.

— KAEL
ghost1@breachlab:~$ cag file\ name                                           
-bash: cag: command not found
ghost1@breachlab:~$ cat file\ name                                           
D4shIsN0tAFl4g
```

# 2 -> 3
```
 ls
investigation
ghost2@breachlab:~$ cd investigation/                                        
ghost2@breachlab:~/investigation$ ls                                         
report.txt  summary.txt
ghost2@breachlab:~/investigation$ cat report.txt                             
INCIDENT REPORT — Q1 2026
Status: Classified
Prepared by: KAEL

Summary: Unauthorized access detected on segment C.
Response: Ongoing. Active leads compartmentalized.

Full details filed separately.
ghost2@breachlab:~/investigation$ cat summary.txt                            
OPERATIONAL SUMMARY
===================
Operation: GHOST WATCH
Status: Active

All active source files have been compartmentalized
and moved to a separate location.

This document contains no credentials.
ghost2@breachlab:~/investigation$ ls -la                                     
total 40
drwxr-x--- 1 ghost2 ghost2 4096 Apr 24 20:43 .
drwx------ 1 ghost2 ghost2 4096 Apr 25 17:19 ..
drwxr-x--- 1 ghost2 ghost2 4096 Apr 24 20:43 .leads
-rw-r----- 1 ghost2 ghost2  201 Apr 24 20:43 report.txt
-rw-r----- 1 ghost2 ghost2  205 Apr 24 20:43 summary.txt
ghost2@breachlab:~/investigation$ cat .leads/                                
cat: .leads/: Is a directory
ghost2@breachlab:~/investigation$ cd .leads/                                 
ghost2@breachlab:~/investigation/.leads$ ls                                  
ghost2@breachlab:~/investigation/.leads$ ls -la                              
total 40
drwxr-x--- 1 ghost2 ghost2 4096 Apr 24 20:43 .
drwxr-x--- 1 ghost2 ghost2 4096 Apr 24 20:43 ..
-rw-r----- 1 ghost2 ghost2   13 Apr 24 20:43 .source_alpha
-rw-r----- 1 ghost2 ghost2   13 Apr 24 20:43 .source_beta
-rw-r----- 1 ghost2 ghost2   15 Apr 24 20:43 .source_omega
ghost2@breachlab:~/investigation/.leads$ cat .source_alpha                   
7a4e91c63d2f
ghost2@breachlab:~/investigation/.leads$ cat .source_beta                    
bb50d8e4a11c
ghost2@breachlab:~/investigation/.leads$ cat .source_omega                   
H1dd3nInSh4dow
```

# 3 -> 4
```
cat access_codes.dat                        
P3rm1ss10ns_M4tt3r
ghost3@breachlab:/var/intel/ops$ ls -la                                      
total 20
drwxr-x--- 1 root analysts 4096 Apr 24 20:43 .
drwxr-xr-x 1 root root     4096 Apr 24 20:43 ..
----r----- 1 root analysts   19 Apr 24 20:43 access_codes.dat
----r----- 1 root analysts  103 Apr 24 20:43 operative_list.txt
```
# 4
```
grep -L "STATUS" *                                 
record_0073
record_0099
record_0182
record_0291
record_0404
record_0477
ghost4@breachlab:~/vault$ cat record_0073                                    
[2026-03-28 02:47:13] password=1kfPsI1pX4Kq7ePh
ghost4@breachlab:~/vault$ cat record_0099                                    
[CLASSIFIED] CREDENTIAL: Gr3p_F1nds_Truth
```
# 5
```
HINTS:
1. L5 isn't password reuse it's a 2-port handshake. read the hint channel, it tells you what string to send to the auth channel. nothing to do with L4's pw
    
2. L0-L4 teach you how to hunt for passwords in files: cat, find, hidden files, permissions. L5 breaks that habit
```
```
nmap -p 30000-30100 127.0.0.1                                                                                                                                                              
Starting Nmap 7.80 ( https://nmap.org ) at 2026-04-28 14:17 UTC
Nmap scan report for localhost (127.0.0.1)
Host is up (0.00014s latency).
Not shown: 97 closed ports
PORT      STATE SERVICE
30000/tcp open  ndmps
30001/tcp open  pago-services1
30002/tcp open  pago-services2
30100/tcp open  rwp
```
```
nc 127.0.0.1 30100                                                                                                                                                                         

  GHOST PROTOCOL — CHANNEL A
  ─────────────────────────────────────

  This channel is informational only.

  Authentication token: GHOST
  Secure channel: port 30101

  Send the token to receive your credential.
ghost5@breachlab:~$ nc 127.0.0.1 30101                                                                                                                                                                         
AUTHENTICATE: GHOST

  Credential: P0rts_N3v3r_L13
```
# 6
```
export API_DIGEST=M252X0wzNGtzXzN2M3J5dGgxbmc=
3nv_L34ks_3v3ryth1ng
```
# 7
```
ghost7@breachlab:~$ cat transmission.dat     
00000000: 5244 4e6a 4d47 517a 587a 4279 5830 5178  RDNjMGQzXzByX0Qx
00000010: 4d77 3d3d 0a                             Mw==.

D3c0d3_0r_D13
```
# 8
```
ps aux                                                                                                                                                
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.0  15436  7924 ?        Ss   Apr24   0:47 sshd: /usr/sbin/sshd -D -e [listener] 1 of 20-100 startups
root        2031  0.0  0.0 309876  3556 ?        Sl   Apr24   0:00 python3 /usr/local/bin/level4-listener.py
root        2032  0.0  0.0   7040  3480 ?        S    Apr24   0:00 runuser -u ghost8 -p -- python3 /usr/local/bin/level8-daemon.py
root        2033  0.0  0.0   7040  3480 ?        S    Apr24   0:00 runuser -u ghost8 -- python3 /usr/local/bin/level8-daemon.py
root        2034  0.0  0.0  14780  3420 ?        S    Apr24   0:00 python3 /usr/local/bin/level10-listener.py

cat environ                                                                                                                                                                       
ANALYST_KEY=Pr0c_T3lls_4llHOSTNAME=breachlabPWD=/HOME=/rootSHLVL=0PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/binDEBIAN_FRONTEND=noninteractive_=/usr/sbin/runuserghost8@breachlab:/proc/2043$ghost8@breachlab:/proc/2043$   

Pr0c_T3lls_4ll
```
# 9
uvnitř strings v binárce
`N01s3_Fl00r`
třeba 10 sekund na tomhle xd
# 10
- najdi jeden unique řádek v poli duplikátů
```
sort data.txt | uniq -u                                                                                                                                                                   
Str1ngs_R3v34l
```
# 11
data.wrapped
- různý formáty extrakce na sebe nastakovaný, zkontroluješ file a střílíš
```
Unwr4pp3d_Thr33
```

# 13
```
nc 127.0.0.1 30000                                                               
K3y_N0t_P4ss
Correct! Next password: N3tc4t_D3l1v3r
```
# 14
```
openssl s_client -connect 127.0.0.1:30001
```
```
TLS_0r_N0th1ng
```
# 15
```
nmap -p 30500-50000 127.0.0.1                                                    
Starting Nmap 7.80 ( https://nmap.org ) at 2026-04-29 08:59 UTC
Nmap scan report for localhost (127.0.0.1)
Host is up (0.00012s latency).
Not shown: 19498 closed ports
PORT      STATE SERVICE
31339/tcp open  unknown
31790/tcp open  unknown
41337/tcp open  unknown


openssl s_client -connect 127.0.0.1:31790
```

```
P0rt_Sc4nn3d
```
# 16
```
ls
passwords.new  passwords.old
ghost16@breachlab:~$ diff passwords.new passwords.old                                                 
42c42
< entry_0042: D1ff_Sp0ts_1t
```
# 17
- když sshčku dáš argument za tim, tak to invokne ten command namísto interactive shellu
```
ssh ghost17@204.168.229.209 -p 2222 cat flag
(ghost17@204.168.229.209) Password: 
Sh3ll_D3n13d
```
# 18
```
 [ Level 18 → 19 ]  Wrong User
 ─────────────────────────────────────────────

 There's a binary on this system that belongs
 to another user — but the permission bits on it
 mean something special. Read them. Use the tool.

 Goal:    Retrieve the password for ghost19
 Connect: ssh ghost19@204.168.229.209 -p 2222

 If you're stuck — read up on the topic, then come back:
   https://man7.org/linux/man-pages/man1/ls.1.html
   https://en.wikipedia.org/wiki/Setuid

 ─────────────────────────────────────────────
 Profile · badges · rank  →  https://breachlab.org
 breachlab.org  ·  Ghost Track
```
```
/usr/local/bin/ghost-archivist
/usr/local/bin/ghost-reader
/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/usr/lib/openssh/ssh-keysign
/usr/bin/mount
/usr/bin/gpasswd
/usr/bin/passwd
/usr/bin/umount
/usr/bin/chfn
/usr/bin/newgrp
/usr/bin/chsh
/usr/bin/su
ghost18@breachlab:/etc$ find / -perm -2000 -type f 2>/dev/null                                        
/usr/sbin/unix_chkpwd
/usr/sbin/pam_extrausers_chkpwd
/usr/bin/expiry
/usr/bin/chage
/usr/bin/crontab
/usr/bin/ssh-agent
```
```
./ghost-reader                                                      
SU1D_Fl1p
```

# 19 
```
for i in {0000..9999}; do
echo "jsme na: $i"
NIG=$(echo "SU1D_Fl1p $i" | nc 127.0.0.1 30002)
if [ "$NIG" != "Wrong PIN." ]; then
echo "je to $i"
break
fi
done
```
```
echo "SU1D_Fl1p 7349" | nc 127.0.0.1 30002
Correct! Next password: P1N_Cr4ck3d
```

# 20
```
cat ghost-level20                                           
* * * * * root /opt/ghost-cron/job.sh
```

```
cat job.sh                                              
#!/bin/bash
cat /etc/ghost-cron-secret > /var/tmp/ghost-cron-output 2>/dev/null
sleep 2
```

```
while true; do                                          
	cat /var/tmp/ghost-cron-output 2>/dev/null
done
```
Cr0n_R34ds
# 21
```
/repo/.git/logs$ cat HEAD 
0000000000000000000000000000000000000000 8edaaf922134973e3351ff498edbe0cf899438f5 KAEL <kael@ghost> 1778114434 +0000	commit (initial): initial config — env-based secret
8edaaf922134973e3351ff498edbe0cf899438f5 42fe449d3324d690c23265a79c4addb7e08a8eaf KAEL <kael@ghost> 1778114434 +0000	commit: add telemetry toggle
42fe449d3324d690c23265a79c4addb7e08a8eaf 42fe449d3324d690c23265a79c4addb7e08a8eaf KAEL <kael@ghost> 1778114434 +0000	checkout: moving from main to internal/debug-2025-09
42fe449d3324d690c23265a79c4addb7e08a8eaf 3c7eca4e26b4160814445f661f1b3e061cf32878 KAEL <kael@ghost> 1778114434 +0000	commit: temp: hardcode prod secret for debug trace
3c7eca4e26b4160814445f661f1b3e061cf32878 834f12534ec7e4c7b8a433b8da3a520a289e79ee KAEL <kael@ghost> 1778114434 +0000	commit: scrub hardcoded secret
834f12534ec7e4c7b8a433b8da3a520a289e79ee 42fe449d3324d690c23265a79c4addb7e08a8eaf KAEL <kael@ghost> 1778114434 +0000	checkout: moving from internal/debug-2025-09 to main
42fe449d3324d690c23265a79c4addb7e08a8eaf d47f8c74be2378b61f2c7a87a0db2bd52238d124 KAEL <kael@ghost> 1778114434 +0000	commit: docs: mention archived snapshots
```

```
git show 834f12534ec7e4c7b8a433b8da3a520a289e79ee
```
G1t_H1st0ry
# 22
```
   Shard 3 — guarded by a SUID helper

 Recover all three. Hand them to the gatekeeper
 listening on TCP :31339. Format (exact):
```

SHARD1:ALPHA_Z3R0
SHARD2:BR4V0_0N3
SHARD3:CH4RL13_TW0