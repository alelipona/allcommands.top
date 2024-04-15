---
title: uname MacOS Command Guide
description: Discover how to use the MacOS uname command efficiently. Learn about its options and practical uses on MacOS systems.
---
The MacOS uname command is used to display system information in Unix and Unix-like operating systems. It provides details such as the operating system name, network node hostname, kernel version, release number, machine hardware name, and processor type. By default, when run without any options, uname will display the operating system name. However, there are several options that can be used to customize the output. These options include -a for displaying all information, -s for the kernel name, -r for the kernel release number, -v for the kernel version, -m for the machine hardware name, and -p for the processor type. Understanding how to use these options can help you retrieve specific information about your MacOS system quickly and efficiently. The uname command is a useful tool for system administrators and users who need to gather system details for troubleshooting or system monitoring purposes.

## uname Syntax:
```bash
uname [options] 
```
## Options:
| Option | Description                 |
|--------|-----------------------------|
| -a     | Display all information     |
| -m     | Display machine hardware name|
| -n     | Display the network node hostname|
| -r     | Display the kernel release  |
| -s     | Display the operating system name|
| -v     | Display the kernel version  |

## Parameters:
| Parameter | Description              |
|-----------|--------------------------|
| None      | There are no parameters for the uname command|

:::caution
Exercise caution when using the `uname` command, especially when combining multiple options as the output may contain detailed system information that could be sensitive.
:::
## uname Command Samples:
### Display System Information
```bash
uname
```
Displays basic system information including the kernel name, hostname, kernel release, kernel version, machine hardware name, and processor type.
### Show Kernel Name
```bash
uname -s
```
Displays only the kernel name.
### Show Machine Hardware Name
```bash
uname -m
```
Displays the machine hardware name.
### Show Kernel Release
```bash
uname -r
```
Displays the kernel release.
### Show Kernel Version
```bash
uname -v
```
Displays the kernel version.
### Show Processor Type
```bash
uname -p
```
Displays the processor type.
### Show All Information
```bash
uname -a
```
Displays all available system information.
:::tip
When using the uname command in MacOS, be sure to explore different options and values to retrieve specific system information. Additionally, consider piping the output of the uname command into other commands or scripts for further processing.
:::

## uname FAQ:
### How do I use uname in MacOS?
To use the uname command in MacOS, execute the following command:
```bash
uname
```

### What is the option to display the kernel name with uname in MacOS?
To display the kernel name using the uname command in MacOS, use the following option:
```bash
uname -s
```

### How can I view the network node hostname with uname in MacOS?
To view the network node hostname using the uname command in MacOS, run the following command:
```bash
uname -n
```

### How do I check the machine hardware platform with uname in MacOS?
To check the machine hardware platform using the uname command in MacOS, enter the following command:
```bash
uname -m
```

### What is the option to display the kernel release information with uname in MacOS?
To display the kernel release information using the uname command in MacOS, use the following option:
```bash
uname -r
```

### How can I get a summary of system information with uname in MacOS?
To get a summary of system information using the uname command in MacOS, run the following command:
```bash
uname -a
```
## Applications of the uname command

- Determine the system information
- Check the kernel version
- Identify the machine hardware name
- Display the operating system name