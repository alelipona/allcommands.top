---
title: rmmod command in Linux
description: Learn how to use the Linux rmmod command to remove a kernel module from the system. 
---

The Linux rmmod command is used to remove a kernel module from the system. This command takes the name of the module as an argument and unloads it from the kernel. It is important to note that some modules may be in use and cannot be removed. Make sure to run this command with caution to avoid disrupting the system's functionality.

## rmmod Syntax:
```bash
rmmod [options] module
```

## Linux rmmod Options:
| Option              | Description                             |
|---------------------|-----------------------------------------|
| -f, --force         | Force removal of the module            |
| -v, --verbose       | Verbose mode                            |
| -w, --wait          | Wait until the module is no longer used |
| -n, --syslog        | Print messages to syslog                |
| -h, --help          | Display help message                    |
| --version           | Display version information             |

## rmmod Parameters:
| Parameter  | Description                                   |
|------------|-----------------------------------------------|
| module     | The name of the module to be removed          |

:::caution
Exercise caution when using the `rmmod` command as it can potentially crash the system or lead to instability if used improperly. Ensure you are removing the correct module and that no processes depend on it.
:::
## How to use rmmod command:
### Remove a kernel module
```bash
rmmod usbcore
```
This command removes the "usbcore" kernel module.

### Forcefully remove a kernel module
```bash
rmmod -f nvidia
```
This command forcefully removes the "nvidia" kernel module.

### Remove a kernel module and show verbose output
```bash
rmmod -v nouveau
```
This command removes the "nouveau" kernel module and displays verbose output.

### Remove multiple kernel modules
```bash
rmmod rtl8187 ath9k ath5k
```
This command removes multiple kernel modules "rtl8187", "ath9k", and "ath5k".

### Remove a kernel module with dependencies
```bash
rmmod i915
```
This command removes the "i915" kernel module along with its dependencies.

### Remove a kernel module by specifying the path
```bash
rmmod /lib/modules/5.4.0-52-generic/kernel/drivers/net/wireless/ath/ath10k/ath10k_pci.ko
```
This command removes the specified kernel module at the provided path.

### Remove a kernel module and check its dependencies
```bash
rmmod -v wl
```
This command removes the "wl" kernel module and shows its dependencies.

### Remove a kernel module silently
```bash
rmmod -s rt2800usb
```
This command removes the "rt2800usb" kernel module silently without any output.
:::tip
When using the rmmod command in Linux, make sure to specify the correct module name to avoid accidentally removing important kernel modules. Additionally, always check for dependencies and ensure that removing a module will not cause system instability or affect other functionalities.
:::

### How do I use rmmod in Linux?
To use the rmmod command in Linux, execute the following command:
```bash
rmmod <module_name>
```

### What is the purpose of the rmmod command in Linux?
The rmmod command is used to remove kernel modules from the Linux kernel.

### How can I force rmmod to remove a module in use?
To force the removal of a module even if it is in use, you can add the `--force` option to the rmmod command. Here is an example:
```bash
rmmod --force <module_name>
```

### How can I get more information about the rmmod command?
To view the manual page for the rmmod command in Linux, you can use the following command:
```bash
man rmmod
```

### Can I remove multiple modules at once with rmmod?
Yes, you can remove multiple modules at once by providing their names as arguments to the rmmod command. Here is an example:
```bash
rmmod <module1> <module2> <module3>
```

### How do I unload all unused modules with rmmod?
To unload all unused modules in Linux using rmmod, you can use the following command:
```bash
rmmod $(lsmod | grep -oP "^(\S+)" | tail -n +2)
```

### Is it recommended to reboot the system after using rmmod?
It is generally recommended to reboot the system after removing kernel modules with rmmod, especially if the removed modules were critical for system operation.

### How do I check if a module is currently in use before using rmmod?
You can check if a module is in use before attempting to remove it with rmmod by using the following command:
```bash
lsmod | grep <module_name>
```

## Applications of the rmmod command

- Unload a specific kernel module
- Remove a kernel module from memory
- Deactivate a specific driver
- Manage kernel modules dynamically