---
title: LODCTR command in Windows
description: Use the Windows lodctr command to manage performance counter names and explain to the system where to find them.
---

The Windows lodctr command is used to manage performance counter names in the registry and explain to the system where to find them. This command is useful for troubleshooting performance monitoring and tuning issues. By using lodctr, you can add or remove performance counters, rebuild the performance counter list, and resolve issues related to missing or corrupted counter names.
## LODCTR Syntax:
```cmd
lodctr [\\computername] filename
```

## Windows LODCTR Options:
| Option | Description                            |
|--------|----------------------------------------|
| /?     | Displays help for using LODCTR command. |

## LODCTR Parameters:
| Parameter  | Description                                  |
|------------|----------------------------------------------|
| computername | Specifies the name of the remote computer.   |
| filename     | Specifies the name of the extensible counter DLL file. |

:::caution
Exercise caution when using the LODCTR command as incorrect usage may impact system performance or functionality.
:::

### Load all Performance Counters
```cmd
lodctr /s:PerfStringBackup.INI
```
Loads all performance counters from the specified INI file.

### Rebuild Performance Counter Strings
```cmd
lodctr /r
```
Rebuilds the string and information for all registered performance counters. 

### Restore Performance Counters from a Backup File
```cmd
lodctr /r:PerfStringBackup.INI
```
Restores performance counter settings from a previously created backup INI file.

### Unload Performance Counters
```cmd
lodctr /u
```
Unloads all performance counters.

### Query Performance Counters Status
```cmd
lodctr /q
```
Displays the current status and settings of all performance counters. 

### Install Language Specific Performance Counters
```cmd
lodctr /m:PerfStringBackup.INI
```
Loads performance counters with language-specific settings from the specified INI file.

### Backup Performance Counter Strings
```cmd
lodctr /s:PerfStringBackup.INI
```
Saves the current performance counter settings to a backup INI file.

### Reinitialize Performance Counters
```cmd
lodctr /i
```
Reinitializes all performance counters.
:::tip
When using the lodctr command in Windows, make sure to run the command prompt as an administrator to avoid any permission issues.
:::

### How do I use lodctr in Windows?
To use the lodctr command in Windows, execute the following command:
```cmd
lodctr --h
```

### What does lodctr do in CMD?
The lodctr command in CMD is used to update registry values and performance counter names from a specified text file.
```cmd
lodctr C:\Windows\inf\PerfStringBackup.ini
```

### How can I restore performance counter names with lodctr?
You can restore performance counter names using the lodctr command by referencing the Backup Registry File.
```cmd
lodctr /r
```

### How do I unload all performance counter names with lodctr?
To unload all performance counter names using lodctr, you can use the following command:
```cmd
lodctr /u
```

### How can I list all performance counter names registered with lodctr?
To list all performance counter names registered with lodctr, you can run the command:
```cmd
lodctr /q
```

### How do I reset the performance counter names to default using lodctr?
You can reset the performance counter names to default by executing the following lodctr command:
```cmd
lodctr /r
```

### Can I backup performance counter names with lodctr?
Yes, you can backup performance counter names using the lodctr command as shown in the example below:
```cmd
lodctr /s:C:\Windows\inf\PerfStringBackup.ini
```

### How do I reload all performance counter names with lodctr?
To reload all performance counter names using lodctr, run the following command:
```cmd
lodctr /r
```

### How do I update performance counter settings with lodctr?
You can update performance counter settings with lodctr using a specified INI file, as illustrated in the example below:
```cmd
lodctr /m:C:\Windows\inf\PerfStringBackup.ini
```
## Applications of the LODCTR Command

- Loading performance counter names from a specified .ini file
- Rebuilding the perf registry strings and info from scratch based on the values in the .ini file
- Restoring all performance counters to their default settings
- Updating all installed performance counters with the latest version information available in the registry