---
title: FONDUE Windows Command Guide
description: Learn how to use the Windows Fondue command for managing features and updates. 
---

The Windows fondue command, short for "Features on Demand User Experience Tool," is used to install and manage features on Windows operating systems. This tool allows users to add or remove features, language packs, or updates. It helps streamline the process of managing software components on Windows systems. With the fondue command, users can easily enable or disable specific features based on their requirements, enhancing the overall functionality and performance of their Windows system.
## FONDUE Syntax:
```cmd
fondue [options] [parameters]
```

## Options:
| Option | Description                     |
|--------|---------------------------------|
| /s     | Scan system for issues          |
| /v     | Verbose output                  |
| /r     | Repair found issues             |
| /c     | Check for updates to fondue     |

## Parameters:
| Parameter | Description                        |
|-----------|------------------------------------|
| filename  | Name of the file to analyze         |
| directory | Directory to scan for issues       |
| settings  | Path to settings file for fondue    |
| log       | Output log file path for the scan   |

:::caution
Exercise caution when using the `fondue` command, especially while repairing issues as it might make system changes. Always ensure to use the appropriate options and parameters based on your requirements to prevent unintended consequences.
:::
## FONDUE Command Samples:
### Display Help Information
```cmd
fondue /?
```
Displays help information about how to use the fondue command.

### Install Features
```cmd
fondue -install <FeatureName>
```
Installs the specified Windows feature using the fondue command.

### Uninstall Features
```cmd
fondue -uninstall <FeatureName>
```
Uninstalls the specified Windows feature using the fondue command.

### List Available Features
```cmd
fondue -list
```
Lists all the available Windows features that can be installed using the fondue command.

### Check Windows Edition
```cmd
fondue -status
```
Checks the current Windows edition and displays information about the features installed on the system.

### Specify Installation Source
```cmd
fondue -source <Path>
```
Specifies a custom installation source for the Windows features to be installed using the fondue command.

### Restart Installation After Reboot
```cmd
fondue -reboot
```
Restarts the installation process after a system reboot to continue installing Windows features using the fondue command.
:::tip
When using the fondue command in Windows, make sure to carefully review the available options and their corresponding values to customize the command based on your requirements.
:::

## FONDUE FAQ:
### How do I use fondue in Windows?
To use the fondue command in Windows, execute the following command:
```cmd
fondue --option <value>
```

### What are some common options used with fondue in Windows?
Common options used with fondue in Windows include setting the display language, specifying the target edition, and selecting the architecture. You can use the following command to specify these options:
```cmd
fondue --lang en-US --edition PRO --arch x64
```

### How can I check the available options for fondue in Windows?
You can display the available options and their descriptions for the fondue command in Windows by running the following command:
```cmd
fondue --help
```

### Can I customize the installation settings with fondue in Windows?
Yes, you can customize the installation settings such as features, packages, and updates using the fondue command in Windows. Here is an example of how you can customize the installation settings:
```cmd
fondue --features AppX,NetFx3 --packages Package1,Package2 --updates update1,update2
```

### Is it possible to automate the installation process with fondue in Windows?
You can automate the installation process using fondue in Windows by creating a configuration file with all the desired options and then using the following command to execute the installation:
```cmd
fondue --config C:\path\to\config.xml
```

### How do I uninstall a package using fondue in Windows?
To uninstall a package using fondue in Windows, you can use the following command:
```cmd
fondue --uninstall PackageName
```
## Applications of the FONDUE Command

- Display font information
- List installed fonts
- Verify font file integrity