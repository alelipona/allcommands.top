---
title: Windows VOL command
description: Learn how to use the Windows vol command to display a disk label and serial number quickly and efficiently.
---

The Windows vol command is a handy tool for displaying the disk label and serial number of a specified drive. It can be useful for identifying drives and managing storage devices on your system. With just a simple command, you can retrieve essential information about your disks without the need for third-party software. This command is easy to use and can be particularly helpful for system administrators and users who need to access disk information quickly.

## VOL Syntax:
```cmd
vol [options] [parameters]
```
## Options:
| Option | Description                   |
|--------|-------------------------------|
| -f     | Specify the image file        |
| -v     | Display version information    |
| -h     | Display a help message         |
| -o     | Specific profile to use       |
| -f     | Use fast recovery             |
| -q     | Quiet mode, do not show banner|

## Parameters:
| Parameter | Description                       |
|-----------|-----------------------------------|
| -                | The physical offset to start scanning from    |
| -`annotation`    | Adds a comment to the timeline entry        |
| -`g`            | Treat blank IE as useful for identification    |
| -`m`            | Ignore volume boundaries when identifying true slack|
| -`t`            | Display tasks scheduled for future times     |
| -`y`            | Use MLS normalization and output precise dates and times|

:::caution
Exercise caution when using the vol command as it directly interacts with system files and processes. Improper use may lead to system instability or data loss.
:::
## VOL Usage:
### Display Volume Information
```cmd
vol C:
```
Displays information about the volume of the C: drive.

### Change Volume Label
```cmd
vol D: NewLabel
```
Changes the volume label of the D: drive to "NewLabel".

### List all Volumes
```cmd
vol
```
Lists all volumes along with their labels and serial numbers.

### Redirect Volume Information to a File
```cmd
vol > volume_info.txt
```
Redirects the volume information to a file named "volume_info.txt".

:::tip
When using the `vol` command in Windows CMD, make sure to provide the correct options and values as required. Double-check the syntax to avoid any errors in your commands.
:::

### How do I use vol in Windows?
To use the `vol` command in Windows, execute the following command:
```cmd
vol C:
```

### What is the purpose of the vol command in Windows?
The `vol` command in Windows is used to display the disk volume label and the serial number.

### How can I list all available drives using the vol command?
To list all available drives using the `vol` command, you can run the following command:
```cmd
vol
```

### How can I display detailed information about a specific drive using the vol command?
To display detailed information about a specific drive using the `vol` command, you can specify the drive letter as follows:
```cmd
vol D:
```

### How do I check the volume serial number of a drive with the vol command?
To check the volume serial number of a drive using the `vol` command, you can run the following command:
```cmd
vol C: /v
```

### Can I use the vol command to change the volume label of a drive?
No, the `vol` command in Windows is used to display information about a volume and cannot be used to change the volume label.

### How do I display only the volume label of a specific drive with the vol command?
To display only the volume label of a specific drive using the `vol` command, you can execute the following command:
```cmd
vol E: /l
```

## Applications of the VOL Command

1. Display the volume label and serial number of a disk volume.