---
title: readonly command in MacOS
description: Learn how to use the MacOS readonly command to set read-only permissions on files and directories.
---

The `readonly` command in MacOS allows users to set read-only permissions on files and directories, preventing them from being modified or deleted. This can be useful for protecting important files or for ensuring that certain settings are not accidentally changed. By using the `readonly` command, users can easily manage permissions and protect their data from unwanted modifications.

## readonly Syntax:
```bash
chflags [-R] [-v] [-Rv] flags path...
```

## MacOS readonly Options:
| Option | Description                    |
|--------|--------------------------------|
| -R     | Apply flags recursively         |
| -v     | Be verbose (print modified paths)  |

## readonly Parameters:
| Parameter | Description                    |
|-----------|--------------------------------|
| flags     | Flags to be set                 |
| path      | File or directory path(s)       |

:::caution
Exercise caution when using the `chflags` command as it can change file attributes and permissions, potentially affecting the system's security and stability.
:::
### Assigning a Readonly Variable
```bash
readonly my_var="Hello World"
```
Sets a variable "my_var" with the value "Hello World" as read-only.

### Viewing Readonly Variables
```bash
readonly
```
Displays a list of all currently set read-only variables.

### Attempting to Modify a Readonly Variable
```bash
my_var="Goodbye"
```
Attempts to modify the read-only variable "my_var," resulting in an error message.

### Defining a Function as Readonly
```bash
readonly -f my_function
```
Declares a function "my_function" as read-only, preventing any modifications.

### Combining Readonly with Variable Assignment
```bash
readonly my_number=42
```
Creates a read-only variable "my_number" with the value 42.

### Confirming Readonly Status of a Variable
```bash
declare -p my_var
```
Checks the status of the variable "my_var," confirming if it is read-only or not.

### Using Readonly with Multiple Variables
```bash
readonly var1 var2 var3
```
Sets multiple variables "var1," "var2," and "var3" as read-only in a single command.

### Removing Readonly Status from a Variable
```bash
readonly -a my_array
```
Specifies an array "my_array" as read-only, restricting any changes to its contents.
:::tip
When using the `readonly` command in macOS, ensure you understand that variables declared as readonly cannot be modified or unset later in the script. This can help prevent accidental overwriting of important variables.
:::

### How do I use readonly in MacOS?
To use the readonly command in MacOS, execute the following command:
```bash
readonly my_variable="Hello"
```

### How can I define multiple readonly variables in MacOS?
To define multiple readonly variables in MacOS, you can use the following syntax:
```bash
readonly var1="Value1" var2="Value2" var3="Value3"
```

### How can I check if a variable is readonly in MacOS?
To check if a variable is readonly in MacOS, you can use the `declare` command along with the `-p` option:
```bash
declare -p my_variable
```

### How can I unset a readonly variable in MacOS?
You cannot unset a variable that has been declared as readonly in MacOS. Attempting to unset it will result in an error.

### Can I make a function readonly in MacOS?
Yes, you can make a function readonly in MacOS by using the `readonly` command before defining the function:
```bash
readonly -f my_function
```

### How do I make a variable readonly in a shell script in MacOS?
To make a variable readonly in a shell script in MacOS, you can simply use the `readonly` command followed by the variable name and its value:
```bash
readonly my_var="Value"
```

### How does readonly differ from constant variables in other programming languages?
In other programming languages, constant variables are predefined and cannot be changed during execution, while variables declared as readonly in MacOS can be set at runtime but cannot be modified or unset once set.

### Can readonly variables be used in functions in MacOS?
Yes, readonly variables can be used in functions in MacOS. Once a variable is declared as readonly, its value cannot be changed within the function.

### Is it possible to make a variable readonly in a read-only file in MacOS?
No, it is not possible to make a variable readonly in a read-only file in MacOS. Readonly in this context refers to the ability to modify the variable, not the file it is stored in.


## Applications of the readonly command

- Setting read-only variables in the shell.