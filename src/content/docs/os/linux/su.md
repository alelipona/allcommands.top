---
title: Linux su command
description: The Linux su command allows users to switch to another user account without logging out. Learn how to use the su command efficiently.
---

The Linux su (substitute user) command is used to switch to another user account in the terminal without logging out. This command allows users to perform tasks with the privileges of a different user, such as the root user. By using su, users can execute commands that require higher privileges or access files owned by another user. It is an essential tool for system administrators to carry out administrative tasks securely.

## su Syntax:
```bash
su [option] [username]
```
## Options:
| Option | Description             |
|--------|-------------------------|
| -c     | Command to execute      |
| -l     | Simulate a full login   |
| -m     | Simulate a full login   |
| -s     | Shell to use (default /bin/sh)|

## Parameters:
| Parameter | Description    |
|-----------|----------------|
| username  | The user to switch to |

:::caution
Be cautious when using the su command as it allows you to switch to another user account, potentially granting you access to sensitive information and actions that may have security implications.
:::
## su Usage:
### Switch to Root User
```bash
su
```
This command allows you to switch to the root user by entering the root password.

### Change to Another User
```bash
su username
```
Used to switch to another user account by specifying the username.

### Launch a Shell as Another User
```bash
su - username
```
Opens a shell as another user with their environment settings.

### Switch User with Specific Shell
```bash
su -s /bin/bash username
```
Switches to another user with a specific shell (/bin/bash in this example).
:::tip
Remember to use the su command with caution, as it allows you to switch to another user account, including the root account, which can have extensive permissions and capabilities. Always ensure that you have the necessary permissions to execute the su command, and be cautious when making changes to the system using this command.
:::

### How do I use su in Linux?
To use the su command in Linux, execute the following command:
```bash
su --option <value>
```

### How do I switch to root user using su in Linux?
To switch to the root user using the su command in Linux, use the following command:
```bash
su
```

### How do I switch to a specific user using su in Linux?
To switch to a specific user using the su command in Linux, use the following command:
```bash
su <username>
```

### How do I login as a different user shell using su in Linux?
To login as a different user shell using the su command in Linux, use the following command:
```bash
su -s <shell> <username>
```

### How do I preserve the environment when switching users with su in Linux?
To preserve the environment when switching users with the su command in Linux, use the following command:
```bash
su - <username>
```

### How do I specify the login shell to use when switching users with su in Linux?
To specify the login shell to use when switching users with the su command in Linux, use the following command:
```bash
su -s <shell> <username>
```

### How do I execute a command as another user using su in Linux?
To execute a command as another user using the su command in Linux, use the following command:
```bash
su -c "<command>" <username>
```

## Applications of the su command

- Running commands with superuser privileges
- Switching to another user account
- Changing to a different user's environment
- Testing user permissions and access rights