---
title: installer command in MacOS
description: Use the MacOS installer command to install, update, and manage packages efficiently. Learn about flags, options, and best practices.
---

The installer command in MacOS is a powerful tool used to install, update, and manage packages on your system. It provides a way to easily add and remove software, as well as handle package dependencies. By using various flags and options, you can customize the installation process to suit your needs. The installer command is a versatile tool that can streamline package management tasks on your MacOS system.
## installer Syntax:
```bash
installer -pkg package_path -target target_volume
```

## MacOS installer Options:
| Option | Description                  |
|--------|------------------------------|
| -pkg   | Specify the path to the package to be installed. |
| -target| Specify the target volume on which to install the package. |

## installer Parameters:
| Parameter     | Description                              |
|---------------|------------------------------------------|
| package_path  | Path to the package file to be installed.|
| target_volume  | The volume on which to install the package.| 

:::caution
Exercise caution when using the installer command, as it directly installs packages onto the target volume. Make sure the package_path and target_volume parameters are correct to prevent unintended consequences.
:::
## How to use installer command:
### Install a package
```bash
installer -pkg /path/to/package.pkg -target /
```
Installs a package onto the root volume of the target system.

### Verify a package
```bash
installer -pkg /path/to/package.pkg -target / -verify
```
Verifies the contents of a package installed on the root volume of the target system.

### List installed packages
```bash
installer -list
```
Lists all packages installed on the system.

### Show installation details
```bash
installer -showChoiceChangesXML
```
Displays the XML-formatted installation details for the current installation session.

### Install a signed package
```bash
installer -pkg /path/to/package.pkg -target / -allowUntrusted -applyChoiceChangesXML /path/to/choice_changes.xml
```
Installs a signed package, allowing untrusted packages, and applies choice changes specified in a XML file. 

### Specify install location
```bash
installer -pkg /path/to/package.pkg -target /path/to/target_directory/
```
Installs a package into a specified target directory.

### Set desired target
```bash
installer -pkg /path/to/package.pkg -target /Volumes/External
```
Specifies the target volume where the package should be installed.

### Install multiple packages
```bash
installer -pkg /path/to/package1.pkg -pkg /path/to/package2.pkg -target /
```
Installs multiple packages onto the root volume of the target system.
:::tip
When using the installer command in MacOS, make sure to have the necessary permissions to install or uninstall packages. Additionally, always double-check the options and values you provide to the installer command to avoid unintended consequences.
:::

### How do I use installer in MacOS?
To use the installer command in MacOS, execute the following command:
```bash
installer --pkg <package_path> --target /
```

### How do I uninstall a package using installer in MacOS?
To uninstall a package using the installer command in MacOS, use the following command:
```bash
sudo installer -pkg <package_path> -target /
```

### What option can I use to display verbose output with installer in MacOS?
To display verbose output when using the installer command in MacOS, you can use the `-verbose` option. Here's an example:
```bash
installer -pkg <package_path> -target / -verbose
```

### How can I list the contents of a package without installing it using installer in MacOS?
To list the contents of a package without installing it with the installer command in MacOS, you can use the `-query` option. Here's an example:
```bash
installer -pkg <package_path> -query
```

### How do I install a package quietly with installer in MacOS?
To install a package quietly (without displaying progress) using the installer command in MacOS, you can use the `-pkg` and `-target` options. Here's an example:
```bash
installer -pkg <package_path> -target / -quiet
```

### How can I check the version of a package using installer in MacOS?
To check the version of a package using the installer command in MacOS, you can use the `-pkg` and `-pkg-info` options. Here's an example:
```bash
installer -pkg <package_path> -pkg-info
```

### How do I install a package on a specific volume using installer in MacOS?
To install a package on a specific volume using the installer command in MacOS, you can specify the target volume with the `-target` option. Here's an example:
```bash
installer -pkg <package_path> -target /Volumes/<volume_name>
```

### How can I install a package without prompting for confirmation with installer in MacOS?
To install a package without prompting for confirmation using the installer command in MacOS, you can use the `-pkg` and `-target` options along with the `-allowUntrusted` option. Here's an example:
```bash
installer -pkg <package_path> -target / -allowUntrusted
```

### How do I force a package installation using installer in MacOS?
To force a package installation using the installer command in MacOS, you can use the `-pkg` and `-target` options along with the `-allowUntrusted` and `-allow-downgrades` options. Here's an example:
```bash
installer -pkg <package_path> -target / -allowUntrusted -allow-downgrades
```

## Applications of the installer command

- Install packages or components
- List installed packages
- Remove installed packages
- Verify package installations
- Restore system packages to default configuration
- Extract package contents