---
title: finger Linux Command Guide
description: Learn how to use the Linux finger command to retrieve information about users on a Unix system. Find syntax, options, and practical examples in this comprehensive guide.
---

The Linux finger command is a powerful tool used to retrieve information about users on a Unix system. It provides details such as login name, full name, terminal name, write status, idle time, login time, office location, and more. By simply typing "finger" followed by a username, you can access a wealth of information. Additionally, the finger command can be used to query remote machines and display information on users logged into those systems. This guide covers the basic syntax, options, and practical examples to help you make the most out of the finger command.
## finger Syntax:
```bash
finger [username]
```
## Options:
| Option | Description                        |
|--------|------------------------------------|
| -l     | Display detailed information        |
| -s     | Suppress the banner line            |
| -m     | Enable messaging feature            |
| -h     | Display help information            |

## Parameters:
| Parameter | Description                                            |
|-----------|--------------------------------------------------------|
| username  | Name of the user to get information about              |

:::caution
Exercise caution when using the finger command as it may provide unauthorized access to information about users on the system.
:::
## finger Command Samples:
### Query User Information
```bash
finger username
```
Displays details about a specific user, including login time, idle time, home directory, and more.

### List All Logged-In Users
```bash
finger
```
Lists information about all currently logged-in users on the system.

### Display Information for Multiple Users
```bash
finger user1 user2
```
Retrieves details for multiple users specified in the command.

### Search for Users by a Specific Pattern
```bash
finger *name*
```
Searches for users matching a specific pattern or part of a username.

### Check for Remote User Information
```bash
finger user@remotehost
```
Displays information about a user logged in on a remote host.

### Display User Information in a Compact Format
```bash
finger -s user
```
Shows user details in a condensed format to fit more information on the screen.

### Display Information and Plan File of a User
```bash
finger -l username
```
Provides comprehensive details about a user, including their plan file content.
:::tip
When using the finger command in Linux, you can display information about users on the system, such as their login name, name, terminal, login time, and more. It can be a handy tool for system administrators to get information about logged-in users.
:::

## finger FAQ:
### How do I use finger in Linux?
To use the finger command in Linux, execute the following command:
```bash
finger
```

### What is the syntax for using finger in Linux to get information about a specific user?
To get information about a specific user using the finger command in Linux, you can use the following syntax:
```bash
finger username
```

### How can I display the idle time of users with the finger command in Linux?
You can display the idle time of users using the finger command in Linux by executing the following command:
```bash
finger -l
```

### Is it possible to get a short format output with the finger command in Linux?
Yes, you can get a short format output with the finger command in Linux using the following command:
```bash
finger -s
```

### How to display the full format output with the finger command in Linux?
To display the full format output with the finger command in Linux, you can use the following command:
```bash
finger -f
```

### Can I limit the information displayed by the finger command in Linux?
Yes, you can limit the information displayed by the finger command in Linux using the following command:
```bash
finger username -m
```
## Applications of the finger command

- Display information about users
- Check if a user is logged in
- Show email forwarding addresses for a user
- Display the last login time of a user
- View the full name, home directory, shell, and other details of a user