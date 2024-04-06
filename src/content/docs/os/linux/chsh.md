---
title: Linux chsh command
description: Change shell for a user with the Linux chsh command to enhance user experience and security.
---

The Linux chsh command allows users to change their default login shell. By using chsh, users can customize their shell environment to suit their preferences and increase productivity. This command is essential for system administrators who need to manage multiple users and enforce security policies. Users can simply specify the path to the desired shell binary, and chsh will update the user's shell configuration accordingly. This flexibility enables users to work more efficiently and securely within the Linux environment.

## chsh Syntax:
```bash
chsh [options] [username]
```
## Options:
| Option | Description                      |
|--------|----------------------------------|
| -s     | Specify the new login shell      |
| -h     | Display help                     |

## Parameters:
| Parameter | Description                   |
|-----------|-------------------------------|
| username  | The user's login name to change|

:::caution
Exercise caution when using the chsh command as changing the shell for a user may have unintended consequences. It is recommended to be familiar with the implications before proceeding.
:::
## chsh Usage:
### Change default shell for user 'john' to '/bin/zsh'
```bash
chsh -s /bin/zsh john
```
Changes the default shell for the user 'john' to '/bin/zsh'.

### List available shells
```bash
chsh -l
```
Displays a list of available shells that can be used with the chsh command.

### Change default shell for current user to '/bin/bash'
```bash
chsh -s /bin/bash
```
Changes the default shell for the current user to '/bin/bash'.

### Prevent changing shell for user 'alice'
```bash
chsh -s /bin/false alice
```
Prevents user 'alice' from changing their default shell by setting it to '/bin/false'.
:::tip
When using the chsh command in Linux, make sure to provide the correct path to the shell you want to change to, especially when specifying a custom shell. Always double-check the path to avoid any errors or potential issues.
:::

## Common Questions on chsh Usage:
### How do I use chsh in Linux?
To use the chsh command in Linux, execute the following command:
```bash
chsh --s /bin/zsh
```

### How can I change my default shell using chsh?
To change your default shell using chsh, run the following command:
```bash
chsh -s /bin/bash
```

### How do I know what shells are available for chsh?
To view the list of available shells for chsh, you can check the contents of the "/etc/shells" file by using the following command:
```bash
cat /etc/shells
```

### Can I change another user's default shell with chsh?
To change another user's default shell using chsh, you need to have superuser privileges. Use the following command, replacing "username" with the actual username and "/bin/bash" with the desired shell:
```bash
sudo chsh -s /bin/bash username
```

### How to revert back to the default shell using chsh?
To revert back to the default shell using chsh, run the command below (typically "/bin/bash"):
```bash
chsh -s /bin/bash
```

### What permissions are required to use chsh in Linux?
To use the chsh command in Linux, you typically need to have permission to modify the user's account information. This means either being the user themselves or having superuser privileges to make changes.


## Applications of the chsh command

- Change a user's login shell
- Set a default shell for a user