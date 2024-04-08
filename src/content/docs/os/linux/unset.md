---
title: unset Linux Command Guide
description: Learn how to use the Linux unset command to remove environment variables. Understand its syntax, options, and usage with this comprehensive guide.
---

The Linux unset command is used to remove environment variables. It allows you to unset a specific variable or multiple variables at once. When you unset a variable, its value and existence are deleted from the environment. This can help manage your environment and prevent potential conflicts or unwanted behavior in your shell sessions. Understanding how to use unset properly can help you maintain a clean and efficient working environment on your Linux system.
## unset Syntax:
```bash
unset [option] [parameter]
```
## Options:

| Option | Description                |
|--------|----------------------------|
| -v     | Print each variable name before unset.|
| -f     | Unsets the function names only.|
| -n     | Treats each name as a variable name, even if it contains a symbol.|
| -a     | Unsets all variable names indexed by an array name.|

## Parameters:

| Parameter | Description                |
|-----------|----------------------------|
| name      | Specifies the name of the variable to unset.|
| -v name   | Unsets the variable name.   |
| -f name   | Unsets the function name.   |
| -n name   | Treats the given name as a variable name.|
| -a name   | Unsets all variables indexed by array name.|

:::caution
Be careful while using the unset command as it permanently removes variables or functions from the shell environment. Make sure you know the implications before unsetting any variables.
:::
## unset Command Samples:
### Unset an Environment Variable
```bash
unset VARIABLE_NAME
```
Removes the specified environment variable from the current environment.

### Unset Multiple Environment Variables
```bash
unset VAR1 VAR2 VAR3
```
Unsets multiple environment variables in a single command.

### Unset All Variables Starting with a Prefix
```bash
unset VAR_PREFIX*
```
Removes all environment variables that start with a specific prefix.

### Unset a Function
```bash
unset -f FUNCTION_NAME
```
Deletes the specified function from the current shell session.

### Unset a Readonly Variable
```bash
unset READONLY_VAR
```
Can unset a variable that was previously set as readonly.

### Unset a Variable in a Subshell
```bash
(subshell) unset VAR_IN_SUBSHELL
```
Unset a variable within a subshell environment.

### Unset All Variables
```bash
unset *
```
Removes all variables and functions from the current shell session.
:::tip
When using the unset command in Linux, be cautious as it removes variables or functions which can impact your system's behavior. Make sure you understand the implications before executing the command.
:::

## unset FAQ:
### How do I use unset in Linux?
To use the unset command in Linux, execute the following command:
```bash
unset variable_name
```

### What does unset do in Linux?
The unset command in Linux is used to remove variables or functions.

### How can I unset multiple variables in Linux?
To unset multiple variables in Linux, you can specify them separated by a space in a single unset command.
```bash
unset var1 var2 var3
```

### Can unset be used to unset functions in Linux?
Yes, the unset command can be used to unset functions in Linux.
```bash
unset -f function_name
```

### How can I unset all variables in Linux?
To unset all variables in Linux, you can use the following command:
```bash
unset $(compgen -v)
```

### Is there a way to unset a readonly variable in Linux?
Yes, you can unset a readonly variable in Linux by using the -f option.
```bash
unset -f readonly_variable
```
## Applications of the unset command

- Clearing environment variables
- Removing elements from an array
- Unsetting variables in a script or terminal session