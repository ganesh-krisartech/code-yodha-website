---
title: "Shell"
meta_title: ""
description: "**Shell cheatsheet**"
author: "CodeYodha"
draft: false
---


---



# Shell Cheatsheet – Essential Commands
### - File & Directory Operations
List files: ls

List with details: ls -l

List hidden files: ls -a

Change directory: cd folder_name

Go back one directory: cd ..

Present directory: pwd

Create directory: mkdir folder_name

Remove file: rm file_name

Remove directory: rm -r folder_name

Copy file: cp source.txt destination.txt

Move/rename file: mv old.txt new.txt

### - File Viewing & Editing
View file content: cat file.txt

Page view: less file.txt / more file.txt

Head (first lines): head -n 10 file.txt

Tail (last lines): tail -n 10 file.txt

Edit file (CLI editor): nano file.txt / vim file.txt

### - Searching & Filtering
Search in file: grep "pattern" file.txt

Recursive grep: grep -r "pattern" ./

Find files by name: find . -name "*.txt"

Find by type: find /path -type f -name "*.sh"

Search command history: history | grep command

### - Permissions & Ownership
Show permissions: ls -l

Change permissions: chmod +x script.sh

Recursive chmod: chmod -R 755 folder

Change ownership: chown user:group file

Become root: sudo command

### - Process Management
Current processes: ps aux

Filter process: ps aux | grep python

Kill by PID: kill 1234

Force kill: kill -9 1234

Background job: command &

List jobs: jobs

Bring to foreground: fg %1

### - Scripting Basics
Create script: nano script.sh

Make executable: chmod +x script.sh

Run script: ./script.sh

Shebang: #!/bin/bash (first line)

Variables: name="World"

Access variable: echo $name

### - Networking & System
Show IP: ip a / ifconfig

Ping: ping google.com

Download file: wget URL / curl -O URL

System info: uname -a

Disk usage: df -h

Memory usage: free -h

### - Package Management (Debian/Ubuntu)
Update list: sudo apt update

Upgrade packages: sudo apt upgrade

Install package: sudo apt install name

Remove package: sudo apt remove name

Search package: apt search name



---

[⬇️ Download the Shell Cheatsheet PDF](/downloads/shell_cheatsheet.pdf)