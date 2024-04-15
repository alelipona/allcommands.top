---
title: MacOS unalias bash
description: Learn how to use the MacOS unalias command to remove command aliases in your bash shell.
---

The MacOS unalias command is used to remove shortcuts created with the alias command in the bash shell. By specifying the alias to be removed, you can revert a shortcut to its original command. This command is particularly useful for managing your shell environment and ensuring that commands work as intended.

## unalias Syntax:
```bash
unalias [-a] [name ...]
```

## Options:
| Option | Description                                      |
|--------|--------------------------------------------------|
| -a     | Remove all aliases.                              |

## Parameters:
| Parameter | Description                                |
|-----------|--------------------------------------------|
| name      | Name of the alias(es) to be removed.        |

:::caution
Exercise caution while using the unalias command, as it directly removes aliases without confirmation and can affect shell functionality. Make sure to specify the correct alias name or use the -a option carefully to remove all aliases.
:::
## unalias Usage:
### List all defined aliases
```bash
unalias -a
```
Display all defined aliases in the current shell session.

### Remove a specific alias
```bash
unalias ll
```
Remove the alias "ll" if it has been defined previously.

### Remove multiple aliases at once
```bash
unalias l ls
```
Remove the aliases "l" and "ls" if they have been defined previously.

### Remove all aliases
```bash
unalias -a
```
Remove all defined aliases in the current shell session.
:::tip
When using the unalias command in MacOS, make sure to double-check the aliases you are removing to avoid unintended consequences in your system. It is recommended to only unalias aliases that you are confident you no longer need.
:::

### How do I use unalias in MacOS?
To use the unalias command in MacOS, execute the following command:
```bash
unalias <alias_name>
```

### How to remove all aliases in MacOS using unalias?
To remove all aliases in MacOS using unalias, you can use the following command:
```bash
unalias -a
```

### Can I unalias multiple aliases at once in MacOS?
Yes, you can unalias multiple aliases at once in MacOS by providing multiple alias names after the unalias command. Here is an example:
```bash
unalias alias1 alias2
```

### How can I force unalias to remove an alias in MacOS?
To force unalias to remove an alias in MacOS, use the following command:
```bash
unalias -a alias_name
```

### How to display a list of current aliases in MacOS?
To display a list of current aliases in MacOS, you can use the following command:
```bash
alias
```

### Does unalias remove aliases permanently in MacOS?
Yes, unalias removes aliases permanently in MacOS. If you unalias an alias, it will no longer be available for use in the current session or future sessions.

### Can unalias be used to remove built-in shell commands in MacOS?
No, the unalias command in MacOS cannot be used to remove built-in shell commands. It is specifically used to remove user-defined aliases.

## Applications of the unalias command

- Removing an existing alias
- Resolving conflicts between aliases and commands
- Resetting an alias to its default state