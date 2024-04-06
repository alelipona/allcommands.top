---
title: POWERCFG Windows Command Guide
description: Learn how to use the Windows powercfg command to manage power settings efficiently and improve energy efficiency on your computer.
---

The Windows powercfg command is a powerful tool that allows users to manage power settings efficiently. By using powercfg, you can analyze power usage, optimize power plans, and troubleshoot power-related issues on your computer. This command is especially useful for laptop users who want to increase battery life or for system administrators looking to improve energy efficiency across multiple devices. With powercfg, you can generate power usage reports, modify power plans, and even set power policies. Mastering the powercfg command can help you maximize energy savings and ensure your computer runs more efficiently.
## POWERCFG Syntax:
```cmd
powercfg [options] [parameters]
```
## Options:
| Option            | Description                                                     |
|-------------------|-----------------------------------------------------------------|
| /list             | Lists all power schemes.                                         |
| /query            | Queries power settings.                                          |
| /setacvalueindex  | Sets a power setting value for the active power scheme.         |
| /change           | Changes the settings of the specified power scheme.             |

## Parameters:
| Parameter         | Description                                                     |
|-------------------|-----------------------------------------------------------------|
| [Scheme_GUID]     | Specifies the power scheme GUID.                                |
| [Sub_GUID]        | Specifies the subgroup GUID.                                     |
| [Setting_GUID]    | Specifies the setting GUID.                                     |
| [Index_Value]     | Specifies the index value for the setting.                      |

:::caution
Exercise caution when using the powercfg command as it can make changes to critical power settings on your system. Incorrect usage of the command can lead to unexpected behavior or system instability.
:::
## POWERCFG Command Samples:
### Check the current power plan settings
```cmd
powercfg /getactivescheme
```
This command displays the current active power plan settings on the system.

### List all available power plans
```cmd
powercfg /list
```
Shows a list of all available power plans on the system.

### Set the power plan to High Performance
```cmd
powercfg /setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
```
Changes the active power plan to the High Performance plan using its GUID.

### Export power plan settings to a file
```cmd
powercfg /export "C:\path\power-plan.pow" 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
```
Saves the power plan settings to a file named power-plan.pow located in the specified path.

### Delete a specific power plan
```cmd
powercfg /delete 381b4222-f694-41f0-9685-ff5bb260df2e
```
Removes the power plan with the specified GUID from the system.

### Restore power settings to their default configuration
```cmd
powercfg /restoredefaultschemes
```
Resets all power settings to their default configurations.

### Show detailed information about the system's power capabilities
```cmd
powercfg /energy
```
Generates a report with detailed information about the system's power capabilities and usage.
:::tip
When using the powercfg command in Windows, make sure to run it with administrative privileges to avoid any issues with changing power settings.
:::

## POWERCFG FAQ:
### How do I use powercfg in Windows?
To use the powercfg command in Windows, execute the following command:
```cmd
powercfg --option <value>
```

### How can I check the current power plan in Windows using powercfg?
To check the current power plan in Windows using powercfg, use the following command:
```cmd
powercfg /getactivescheme
```

### How do I list all available power plans using powercfg in Windows?
To list all available power plans in Windows using powercfg, run the command:
```cmd
powercfg /list
```

### How can I set the power scheme in Windows with powercfg?
To set a specific power scheme in Windows using powercfg, use the command:
```cmd
powercfg /setactive <GUID>
```

### How do I export power settings to a file with powercfg in Windows?
To export power settings to a file in Windows using powercfg, run the command:
```cmd
powercfg /export "C:\path\to\exported\file.pow"
```

### How can I restore power settings from a file using powercfg in Windows?
To restore power settings from a file in Windows using powercfg, use the command:
```cmd
powercfg /import "C:\path\to\exported\file.pow"
```
## Applications of the POWERCFG Command

- Check the current power plan settings
- Change the current power plan
- Create a new power plan
- Delete a power plan
- Set the power options for a power plan
- Export power configuration settings
- Import power configuration settings
- Restore the default power settings