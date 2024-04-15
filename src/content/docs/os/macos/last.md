---
title: last MacOS command
description: The last command in MacOS allows users to display a list of previously logged in users, including the time and date of their last login.
---

The last command in MacOS is a useful tool for system administrators and users to view a list of previously logged in users, along with information such as their username, terminal from which they logged in, IP address, time, and date of their last login. This command provides insights into user activity on the system and can be used for security and troubleshooting purposes. By utilizing the last command, users can track login history, identify unauthorized access, and monitor user activity effectively.
## last Syntax:
```bash
last [options] [parameters]
```
## Options:
| Option     | Description                      |
|------------|----------------------------------|
| -t         | Show time of the last reboot     |
| -R         | Show the host name and port number of remote logins |
| -y         | Hide the host name and port number of remote logins |
| -n lines   | Restrict the output to the last 'lines' number of entries |

## Parameters:
| Parameter  | Description                         |
|------------|-------------------------------------|
| username   | Show the entries for a specific user |
| tty        | Show the entries associated with a specific terminal device |
| hostname   | Show the entries associated with a specific hostname |
| TT         | Show entries associated with a specific terminal name |

:::caution
Exercise caution when using the `last` command as it displays sensitive information like login details and user activities. Make sure to handle this information securely and responsibly.
:::
## last bash Examples:
### Display the last user logins
```bash
last
```
Displays a list of previous user logins on the system.

### Display the last 10 logins in reverse order
```bash
last -n 10 -R
```
Displays the last 10 user logins in reverse order with hostname and timestamps included.

### Show shutdown and reboot history
```bash
last -x
```
Displays reboot, shutdown, and system runlevel change history.

### Display the last 5 logins with IP addresses
```bash
last -n 5 -a
```
Shows the last 5 user logins along with corresponding IP addresses.

### Display the last boot time
```bash
last -xF | head -1
```
Shows the last time the system was rebooted.

### Show failed login attempts 
```bash
lastb -a
```
Displays a list of unsuccessful login attempts with source IP address information.
:::tip
When using the `last` command in MacOS, make sure to check the available options and filters that can help you narrow down the results to specific users, terminals, or time intervals. Additionally, be aware that the output of the `last` command may vary based on the system's logging settings.
:::

### How do I use last in MacOS?
To use the last command in MacOS, execute the following command:
```bash
last
```

### How to display the last logged in users on MacOS?
To display the list of last logged in users on MacOS, use the following command:
```bash
last
```

### How to show full user login history with last in MacOS?
To show the full history of user logins with last in MacOS, you can use the following command:
```bash
last -F
```

### How to filter the output of last by username in MacOS?
To filter the output of the last command by a specific username in MacOS, use the following command:
```bash
last username
```

### How to limit the number of lines displayed with last in MacOS?
To limit the number of lines displayed by the last command in MacOS, you can use the `-n` option followed by the number of lines you want to display. For example:
```bash
last -n 10
```

### How to display the shutdown history with last in MacOS?
To display the shutdown history using the last command in MacOS, you can execute the following:
```bash
last -x shutdown
```

### How to show the last system boot time with last in MacOS?
To show the last system boot time with the last command in MacOS, you can use the following command:
```bash
last -x boot
```

### How to view specific terminal logins with last in MacOS?
To view the logins for a specific terminal with the last command in MacOS, you can specify the terminal name after the command, for example:
```bash
last console
```
## Applications of the last command

- View the last few lines of a file
- Repeat the last command
- Quickly check the result of the previous command
- Investigate the history of executed commands