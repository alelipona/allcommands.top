---
title: set command in Linux
description: Learn how to use the set command in Linux to set or unset shell options and positional parameters.
---

The set command in Linux is used to set or unset shell options and positional parameters. It can enable options like -x for debugging or -e for exiting immediately when a command returns a non-zero status. By setting positional parameters, you can assign values to variables within a script. This command is essential for customizing the behavior of your shell environment and controlling the flow of your scripts.
## set Syntax:
```bash
set [option] [parameter]
```

## Linux set Options:
| Option | Description |
|--------|-------------|
| -e | Exit immediately if a command exits with a non-zero status. |
| -u | Treat unset variables as an error when substituting. |

## set Parameters:
| Parameter  | Description |
|------------|-------------|
| variable   | Specifies the variable to be set. | 

:::caution
Exercise caution when using the `set` command as it can alter the behavior of the shell session, especially with options like `-e` and `-u` which can impact script execution and error handling.
:::
## How to use set command:
### Set a Bash Variable
```bash
fav_color=blue
```
Defines a Bash variable named "fav_color" with the value "blue".

### List All Variables
```bash
set
```
Displays all variables, functions, and positional parameters in the current shell session.

### Set an Array Variable
```bash
fruits=(apple orange banana)
```
Defines an array variable named "fruits" containing three elements: apple, orange, and banana.

### Set a Variable with Command Output
```bash
current_date=$(date)
```
Assigns the output of the "date" command to a variable named "current_date".

### Set Read-Only Variable
```bash
readonly user="john"
```
Defines a read-only variable named "user" with the value "john", preventing it from being changed.

### Unset a Variable
```bash
unset fav_color
```
Removes the variable "fav_color" from the shell session.

### Export a Variable
```bash
export PATH=$PATH:/opt/bin
```
Adds "/opt/bin" to the PATH variable, making it accessible to all child processes.

### Set a Default Value for an Unset Variable
```bash
echo ${name:-"Anonymous"}
```
Prints the value of the variable "name," or "Anonymous" if the variable is unset or null.
:::tip
When using the set command in Linux, make sure to familiarize yourself with the various options and arguments available to customize its behavior according to your requirements. Experiment with different combinations to fully understand the capabilities of the set command.
:::

### How do I use set in Linux?
To use the set command in Linux, execute the following command:
```bash
set --option <value>
```

### How do I enable debugging with set in bash?
To enable debugging with the set command in bash, use the following command:
```bash
set -x
```

### How do I show all shell input with set in Linux?
To display all shell input using the set command in Linux, run:
```bash
set -v
```

### How do I check if a variable is unset with set in bash?
To check whether a variable is unset using the set command in bash, you can use:
```bash
set -u
```

### How do I use the noclobber option with set in Linux?
To prevent overwriting existing files with the noclobber option using the set command in Linux, utilize:
```bash
set -o noclobber
```

### How do I ignore the errexit setting with set in bash?
To ignore the errexit setting using the set command in bash, you can apply:
```bash
set +e
```

### How do I view current shell options with set in Linux?
To view the current shell options using the set command in Linux, type:
```bash
set -o
```

### How do I disable tracing with set in bash?
To disable tracing when using the set command in bash, input the following command:
```bash
set +x
```

### How do I find the current value of a specific option with set in Linux?
To determine the current value of a specific option using the set command in Linux, you can check by running:
```bash
shopt -o <option>
```

## Applications of the set command

- Managing shell options and attributes
- Displaying or modifying shell variables and functions