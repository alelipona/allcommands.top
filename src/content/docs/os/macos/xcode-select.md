---
title: xcode-select command in MacOS
description: Find out how to use xcode-select command in MacOS for managing command line tools and switching between different versions of Xcode.
---

The xcode-select command in MacOS is a useful tool for managing command line tools and switching between different versions of Xcode. By using xcode-select, users can easily switch between different Xcode installations, set the active developer directory, and install additional components. This command is especially handy for developers who work with multiple versions of Xcode or need to switch between different versions for compatibility or testing purposes.
## xcode-select Syntax:
```bash
xcode-select [option] [parameter]
```

## MacOS xcode-select Options:
| Option | Description                  |
|--------|------------------------------|
| --install-select | Install the selected version of Xcode. |
| --switch | Switch the active developer directory to the specified directory. |
| --print-path | Print the path of the selected Xcode developer directory. |
| --version | Print the installed Xcode version. |
| --reset | Reset to the default Xcode path.  |

## xcode-select Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
| path      | The path to the Xcode developer directory.  |

:::caution
Be cautious when using the xcode-select command as it can impact the Xcode version and developer directory settings on your MacOS system. Make sure to understand the options and parameters before executing this command.
:::
## How to use xcode-select command:
### Print the active developer directory
```bash
xcode-select --print-path
```
Displays the current active developer directory.

### Switch to a different developer directory
```bash
sudo xcode-select -switch /Applications/Xcode-beta.app
```
Changes the active developer directory to the one specified.

### Reset the developer directory to the default
```bash
sudo xcode-select --reset
```
Resets the active developer directory to the default location.

### Verify the active developer directory
```bash
xcode-select --version
```
Shows the active developer directory version.

### Print the complete path of the active developer directory
```bash
xcode-select --print-default-path
```
Displays the complete path to the active developer directory.

### Check if the Xcode command line tools are installed
```bash
xcode-select -p
```
Verifies if the Xcode command line tools are installed.

### List available developer directories
```bash
xcode-select -s
```
Lists all the available developer directories.

### Help command for xcode-select
```bash
xcode-select -h
```
Shows the help documentation for the xcode-select command.
:::tip
Remember to run `xcode-select --install` to install the necessary Xcode command line tools if you encounter any issues.
:::

### How do I set the path for xcode-select in MacOS using a command line interface?
To set the path for xcode-select in MacOS using a command line interface, execute the following command:
```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

### How do I reset xcode-select to its default location in MacOS?
To reset xcode-select to its default location in MacOS, execute the following command:
```bash
sudo xcode-select --reset
```

### How do I update xcode-select in MacOS to the latest version of Xcode?
To update xcode-select in MacOS to the latest version of Xcode, execute the following command:
```bash
xcode-select --install
```

### How can I check the version of xcode-select installed on my MacOS system?
To check the version of xcode-select installed on your MacOS system, execute the following command:
```bash
xcode-select --version
```

### How do I change the developer directory path with xcode-select in MacOS?
To change the developer directory path with xcode-select in MacOS, execute the following command:
```bash
sudo xcode-select --switch /path/to/new/developer/directory
```

### How do I list the available paths that xcode-select can switch to in MacOS?
To list the available paths that xcode-select can switch to in MacOS, execute the following command:
```bash
xcode-select --list
```

### How do I uninstall xcode-select from MacOS using a terminal command?
To uninstall xcode-select from MacOS using a terminal command, execute the following command:
```bash
sudo rm -rf /Library/Developer/CommandLineTools
```

### How do I change the SDK path setting using xcode-select in MacOS?
To change the SDK path setting using xcode-select in MacOS, execute the following command:
```bash
sudo xcode-select -s /path/to/new/SDK
```

## Applications of the xcode-select command

- Switching between different versions of Xcode
- Specifying which version of Xcode to use for command line tools