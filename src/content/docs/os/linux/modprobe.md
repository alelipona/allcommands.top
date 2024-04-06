---
title: modprobe command in Linux
description: Discover how to use the modprobe command in Linux to handle kernel modules efficiently. Learn its syntax, options, and use cases.
---

The modprobe command in Linux is used to manage kernel modules. It allows users to insert, remove, and manipulate modules in the Linux kernel. Modprobe can also automatically load dependencies for a module being added. This command is essential for managing hardware drivers and configuring the kernel. By understanding the modprobe command, users can efficiently handle kernel modules to optimize system performance.

## modprobe Syntax:
```bash
modprobe [options] module_name
```

## Linux modprobe Options:
| Option  | Description                       |
|---------|-----------------------------------|
| -c      | Use the specified configuration file |
| -v      | Show verbose information           |
| -n      | Dry-run mode, show actions but do not execute them |
| -q      | Quiet mode, suppress normal output |
| -r      | Remove the specified module        |
| -a      | Insert module even if already loaded |
| -s      | Log to the system log for each request |
| -t      | Set timeout value for network request completion |
| -D      | Consider dependencies during insertion and removal |
| -S      | Compute and resolve all module symbols |

## modprobe Parameters:
| Parameter  | Description                       |
|------------|-----------------------------------|
| module_name| Name of the module to insert or remove |

:::caution
Exercise caution when using the modprobe command, as improper usage can result in system instability or malfunction.
:::

## How to use modprobe command:
### Load a Module
```bash
modprobe <module_name>
```
Load the specified module into the Linux kernel.

### Remove a Module
```bash
modprobe -r <module_name>
```
Unload the specified module from the Linux kernel.

### Show Currently Loaded Modules
```bash
modprobe -l
```
Display a list of modules that are currently loaded in the Linux kernel.

### Display Information about a Module
```bash
modprobe -c | grep <module_name>
```
Retrieve detailed information about a specific module.

### Load a Module with Specific Parameters
```bash
modprobe <module_name> param1=value1 param2=value2
```
Load the module with specific parameters provided as key-value pairs.

### List Dependencies of a Module
```bash
modprobe -c | grep -A <number_of_lines> depends <module_name>
```
Display the dependencies of a specific module by searching the module config file.

### Prevent Module Autoloading
```bash
echo "blacklist <module_name>" | sudo tee /etc/modprobe.d/blacklist.conf
```
Create a blacklist configuration file to prevent a module from autoloading.

### Disable Module Loading during Boot
```bash
echo "install <module_name> /bin/true" | sudo tee -a /etc/modprobe.d/blacklist.conf
```
Prevent a specific module from loading during boot by setting the install command to /bin/true in the blacklist configuration file.
:::tip
When using the modprobe command, make sure to specify the correct options and values according to the module you are working with. Incorrect usage may lead to errors or unexpected behavior.
:::

### How do I use modprobe in Linux?
To use the modprobe command in Linux, execute the following command:
```bash
modprobe --option <value>
```

### What is the purpose of modprobe in Linux?
The modprobe command is used in Linux to add or remove kernel modules to the Linux kernel dynamically.
```bash
modprobe <module_name>
```

### How can I list all currently loaded modules with modprobe?
To list all currently loaded modules using modprobe, run the following command:
```bash
lsmod
```

### How do I remove a module using modprobe?
You can remove a module using modprobe in Linux with the following command:
```bash
modprobe -r <module_name>
```

### Can I add multiple modules at once with modprobe?
Yes, you can add multiple modules at once using modprobe by listing them all in a single command:
```bash
modprobe <module1> <module2> <module3>
```

### How can I get more information about a specific module using modprobe?
To get more information about a specific module using modprobe, you can use the `modinfo` command. For example:
```bash
modinfo <module_name>
```

### How do I check if a module is currently loaded with modprobe?
You can check if a module is currently loaded with modprobe by using the following command:
```bash
lsmod | grep <module_name>
```

### Is it possible to force loading a module with modprobe even if it might not be recommended?
Yes, you can force loading a module with modprobe even if it might not be recommended by using the `--force` option. For example:
```bash
modprobe --force <module_name>
```

### How do I see the dependencies of a module with modprobe?
To see the dependencies of a module using modprobe, you can use the following command:
```bash
modprobe --show-depends <module_name>
```
## Applications of the modprobe command

- Loading a specific kernel module
- Unloading a kernel module
- Listing currently loaded kernel modules
- Adding or removing kernel module dependencies
- Setting module options or parameters