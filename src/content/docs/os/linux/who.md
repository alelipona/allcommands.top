---
title: who command in Linux
description: Learn about the Linux who command usage, options, and output. Find out how to display information about currently logged-in users on a Unix system.
---

The `who` command in Linux is used to display information about currently logged-in users on a Unix system. It shows the username, terminal, and time when the user logged in. Additionally, it can display the host from which the user is logged in. This command can be useful for system administrators to monitor user activity and manage resource allocation on the system.

## who Syntax:
```bash
who [option] [file]
```

## Linux who Options:
| Option | Description                   |
|--------|-------------------------------|
| -b     | Time of last system boot      |
| -d     | Dead processes                |
| -H     | Display column headers        |
| -l     | Time of last login            |
| -q     | List all login names          |
| -u     | List all processes started by any user |

## who Parameters:
| Parameter | Description                 |
|-----------|-----------------------------|
| file      | Show information on a specific file or terminal                  |

:::caution
Be cautious when using the "who" command as it provides information about currently logged in users and can also show information about dead processes.
:::
## How to use who command:
### Display currently logged in users
```bash
who
```
This command will display a list of users who are currently logged into the system.

### Display only the usernames of the logged in users
```bash
who -q
```
Using the -q option will show only the usernames of the logged in users.

### Display all information about the logged in users with headings
```bash
who -H
```
The -H option displays all information about the logged in users along with headings.

### Display the time the system was last booted
```bash
who -b
```
By using the -b option, you can see the time when the system was last booted.

### Display a list of currently logged in users and their IP addresses
```bash
who -u
```
Using the -u option will show a list of currently logged in users along with their IP addresses.

### Show the pid and time each user has been idle
```bash
who -u -p
```
By using both -u and -p options, you can see the process ID and the time each user has been idle.

### Display only the line of information including the current user
```bash
who am i
```
This command will display only the user's current session information.

### Show only the login and logout time for the current user
```bash
who -u am I
```
Using -u on the user "am I" will display the login and logout time for the current user.
:::tip
When using the who command in Linux, remember to check the command's manual (man page) for additional options and detailed information on how to interpret the output.
:::

### How do I use who in Linux?
To use the who command in Linux, execute the following command:
```bash
who
```

### What is the output of the who command?
The who command displays information about users who are currently logged into the system, as well as their login names, terminal line numbers, login times, and more.
```bash
who
```

### How can I display only the username and terminal of logged-in users?
You can use the who command with the `-q` or `--query` option to display only the username and terminal of logged-in users.
```bash
who -q
```

### How do I display the time of last system boot using who?
You can use the who command with the `-b` or `--boot` option to display the time of the last system boot.
```bash
who -b
```

### Can I get the run level of the system with who?
Yes, you can use the who command with the `-r` or `--runlevel` option to display the current and previous run levels of the system.
```bash
who -r
```

### How can I show the dead processes with who?
You can use the who command with the `-d` or `--dead` option to display dead processes that are not properly removed from the UTMP file.
```bash
who -d
```

### How can I display the hostname of the system using who?
To display the hostname of the system along with user information, you can use the who command with the `-m` or `--mesg` option.
```bash
who -m
```

### Can I see all login processes with who?
Yes, you can use the who command with the `-p` or `--processes` option to show all login processes along with other information.
```bash
who -p
```

### How do I show only the count of logged-in users with who?
To display only the count of logged-in users, you can use the who command with the `-q` option followed by the `--count` option.
```bash
who -q --count
```

## Applications of the who command

- Display information about who is logged on
- Show the username, terminal, login time, and IP address of each user
- Display idle time and system boot time for each user
- Check for multiple logins by the same user
- Monitor and track user activity and login sessions