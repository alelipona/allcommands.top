---
title: All About MSIEXEC Windows command
description: A comprehensive guide to the Windows msiexec command, its usage, options, and functions.
---

The Windows msiexec command is a powerful tool used for installing, uninstalling, and configuring Windows Installer packages. It offers various options and parameters for customizing the installation process. By running msiexec from the command prompt, users can manage software installations, repairs, and updates efficiently. Understanding how to use msiexec effectively can streamline software deployment and maintenance tasks, making it an essential tool for system administrators and IT professionals.
## MSIEXEC Syntax:
```cmd
msiexec [option] [parameter]
```

## Options:
| Option | Description                              |
|--------|------------------------------------------|
| /i     | Install or configure a product            |
| /x     | Uninstall a product                       |
| /qn    | Quiet mode with no user interaction       |
| /l     | Enable logging                           |
| /quiet | Quiet mode with user interaction          |

## Parameters:
| Parameter     | Description                                                           |
|---------------|-----------------------------------------------------------------------|
| Package       | Specifies the path to the Windows Installer package (.msi file)      |
| ProductCode   | Specifies the unique identifier for the product                      |
| LogFile       | Specifies the path to the log file for logging installation messages |

:::caution
Exercise caution when using the msiexec command as it can make changes to the system configuration. Make sure to verify the commands and parameters before running them to avoid unintended consequences.
:::
## MSIEXEC CMD Examples:
### Install an MSI Package
```cmd
msiexec /i "C:\example.msi"
```
Installs the MSI package located at "C:\example.msi".

### Uninstall an MSI Package
```cmd
msiexec /x {ProductCode}
```
Uninstalls the MSI package specified by its Product Code.

### Install an MSI Package with Logging
```cmd
msiexec /i "C:\example.msi" /l*v "C:\install.log"
```
Installs the MSI package with detailed logging to the specified log file.

### Repair an MSI Installation
```cmd
msiexec /fa {ProductCode}
```
Repairs the MSI installation specified by its Product Code.

### Set Property Values during Installation
```cmd
msiexec /i "C:\example.msi" PROP1=Value1 PROP2=Value2
```
Installs the MSI package and sets property values during installation.

### Extract Files from an MSI Package
```cmd
msiexec /a "C:\example.msi" /qb TARGETDIR="C:\extracted_files"
```
Extracts files from the MSI package to the specified target directory.
:::tip
When using the msiexec command in Windows, make sure to run the command prompt as an administrator to avoid any permission-related issues.
:::

## MSIEXEC Command Help Center:

### How do I use msiexec in Windows?
To use the msiexec command in Windows, execute the following command:
```cmd
msiexec --option <value>
```

### How can I install an MSI package using msiexec?
To install an MSI package using msiexec, use the following command:
```cmd
msiexec /i "C:\path\to\package.msi"
```

### How can I uninstall an MSI package using msiexec?
To uninstall an MSI package using msiexec, use the following command:
```cmd
msiexec /x {ProductCode}
```

### How do I repair an MSI package using msiexec?
To repair an MSI package using msiexec, use the following command:
```cmd
msiexec /f {ProductCode}
```

### How do I extract files from an MSI package using msiexec?
To extract files from an MSI package using msiexec, use the following command:
```cmd
msiexec /a "C:\path\to\package.msi" /qb TARGETDIR="C:\path\to\target\folder"
```

### How can I set a property when installing an MSI package using msiexec?
To set a property when installing an MSI package using msiexec, use the following command:
```cmd
msiexec /i "C:\path\to\package.msi" PROPERTY=PropertyValue
```

### How can I log the installation process with msiexec?
To log the installation process with msiexec, use the following command:
```cmd
msiexec /i "C:\path\to\package.msi" /l*v "C:\path\to\logfile.log"
```

### How do I suppress the reboot prompt during an MSI package installation using msiexec?
To suppress the reboot prompt during an MSI package installation using msiexec, use the following command:
```cmd
msiexec /i "C:\path\to\package.msi" REBOOT=ReallySuppress
```

## Applications of the MSIEXEC Command

- Installing or uninstalling Windows Installer packages
- Repairing installations
- Applying patches
- Administrative installations
- Configuring Windows Installer settings
- Logging installation activities
- Unattended installations