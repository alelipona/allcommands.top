---
title: users MacOS command
description: A guide to the users command in MacOS, including how to manage user accounts and permissions efficiently.
---

The `users` command in MacOS allows users to view information about currently logged-in users, as well as manage user accounts and permissions. This command can be useful for system administrators to monitor user activity, troubleshoot login issues, and ensure proper security measures are in place. By using the `users` command, users can quickly check who is logged in to the system, view specific user details such as user ID and group ID, and even force other users to log out if necessary. Overall, understanding and utilizing the `users` command in MacOS can help users efficiently manage user accounts and maintain a secure computing environment.
## users Syntax:
```bash
CommandSyntax
```
## Options:
| Option | Description |
|--------|-------------|
| -a     | Include hidden files |
| -l     | Use a long listing format |
| -R     | Recursively list subdirectories |
| -h     | Human-readable sizes |
| -t     | Sort by modification time, newest first |

## Parameters:
| Parameter | Description |
|-----------|-------------|
| directory | Specify a directory to list |

:::caution
Exercise caution when using the command with the -R option, as it can recursively list a large number of subdirectories, potentially resulting in a long output.
:::
## users bash Examples:
### Display Currently Logged in Users
```bash
users
```
Display the list of users currently logged in to the system.

### Check the Last Login Time for Users
```bash
last
```
View a list of the last logged in users along with their login times.

### Show a Total Count of Logged in Users
```bash
users | wc -w
```
Count the number of users currently logged in to the system.

### Check the Idle Time for Logged in Users
```bash
who -u
```
Display the idle time for users currently logged in.

### Display Detailed Information about Users
```bash
finger
```
Show detailed information about all users currently logged in.

### Filter Only Unique Users from the List
```bash
users | sort | uniq
```
Get a list of unique users currently logged in.
:::tip
When using the users command in MacOS, make sure to familiarize yourself with the available options and their respective values to effectively manage user-related information on your system.
:::

### How do I list the users currently logged in on MacOS?
To view a list of users currently logged in on MacOS, use the following command:
```bash
users
```

### How can I check the login history of users in MacOS?
To check the login history of users in MacOS, you can use the last command with the -R option to display the host's IP addresses:
```bash
last -R
```

### How do I display the specified user's login details in MacOS?
To display login details for a specific user in MacOS, you can use the last command followed by the username you want to check:
```bash
last username
```

### How can I list the last login information for users in MacOS?
To list the last login information for users in MacOS, you can use the last command without any options:
```bash
last
```

### How do I show the current user's login name in MacOS?
To display the login name of the current user in MacOS, you can use the whoami command:
```bash
whoami
```

### How can I view the list of currently logged in users and their terminal device in MacOS?
To view the list of currently logged in users along with their terminal device in MacOS, you can use the who command with the -l option:
```bash
who -l
```

### How do I find out the number of users currently logged in on MacOS?
To find out the number of users currently logged in on MacOS, you can use the who command with the -q option:
```bash
who -q
```

### How can I display detailed information about users currently logged in on MacOS?
To display detailed information about users currently logged in on MacOS, you can use the finger command with the -l option:
```bash
finger -l
```
## Applications of the users command

The **users** command in MacOS is used to display the user names of users currently logged in to the system. It can be helpful for monitoring and managing user activity on a MacOS system.