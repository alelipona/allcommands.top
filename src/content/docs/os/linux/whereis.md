---
title: What is whereis Linux command?
description: Find the location of a command with the Linux whereis command. Learn how to quickly locate binary, source, and man page files on your system.
---

The Linux whereis command is a useful utility for locating the binary, source, and man page files of a given command. It helps users quickly identify the location of executable files on their system.

## whereis Syntax:
```bash
whereis [option] [parameter]
```

## whereis Options:
| Option | Description                               |
|--------|-------------------------------------------|
| -b     | Search only for binaries                  |
| -m     | Search only for manual pages              |
| -s     | Search only for source code               |
| -u     | Search only for unusual entries (not binaries, manual pages, or source code)|
| -B     | Specify the location of binary directories|
| -M     | Specify the location of manual page directories|
| -S     | Specify the location of source code directories|

:::caution
Be cautious when using the whereis command as it may not always return accurate results and may not include all files related to the specified parameter.
:::

## Parameters:
| Parameter | Description                                     |
|-----------|-------------------------------------------------|
| name      | The name of the file or command to search for    |
## whereis Command Usage Examples:
### Find the location of the ls command
```bash
whereis ls
```
Locates the binary, source code, and manual page files for the "ls" command.

### Locate the location of the nano text editor
```bash
whereis nano
```
Returns the paths to where the binary, source, and manual pages for the "nano" text editor are stored.

### Search for the location of the gcc compiler
```bash
whereis gcc
```
Shows the paths of the binary, source code, and manual pages related to the GNU Compiler Collection (gcc).

### Check the location of the Python interpreter
```bash
whereis python
```
Displays the paths of the binary executable, source code, and manual pages for the Python programming language interpreter.

### Find the path of the vi text editor
```bash
whereis vi
```
Identifies the locations of the binary executable, source code, and manual pages for the "vi" text editor.
:::tip
When using the whereis command in Linux, remember that it is primarily used to locate binary, source, and manual pages for a specific command. The command will search specific directories related to executables, source code, and manual pages by default. Knowing where to find these types of files can be helpful in troubleshooting and understanding how a command is implemented in the system.
:::

### How do I use whereis in Linux?
To use the whereis command in bash, execute the following command:
```bash
whereis ls
```

### How can I search for multiple commands using whereis?
To search for multiple commands, you can specify the command names separated by spaces in the whereis command like this:
```bash
whereis ls cat mkdir
```

### How can I search for only binaries using whereis?
To search for only binary files and not include source and manual pages, you can use the `-b` option with the whereis command:
```bash
whereis -b ls
```

### How can I list only the source files using whereis?
To list only the source files related to a command, you can use the `-s` option with whereis like this:
```bash
whereis -s cat
```

### How can I display the paths in which the found files are located using whereis?
To display the paths where the found files are located, you can use the `-l` option with whereis like this:
```bash
whereis -l grep
```

### How can I update the cache used by whereis for a more accurate search?
To update the cache used by whereis, you can use the `updatedb` command to update the file database like this:
```bash
sudo updatedb
```

### How can I ignore specific directories when searching with whereis?
To ignore specific directories during the search, you can use the `-f` option followed by the directory you want to exclude like this:
```bash
whereis -f /usr/bin ls
```
## Applications of the whereis command

1. Locating binary executable files
2. Finding the location of source code files
3. Determining the location of manual pages for commands