---
title: Linux lsmod command
description: Learn about the Linux lsmod command, its usage, options, and how it helps in displaying information about loaded kernel modules.
---

The Linux `lsmod` command is used to display information about loaded kernel modules. It provides details such as the module name, size, and the number of instances of each module currently loaded in the kernel. This command helps users to easily see which modules are currently loaded and can be useful for troubleshooting or monitoring system resources. By using the `lsmod` command, users can get an overview of the kernel modules that are being utilized by the system.

Kernel modules are pieces of code that can be loaded and unloaded into the kernel without rebooting the system. These modules can add functionality to the kernel, such as device drivers or file systems. The `lsmod` command reads the `/proc/modules` file to gather information about the currently loaded modules. It is a straightforward and efficient way to check the status of kernel modules on a Linux system.

## lsmod Syntax:
```bash
lsmod [options]
```
## Options:
| Option | Description                     |
|--------|---------------------------------|
| -a     | Display all modules             |
| -v     | Display detailed information    |
| -h     | Display help message            |

## Parameters:
| Parameter | Description                     |
|-----------|---------------------------------|
| None      | no additional parameters        |

:::caution
Exercise caution when using the lsmod command, especially if you are planning to remove any modules. Make sure you understand the implications of unloading certain modules before proceeding.
:::
## lsmod Usage:
### List Loaded Kernel Modules
```bash
lsmod
```
Displays a list of all currently loaded kernel modules.

### Filter lsmod Output by Module Name
```bash
lsmod | grep <module_name>
```
Filters the lsmod output to display information about a specific kernel module.

### List Loaded Kernel Modules with Details
```bash
lsmod -l
```
Displays a detailed list of all loaded kernel modules, including information like size and dependencies.

### Sort lsmod Output by Module Size
```bash
lsmod | sort -k2
```
Sorts the lsmod output by module size, displaying the largest modules at the bottom for easy identification.
:::tip
Remember that the lsmod command is used to display the currently loaded kernel modules in Linux. This information can be crucial for troubleshooting hardware or system issues, checking module dependencies, or understanding the system's functionality.
:::

### How do I use lsmod in Linux?
To use the lsmod command in Linux, execute the following command:
```bash
lsmod
```

### What flag can I use with lsmod to display module size information?
To display module size information along with the loaded modules, use the '-s' or '--size' flag. 
```bash
lsmod -s
```

### How can I show the usage count for each module with lsmod?
To display the usage count for each loaded module, you can use the '-u' or '--used' flag.
```bash
lsmod -u
```

### How do I list modules by specific keywords with lsmod?
To list only the modules containing specific keywords, you can use the grep command in combination with lsmod. 
```bash
lsmod | grep <keyword>
```

### How can I display the module dependencies using lsmod?
To view the dependencies between loaded modules, you can use the 'modprobe' command with the '-D' or '--show-depends' flag.
```bash
modprobe -D <module_name>
```

### How can I get detailed information about a specific module using lsmod?
To get detailed information about a specific module, you can use the 'modinfo' command followed by the module name.
```bash
modinfo <module_name>
```

### How can I force the removal of a module in use with lsmod?
To forcefully remove a module that is in use, you can use the 'rmmod' command followed by the module name.
```bash
rmmod <module_name>
```
## Applications of the lsmod command

- Listing currently loaded kernel modules
- Checking the status of kernel modules
- Troubleshooting driver issues
- Identifying kernel modules that are affecting system performance
- Monitoring kernel module dependencies