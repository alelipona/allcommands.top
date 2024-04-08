---
title: What is w Linux command?
description: The Linux w command is used to display information about the users currently logged on, including their username, terminal, host, and activity.
---

The w command in Linux provides a summary of the users currently logged into the system, including details like their username, terminal, host, and activity status.
## w Syntax:
```bash
w [options] [user]
```

## w Options:
| Option | Description                  |
|--------|------------------------------|
| -h     | Display a help message       |
| -u     | Show idle time and process   |
| -s     | Show system activity         |
| -H     | Display column headings      |
| -i     | Ignore users' idle times     |

:::caution
Be cautious when using the w command as it displays sensitive information about users currently logged in to the system.
:::

## Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
| user      | Specifies a username to filter the output for a specific user       |
## w Command Usage Examples:

### Display Information About Currently Logged-in Users
```bash
w
```
The command 'w' displays detailed information about currently logged-in users, including their usernames, terminal sessions, login times, and system uptime.

### Limit Output to a Specific User
```bash
w username
```
By specifying a username after the 'w' command, you can limit the output to display information specifically for that user, such as their terminal session and login time.

### Filter Output by Terminal
```bash
w -T
```
Using the '-T' option with the 'w' command allows you to filter the output by terminal, providing details about the users logged into a specific terminal.

### Show Idle Time for Users
```bash
w -i
```
Adding the '-i' option to the 'w' command displays the idle time for each user, indicating how long they have been inactive since their last command or activity.

### Display Information About Remote Hosts
```bash
w -f
```
By using the '-f' option, the 'w' command can display information not only about currently logged-in users but also about remote hosts connected to the system.
:::tip
When using the w command in Linux, remember to check the manual page for more detailed information on the various options and formats available. This command is useful for monitoring users and their activities on the system.
:::

### How do I use w in Linux?
To use the w command in bash, execute the following command:
```bash
w
```

### What option can I use with w to show the time of last system boot?
To display the time of last system boot using w, you can use the -l option. Here's an example:
```bash
w -l
```

### How can I get w to display information about idle time?
To show the information about idle time using w, you can use the -i option. Here's how you can do it:
```bash
w -i
```

### How do I filter w output to only show specific users?
If you want to filter the w output to display information for only specific users, you can use the -u option followed by the username. Here is an example:
```bash
w -u username
```

### Can I get the w command to display information in a specific format?
To customize the output format of the w command, you can use the -f option. Here is an example:
```bash
w -f
```

### How can I display the hostname in the w command output?
If you want to include the hostname in the output of the w command, you can use the -h option. Here's an example:
```bash
w -h
```

### How can I get more detailed information with w about the specified user?
To get more detailed information about a specific user using the w command, you can use the -u option followed by the username. Here's an example:
```bash
w -u username
```

### Is it possible to show system login processes with w?
To display system login processes using the w command, you can use the -s option. Here is an example:
```bash
w -s
```
## Applications of the w command

- Display information about currently logged-in users and their processes
- Show the idle time, login time, and system uptime
- Provide information on the load averages of the system
- Display information about the terminal where the user is logged in
- Show the total number of users currently logged in
- Display system averages for the CPU and memory usage