---
title: sw_vers MacOS command
description: Check the version of macOS running on your system using the sw_vers command.
---

The **sw_vers** command in macOS is a useful tool for retrieving various information about the operating system, such as the macOS version, build version, and more. By simply running **sw_vers** in the Terminal, users can easily access details about the macOS version installed on their system. This command can be particularly handy for troubleshooting purposes or determining compatibility with certain software or hardware requirements. By providing a quick and straightforward way to obtain essential system information, the **sw_vers** command serves as a valuable resource for macOS users looking to gain insights into their operating system configuration.

## sw_vers Syntax:
```bash
sw_vers [option]
```
## Options:
| Option | Description                           |
|--------|---------------------------------------|
| -productName  | Display the product name                   |
| -productVersion | Display the product version             |
| -buildVersion   | Display the build version              |

## Parameters:
| Parameter | Description                          |
|-----------|--------------------------------------|
| None      | No additional parameters. Just use the command with the desired option. |

:::caution
Exercise caution when using the `sw_vers` command, as it provides system information that might be sensitive.
:::
## sw_vers bash Examples:
### Display macOS Version Information
```bash
sw_vers
```
Displays basic version information about the macOS operating system.

### Display macOS Product Name
```bash
sw_vers -productName
```
Displays the product name of the installed macOS.

### Display macOS Build Version
```bash
sw_vers -buildVersion
```
Displays the build version of the macOS.

### Display macOS Product Version
```bash
sw_vers -productVersion
```
Displays the product version of the macOS.

### Display macOS Product Build Version
```bash
sw_vers -productBuildVersion
```
Displays the product build version of the macOS.

### Display macOS OS Version and Build
```bash
sw_vers -productVersion -buildVersion
```
Displays both the OS version and build version of the macOS.
:::tip
When using the `sw_vers` command in MacOS, make sure to refer to the official documentation or help center for detailed information on the available options and flags.
:::

### How do I use sw_vers in MacOS?
To use the sw_vers command in MacOS, execute the following command:
```bash
sw_vers
```

### What is the purpose of sw_vers in MacOS?
The sw_vers command in MacOS is used to get the operating system version and build information.
```bash
sw_vers -productVersion
```

### How can I display the MacOS build version with sw_vers?
To display the specific build version of MacOS using sw_vers, run the following command:
```bash
sw_vers -buildVersion
```

### How do I check the MacOS codename with sw_vers?
To check the codename of the MacOS version using sw_vers, use the following command:
```bash
sw_vers -productName
```

### How do I get a list of all available options for sw_vers in MacOS?
To display a list of available options and their descriptions for the sw_vers command in MacOS, you can use the following command:
```bash
man sw_vers
```

### How can I obtain the Mac OS X operating system product name with sw_vers?
To retrieve the product name of the Mac OS X operating system using sw_vers, execute the following command:
```bash
sw_vers -productName
```

### How do I find the Mac OS X operating system version number with sw_vers?
To find the version number of the Mac OS X operating system using sw_vers, run the following command:
```bash
sw_vers -productVersion
```

### How can I see the complete operating system information using sw_vers in MacOS?
To view all the information about the operating system, including version, build, and codename, you can use the following command with sw_vers:
```bash
sw_vers -productVersion -buildVersion -productName
```
## Applications of the sw_vers command

- Checking the operating system version and build number
- Verifying the macOS version for compatibility with certain software or updates.