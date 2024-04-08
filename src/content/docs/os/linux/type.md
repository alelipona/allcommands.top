---
title: type command in Linux
description: The Linux type command is used to determine the type of a command in the shell environment. It helps users understand whether a given command is a built-in command, an executable program, or an alias.
---

The `type` command in Linux is a useful tool for identifying the nature of a command in the shell environment. It allows users to determine if a specified command is a built-in shell command, an external executable program, a shell function, or an alias. By using the `type` command followed by the name of the command, users can quickly ascertain how the command is interpreted by the shell. This information can be particularly helpful when troubleshooting issues related to command execution or when trying to understand the behavior of different commands within the shell environment.

## type Syntax:
```bash
CommandSyntax
```
## Linux type Options:
| Option | Description |
|--------|-------------|
| -a     | Description of option -a |
| -b     | Description of option -b |
| -c     | Description of option -c |

## type Parameters:
| Parameter | Description |
|-----------|-------------|
| Parameter1 | Description of Parameter1 |
| Parameter2 | Description of Parameter2 |
| Parameter3 | Description of Parameter3 |

:::caution
UsageWarning
:::
## How to use type command:
### Check the type of a command
```bash
type ls
```
Displays whether a command is a built-in shell command, an external command, or an alias.

### Show the full path of a command
```bash
type -p python
```
Shows the full path of the specified command if it is found in the PATH variable.

### Verify if a command is an alias
```bash
type nano
```
Verifies if the specified command is an alias and displays its original definition.

### Determine the type of a shell keyword
```bash
type for
```
Shows that "for" is a shell keyword, which is a reserved word recognized by the shell parser.

### Check the type of a function
```bash
function myfunc { echo "Hello, World!"; }; type myfunc
```
Displays that "myfunc" is a shell function and shows its definition.

### Locate the source file of a function
```bash
type -a myfunc
```
Lists all locations where the function "myfunc" is found, including files and line numbers.

### Identify whether a command is a file or directory
```bash
type /bin/bash
```
Determines whether the specified path refers to a file, such as a binary executable, or a directory.

### View type information for multiple commands
```bash
type ls cd pwd
```
Displays the type information for multiple commands in a single command execution.
:::tip
Remember that the `type` command in Linux is used to determine the type of a command or shell built-in. It is a useful tool for understanding how a command will be interpreted by the shell.
:::

### How do I use type in Linux?
To use the type command in Linux, execute the following command:
```bash
type --option <value>
```

### What is the purpose of the type command in bash?
The type command in bash is used to determine how a command name is interpreted. It can tell you whether a command is a shell built-in, an alias, a function, an executable file, or a keyword.
```bash
type ls
```

### How can I check if a command is a shell built-in using type?
To check if a command is a shell built-in, use the type command with the -t option:
```bash
type -t cd
```

### How do I display all information about a command with type?
To display all available information about a command, including aliases and functions, use the type command with the -a option:
```bash
type -a echo
```

### How can I find out the location of an executable file with type?
To find out the location of an executable file associated with a command, use the type command with the -p option:
```bash
type -p python
```

### How do I check if a command is an alias using type?
To check if a command is an alias, use the type command with the -a option:
```bash
type -a ll
```

### How can I determine if a command is a function with type?
To determine if a command is a function, use the type command with the -t option:
```bash
type -t my_function
```

### How do I check if a command is a keyword in bash?
To check if a command is a keyword, use the type command with the -p option:
```bash
type -t if
```

### How can I identify the type of multiple commands at once with type?
To identify the types of multiple commands at once, provide the list of command names as arguments to the type command:
```bash
type ls mkdir cp
```
## Applications of the type command

- Finding out the location of a command or utility
- Determining whether a command is a built-in shell command, an external command, or an alias
- Checking the type of a command or alias
- Assessing if a command is executable and in the user's PATH