---
title: What is REAGENTC Windows command?
description: Learn how to use the Windows reagentc command for system recovery and configuration settings.
---

The **Windows reagentc command** is a useful tool for managing recovery environments and configuration settings on your system. It helps you troubleshoot issues and restore your system to a previous state with ease.

## REAGENTC Syntax:
```cmd
reagentc /enable
reagentc /disable
reagentc /info
reagentc /boottore
```

## REAGENTC Options:
| Option      | Description                      |
|-------------|----------------------------------|
| /enable     | Enables Windows Recovery Environment configuration. |
| /disable    | Disables Windows Recovery Environment configuration. |
| /info       | Displays information about the Windows Recovery Environment settings. |
| /boottore   | Configures the Default Windows Recovery Environment settings.  |

## Parameters:
| Parameter    | Description                             |
|--------------|-----------------------------------------|
| None         | There are no additional parameters for the reagentc command. |
## REAGENTC Command Usage Examples:
### Enable recovery environment
```cmd
reagentc /enable
```
Enables the Windows recovery environment for troubleshooting and system recovery.

### Get the reagentc configuration settings
```cmd
reagentc /info
```
Displays the configuration settings of the Windows recovery environment.

### Set the location of the WinRE image
```cmd
reagentc /setreimage /path D:\WinRE
```
Sets the location of the Windows Recovery Environment image to the specified path.

### Disable the recovery environment
```cmd
reagentc /disable
```
Disables the Windows recovery environment on the system.

### Configure and enable recovery image
```cmd
reagentc /setosimage /path C:\Windows /target C:\Windows
```
Configures and enables the specified Windows recovery image.
:::tip
Make sure to run the reagentc command with administrative privileges to avoid any permission-related issues.
:::

### How do I use reagentc in Windows?
To use the reagentc command in CMD, execute the following command:
```cmd
reagentc /info
```

### What is the purpose of the reagentc command?
The reagentc command is used to configure the Windows Recovery Environment (WinRE) settings.
```cmd
reagentc /enable
```

### How can I check the status of Windows Recovery Environment?
To check the status of Windows Recovery Environment, use the following reagentc command:
```cmd
reagentc /info
```

### How do I enable Windows Recovery Environment?
To enable Windows Recovery Environment using reagentc, run the following command:
```cmd
reagentc /enable
```

### How do I disable Windows Recovery Environment using reagentc?
To disable Windows Recovery Environment, use the reagentc command with the /disable option:
```cmd
reagentc /disable
```

### Can I relocate the WinRE boot image using the reagentc command?
Yes, you can relocate the WinRE boot image using the reagentc command.
```cmd
reagentc /setreimage /path C:\Recovery\WindowsRE
```

### How can I configure the WinRE boot image location?
You can configure the location of the WinRE boot image using the reagentc command with the /setreimage option.
```cmd
reagentc /setreimage /path C:\Recovery\WindowsRE
```

### Is it possible to specify custom WinRE tools using reagentc?
Yes, you can specify custom WinRE tools using the reagentc command with the /setosimage option.
```cmd
reagentc /setosimage /path C:\CustomTools
```
## Applications of the REAGENTC Command

- **SetREImage** - Configures the location of the Windows RE image.
- **Enable** - Enables Windows RE.
- **Disable** - Disables Windows RE.
- **Info** - Displays information about the Windows RE status and configuration.