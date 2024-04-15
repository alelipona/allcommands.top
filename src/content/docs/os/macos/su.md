---
title: su MacOS command
description: Learn how to use the su command in MacOS to switch to another user account for administrative tasks.
---

The su command in MacOS allows users to switch to another user account, typically the root account, to perform administrative tasks. By default, the root user is disabled in MacOS, so you may need to enable it first. To use the su command, open a terminal window and type "su" followed by the account name you want to switch to. You will be prompted to enter the password for that account. Be cautious when using the su command, as it grants full access to the target account's privileges and capabilities. It is recommended to use the su command sparingly and always log out of the root account when you are done with your tasks.

## su Syntax:
```bash
su [option] [username]
```
## Options:
| Option     | Description                            |
|------------|----------------------------------------|
| -c [command]   | Specify a command to execute as the specified user. |
| -s [shell]     | Specify the shell to use when executing the command. |
| -m, -, -l       | Start the shell as a login shell.     |

## Parameters:
| Parameter  | Description                             |
|------------|-----------------------------------------|
| username   | The username you want to switch to.     |

:::caution
Exercise caution when using the `su` command, as it involves switching to another user account with potentially elevated privileges. Make sure to have the necessary permissions and use it responsibly.
:::
## su bash Examples:
### Switch User to Root 
```bash
su
```
Switches the current user to the root user.

### Switch User to Specific User 
```bash
su username
```
Switches the current user to the specified user (replace "username" with the desired username).

### Start a Shell as Another User 
```bash
su -s /bin/bash username
```
Starts a bash shell as the specified user (replace "username" with the desired username).

### Execute Command as Another User 
```bash
su -c "command" username
```
Executes the specified command as the specified user (replace "command" with the desired command and "username" with the desired username).

### Switch User with a Different Shell 
```bash
su -s /bin/zsh username
```
Switches the current user to the specified user with the specified shell (replace "username" with the desired username and "/bin/zsh" with the desired shell).

### Login with Username and Preserve Environment 
```bash
su -l username
```
Logs in as the specified user while preserving the environment (replace "username" with the desired username).
:::tip
When using the su command in MacOS, be cautious as it allows you to switch to another user account, including the root account, which has full system privileges. Make sure to use it with care and only when necessary to avoid unintended consequences.
:::

## su Command Help Center:

### How do I use su in MacOS?
To use the su command in MacOS, execute the following command:
```bash
su --option <value>
```

### How can I switch to the root user in MacOS using su?
To switch to the root user in MacOS using su, you can run the command:
```bash
su
```

### How do I switch to a specific user account in MacOS with su?
To switch to a specific user account in MacOS using su, you can use the following command:
```bash
su - <username>
```

### How can I run a command as another user in MacOS with su?
You can run a command as another user in MacOS using su by specifying the user with the following command:
```bash
su -c "<command>" -s "<shell>" <username>
```

### How do I login as a different user interactively in MacOS using su?
To login as a different user interactively in MacOS using su, you can use the following command:
```bash
su -l <username>
```

### How to switch to the root user shell in MacOS using su?
To switch to the root user shell in MacOS using su, you can run the command:
```bash
su -
```

### How to display a list of available user accounts in MacOS with su?
To display a list of available user accounts in MacOS using su, you can run the command:
```bash
su -
```

### How do I change the shell when switching user accounts in MacOS with su?
To change the shell when switching user accounts in MacOS using su, you can use the following command:
```bash
su -s <shell> <username>
```
## Applications of the su command

- Run commands as another user
- Switch to the root user account
- Perform administrative tasks
- Access files or directories with different user permissions