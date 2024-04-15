---
title: info MacOS command
description: Learn how to use the info command in MacOS to access detailed information about commands and programs.
---

The MacOS info command provides access to in-depth information about commands and programs, including usage, options, and examples. By typing "info" followed by the name of the command or program, users can access comprehensive documentation to help them understand and utilize different functionalities. This tool is particularly useful for users who want to explore the capabilities of specific commands or programs, as well as for those who are looking to expand their knowledge of the MacOS operating system.
## info Syntax:
```bash
info [option] [topic]
```
## info Options:

| Option | Description                 |
|--------|-----------------------------|
| -f     | Display full documentation   |
| -k     | Search for commands          |
| -n     | Show only a specific number of lines  |
| -o     | Send output to a file       |
| -h     | Display a help message      |

:::caution
Make sure to provide a valid topic to get information on. Incorrect usage may result in no relevant information being displayed.
:::

## Parameters:
| Parameter | Description                 |
|-----------|-----------------------------|
| topic     | The name of the command or topic you want information on. |
## info Command Usage Examples:
### Show Information About the CPU
```bash
info cpu
```
Displays detailed information about the CPU on the macOS system.

### Display Information About the Memory
```bash
info memory
```
Shows information related to memory usage, capacity, and other memory-related details on the macOS system.

### View File System Information
```bash
info filesystem
```
Provides information about the file system including disk space, partitions, and other file system-related details.

### Check Network Configuration Details
```bash
info network
```
Displays network configuration details such as IP addresses, network interfaces, and routing tables on the macOS system.

### Show Software Package Information
```bash
info pkg
```
Shows information about installed software packages, versions, and other package-related details on the macOS system.
:::tip
When using the info command in MacOS, make sure to refer to the man pages or documentation for the specific commands or topics you are interested in. This will help you navigate and find the information you need efficiently.
:::

### How do I use info in MacOS?
To use the info command in bash, execute the following command:
```bash
info --help
```

### How can I access a specific section in info?
To access a specific section in the info command, you can specify the desired node or topic. For example:
```bash
info bash
```

### How do I navigate within info pages?
To navigate within info pages, you can use the arrow keys, Enter key, and specific commands mentioned within the info documentation. For example:
```bash
info --subnodes bash
```

### How do I search for a keyword in info pages?
To search for a specific keyword within info pages, you can use the search option followed by the keyword. For example:
```bash
info --search="example" bash
```

### How do I exit the info command?
To exit the info command and return to the bash shell, you can press Q or Ctrl+C. For example:
```bash
info --node="topic" | less
```

### How can I find more help about a specific command using info?
To find more detailed help about a specific command using info, you can explore the available options and flags provided in the documentation. For example:
```bash
info --options ls
```

### How do I view the full info documentation for a specific command?
To view the full info documentation for a specific command, you can access the complete manual by specifying the command or topic. For example:
```bash
info --node="topic" command
```
## Applications of the info command

- Reading detailed documentation and manuals for various topics and commands
- Accessing information on system configuration and settings
- Building a comprehensive understanding of the Unix-based operating system
- Troubleshooting and debugging system issues
- Learning about available software packages and libraries
- Exploring programming languages and development tools