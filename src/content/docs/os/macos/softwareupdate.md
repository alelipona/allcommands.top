---
title: softwareupdate MacOS Command Guide
description: Upgrade your MacOS system with the softwareupdate command. Easily install software updates from the command line.
---

The softwareupdate command on MacOS allows users to check for and install system updates directly from the terminal. By running this command, users can efficiently keep their MacOS system up to date with the latest software patches and security fixes released by Apple. This command simplifies the update process for users who prefer to manage their system updates through the terminal rather than the graphical user interface. Additionally, the softwareupdate command can be automated using scripts, making it a convenient tool for system administrators and power users.

## softwareupdate Syntax:
```bash
softwareupdate [options] [parameters]
```

## Options:
| Option            | Description                                     |
|-------------------|-------------------------------------------------|
| -l, --list        | List all available updates                      |
| -d, --download    | Download available updates                       |
| -i, --install     | Install downloaded updates                      |
| -a, --all         | Install all updates (including recommended)     |
| -r, --recommended | Install only recommended updates                 |
| -v, --verbose     | Enable verbose output                            |
| -h, --help        | Display help information                         |

## Parameters:
| Parameter         | Description                                     |
|-------------------|-------------------------------------------------|
| <update>          | Specify a specific update to download or install|

:::caution
Take caution when using the softwareupdate command as it can potentially alter the system by downloading and installing updates. Make sure to review the updates before proceeding to avoid any unwanted changes to the system.
:::
## softwareupdate Command Samples:
### Check for Available Updates
```bash
softwareupdate -l
```
List all available updates for the macOS system.

### Install Available Updates
```bash
sudo softwareupdate -i -a
```
Install all available updates for the macOS system.

### Install a Specific Update
```bash
sudo softwareupdate -i "Safari13.1.2-13.1.3"
```
Install a specific update, in this case, the Safari update from version 13.1.2 to 13.1.3.

### Download Available Updates Only
```bash
softwareupdate -d -a
```
Download all available updates without installing them on the macOS system.

### Ignore a Specific Update
```bash
sudo softwareupdate --ignore "macOS Big Sur"
```
Ignore a specific update, in this case, the macOS Big Sur update.

### Reset Ignored Updates
```bash
sudo softwareupdate --reset-ignored
```
Reset the list of updates that have been ignored, allowing them to appear in future update checks.

### Show Installed Updates
```bash
softwareupdate --history
```
Display a list of updates that have been installed on the macOS system.
:::tip
Remember to run the softwareupdate command with appropriate permissions, such as using sudo if needed, to ensure that updates are applied correctly.
:::

## softwareupdate FAQ:
### How do I list available updates with softwareupdate in MacOS?
To list available updates using the softwareupdate command in MacOS, use the following command:
```bash
softwareupdate -l
```

### How do I install updates with softwareupdate in MacOS?
To install updates using the softwareupdate command in MacOS, run the following command:
```bash
softwareupdate -ia
```

### How do I ignore a specific update with softwareupdate in MacOS?
To ignore a specific update using the softwareupdate command in MacOS, use the command with the --ignore option followed by the update identifier:
```bash
softwareupdate --ignore "macOS Big Sur"
```

### Can I check for updates and download them without installing using softwareupdate in MacOS?
To check for updates and download them without installing via the softwareupdate command in MacOS, use the following command:
```bash
softwareupdate -d -a
```

### How do I show the download progress of updates with softwareupdate in MacOS?
To display the download progress of updates using the softwareupdate command in MacOS, execute the following command:
```bash
softwareupdate --download
```

### How do I reset ignored updates with softwareupdate in MacOS?
To reset ignored updates using the softwareupdate command in MacOS, run the following command:
```bash
softwareupdate --reset-ignored
```

## Applications of the softwareupdate command

- Checking for available updates
- Installing available updates
- Listing all available updates
- Downloading updates without installing them
- Ignoring specific updates
- Enabling or disabling automatic update checks