---
title: All About REG Windows command
description: Learn how to use the Windows reg command efficiently to manage the registry. Understand its syntax, options, and use cases.
---

The Windows reg command is a powerful tool for managing the registry. It allows users to query, add, delete, and manipulate registry keys and values from the command line. By using the reg command, users can perform a wide range of tasks, such as exporting and importing registry entries, backing up and restoring the registry, and configuring registry settings. The reg command supports various options and syntax, providing flexibility and control over registry operations. Familiarize yourself with the reg command to efficiently manage the Windows registry and optimize system performance.

## REG Syntax:
```cmd
reg [Options] [Parameters]
```
## Options:
| Option     | Description                 |
|------------|-----------------------------|
| /QUERY     | Display registry values.    |
| /ADD       | Add a new registry entry.   |
| /DELETE    | Delete a registry entry.    |
| /COPY      | Copy a registry entry.      |
| /EXPORT    | Export registry data.       |
| /IMPORT    | Import registry data.       |

## Parameters:
| Parameter  | Description                         |
|------------|-------------------------------------|
| Key        | Registry key to work with.          |
| ValueName  | Name of the registry value.         |
| ValueType  | Type of the registry value.         |
| ValueData  | Data for the registry value.        |

:::caution
Exercise caution when making changes to the Windows registry using the reg command as incorrect usage can cause system instability and data loss.
:::
## REG CMD Examples:
### Create a New Registry Key
```cmd
reg add HKEY_CURRENT_USER\Software\Example
```
Creates a new registry key named "Example" under HKEY_CURRENT_USER\Software.

### Delete a Registry Key and All Its Subkeys
```cmd
reg delete HKEY_CURRENT_USER\Software\Example /f
```
Deletes the registry key "Example" and all its subkeys under HKEY_CURRENT_USER\Software without prompting for confirmation.

### Query a Registry Key Value
```cmd
reg query HKEY_CURRENT_USER\Software\Example /v ValueName
```
Displays the value of the registry key "ValueName" under the key HKEY_CURRENT_USER\Software\Example.

### Export a Registry Key to a File
```cmd
reg export HKEY_CURRENT_USER\Software\Example C:\Backup\ExampleBackup.reg
```
Exports the registry key "Example" under HKEY_CURRENT_USER\Software to a file named "ExampleBackup.reg" in the C:\Backup directory.

### Import Data from a Registry File
```cmd
reg import C:\Backup\ExampleBackup.reg
```
Imports the data from the registry file "ExampleBackup.reg" into the registry.

### Load a Hive into the Registry
```cmd
reg load HKLM\TempHive C:\Temp\Software
```
Loads the registry hive file located at C:\Temp\Software into HKEY_LOCAL_MACHINE\TempHive.
:::tip
Always run the reg command with caution, as modifying the Windows registry can potentially cause system instability if done incorrectly. Make sure to back up the registry before making any changes.
:::

## REG Command Help Center:

### How do I use reg in Windows?
To use the reg command in Windows, execute the following command:
```cmd
reg --option <value>
```

### How can I query a specific registry key using reg?
To query a specific registry key in Windows, use the following command:
```cmd
reg query "HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion"
```

### How can I add a new registry key with reg in Windows?
To add a new registry key in Windows using the reg command, you can use the following command:
```cmd
reg add "HKEY_CURRENT_USER\Software\NewKey"
```

### How do I delete a registry key using reg in Windows?
To delete a registry key in Windows with the reg command, use the following command:
```cmd
reg delete "HKEY_CURRENT_USER\Software\OldKey"
```

### How can I import registry data from a file using reg in Windows?
To import registry data from a file in Windows using the reg command, you can use the following command:
```cmd
reg import C:\path\to\registryfile.reg
```

### How do I export registry data to a file using reg in Windows?
To export registry data to a file in Windows with the reg command, use the following command:
```cmd
reg export "HKEY_CURRENT_USER\Software\OldKey" C:\path\to\exportedfile.reg
```

### How can I query all subkeys and values under a specific registry key in Windows with reg?
To query all subkeys and values under a specific registry key using the reg command in Windows, you can use the following command:
```cmd
reg query "HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion" /s
```

### How do I search for a specific value in the Windows registry with reg?
To search for a specific value in the Windows registry using the reg command, execute the following command:
```cmd
reg query "HKEY_LOCAL_MACHINE\Software" /v ValueName
```
## Applications of the REG Command

- Import, export, and compare registry data
- Query, add, change, and delete registry keys and values
- Load and unload registry hives
- Save and restore registry keys and values to and from files
- Backup and restore the registry
- Perform offline registry operations