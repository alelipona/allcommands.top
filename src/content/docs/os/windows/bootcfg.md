---
title: All About BOOTCFG Windows command
description: Learn how to use the Windows bootcfg command to manage your system's boot configuration settings efficiently.
---

The Windows bootcfg command is a powerful tool that allows users to manage the boot configuration settings on their system. With bootcfg, users can modify, create, or delete boot.ini entries, making it easier to troubleshoot boot-related issues. By using bootcfg, users can configure various boot options such as specifying the default operating system, setting the timeout for the boot menu, and adding or removing operating systems from the boot.ini file. This command is especially useful for advanced users and system administrators who need more control over their system's boot configuration. Overall, the bootcfg command is a valuable resource for managing and customizing the boot process on Windows systems.

## BOOTCFG Syntax:
```cmd
bootcfg /default /ems /raw /ds /addsw /redirect /disks /scan /list /query /timeout /add /delete /copy /rebuild
```
## Options:
| Option    | Description                                           |
|-----------|-------------------------------------------------------|
| /default  | Sets the default OS                                   |
| /ems      | Enable or disable Emergency Management Services       |
| /raw      | Return raw list of boot entry names                  |
| /ds       | Specify the default operating system configuration    |
| /addsw    | Add a new operating system switch                    |
| /redirect | Change the location of the boot entries-file         |
| /disks    | list all disk drives                                 |
| /scan     | Scans all disks                                       |
| /list     | List entry options and output order                  |
| /query    | Query current settings                                |
| /timeout  | Set timeout to wait for user selection               |
| /add      | Add a new OS entry to the BOOT.INI file              |
| /delete   | Delete an OS boot entry                              |
| /copy     | Make a copy of an OS boot entry                      |
| /rebuild  | Rebuild BOOT.INI file                                 |

## Parameters:
| Parameter | Description                                            |
|-----------|--------------------------------------------------------|
| /ID=id    | Allows the user to set the desired default operating system ID |
| /EMStimeout=seconds | Set the timeout period for the Emergency Management Services |
| /d=       | Specify the DS path                                    |
| /osname=  | Specify a custom OS name                               |
| /redirect | Path to the new boot entry file location                |

:::caution
Exercise caution while using the bootcfg command, as incorrect usage may result in unbootable systems or data loss. Make sure to thoroughly understand the command options and parameters before executing any commands.
:::

## BOOTCFG CMD Examples:
### Display Windows Boot Configuration Data
```cmd
bootcfg
```
Displays the current Windows Boot Configuration Data.

### Add an Entry to the Boot Configuration Data Store
```cmd
bootcfg /copy /d "New Windows Entry" /addlast
```
Adds a new entry labeled "New Windows Entry" to the end of the Boot Configuration Data Store.

### Delete a Boot Entry
```cmd
bootcfg /delete /id 2
```
Deletes the boot entry with ID 2 from the Boot Configuration Data Store.

### Set Boot Timeout Value
```cmd
bootcfg /timeout 10
```
Sets the boot timeout value to 10 seconds for the Boot Configuration Data Store.

### Rebuild Boot.ini File
```cmd
bootcfg /rebuild
```
Rebuilds the Boot.ini file based on the current operating system configuration.

:::tip
When using the bootcfg command in CMD, make sure to carefully follow the syntax and options provided by the command to avoid any unintended changes to your system's boot configuration.
:::

## BOOTCFG Command Help Center:

### How do I use bootcfg in CMD?
To use the bootcfg command in CMD, execute the following command:
```cmd
bootcfg --option <value>
```

### What is the purpose of the bootcfg command in Windows CMD?
The bootcfg command in Windows CMD is used to configure, modify, or rebuild the boot.ini file, which is essential for the Windows operating system to boot correctly.

### How can I view the current boot.ini settings using bootcfg?
To view the current boot.ini settings using bootcfg, you can run the following command:
```cmd
bootcfg
```

### How do I add a new operating system to the boot.ini file with bootcfg?
To add a new operating system entry to the boot.ini file using bootcfg, use the /add parameter followed by the necessary details. Here is an example:
```cmd
bootcfg /add /d NewOS /l C:\ /t x
```

### Can bootcfg be used to set the default boot entry in Windows?
Yes, you can set the default boot entry in Windows using the bootcfg command. Use the /default parameter followed by the number corresponding to the desired boot entry. Here is an example:
```cmd
bootcfg /default 2
```

### How do I delete a boot entry from the boot.ini file with bootcfg?
To delete a boot entry from the boot.ini file using bootcfg, use the /delete parameter followed by the boot entry number. Here is an example:
```cmd
bootcfg /delete /id 2
```

### How can bootcfg be used to rebuild the boot.ini file in Windows CMD?
To rebuild the boot.ini file using bootcfg, run the following command:
```cmd
bootcfg /rebuild
```

### What is the syntax to set the timeout value for the boot menu using bootcfg?
To set the timeout value for the boot menu using bootcfg, use the /timeout parameter followed by the desired timeout value in seconds. Here is an example:
```cmd
bootcfg /timeout 10
```
## Applications of the BOOTCFG Command

- View current boot configuration settings
- Edit boot.ini file
- Rebuild the boot.ini file
- Add or remove entries from the boot.ini file
- Set the default operating system to boot into
- Set timeout for choosing operating system at boot time