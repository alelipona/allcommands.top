---
title: pkgutil MacOS command
description: macOS pkgutil command is vital for managing installer packages on your system. Discover how to use pkgutil effectively and efficiently.
---

macOS pkgutil command enables users to manage installer packages on their system seamlessly. With this command-line utility, users can easily query package receipts, verify package files, install and forget packages. The pkgutil command is valuable for troubleshooting package installation issues and managing software installations on macOS systems. By leveraging pkgutil, users can efficiently manage packages, ensuring a smooth and streamlined software installation process. Whether you need to list installed packages, extract payload contents, or remove packages, macOS pkgutil command offers a comprehensive set of functionalities. familiarizing yourself with pkgutil empowers users to effectively manage software packages on their macOS device.

## pkgutil Syntax:
```bash
pkgutil [command] [options] [parameters]
```

## Options:
| Option | Description |
|--------|-------------|
| --expand-full | Expand all flat packages |
| --expand | Expand a flat package |
| --forget | Forget a receipt |
| --forget-all | Forget all receipts |
| --forget-from | Forget receipts by package-id |
| --get-info | Display information about a receipt |
| --help | Display usage information |
| --dump-plist | Display the contents of a flat package as a property list |
| --check-signature | Check the package's digital signature |

## Parameters:
| Parameter | Description |
|-----------|-------------|
| [command] | The action to perform (e.g., expand, forget, get-info) |
| [options] | Additional options for the command |
| [parameters] | Specific parameters required for the command |

:::caution
Exercise caution when using the pkgutil command as it deals with package management on MacOS. Misuse of this command can lead to unintended consequences like incorrect package installation or removal.
:::
## pkgutil bash Examples:
### List all installed packages
```bash
pkgutil --pkgs
```
Display a list of all installed packages on the system.

### Display package information
```bash
pkgutil --pkg-info com.example.package
```
Show detailed information about a specific package with the identifier "com.example.package".

### List files in a package
```bash
pkgutil --files com.example.package
```
List all files installed by the package identified as "com.example.package".

### Expand package contents
```bash
pkgutil --expand /path/to/package.pkg /destination/folder
```
Expand the contents of a package file located at /path/to/package.pkg to the destination folder.

### Verify package receipt
```bash
pkgutil --check-receipt /path/to/package.pkg
```
Verify the receipt of a package file located at /path/to/package.pkg to ensure it is correctly installed.

### Search for a package
```bash
pkgutil --pkg-info=com.example | grep -i version
```
Search for a specific package by filtering the output of pkgutil using grep to find version information.
:::tip
When using the pkgutil command in MacOS, make sure to read the manual pages or help section for detailed options and usage instructions.
:::

### How do I list all installed packages with pkgutil in MacOS?
To list all installed packages using pkgutil command in MacOS, run the following command:
```bash
pkgutil --pkgs
```

### How do I display information about a specific package using pkgutil in MacOS?
To display information about a specific package with pkgutil in MacOS, use the following command:
```bash
pkgutil --pkg-info com.example.package
```

### How do I extract files from a package using pkgutil in MacOS?
To extract files from a package using pkgutil in MacOS, execute the command below:
```bash
pkgutil --files com.example.package
```

### How do I remove a package using pkgutil in MacOS?
To remove a package with pkgutil in MacOS, use the command:
```bash
sudo pkgutil --forget com.example.package
```

### How can I analyze a package file before installing it using pkgutil in MacOS?
To analyze a package file before installation with pkgutil in MacOS, use the following command:
```bash
pkgutil --analyze /path/to/package.pkg
```

### How do I search for packages containing a specific keyword with pkgutil in MacOS?
You can search for packages containing a specific keyword with pkgutil in MacOS using the command:
```bash
pkgutil --pkgs=com.keyword.
```

### How do I query the volume where a package is installed using pkgutil in MacOS?
To query the volume where a package is installed with pkgutil in MacOS, run the command:
```bash
pkgutil --volume com.example.package
```

### How can I check for optimal usage of the disk space with pkgutil in MacOS?
To check for optimal usage of disk space with pkgutil in MacOS, you can run the following command:
```bash
pkgutil --check-space package.pkg
```
## Applications of the pkgutil command

- List installed packages:
  ```
  pkgutil --pkgs
  ```

- List files installed by a package:
  ```
  pkgutil --files packageID
  ```

- Get information about a package:
  ```
  pkgutil --pkg-info packageID
  ```

- Verify package receipts:
  ```
  pkgutil --check-receipt packageID
  ```

- Expand package files:
  ```
  pkgutil --expand package.pkg output_directory
  ```