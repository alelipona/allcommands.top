---
title: OCSETUP command in Windows
description: Learn about the Windows ocsetup command and how to use it to manage Windows features and components.
---

The Windows ocsetup command is used to manage Windows features and components through the command line interface. By using this command, users can install, uninstall, configure, and update various features on a Windows operating system. This tool is especially useful for system administrators who need to manage multiple computers remotely or automate the deployment of Windows features. The ocsetup command provides a simple and efficient way to interact with Windows features without the need for a graphical user interface.

## OCSETUP Syntax:
```cmd
ocsetup [Option] [Parameter]
```

## Windows OCSETUP Options:
| Option | Description                       |
|--------|-----------------------------------|
| /W     | Wait for the installation to complete before returning. |

## OCSETUP Parameters:
| Parameter  | Description                                        |
|------------|----------------------------------------------------|
| Feature    | Specifies the feature to be installed or removed.  |
  
:::caution
Caution: The OCSETUP command can make changes to the Windows system configuration. Ensure you have the necessary permissions and understand the implications of the features being installed or removed.
:::
## How to use OCSETUP command:
### Check the installed roles and features
```cmd
ocsetup /p
```
This command lists all the currently installed roles and features.

### Install a specific feature or role
```cmd
ocsetup <FeatureName>
```
This command installs the specified feature or role.

### Uninstall a specific feature or role
```cmd
ocsetup /u <FeatureName>
```
This command uninstalls the specified feature or role.

### List available features and roles
```cmd
ocsetup /?
```
This command provides a list of available features and roles that can be installed.

### Install multiple features or roles
```cmd
ocsetup <FeatureName1>,<FeatureName2>,<FeatureName3>
```
This command installs multiple specified features or roles.

### Disable a specific feature or role
```cmd
ocsetup /disable <FeatureName>
```
This command disables the specified feature or role.

### Check the status of a specific feature or role
```cmd
ocsetup /obsolete <FeatureName>
```
This command checks if the specified feature or role is obsolete.

### Re-enable a previously disabled feature or role
```cmd
ocsetup /reenable <FeatureName>
```
This command re-enables a previously disabled feature or role.
:::tip
When using the ocsetup command in Windows CMD, make sure to run the command with administrative privileges to ensure proper execution and avoid any permission-related errors.
:::

### How do I use ocsetup in Windows?
To use the ocsetup command in Windows, execute the following command:
```cmd
ocsetup --option <value>
```

### What are some common options available with the ocsetup command?
To view a list of common options available with the ocsetup command, use the following command:
```cmd
ocsetup /?
```

### How can I install a specific feature using ocsetup in Windows?
To install a specific feature using the ocsetup command in Windows, use the following command:
```cmd
ocsetup FeatureName /force
```

### Can I uninstall a feature using the ocsetup command?
Yes, you can uninstall a feature using the ocsetup command. To uninstall a feature, use the following command:
```cmd
ocsetup FeatureName /uninstall
```

### How do I list all installed features using ocsetup in CMD?
To list all the installed features using the ocsetup command in CMD, run the following command:
```cmd
ocsetup /enum
```

### Is it possible to repair a Windows feature using ocsetup?
Yes, you can repair a Windows feature using the ocsetup command. To repair a feature, use the following command:
```cmd
ocsetup FeatureName /repair
```

### How can I check the status of a specific feature using ocsetup?
To check the status of a specific feature using the ocsetup command, you can use the following command:
```cmd
ocsetup FeatureName /query
```

### Can I enable or disable a Windows feature using ocsetup?
Yes, you can enable or disable a Windows feature using the ocsetup command. To enable or disable a feature, use the following command:
```cmd
ocsetup FeatureName /enable
```

## Applications of the OCSETUP Command

- Installing or uninstalling Windows optional features and components
- Adding or removing Windows Server roles and features