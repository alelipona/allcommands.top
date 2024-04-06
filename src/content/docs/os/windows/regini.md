---
title: Windows REGINI command
description: Learn how to use the Windows regini command to modify registry permissions and settings efficiently.
---

The Windows regini command enables users to change registry permissions and settings through batch scripts. It allows for bulk modifications to be applied quickly and efficiently. The regini command syntax involves specifying the registry key path, access permissions, and desired settings. This command can be particularly useful for system administrators managing multiple Windows machines or for automating registry changes. By leveraging the regini command, users can streamline the process of adjusting registry configurations in a controlled and precise manner.

## REGINI Syntax:
```cmd
regini [options] filename.inf
```
## Options:
| Option | Description                                 |
|--------|---------------------------------------------|
| -m     | Merges the current registry information with the information in the specified .inf file. |
| -c     | Clears all previous information from the current registry database before adding the information from the specified .inf file. |
| -a     | Adds information from the specified .inf file to the current registry database. |
| -R     | Replaces the current registry database with the information from the specified .inf file. |

## Parameters:
| Parameter   | Description                                                                               |
|-------------|-------------------------------------------------------------------------------------------|
| filename.inf | Specifies the path and name of the file containing the registry entries to be processed.  |

:::caution
Exercise caution when using the regini command, as incorrect usage can lead to modifications in the Windows Registry that may cause system instability or issues. Make sure to double-check the .inf file contents before executing the command.
:::
## REGINI Usage:
### Grant Full Control to a User for a Registry Key
```cmd
regini -m \\RemoteComputer\HKLM\Software\MyApp\Settings.reg YourDomain\YourUser
```
Grants full control to a specified user for a registry key on a remote computer.

### Deny Write Access to a User for a Registry Value
```cmd
BUILTIN\Administrators=Deny [1 2]
```
Den%20Access to a specific user%20Denies write access to a specific user for a registry value.

### Reset Permissions for a Registry Key
```cmd
regini \\ComputerName\HKLM\Software\MyApp\Settings.reg
```
Resets the permissions for a registry key to default settings.

### Display Current Permissions for a Registry Key
```cmd
regini -a \\ComputerName\HKLM\Software\MyApp\Settings.reg
```
Displays the current permissions set for a registry key.
:::tip
When using the regini command in Windows, make sure to carefully read the documentation and understand the syntax to avoid making unintended changes to the system registry.
:::

### How do I use regini in Windows?
To use the regini command in Windows, execute the following command:
```cmd
regini <scriptfile>
```

### What is the purpose of regini in Windows?
The regini command in Windows is used to set or display registry permissions and ownership.

### How can I grant permission using regini in Windows?
To grant permission using regini in Windows, you can create a script file with the desired permissions and apply it using the command:
```cmd
regini <scriptfile>
```

### Can I use regini to modify registry entries in Windows?
Yes, you can use regini to modify registry entries by creating a script file with the necessary modifications and applying it using the command.

### How do I remove registry permissions using regini in Windows?
To remove registry permissions using regini in Windows, create a script file that revokes the permissions and execute it using the command:
```cmd
regini <scriptfile>
```

### Is it possible to backup registry settings with regini in Windows?
No, regini is meant for setting or displaying registry permissions and ownership, not for backing up registry settings.

### How do I view current registry permissions using regini in Windows?
You can view current registry permissions by creating a script file that specifies the keys you want to check and executing it with the regini command.

## Applications of the REGINI Command

- Set registry permissions
- Modify registry key values
- Create registry keys
- Delete registry keys
- List current registry settings