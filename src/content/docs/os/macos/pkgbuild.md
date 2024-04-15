---
title: pkgbuild command in MacOS
description: Learn how to use the pkgbuild command in MacOS to create package installer files for your applications effortlessly.
---

The MacOS pkgbuild command is a powerful tool that allows users to create package installer files for their applications. With pkgbuild, you can easily bundle your software into a convenient installer package that streamlines the installation process for end-users. This command provides various options for customizing the package, including specifying the payload contents, scripts to run before and after installation, and metadata information. By mastering the pkgbuild command, you can simplify the deployment of your software on MacOS systems and ensure a smooth user experience.
## pkgbuild Syntax:
```bash
pkgbuild --root rootpath --identifier com.example.package --version 1.0 output.pkg
```

## MacOS pkgbuild Options:
| Option                  | Description                               |
|-------------------------|-------------------------------------------|
| --nopayload            | Create a package without payload files.  |
| --install-location path| Specifies the install location.           |
| --version version      | Version number of the package.           |
| --root rootpath        | Path to the root of the package.         |
| --scripts scriptsdirectory | Directory containing pre-install and post-install scripts.  |
| --identifier packageid | Package identifier.                      |

## pkgbuild Parameters:
| Parameter    | Description                        |
|--------------|------------------------------------|
| destination  | Path where the package is created. |
| packageid    | Package identifier.                |
| packageversion | Version number of the package.     | 

:::caution
Exercise caution when using the pkgbuild command. Incorrect usage of options or parameters can lead to unexpected results. Ensure to carefully specify the root path, package identifier, version, and other necessary details.
:::
## How to use pkgbuild command:

### Create a package with payload directory
```bash
pkgbuild --root /path/to/payload --identifier com.example.package --version 1.0 /path/to/output.pkg
```
Creates a package using the payload directory specified with the root option and sets the identifier and version.

### Create a package with scripts
```bash
pkgbuild --root /path/to/payload --scripts /path/to/scripts --identifier com.example.package --version 1.0 /path/to/output.pkg
```
Creates a package with scripts located in a separate directory using the scripts option.

### Include entitlements in a package
```bash
pkgbuild --root /path/to/payload --identifier com.example.package --version 1.0 --sign "Developer ID Installer: Company Name" --entitlements /path/to/entitlements.plist /path/to/output.pkg
```
Creates a package with entitlements by specifying the entitlements file with the entitlements option.

### Use a custom distribution file
```bash
pkgbuild --root /path/to/payload --identifier com.example.package --version 1.0 --sign "Developer ID Installer: Company Name" --component-plist /path/to/component.plist --distribution /path/to/custom_distribution.dist /path/to/output.pkg
```
Creates a package using a custom distribution file specified with the distribution option.

### Set ownership and permissions
```bash
pkgbuild --root /path/to/payload --identifier com.example.package --version 1.0 --sign "Developer ID Installer: Company Name" --ownership preserve --mode preserve /path/to/output.pkg
```
Creates a package while preserving ownership and permissions of the files in the payload directory.

### Create a payload-free package
```bash
pkgbuild --identifier com.example.package --version 1.0 --scripts /path/to/scripts /path/to/output.pkg
```
Creates a package without a payload by omitting the root option and specifying scripts with the scripts option.

### Add resources using a distribution file
```bash
pkgbuild --identifier com.example.package --version 1.0 --sign "Developer ID Installer: Company Name" --distribution /path/to/custom_distribution.dist /path/to/output.pkg
```
Creates a package by defining the necessary components and resources in a custom distribution file.

### Sign a package with a Developer ID certificate
```bash
pkgbuild --root /path/to/payload --identifier com.example.package --version 1.0 --sign "Developer ID Installer: Company Name" /path/to/output.pkg
```
Creates a package and signs it with a Developer ID certificate specified with the sign option.
:::tip
When using the pkgbuild command in MacOS, make sure to carefully review the available options and parameters to ensure you are creating packages correctly. Testing your packages on different MacOS versions, as well as using tools like `productbuild` to create distribution packages, can help streamline the process. 
:::

### How do I use pkgbuild in MacOS?
To use the pkgbuild command in MacOS, execute the following command:
```bash
pkgbuild --root /path/to/files --identifier com.example.package --version 1.0 /path/to/output/package.pkg
```

### What is the purpose of the `--root` option in pkgbuild?
The `--root` option in pkgbuild is used to specify the root directory of the files to be included in the package. This option is essential for defining the source files for the package creation process.
```bash
pkgbuild --root /path/to/files ...
```

### How can I assign an identifier to a package using pkgbuild?
To assign an identifier to a package in pkgbuild, use the `--identifier` option followed by the desired identifier value. This identifier is typically in reverse DNS format to ensure uniqueness.
```bash
pkgbuild --identifier com.example.package ...
```

### What role does the `--version` option play in the pkgbuild command?
The `--version` option in pkgbuild sets the version number of the package being created. This version number is important for tracking and managing different versions of the package.
```bash
pkgbuild --version 1.0 ...
```

### How can I specify the output path for the package generated by pkgbuild?
To specify the output path for the package created by pkgbuild, provide the desired path at the end of the command after defining all the necessary options.
```bash
pkgbuild --root /path/to/files --identifier com.example.package --version 1.0 /path/to/output/package.pkg
```

### Can pkgbuild be used to customize package installation scripts?
Yes, pkgbuild supports customization of package installation scripts using the `--scripts` option, allowing you to define pre-installation and post-installation scripts.
```bash
pkgbuild --scripts /path/to/scripts ...
```

### How do I create a flat package using pkgbuild?
To create a flat package (single bundle format) with pkgbuild, use the `--component-plist` option and provide the path to a component property list file containing information about the payload.
```bash
pkgbuild --component-plist /path/to/component.plist ...
```

### Is it possible to include a license agreement in a package created with pkgbuild?
Yes, you can include a license agreement in a package created with pkgbuild by using the `--license` option followed by the path to the license file.
```bash
pkgbuild --license /path/to/license.txt ...
```

## Applications of the pkgbuild command

- Create macOS installer packages from components or directories
- Customize package attributes such as identifier, version, and installation location
- Include scripts for pre-installation and post-installation tasks
- Define package requirements and recommendations
- Create distribution packages containing multiple packages
- Sign packages with a developer or distribution certificate