---
title: UNFORMAT command in Windows
description: Easily recover formatted data with the Windows unformat command
---

The Windows unformat command is a powerful tool that allows users to recover data from a formatted disk. This command can help you restore accidentally deleted files and folders, giving you a second chance to retrieve important data. By utilizing the unformat command, you can quickly and effectively recover lost information without the need for expensive third-party software. This feature is particularly useful in situations where data loss occurs due to human error or system malfunctions.

## UNFORMAT Syntax:
```cmd
unformat [drive:][/test] [/P] [/Q] [/RESET][/PROGRESS]
```

## Windows UNFORMAT Options:
| Option  | Description                           |
|---------|---------------------------------------|
| /test   | Checks the disk for disk errors.      |
| /P      | Enables PowerShell compatibility.      |
| /Q      | Fast/Super-quick format.              |
| /RESET  | Resets the formatting process.        |
| /PROGRESS | Displays the progress of the formatting process. |

## UNFORMAT Parameters:
| Parameter  | Description                      |
|------------|----------------------------------|
| drive:     | Specifies the drive letter.      |
| test       | Initiates a test for disk errors. | 

:::caution
Caution: The UNFORMAT command will erase all data on the specified drive. Make sure to backup your data before running this command.
:::
## How to use UNFORMAT command:

### Unformat a drive
```cmd
unformat F:
```
Unformats the specified drive (in this case, drive F:).

### Unformat a drive without confirmation
```cmd
unformat C: /P
```
Unformats the specified drive (in this case, drive C:) without asking for confirmation.

### Unformat a drive and display detailed information
```cmd
unformat E: /V
```
Unformats the specified drive (in this case, drive E:) and displays detailed information during the process.

### Unformat a drive and specify the cluster size
```cmd
unformat D: /A:4096
```
Unformats the specified drive (in this case, drive D:) and sets the cluster size to 4096 bytes.

### Unformat a drive and specify the file system type
```cmd
unformat G: /FS:FAT32
```
Unformats the specified drive (in this case, drive G:) and formats it with the FAT32 file system.

### Unformat a drive with a label
```cmd
unformat H: /L:DATA
```
Unformats the specified drive (in this case, drive H:) and assigns the label "DATA".

### Unformat a drive and perform a quick format
```cmd
unformat I: /Q
```
Unformats the specified drive (in this case, drive I:) and performs a quick format.

### Unformat a drive and specify the volume serial number
```cmd
unformat J: /V:12345678
```
Unformats the specified drive (in this case, drive J:) and sets the volume serial number to 12345678.
:::tip
When using the unformat command in Windows CMD, make sure to carefully follow the syntax and provide the required options to avoid potential data loss or irreversible changes to your storage devices.
:::

### How do I use unformat in Windows?
To use the unformat command in Windows, execute the following command:
```cmd
unformat --option <value>
```

### How can I recover formatted data using unformat in CMD?
To recover formatted data using unformat in CMD, you can use the following command:
```cmd
unformat --recover <drive_letter>
```

### What is the purpose of the unformat command?
The unformat command in Windows CMD is used to restore a formatted disk back to its previous state, recovering lost data in the process.

### Can unformat undo accidental formatting on a drive?
Yes, the unformat command can help undo accidental formatting on a drive by recovering lost data. 

### How do I specify the file system type when using unformat in Windows?
When using the unformat command in Windows, you can specify the file system type with the following command:
```cmd
unformat --fs-type <file_system_type> <drive_letter>
```

### Is it possible to unformat a specific partition using CMD in Windows?
Yes, you can unformat a specific partition using CMD in Windows by running the following command:
```cmd
unformat --partition <partition_number>
```

### Can unformat be used to recover data on external storage devices?
Yes, unformat can be used to recover data on external storage devices such as USB drives or external hard drives.

### How can I check the status of the unformat process in Windows CMD?
To check the status of the unformat process in Windows CMD, you can use the following command:
```cmd
unformat --status
```

## Applications of the UNFORMAT Command

- Recovering data from accidentally formatted drives.
- Restoring data from a formatted partition.
- Fixing formatting issues on storage devices.