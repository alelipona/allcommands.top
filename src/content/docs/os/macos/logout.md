---
title: logout MacOS command
description: Learn how to efficiently log out of your MacOS system using the logout command. Increase your productivity and security with this simple command.
---

Logging out of your MacOS system is essential for security and privacy. By using the logout command, you can quickly and efficiently sign out of your account, ensuring that your data remains safe. This command is especially useful in shared environments or when you need to switch between multiple accounts. The logout command is easy to use and can be executed from the terminal or through a keyboard shortcut. It is a simple yet powerful tool that can help you stay organized and protect your information. Mastering the MacOS logout command will enhance your productivity and streamline your workflow.
## logout Syntax:
```bash
logout
```

## Options:
| Option | Description |
|--------|-------------|
| -h     | Logs out the current user and displays a shutdown dialog. |
| -q     | Logs out the current user without confirmation. |
| -w     | Logs out the current user without confirmation but waits until all processes have quit. |
| -l     | Logs out the current user and goes to the login window. |

## Parameters:
None

:::caution
Logging out will close all your currently open applications and documents. Make sure to save your work before initiating the logout command.
:::
## logout bash Examples:
### Logout the current user
```bash
logout
```
Logs out the current user from the macOS terminal session.

### Force logout the current user with a message
```bash
logout -m "Force logout for system maintenance"
```
Forces the current user to log out with a specified logout message for system maintenance.

### Logout all users except the root user
```bash
sudo logout -a
```
Logs out all users except the root user from the macOS system.

### Delayed logout with a countdown
```bash
logout -t 60
```
Initiates a logout after a 60-second countdown on the terminal screen.

### Silent logout without confirmation
```bash
logout -q
```
Performs a logout without displaying any confirmation prompts or messages.

### Logout a specific user by username
```bash
logout username
```
Logs out a specific user by their username from the macOS terminal.
:::tip
When using the logout command in MacOS, make sure to save any unsaved work before executing the command, as it will immediately log you out of your current session.
:::

### How do I use logout in MacOS?
To use the logout command in MacOS, execute the following command:
```bash
logout
```

### Can I force log out all users in MacOS using the logout command?
Yes, you can force log out all users in MacOS by using the following command:
```bash
sudo pkill -KILL -u USERNAME
```

### How can I log out a specific user in MacOS through the command line?
To log out a specific user in MacOS via the command line, you can use the following command:
```bash
sudo pkill -KILL -u USERNAME
```

### Is there a way to schedule a log out at a specific time on MacOS using the logout command?
Yes, you can schedule a log out at a specific time on MacOS by using the following command:
```bash
sudo shutdown -h +5
```

### How can I log out of a remote SSH session in MacOS?
To log out of a remote SSH session in MacOS, simply use the following command:
```bash
exit
```

### Can I log out of the MacOS Terminal without closing the application?
Yes, you can log out of the MacOS Terminal without closing the application by using the following command:
```bash
exit
```

### How do I log out and shut down the computer in MacOS using the command line?
To log out and shut down the computer in MacOS using the command line, execute the following command:
```bash
sudo shutdown -h now
```

### When I log out using the command line, will all my applications and files be closed?
Yes, when you log out using the command line in MacOS, all your applications and files will be closed.

## Applications of the logout command

- To switch between user accounts
- To exit a user session without shutting down the computer
- To reset system preferences
- To resolve system errors
- To quickly log out and secure the user's session