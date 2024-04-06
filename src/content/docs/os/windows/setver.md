---
title: SETVER Windows Command Guide
description: Learn how to use the Windows SETVER command to set a version number for MS-DOS compatibility.
---


The Windows SETVER command allows users to set a specific version number for MS-DOS compatibility. By using this command, you can adjust the compatibility settings to run older MS-DOS-based programs on your Windows system. It is particularly useful for ensuring that legacy applications function properly without encountering compatibility issues. The SETVER command is a powerful tool for managing compatibility settings and ensuring smooth operation of older software on your Windows system.

## SETVER Syntax:
```cmd
setver [VersionNumber]
```
## Options:
| Option  | Description                         |
|---------|-------------------------------------|
| No options available                     |

## Parameters:
| Parameter     | Description                         |
|---------------|-------------------------------------|
| VersionNumber | Specifies the version number to set |

:::caution
Using the SETVER command can cause compatibility issues with newer Windows versions. It is recommended to avoid using this command unless absolutely necessary.
:::
## SETVER Command Samples:
### Set the version number to 6.00
```cmd
setver 6.00
```
Sets the version number to 6.00 for compatibility purposes.

### Display the current version number
```cmd
setver
```
Displays the currently set version number.

### Check the available parameters for the SETVER command
```cmd
setver /?
```
Shows the available parameters and options for the SETVER command.

### Set the version number to 5.10 to emulate an older operating system
```cmd
setver 5.10
```
Sets the version number to 5.10 to emulate an older operating system for compatibility testing.

### Clear the version number setting
```cmd
setver /delete
```
Clears the set version number, reverting to the default behavior.

### Revert to the original version setting after testing
```cmd
setver /reset
```
Reverts back to the original version number setting after testing different versions.

### Set the version number to 4.00 to test compatibility with legacy software
```cmd
setver 4.00
```
Sets the version number to 4.00 to test compatibility with legacy software.
:::tip
When using the setver command in Windows, make sure to carefully review the available options and their corresponding values to ensure you achieve the desired behavior for setting the version number.
:::

## SETVER FAQ:
### How do I use setver in Windows?
To use the setver command in Windows, execute the following command:
```cmd
setver --option <value>
```

### What is the purpose of the setver command in Windows?
The setver command in Windows is used to set the version number that an MS-DOS application expects.

### How can I view the current version number set by setver in Windows?
You can view the current version number set by setver in Windows by using the command:
```cmd
setver
```

### Can I reset the version number set by setver in Windows?
Yes, you can reset the version number set by setver in Windows by using the following command:
```cmd
setver /
```

### How do I set a specific version number for an MS-DOS application using setver in Windows?
To set a specific version number for an MS-DOS application using setver in Windows, use the following command syntax:
```cmd
setver <version_number>
```

### Is it possible to deactivate the setver command in Windows temporarily?
Yes, you can deactivate the setver command in Windows temporarily by using the command:
```cmd
setver <
```
## Applications of the SETVER Command

- Set the version number that a specific MS-DOS program expects to run
- Modify the compatibility of MS-DOS programs with the current version of Windows
- Enable or disable version checking for specific MS-DOS programs