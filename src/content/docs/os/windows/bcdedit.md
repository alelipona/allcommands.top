---
title: Windows BCDEDIT command
description: Learn how to use the Windows bcdedit command to manage boot configuration data effectively.
---

The Windows bcdedit command is a powerful tool that allows users to view, modify, and configure boot configuration data. This command is essential for managing various aspects of the Windows operating system's boot process, such as adding new boot entries, modifying boot settings, and fixing boot-related issues. By using bcdedit, users can customize boot options, change boot parameters, and troubleshoot boot problems. Understanding how to use bcdedit can help users maintain a stable and efficient boot process on their Windows devices.

## BCDEDIT Syntax:
```cmd
bcdedit [/parameter] [option] [value]
```

## Options:
| Option                 | Description                                                         |
|------------------------|---------------------------------------------------------------------|
| /create                | Creates a new entry for the boot manager                            |
| /enum                  | Displays information about entries in the store                     |
| /delete                | Deletes entries from the store                                      |
| /set                   | Sets a boot manager entry option value                              |
| /bootsequence          | Sets the one-time boot sequence for the boot manager                |
| /displayorder          | Sets the boot manager display order                                 |
| /timeout               | Sets the boot manager timeout value                                 |
| /default               | Sets the default entry for the boot manager                         |
| /ems                   | Enables or disables Emergency Management Services                   |
| /emssettings           | Configures Emergency Management Services options                    |
| /errorcontrol          | Sets the error control options                                      |
| /resumeload            | Resumes a hibernated OS image load                                  |
| /customactions         | Configures custom BCDEdit actions                                   |
| /driver                | Configures options for boot-critical drivers                        |
| /hypervisor            | Configure the hypervisor launch type                                |

## Parameters:
| Parameter              | Description                                                         |
|------------------------|---------------------------------------------------------------------|
| /store                 | Specifies the store to be used (default is the system store)        |
| /bootsequence          | Lists the devices in a one-time boot sequence                       |
| /emsport               | Sets the COM port for EMS redirection                               |
| /emsbaud               | Sets the baud rate for EMS redirection                              |
| /default               | Sets the default boot entry identifier                              |
| displayorder           | Specifies a list of boot entry identifiers for display purposes     |
| timeout                | Sets the waiting time in seconds before the default OS option loads |

:::caution
Exercise caution when using the `bcdedit` command as modifying boot settings incorrectly can prevent your system from booting properly. Make sure to carefully follow usage instructions and avoid changing settings unless you are familiar with the potential consequences.
:::
## BCDEDIT Usage:
### Set a Description for a Windows Boot Entry
```cmd
bcdedit /set {identifier} description "Windows 10 Pro"
```
Set a custom description for a Windows boot entry identified by {identifier}.

### Change the Boot Manager Timeout
```cmd
bcdedit /timeout 10
```
Change the boot manager timeout to 10 seconds.

### Display Detailed Boot Configuration Data
```cmd
bcdedit /enum [{identifier}] /v
```
Display detailed information about the boot configuration data, either for all entries or a specific entry.

### Restore the Default Windows Boot Entry
```cmd
bcdedit /default {default}
```
Restore the default Windows boot entry identified by {default} value.
:::tip
When using the bcdedit command in CMD, always ensure that you have administrative privileges to make changes to the boot configuration data.
:::

## Common Questions on BCDEDIT Usage:

### How do I use bcdedit in CMD?
To use the bcdedit command in CMD, execute the following command:
```cmd
bcdedit /enum
```
---

### What does bcdedit /enum do?
The command "bcdedit /enum" displays the current boot configuration data stored in the Windows Boot Manager.
```cmd
bcdedit /enum
```
---

### How can I use bcdedit to modify boot options?
To modify boot options using bcdedit in CMD, you can use commands like "bcdedit /set" followed by the appropriate parameters.
```cmd
bcdedit /set {parameter} {value}
```
---

### How can I disable a specific boot entry with bcdedit?
To disable a specific boot entry using bcdedit in CMD, you can use the "bcdedit /set" command with the "status" parameter set to "disabled".
```cmd
bcdedit /set {entry} description "Windows 10 (disabled)"
```
---

### How do I delete a boot loader entry with bcdedit?
To delete a boot loader entry using bcdedit in CMD, you can use the "bcdedit /delete" command with the appropriate entry identifier.
```cmd
bcdedit /delete {identifier}
```
---

### Can bcdedit help me troubleshoot boot-related issues?
Yes, bcdedit can be used to troubleshoot boot-related issues by displaying and modifying boot configuration data to resolve problems.
```cmd
bcdedit /enum {specific parameter}
```
---

## Applications of the BCDEDIT Command

- Modify boot settings
- Create boot entries
- Delete boot entries
- Display detailed boot configuration data
- Set the default operating system
- Change boot menu display settings
- Enable or disable kernel debugging
- Configure firmware boot manager settings