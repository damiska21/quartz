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
