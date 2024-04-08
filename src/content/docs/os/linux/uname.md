---
title: uname Linux command
description: Discover how to use the uname command in Linux to retrieve system information. Learn the various options and flags available for uname.
---

The `uname` command in Linux is used to get information about the system such as the kernel name, network node hostname, kernel release, kernel version, machine hardware name, and processor type. It also provides information about the operating system. By default, `uname -a` is used to display all system information. Other options like `-s`, `-r`, `-m`, and `-p` can be used to display specific information. The `uname` command is helpful for system administrators and users who need to retrieve system information quickly and efficiently.

## uname Syntax:
```bash
uname [option]
```
## Options:
| Option | Description                              |
|--------|------------------------------------------|
| -a     | Display all information                   |
| -s     | Print the kernel name                     |
| -n     | Print the network node hostname           |
| -r     | Print the kernel release                  |
| -v     | Print the kernel version                  |
| -m     | Print the machine hardware name           |
| -p     | Print the processor type or "unknown"     |
| -i     | Print the hardware platform or "unknown"  |
| -o     | Print the operating system                |

## Parameters:
| Parameter | Description                                |
|-----------|--------------------------------------------|
| None      | No parameters exist for the uname command  |

:::caution
Exercise caution while using the `uname` command as it can provide sensitive system information that may be used for malicious purposes by unauthorized users.
:::
## uname bash Examples:
### Display System Information
```bash
uname
```
This command displays system information such as the kernel name, node name, kernel release, kernel version, machine hardware name, and operating system.

### Display Kernel Version
```bash
uname -r
```
Using this option, you can specifically display the kernel release version of the current system.

### Display Processor Type
```bash
uname -p
```
This command shows the type of processor the system is using.

### Display Operating System
```bash
uname -o
```
By using this option, you can display the operating system name.

### Display Operating System and Architecture
```bash
uname -a
```
Using this option combines multiple pieces of system information into a comprehensive display, including the operating system and architecture.

### Display Machine Hardware Name
```bash
uname -m
```
Shows the machine hardware name the system is running on.
:::tip
When using the uname command in Linux, remember to refer to the man page or help section for detailed information on available options and their usage. This will help you make the most out of the command and tailor it to your specific needs.
:::

## uname Command Help Center:

### How do I use uname in Linux?
To use the uname command in Linux, execute the following command:
```bash
uname
```

### How can I display the kernel name with uname?
To display the kernel name using uname, run the following command:
```bash
uname -s
```

### How to show the network node hostname with uname?
You can display the network node hostname using uname with the following command:
```bash
uname -n
```

### How to get the kernel release information with uname?
To get the kernel release information using uname, use the command:
```bash
uname -r
```

### How can I check the machine hardware platform with uname?
To check the machine hardware platform using uname, run the following command:
```bash
uname -i
```

### How to display the operating system name with uname?
You can display the operating system name using uname with the following command:
```bash
uname -o
```

### How do I get the processor type information with uname?
To get the processor type information using uname, execute the following command:
```bash
uname -p
```

### How to show all system information with uname?
To display all system information using uname, run the following command:
```bash
uname -a
```
## Applications of the uname command

- Display system information
- Check the kernel version
- Determine the operating system
- Identify the machine hardware
- Get information about the processor
- Print out the node name
- Check the release information