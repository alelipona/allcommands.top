---
title: What is PKGMGR Windows command?
description: PKGMGR is a Windows command-line tool for managing software packages. It allows users to install, uninstall, and update packages efficiently.
---

PKGMGR is a Windows command-line tool used for managing software packages on the system. It enables users to install, uninstall, and update packages easily.

## PKGMGR Syntax:
```cmd
pkgmgr [options] [parameters]
```

## PKGMGR Options:
| Option | Description                        |
|--------|------------------------------------|
| -iu    | Install updates                    |
| -iu:ID | Install specific update by ID      |
| -up    | Display list of available updates  |

:::caution
Exercise caution when using the pkgmgr command as it may impact the system if used incorrectly.
:::

## Parameters:
| Parameter     | Description                           |
|---------------|---------------------------------------|
| package_name  | Name of the package to install/update |
| ID            | Specific ID of the update to install  |
## PKGMGR Command Usage Examples:
### Install a Package Using PKGMGR
```cmd
pkgmgr /iu:"PackageName"
```
Installs a package named "PackageName" using the pkgmgr command.

### Remove a Package Using PKGMGR
```cmd
pkgmgr /up:"PackageName"
```
Uninstalls a package named "PackageName" by using the pkgmgr command.

### List Installed Packages Using PKGMGR
```cmd
pkgmgr /l
```
Displays a list of all installed packages on the system using the pkgmgr command.

### Add a Package Source Using PKGMGR
```cmd
pkgmgr /lc:"PackageSourcePath"
```
Adds a new package source from the directory specified by "PackageSourcePath" with the pkgmgr command.

### Update All Packages Using PKGMGR
```cmd
pkgmgr /up
```
Updates all installed packages on the system with the latest available versions using the pkgmgr command.
:::tip
When using the pkgmgr command in Windows, it's important to ensure proper syntax and options to avoid errors. Additionally, always run CMD as an administrator when executing pkgmgr commands to prevent permission issues.
:::

### How do I use pkgmgr in Windows?
To use the pkgmgr command in CMD, execute the following command:
```cmd
pkgmgr /iu:<package_name>
```

### What is the purpose of the pkgmgr command in Windows?
The pkgmgr command is used to install, uninstall, update, and maintain Windows features and packages.

### How can I list all installed packages using pkgmgr?
To list all installed packages in Windows using pkgmgr, run the following command:
```cmd
pkgmgr /l
```

### Can I install multiple packages at once with pkgmgr?
Yes, you can install multiple packages at once with pkgmgr by specifying each package separated by a comma. For example:
```cmd
pkgmgr /iu:<package1>,<package2>
```

### How do I uninstall a package using pkgmgr?
To uninstall a package in Windows with pkgmgr, use the following command:
```cmd
pkgmgr /up:<package_name>
```

### Is it possible to update all packages at once with pkgmgr?
Yes, you can update all packages at once in Windows using pkgmgr by running:
```cmd
pkgmgr /iu /ip /m:<path_to_manifest>
```

### What is the difference between pkgmgr and dism command in Windows?
PKGMGR is used for managing Windows packages and features, while DISM (Deployment Image Servicing and Management) is more focused on servicing and preparing Windows images.

## Applications of the PKGMGR Command

- ` /l` or ` /List`: Lists all installed packages.
- ` /s` or ` /Show`: Shows detailed information for a specific package.
- ` /in` or ` /Install`: Installs a package.
- ` /up` or ` /Update`: Updates a package.
- ` /upall` or ` /UpdateAll`: Updates all installed packages.
- ` /up2date` or ` /UpToDate`: Checks if a package is up to date.