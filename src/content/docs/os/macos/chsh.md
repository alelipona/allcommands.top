---
title: chsh MacOS command
description: Change the default shell for a user in MacOS using the chsh command. Learn how to update the shell environment on your Mac easily.
---

The chsh command on MacOS allows users to change their default shell. By using this command, you can update the shell environment on your Mac effortlessly. Simply follow the specified steps to modify the default shell for a particular user account.

## chsh Syntax:
```bash
chsh [options] [username]
```
## Options:
| Option | Description                              |
|--------|------------------------------------------|
| -s     | Specify the user's login shell           |
| -l     | Print the user's configured login shell  |
| -h     | Display the help message                  |

## Parameters:
| Parameter | Description                      |
|-----------|----------------------------------|
| username  | The username of the user to modify|

:::caution
Exercise caution when using the chsh command as it can change the login shell for a user, which may affect their ability to log in or use certain system functionalities. It is recommended to have a good understanding of how the shell works before making changes.
:::
## chsh command Examples:
### Change the default shell to zsh
```bash
chsh -s /bin/zsh
```
Changes the default shell to zsh for the user.

### Display current shell
```bash
chsh -s
```
Displays the current shell for the user.

### Change the default shell to fish
```bash
chsh -s /usr/local/bin/fish
```
Changes the default shell to fish for the user.

### Revert back to the default shell
```bash
chsh -s /bin/bash
```
Changes the default shell back to bash for the user.

### List available shells
```bash
chsh -l
```
Lists all available shells that can be used as the default shell.

### Set the default shell to tcsh
```bash
chsh -s /bin/tcsh
```
Sets the default shell to tcsh for the user.
:::tip
Remember to use the chsh command with caution, as changing the shell for your user incorrectly can lead to login issues or other unexpected behavior. Always make sure you know what shell you are switching to and have a good understanding of how it works.
:::

## chsh Command Help Center:

### How do I use chsh in MacOS?
To use the chsh command in MacOS, execute the following command:
```bash
chsh --s /bin/zsh
```

### How can I check my current shell in MacOS using chsh?
To check your current shell in MacOS using chsh, run the following command:
```bash
chsh -s
```

### How do I change the login shell for a specific user in MacOS with chsh?
To change the login shell for a specific user in MacOS using chsh, use the following command syntax:
```bash
sudo chsh -s /bin/bash username
```

### How can I list available shells for selection with chsh in MacOS?
To list the available shells for selection using chsh in MacOS, you can use the following command:
```bash
chsh -l
```

### How to change the default login shell temporarily in MacOS using chsh?
To temporarily change the default login shell in MacOS using chsh, you can run the following command:
```bash
chsh -s /bin/sh
```

### Can I change the shell for a user without using sudo with chsh in MacOS?
Yes, you can change the shell for your own user without using sudo by executing the following command:
```bash
chsh -s /bin/csh
```

### How to revert to the previous default shell after using chsh in MacOS?
To revert to the previous default shell after making changes using chsh in MacOS, you can use the following command:
```bash
sudo chsh -s /bin/zsh
```

### Is it possible to change the login shell for multiple users at once in MacOS with chsh?
No, you need to change the login shell for each user individually using the chsh command in MacOS.

## Applications of the chsh command

- Changing the default shell for a user.
- Specifying the shell that a user will use when logging in.