---
title: MacOS pwd command
description: The "pwd" command in MacOS is used to print the current working directory. Learn how to display the full pathname of the current directory in your terminal.
---

The "pwd" command in MacOS is a built-in utility that stands for "print working directory." When executed in the terminal, it provides the full pathname of the current working directory. This can be useful for navigating the file system and understanding your current location within it. By simply typing "pwd" and hitting enter, you can quickly view the complete path to the directory you are working in. This command can be particularly handy when working with complex file structures or referencing specific locations within the system. Next time you need to verify your current working directory in MacOS, remember to use the "pwd" command for a clear and precise display of your location.

## pwd Syntax:
```bash
pwd [option]
```

## Options:
| Option  | Description                           |
|---------|---------------------------------------|
| -L      | Display the logical current working directory path (default). |
| -P      | Display the physical current working directory path, avoiding symbolic links. |

## Parameters:
| Parameter | Description                      |
|-----------|----------------------------------|
| None      | There are no parameters for the pwd command. |

:::caution
Caution: When using the pwd command, be cautious as it directly displays the current working directory. Make sure not to accidentally overwrite files or directories by piping or redirecting the output of the command.
:::
## pwd Usage:
### Print the current working directory
```bash
pwd
```
This command will print the full path of the current working directory.

### Save the output of pwd to a file
```bash
pwd > current_directory.txt
```
By redirecting the output of pwd to a file named current_directory.txt, you can save the current working directory path.

### Use command substitution with pwd
```bash
echo "The current directory is $(pwd)"
```
Command substitution allows you to embed the output of pwd within a string or command for further processing.

### Display the symbolic path of the current working directory
```bash
pwd -P
```
This will display the symbolic path of the current working directory, following any symbolic links in the path.
:::tip
Remember that the `pwd` command stands for "print working directory" and is used to display the current working directory in the terminal. It can be handy when navigating through the file system in MacOS or running scripts.
:::

### How can I get the full path of the current directory in MacOS?
To get the full path of the current directory in MacOS, use the following command:
```bash
pwd
```

### How do I use the `-P` option with pwd in MacOS?
To resolve symbolic links and print the physical directory without symbolic links in MacOS, use the following command:
```bash
pwd -P
```

### What is the purpose of the `-L` option in the pwd command on MacOS?
The `-L` option in the pwd command on MacOS is used to force symbolic links to be followed. To use it, execute the following command:
```bash
pwd -L
```

### How can I display the logical current working directory in MacOS?
To display the logical current working directory, which may contain symbolic links, in MacOS, use the following command:
```bash
pwd -L
```

### How can I show the path with a newline character at the end in the MacOS terminal?
To display the current directory path with a newline character at the end, use the following command:
```bash
pwd && echo
```

### How do I use pwd with the `-W` option in MacOS?
To print the current working directory with symbolic links starting with '/', use the following command:
```bash
pwd -W
```

### How can I copy the full path of the current directory to the clipboard in MacOS?
To copy the full path of the current directory to the clipboard in MacOS, you can combine `pwd` with the `pbcopy` command, like this:
```bash
pwd | pbcopy
```

## Applications of the `pwd` command

- Display the current working directory
- Retrieve the full path to the current working directory