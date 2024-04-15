---
title: whereis MacOS command
description: Discover the power of the macOS whereis command for locating files and executables on your system with ease.
---

The macOS whereis command is a useful tool for quickly locating the path of executable files, binaries, and shell commands on your system. By simply entering the command followed by the name of the file or executable you are looking for, whereis will provide you with the location of the file within your system's directories. This can be helpful for troubleshooting issues, understanding how different commands are executed, and managing your system's files efficiently. Additionally, the whereis command can also be used to search for manual pages related to a specific command, providing you with comprehensive information on how to use the command effectively.

## whereis Syntax:
```bash
whereis [options] [parameter]
```

:::caution
Caution: Be careful with the whereis command as it may not always provide accurate results for the location of specified utilities or files on MacOS.
:::

## whereis Options:
| Option  | Description                   |
|---------|-------------------------------|
| -b      | Search only for binaries       |
| -m      | Search only for manual sections|
| -s      | Search specific sections       |

## Parameters:
| Parameter | Description            |
|-----------|------------------------|
| utility   | Name of the utility or file to locate  |
## whereis Command Usage Examples:
### Locate the Binary for the ls Command
```bash
whereis ls
```
Locates the binary executable file for the ls command.

### Find the Directory of the Python Executable
```bash
whereis python
```
Displays the path to the directory where the Python executable is located.

### Search for Manual Pages of the tar Command
```bash
whereis tar
```
Returns the locations of the manual pages related to the tar command.

### Locate Shared Libraries for the GCC Compiler
```bash
whereis gcc
```
Shows the paths to the shared libraries associated with the GCC compiler.

### Find Source Code and Documentation for the wget Command
```bash
whereis wget
```
Provides the locations of the source code and documentation files for the wget command.

:::tip
When using the `whereis` command in MacOS, make sure to provide the correct options and arguments to get the desired results. Additionally, remember to check the manual page for `whereis` by using `man whereis` for more detailed information on its usage.
:::

### How do I use whereis in MacOS?
To use the whereis command in bash, execute the following command:
```bash
whereis ls
```

### How can I search for multiple commands using whereis in MacOS?
To search for multiple commands with whereis, you can specify them separated by a space in the command. For example:
```bash
whereis ls cat
```

### How to display only the binary path using whereis in MacOS?
To show only the binary path with whereis, use the `-b` option in the command. Here is an example:
```bash
whereis -b ls
```

### Can I search for a specific command in a custom directory with whereis in MacOS?
Yes, you can search for a specific command in a custom directory using the `-B` option followed by the directory path. For example:
```bash
whereis -B /usr/local/bin/ ls
```

### How do I include source files and manuals in the whereis search in MacOS?
To search for source files and manuals along with binaries, use the `-m` option in the command. Here's an example:
```bash
whereis -m ls
```

### How to ignore certain directories when using whereis in MacOS?
If you want to skip specific directories during the search, you can use the `-f` option followed by the directory or directories to exclude. For example:
```bash
whereis -f /usr/bin/ ls
```

### Can I get a list of all paths for a command found by whereis in MacOS?
Yes, you can display all paths for a command found by whereis using the `-a` option in the command. Here is how you can do it:
```bash
whereis -a ls
```

### How to search for only the source file of a command with whereis in MacOS?
If you are looking for the source file of a command, you can use the `-s` option in the whereis command. For instance:
```bash
whereis -s ls
```
## Applications of the whereis command

- Finding the location of a specific executable file
- Locating binaries, source code, and manual pages related to a command
- Identifying all locations where a particular program or command is installed
- Quickly accessing the installation paths of binaries for usage or modification