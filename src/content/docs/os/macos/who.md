---
title: MacOS who bash
description: Learn how to use the MacOS who command to display information about currently logged-in users in the terminal.
---

The MacOS who command is a powerful tool that allows users to retrieve detailed information about currently logged-in users on their system. By simply entering "who" in the terminal, users can access a list of logged-in users, including their usernames, terminal device numbers, login times, and the remote host they are connected from. This command provides a quick and efficient way to monitor user activity and manage system resources.

## who Syntax:
```bash
who [options] [file]
```
## Options:
| Option | Description                   |
|--------|-------------------------------|
| -H     | Display column headers         |
| -q     | Display usernames and count only |
| -m     | Display information from utmp file |
| -u     | Display idle time and process ID |
| -T     | Show time when user logged in last |
| -w     | Display user login and idle time |

## Parameters:
| Parameter | Description                |
|-----------|----------------------------|
| file      | Specify a file to display information from   |

:::caution
Caution: The `who` command displays sensitive information about currently logged-in users. Make sure to use it responsibly and consider privacy concerns when using this command.
:::
## who Usage:
### Display currently logged in users
```bash
who
```
Displays a list of all users currently logged into the system.

### Display currently logged in users with line option
```bash
who -l
```
Displays a list of all users currently logged into the system, along with the terminal line number.

### Display currently logged in users with time option
```bash
who -T
```
Displays a list of all users currently logged into the system, along with the time they logged in.

### Display currently logged in users with idle time
```bash
who -u
```
Displays a list of all users currently logged into the system, along with their login time and idle time.
:::tip
Make sure to use the appropriate options and flags with the who command to get the desired information efficiently.
:::

### How do I use who in MacOS?
To use the who command in MacOS, execute the following command:
```bash
who
```

### What flag can I use with who to display the hostname of users logged in?
To display the hostname of users logged in, use the following command:
```bash
who -m
```

### How can I display the login time and idle time of users using who in MacOS?
You can display the login time and idle time of users by running the command:
```bash
who -H
```

### How do I get a more detailed output with who in MacOS, including the PID and terminal of each user?
For a more detailed output with the PID and terminal of each user, use the command:
```bash
who -u
```

### How can I see only the users who are actively logged in and using a terminal in MacOS with who?
To see only the users who are actively logged in and using a terminal, use the command:
```bash
who -q
```

### Is there a way to display the system boot time and run level with the who command in MacOS?
Yes, you can display the system boot time and run level by executing:
```bash
who -b
```

### How can I get a continuously updated list of all users logged in with who in MacOS?
To continuously update and display a list of all users logged in, use the following command:
```bash
who -a
```

## Applications of the who command

- Display information about currently logged in users
- Show the username, terminal, login time, and IP address of users
- Check for remote connections to the system
- Verify if someone else is using the system
- Track user activity on the system