---
title: "Shell"
meta_title: ""
description: "**Shell cheatsheet**"
author: "CodeYodha"
draft: false
---


---

# **🔧 ULTIMATE SHELL COMMAND CHEATSHEET**

## **🌍 NAVIGATION & FILE MANAGEMENT**

**Change directory** – `cd path/to/directory`

**Move to parent directory** – `cd ..`

**Go to home directory** – `cd ~`

**Print working directory** – `pwd`

**List files in current directory** – `ls`

**List files with details** – `ls -l`

**List all files, including hidden** – `ls -a`

**Create an empty file** – `touch filename`

**Create a new directory** – `mkdir dirname`

**Remove a file** – `rm filename`

**Remove a directory recursively** – `rm -r dirname`

**Copy files or directories** – `cp source destination`

**Move or rename files** – `mv source destination`

**Display file content** – `cat filename`

**Show the first 10 lines of a file** – `head filename`

**Show the last 10 lines of a file** – `tail filename`

**Edit a file in the terminal (nano editor)** – `nano filename`

**Change file permissions (rwxr-xr-x)** – `chmod 755 filename`

**Change file ownership** – `chown user:group filename`


---

## **🔍 SEARCHING & VIEWING FILES**

**Find a file by name** – `find /path -name filename`

**Search for files by name (use `updatedb` to update database)** – `locate filename`

**Find the path of a command** – `which command`

**Locate a command and its documentation** – `whereis command`

**Search for a pattern inside a file** – `grep 'pattern' filename`

**Recursively search for a pattern in a directory** – `grep -r 'pattern' directory`

**Case-insensitive search** – `grep -i 'pattern' filename`

**Exclude lines matching a pattern** – `grep -v 'pattern' filename`

**List filenames containing the pattern** – `grep -l 'pattern' *`

**Show line numbers with matches** – `grep -n 'pattern' filename`


---

## **⚙️ PROCESS MANAGEMENT**

**Show current running processes** – `ps`

**Show all processes running on the system** – `ps aux`

**Show real-time system processes** – `top`

**Interactive process viewer (requires installation)** – `htop`

**Kill a process by its PID** – `kill PID`

**Kill all processes with a given name** – `killall process_name`

**Resume a suspended process in the background** – `bg`

**Bring a background process to the foreground** – `fg`

**List all background jobs** – `jobs`

**Display memory usage** – `free -h`

**Display disk space usage** – `df -h`

**Display disk usage of a directory** – `du -sh directory`

**Show system uptime and load averages** – `uptime`

---

## **📡 NETWORKING**

**Show IP addresses** – `ip a`

**Display network interfaces (older systems)** – `ifconfig`

**Ping a host to check connectivity** – `ping hostname`

**Trace the route packets take to a host** – `traceroute hostname`

**Show active connections and listening ports** – `netstat -tuln`

**Fetch a URL via HTTP** – `curl http://example.com`

**Download files from a URL** – `wget http://example.com`

**SSH into a remote machine** – `ssh user@host`

**Copy files between hosts using SSH** – `scp file user@host:/path`

**Synchronize files between local and remote directories** – `rsync -av source/ destination/`

---

## **📝 TEXT PROCESSING**

**Display contents of a file** – `cat filename`

**Print text to the terminal** – `echo "text"`

**Extract specific fields from a file** – `cut -d':' -f1 filename`

**Sort lines of a file** – `sort filename`

**Remove duplicate lines** – `uniq filename`

**Word, line, and character count of a file** – `wc filename`

**Convert lowercase to uppercase** – `tr 'a-z' 'A-Z' < filename`

**Replace text in a file** – `sed 's/old/new/g' filename`

**Print the first column of a file** – `awk '{print $1}' filename`

**Print the first and third columns of a file** – `awk '{print $1, $3}' filename`


---

## **🔐 USER & PERMISSIONS MANAGEMENT**

**Add a new user** – `adduser username`

**Delete a user** – `deluser username`

**Change a user's password** – `passwd username`

**Switch to another user** – `su username`

**Run a command as superuser (admin)** – `sudo command`

**Open a root shell** – `sudo -i`

**Give all permissions to a file (rwxrwxrwx)** – `chmod 777 filename`

**Standard read/write permissions for files (rw-r--r--)** – `chmod 644 filename`

**Change ownership of a file** – `chown user:group filename`


---

## **⚡ SHORTCUTS & MISCELLANEOUS**

**Terminate current running process** – `Ctrl + C`

**Suspend current running process** – `Ctrl + Z`

**Exit terminal** – `Ctrl + D`

**Repeat last command** – `!!`

**Repeat last argument of the previous command** – `!$`

**Auto-complete a command or filename** – `Tab`

**Search through command history** – `Ctrl + R`

**Show command history** – `history`

**Clear terminal screen** – `clear`

**Redirect output to a file (overwrite)** – `command > file`

**Redirect output to a file (append)** – `command >> file`

**Redirect input from a file** – `command < file`

**Pipe output from one command to another** – `command | command`


---

## **🛠️ SYSTEM ADMINISTRATION**

**Install a package (Debian/Ubuntu)** – `apt-get install package`

**Install a package (RHEL/CentOS)** – `yum install package`

**Install a package (macOS with Homebrew)** – `brew install package`

**List installed packages (Debian/Ubuntu)** – `dpkg -l`

**List installed packages (RHEL/CentOS)** – `yum list installed`

**List disk partitions** – `fdisk -l`

**Mount a filesystem** – `mount`

**Unmount a filesystem** – `umount /dev/sdX`

**Check and repair a filesystem** – `fsck /dev/sdX`

---

