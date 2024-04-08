---
title: csrutil command in MacOS
description: Manage System Integrity Protection settings on your Mac with the csrutil command. Enable or disable SIP to customize your system security.
---

The MacOS csrutil command, short for System Integrity Protection, allows users to enable or disable various security features on their Mac operating system. This command is used to manage SIP settings, ensuring the integrity of the system and protecting it from potentially harmful modifications. By utilizing the csrutil command, users can customize their system's security settings according to their needs and preferences, helping to maintain a secure and stable operating environment.
## csrutil Syntax:
```bash
csrutil [disable | enable | status]
```

## MacOS csrutil Options:
| Option  | Description                            |
|---------|----------------------------------------|
| disable | Disables System Integrity Protection.  |
| enable  | Enables System Integrity Protection.   |
| status  | Displays the current System Integrity Protection status. |

## csrutil Parameters:
| Parameter | Description                       |
|-----------|-----------------------------------|
| N/A       | No additional parameters needed.  |

:::caution
Be cautious when using the csrutil command as it involves altering the System Integrity Protection (SIP) settings, which can impact the system's security and stability. Make sure to understand the consequences of disabling or enabling SIP before proceeding.
:::
## How to use csrutil command:
### Disable SIP (System Integrity Protection)
```bash
csrutil disable
```
Disables System Integrity Protection on MacOS.

### Enable SIP (System Integrity Protection)
```bash
csrutil enable
```
Enables System Integrity Protection on MacOS.

### Display current SIP status
```bash
csrutil status
```
Displays the current status of System Integrity Protection on MacOS.

### Disable SIP and reboot immediately
```bash
csrutil disable; reboot
```
Disables System Integrity Protection and reboots the system immediately.

### Enable SIP and reboot later
```bash
csrutil enable --without fs; reboot
```
Enables System Integrity Protection without the file system protection and schedules a system reboot.

### Enable SIP and exclude a specific signed file
```bash
csrutil enable --without kext --without lib
```
Enables System Integrity Protection while excluding specific signed files from protection.

### Show available commands for csrutil
```bash
csrutil
```
Displays the available commands and options for the csrutil command on MacOS.

### Enable SIP and exclude multiple path directories
```bash
csrutil enable --without ls --without usr
```
Enables System Integrity Protection while excluding multiple path directories from protection.
:::tip
When using the csrutil command in MacOS, make sure to carefully read the man page or documentation to understand the available options and their effects. It is important to exercise caution when modifying the System Integrity Protection settings, as it can have significant impacts on the system's security and stability.
:::

### How do I enable SIP using csrutil in MacOS?
To enable System Integrity Protection (SIP) using the csrutil command in MacOS, execute the following command:
```bash
csrutil enable
```

### How do I check the status of SIP using csrutil in MacOS?
To check the status of System Integrity Protection (SIP) using the csrutil command in MacOS, execute the following command:
```bash
csrutil status
```

### How do I disable SIP using csrutil in MacOS?
To disable System Integrity Protection (SIP) using the csrutil command in MacOS, execute the following command:
```bash
csrutil disable
```

### How do I modify SIP configuration using csrutil in MacOS?
To modify the configuration of System Integrity Protection (SIP) using the csrutil command in MacOS, follow these steps:
1. Boot into Recovery Mode by restarting your Mac and holding Command+R during startup.
2. Open Terminal from the Utilities menu.
3. To enable or disable SIP, use the `csrutil enable` or `csrutil disable` command respectively.
4. Restart your Mac for the changes to take effect.

### What are the available options with csrutil in MacOS?
To view the available options and usage information for the csrutil command in MacOS, execute the following command:
```bash
csrutil
```

### How do I reset SIP configuration using csrutil in MacOS?
To reset the System Integrity Protection (SIP) configuration to its default settings using the csrutil command in MacOS, execute the following command:
```bash
csrutil clear
```

### How do I customize SIP settings using csrutil in MacOS?
To customize the System Integrity Protection (SIP) settings using the csrutil command in MacOS, you can explore advanced options available within the command-line interface or refer to the documentation for more information.

### How do I enable verbose mode for SIP using csrutil in MacOS?
To enable verbose mode for System Integrity Protection (SIP) using the csrutil command in MacOS, execute the following command:
```bash
csrutil verbose
```

### How do I blacklist kernel extensions using csrutil in MacOS?
To blacklist specific kernel extensions using the csrutil command in MacOS, you can utilize the `kextpolicy` option. For example, to add a kernel extension to the blacklist, execute the following command:
```bash
csrutil kextpolicy add <bundle_id> <team_id>
```

## Applications of the csrutil command

- Disabling SIP (System Integrity Protection)
- Enabling certain debugging features
- Modifying protected system files
- Installing certain software that requires SIP to be disabled