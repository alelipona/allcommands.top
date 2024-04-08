---
title: MacOS drutil command
description: Learn how to use the drutil command on MacOS to manipulate optical discs and devices efficiently.
---

The MacOS drutil command is a powerful tool that allows users to manipulate optical discs and devices efficiently. With drutil, users can perform various tasks such as ejecting discs, burning CDs or DVDs, checking disc information, and more. This command-line tool provides a simple and effective way to manage optical media on MacOS systems. It is versatile and easy to use, making it a valuable tool for anyone working with optical discs on a Mac computer.

## drutil Syntax:
```bash
drutil [command] [options] [parameters]
```
## Options:
| Option              | Description                            |
|---------------------|----------------------------------------|
| -drive [drive]      | Specify the drive to operate on        |
| -driveOffset [num]  | Set drive offset value                 |
| -lock [locktype]    | Set the locking type                   |
| -tray [action]      | Control media tray (open, close)       |
| -dfilter [action]   | Control device filter                  |
| -nogaps             | Disable gaps in CD track audio files   |

## Parameters:
| Parameter | Description                       |
|-----------|-----------------------------------|
| command   | The command to execute            |
| options   | Additional options for the command|
| parameters| Parameters required for the command|

:::caution
Exercise caution when using the drutil command, as it directly interacts with optical drives on MacOS and incorrect usage can lead to unintended actions or damage to the drive.
:::
## drutil Usage:
### Burn a Disc
```bash
drutil burn /dev/disk1 -noVerify
```
Burns a disc using the MacOS drutil command without verification.

### Eject the CD/DVD Drive
```bash
drutil eject
```
Ejects the CD/DVD drive using the MacOS drutil command.

### Display Disc Information
```bash
drutil info
```
Displays information about the inserted disc using the MacOS drutil command.

### Erase a Rewritable Disc
```bash
drutil erase -drive /dev/disk1 -nofs
```
Erases a rewritable disc without creating a filesystem using the MacOS drutil command.
:::tip
When using the drutil command in MacOS, ensure you have the necessary permissions to execute the desired actions, especially when working with disc drives or other hardware components. Always refer to the official documentation or man pages for detailed information on each option and command usage.
:::

### How do I use drutil in MacOS?
To use the drutil command in MacOS, execute the following command:
```bash
drutil status
```

### What is the purpose of the drutil status command in MacOS?
The drutil status command in MacOS is used to display the current status of the optical disc drive. It provides information such as the type of disc in the drive, drive capabilities, and more.
```bash
drutil status
```

### How can I eject a disc using drutil in MacOS?
To eject a disc using drutil in MacOS, run the following command:
```bash
drutil eject
```

### How do I check the contents of a disc using drutil in MacOS?
To check the contents of a disc using drutil in MacOS, use the following command:
```bash
drutil discInfo
```

### How can I burn a disc image using drutil in MacOS?
To burn a disc image using drutil in MacOS, you can use the burn command along with the path to the disc image file. Here's an example:
```bash
drutil burn /path/to/disc-image.iso
```

### What is the purpose of the drutil tray command in MacOS?
The drutil tray command in MacOS is used to open or close the optical disc drive tray. You can execute it as follows:
```bash
drutil tray open
```

### How do I erase a rewritable disc using drutil in MacOS?
To erase a rewritable disc using drutil in MacOS, you can utilize the erase option with the appropriate device identifier. Here is an example command:
```bash
drutil erase /dev/disk2
```

## Applications of the drutil command

- Burn CDs or DVDs
- Erase rewritable discs
- Check disc information
- Eject discs
- Control disc drive settings