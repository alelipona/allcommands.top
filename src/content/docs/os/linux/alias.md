---
title: alias command in Linux
description: Learn how to use the Linux alias command to create shortcuts for frequently used commands. Improve your productivity by customizing your command line experience with this powerful tool.
---

The Linux alias command allows users to create custom shortcuts for frequently used commands. By using aliases, users can save time and increase productivity by simplifying complex or lengthy commands into shorter, more memorable ones. Aliases can be set up for specific users or system-wide, making it a versatile tool for customizing the command line experience. With the alias command, users can define new commands, override existing ones, or add options to existing commands. This flexibility empowers users to tailor their command line interface to suit their specific needs and preferences.
## alias Syntax:
```bash
alias [name]='command'
```

## Linux alias Options:
| Option | Description                     |
|--------|---------------------------------|
| -p     | Print all defined aliases in a format that can be reused as input. |
| -r     | Remove specified alias.         |

## alias Parameters:
| Parameter | Description                                         |
|-----------|-----------------------------------------------------|
| name      | The alias name to be defined or modified.           |
| command   | The command or sequence of commands to be aliased.  |

:::caution
Caution: Be careful when using aliases as they can potentially override existing commands or cause confusion for other users. Make sure aliases do not conflict with existing commands before setting them.
:::
## How to use alias command:
### Create a simple alias
```bash
alias ll='ls -alF'
```
Creates a new alias named "ll" which will execute the "ls -alF" command when used.

### List all existing aliases
```bash
alias
```
Displays a list of all currently defined aliases.

### Remove an alias
```bash
unalias ll
```
Removes the alias named "ll" from the system.

### Create an alias with arguments
```bash
alias lsd='ls -l | grep "^d"'
```
Creates an alias named "lsd" which lists only directories.

### Temporarily override an alias
```bash
\ls
```
Temporarily overrides an alias (in this case, "ls") and executes the original command.

### Persisting aliases
```bash
echo "alias update='sudo apt update && sudo apt upgrade -y'" >> ~/.bashrc
```
Adds a new alias named "update" to the ~/.bashrc file for persistent use.

### Display details of a specific alias
```bash
alias ll
```
Displays the definition of the alias named "ll".

### Create a chained alias
```bash
alias lf="ls -l | grep -E '^\-\|'"
```
Creates an alias named "lf" which lists only regular files.
:::tip
Always remember to use single quotes when creating an alias with parameters to prevent unexpected behavior due to variable expansion.
:::

### How do I use alias in Linux?
To use the alias command in Linux, execute the following command:
```bash
alias --option <value>
```

### How do I create a new alias in bash?
To create a new alias in bash, use the following command syntax:
```bash
alias new_alias='command_to_alias'
```

### How do I list all existing aliases in bash?
To list all existing aliases in bash, run the following command:
```bash
alias
```

### How do I remove an alias in Linux?
To remove an alias in Linux, use the unalias command followed by the alias name. Here is an example:
```bash
unalias alias_name
```

### How do I make an alias permanent in bash?
To make an alias permanent in bash, add the alias command to your ~/.bashrc or ~/.bash_profile file. It will automatically load every time you start a new shell.

### How can I temporarily disable an alias in bash?
To temporarily disable an alias in bash, use the command unalias followed by the alias name. Here is an example:
```bash
unalias alias_name
```

### How do I show the alias definition for a specific alias in bash?
To display the definition of a specific alias in bash, use the alias command followed by the alias name. Here is an example:
```bash
alias alias_name
```

### Can I use an alias name that is the same as a built-in command in bash?
Yes, you can create an alias with the same name as a built-in command in bash. The alias will take precedence over the built-in command when you run it.

### How do I export an alias to be available in subshells in bash?
To export an alias to be available in subshells in bash, use the following command:
```bash
export -f alias_name
```

## Applications of the alias Command

- Creating custom shortcuts for frequently used commands
- Shortening long or complex command syntax
- Adding default options or flags to commands
- Improving productivity by saving time on typing repetitive commands