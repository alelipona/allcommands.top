---
title: alias MacOS command
description: Learn how to create custom shortcuts for lengthy commands on your Mac with the alias command.
---

The MacOS alias command allows users to create custom shortcuts for lengthy or frequently used commands, improving efficiency and productivity. By setting up aliases, users can simplify complex commands and make them easier to remember and execute. This feature is especially useful for individuals who work with the terminal frequently and want to streamline their workflow. With the alias command, Mac users can save time and effort by creating personalized shortcuts for common tasks or commands.
## alias Syntax:
```bash
alias [name[='value'] ...]
```
## Options:
| Option | Description                       |
|--------|-----------------------------------|
| -p     | List all defined aliases in name=value pairs. |

## Parameters:
| Parameter | Description                                              |
|-----------|----------------------------------------------------------|
| name      | The name of the alias being created or updated.          |
| value     | The command or sequence of commands to be executed.      |

:::caution
Use aliases with caution as they can override existing commands and lead to unexpected behavior.
:::
## alias bash Examples:

### Create a Simple Alias
```bash
alias ll='ls -al'
```
Creates a simple alias "ll" for the command "ls -al".

### Display Current Aliases
```bash
alias
```
Displays a list of all currently defined aliases.

### Remove an Alias
```bash
unalias ll
```
Removes the alias "ll" that was previously created.

### Alias with Arguments
```bash
alias grep='grep --color=auto'
```
Creates an alias "grep" that includes the `--color=auto` argument for color-highlighting search results.

### Persistent Aliases
```bash
echo "alias desktop='cd ~/Desktop'" >> ~/.bash_profile
```
Sets an alias "desktop" to change directory to the Desktop and makes it persistent by adding it to the .bash_profile file.

### Combine Multiple Commands in an Alias
```bash
alias dulp='du -h --max-depth=1 | sort -hr'
```
Creates an alias "dulp" that combines the commands du, sort, and list file sizes in the current directory.
:::tip
When creating an alias in MacOS, make sure to use unique names that do not conflict with existing commands or aliases. Avoid using reserved keywords or special characters in your alias names to prevent unexpected errors.
:::

## alias Command Help Center:

### How do I use alias in MacOS?
To use the alias command in MacOS, execute the following command:
```bash
alias --option <value>
```

### How do I create a new alias in MacOS?
To create a new alias in MacOS, use the following syntax:
```bash
alias newalias='command'
```

### How do I list all aliases in MacOS?
To display a list of all defined aliases in MacOS, run the command:
```bash
alias
```

### How do I remove an alias in MacOS?
To remove an alias in MacOS, use the unalias command followed by the alias name:
```bash
unalias aliasname
```

### How do I make an alias permanent in MacOS?
To make an alias permanent in MacOS, add the alias command to your shell configuration file like ~/.bashrc or ~/.bash_profile.

### How do I know the full command an alias refers to in MacOS?
To see the full command an alias refers to in MacOS, use the type command with the alias name:
```bash
type aliasname
```

### How do I prevent overriding existing commands with an alias in MacOS?
To prevent overriding existing commands with an alias in MacOS, use the \ before the command or built-in command:
```bash
\command
```

### How do I remove all aliases in MacOS?
To remove all aliases in MacOS, use the unalias command with the -a option:
```bash
unalias -a
```
## Applications of the alias command

- Creating custom shortcuts for frequently used commands
- Increasing productivity by reducing typing
- Simplifying complex commands
- Organizing and managing command workflows