---
title: What is LOGOFF Windows command?
description: Learn how to use the LOGOFF command in Windows to log off a user from the system remotely or from the command line.
---

The Windows logoff command allows you to log off a user from the system remotely or from the command line. It is a useful tool for managing user sessions efficiently.

## LOGOFF Syntax:
```cmd
logoff [/?]
```

## LOGOFF Options:
| Option   | Description                                   |
|----------|-----------------------------------------------|
| /?       | Displays help for the logoff command.         |

:::caution
The logoff command can immediately log off the current user without any warning. Make sure to save any open work before using this command.
:::

## Parameters:
| Parameter  | Description                                   |
|------------|-----------------------------------------------|
|            | There are no parameters for the logoff command. |
## LOGOFF Command Usage Examples:
### Log off the current user immediately
```cmd
logoff
```
This command logs off the current user immediately without any warning.

### Log off a specific user using their session ID
```cmd
logoff 2
```
Log off the user with session ID 2.

### Log off a disconnected session
```cmd
logoff /v 2
```
Logs off session 2, even if it is disconnected.

### Log off the current user and close any running applications
```cmd
logoff /l
```
Logs off the current user and closes any running applications.

### Log off the current user with a custom message
```cmd
logoff /p "Logging off for maintenance"
```
Logs off the current user and displays the message "Logging off for maintenance" before doing so.
:::tip
Ensure you save all your work before executing the logoff command, as it will immediately log you out of your Windows session without any warning or confirmation.
:::

### How do I use logoff in Windows?
To use the logoff command in CMD, execute the following command:
```cmd
logoff
```

### What is the purpose of the logoff command?
{answer}

### How can I log off another user with the logoff command?
{answer}

### Is it possible to force a logoff using the logoff command?
{answer}

### Can I use the logoff command remotely on another computer?
{answer}

### How do I log off a user with a specific session ID using logoff?
{answer}

### What are the available options with the logoff command in Windows?
{answer}

### How can the logoff command be helpful in managing user sessions?
{answer}

## Applications of the LOGOFF Command

- Logging off a user account
- Ending a remote desktop session
- Switching users on a shared computer
- Logging off from a terminal session