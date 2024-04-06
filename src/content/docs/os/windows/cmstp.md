---
title: What is CMSTP Windows command?
description: CMSTP command allows for installing or uninstalling components in Windows systems. Learn how to use it effectively.
---

The CMSTP command in Windows is used to manipulate or configure Windows components through the Windows Installer. This command can be used to install or uninstall applications, software packages, or even system updates. It provides a way to automate the installation process and can be especially useful for system administrators managing multiple machines. By using the CMSTP command, you can streamline the deployment of software and updates, saving time and ensuring consistency across systems. Understanding how to effectively use the CMSTP command can improve efficiency and productivity in managing Windows systems.

## CMSTP Syntax:
```cmd
cmstp [INF_file] /s [CAB_file]
```

## CMSTP Options:

| Option | Description                                |
|--------|--------------------------------------------|
| /s     | Specifies the full path to the CAB file to install.       |

## Parameters:
| Parameter | Description                                |
|-----------|--------------------------------------------|
| INF_file  | Specifies the full path to the INF file for installation. |
| CAB_file  | Specifies the full path to the CAB file to install.       |

:::caution
Exercise caution when using the cmstp command as it can make system changes. Always ensure you have accurate file paths and understand the implications of the installation process.
:::
## CMSTP Command Usage Examples:
### Execute a CMD Command Using a CMSTP INF File
```cmd
cmstp /s C:\Windows\Temp\command.inf
```
Executes a CMD command using a CMSTP INF file located at "C:\Windows\Temp\command.inf".

### Install a Program Using a CMSTP Script
```cmd
cmstp /s C:\Windows\Temp\program.inf
```
Installs a program using a CMSTP script located at "C:\Windows\Temp\program.inf".

### Uninstall a Program Using a CMSTP INF File
```cmd
cmstp /s C:\Windows\Temp\uninstall.inf
```
Uninstalls a program using a CMSTP INF file located at "C:\Temp\uninstall.inf".

### Logging CMSTP Installation Process
```cmd
cmstp /s C:\Windows\Temp\install.inf /l C:\Windows\Temp\install.log
```
Logs the installation process of a program using a CMSTP INF file located at "C:\Windows\Temp\install.inf" to "C:\Windows\Temp\install.log".

### Display Help Information for CMSTP Command
```cmd
cmstp /?
```
Displays help information for the CMSTP command, providing details on its usage and options available.
:::tip
When using the cmstp command in CMD, ensure to run the command with the appropriate options and values to successfully install or uninstall Connection Manager profiles.
:::

### How do I use cmstp in CMD?
To use the cmstp command in CMD, execute the following command:
```cmd
cmstp /s <path to INF file>
```

### What is the syntax for installing a Connection Manager profile using cmstp?
To install a Connection Manager profile using cmstp, use the following syntax:
```cmd
cmstp /s <path to INF file>
```

### How can I uninstall a Connection Manager profile with cmstp?
To uninstall a Connection Manager profile using cmstp, you can use the following command:
```cmd
cmstp /u <path to INF file>
```

### Can I install multiple Connection Manager profiles at once with cmstp?
Yes, you can install multiple Connection Manager profiles simultaneously by providing the paths to the respective INF files in the command. Here's an example:
```cmd
cmstp /s <path to INF file 1> /s <path to INF file 2>
```

### What options can be used with the cmstp command in CMD?
There are various options that can be used with the cmstp command in CMD, such as:
- /s: Specifies the INF file for installation.
- /u: Specifies the INF file for uninstallation.
- /au: Automatically accepts user license agreements during installation.

### How can I silently install a Connection Manager profile using cmstp?
To silently install a Connection Manager profile without displaying any UI, you can use the /quiet option. Here's an example:
```cmd
cmstp /s <path to INF file> /quiet
```

### Is it possible to verify the success of the installation process with cmstp?
Yes, you can verify the success of the installation process by checking the return code after executing the cmstp command. A return code of 0 typically indicates successful installation. 

### Can I create custom Connection Manager profiles to install using cmstp?
Yes, you can create custom Connection Manager profiles using an INF file and then utilize the cmstp command to install them on Windows systems.


##Applications of the CMSTP Command

- Installing signed or unsigned `.inf` files
- Applying security templates
- Installing custom security policies
- Configuring or modifying services