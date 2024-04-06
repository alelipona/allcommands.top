---
title: All About DRVSPACE Windows command
description: Learn how to utilize the Windows drvspace command efficiently with our comprehensive guide. Explore its features and functionalities today.
---

The Windows drvspace command is a disk compression utility that was introduced in MS-DOS 6.0 and later included in Windows 95. It allows users to compress one or more disk drives to save disk space and increase storage capacity. The drvspace command creates a new drive letter that represents the compressed drive, which can be accessed like any other drive on the system.

One of the main advantages of using drvspace is the ability to store more data on a drive that has limited capacity. This can be especially useful for users with older computers or those working with limited storage resources. By compressing the drive with drvspace, users can effectively double or even triple the amount of data that can be stored on it.

Another benefit of the drvspace command is its ease of use. With a few simple commands, users can compress and decompress drives quickly and efficiently. This can be particularly handy for IT professionals or computer enthusiasts who need to manage storage space on multiple drives.

In addition to its storage-saving capabilities, drvspace also provides options for optimizing disk performance. Users can choose from different compression algorithms to find the best balance between storage space and performance. This flexibility allows users to tailor the compression settings to their specific needs and preferences.

Overall, the Windows drvspace command is a valuable tool for managing disk space and increasing storage capacity on a Windows system. Whether you need to free up space on a crowded drive or maximize the storage capabilities of an older computer, drvspace can help you achieve your storage goals efficiently and effectively.

## DRVSPACE Syntax:
```cmd
DRVSPACE [/?][/SIZE:size][/MOVE][/UNCOMPRESS][/COMPRESS][/UPDATE][/MOUNT|/UNMOUNT|/INFO|/EJECT][/ACTIVE][/QUIET][/BS:512][/CMD:filename]
```

## Options:
| Option            | Description                                               |
|-------------------|-----------------------------------------------------------|
| /?                | Displays help for the DRVSPACE command.                   |
| /SIZE:size        | Specifies the size, in megabytes, for the compressed volume. |
| /MOVE             | Moves a compressed volume to a specified location.        |
| /UNCOMPRESS       | Uncompresses a compressed volume.                        |
| /COMPRESS         | Compresses an uncompressed volume.                       |
| /UPDATE           | Updates the compressed volume.                           |
| /MOUNT            | Mounts a compressed volume.                              |
| /UNMOUNT          | Unmounts a compressed volume.                            |
| /INFO             | Displays information about the compressed volume.        |
| /EJECT            | Ejects a removable disk compressed volume.               |
| /ACTIVE           | Displays the drive letter of the active compressed volume. |
| /QUIET            | Suppresses all dialog boxes and sends error messages to the screen. |
| /BS:512           | Specifies the sector size for the compressed volume.     |
| /CMD:filename     | Specifies a command file for the DRVSPACE command.        |

## Parameters:
| Parameter         | Description                                               |
|-------------------|-----------------------------------------------------------|
| drive             | Specifies the drive letter to work with.                 |
| size              | Specifies the size, in megabytes, of the compressed volume. |
## DRVSPACE CMD Examples:
### Create a New DriveSpace Compressed Volume
```cmd
drvspace /createnew 500M
```
Creates a new DriveSpace compressed volume with a size of 500MB.
### Mount an Existing DriveSpace Compressed Volume
```cmd
drvspace /mount myvolume.drv
```
Mounts an existing DriveSpace compressed volume named "myvolume.drv".
### Compress a Directory Using DriveSpace
```cmd
drvspace /compress C:\myfolder
```
Compresses the directory "myfolder" located in the C drive using DriveSpace.
### Expand a DriveSpace Compressed Volume
```cmd
drvspace /expand myvolume.drv
```
Expands the DriveSpace compressed volume named "myvolume.drv" to its maximum size.
### Delete a DriveSpace Compressed Volume
```cmd
drvspace /delete myvolume.drv
```
Deletes the DriveSpace compressed volume named "myvolume.drv".
### Display DriveSpace Information
```cmd
drvspace /info
```
Displays information about the DriveSpace compressed volumes on the system.
:::tip
When using the drvspace command in Windows, make sure to carefully read the documentation and understand the various options available to avoid any data loss or unintended consequences.
:::

### How do I use drvspace in Windows?
To use the drvspace command in Windows, execute the following command:
```cmd
drvspace --create C: /size 1024
```

### What is the purpose of the drvspace command in Windows?
The drvspace command in Windows is used to create and manage compressed volumes on disk.

### How can I create a compressed volume using drvspace?
To create a compressed volume using drvspace, you can use the following command:
```cmd
drvspace --create D: /size 2048
```

### How do I view information about existing compressed volumes with drvspace?
You can view information about existing compressed volumes using the following command:
```cmd
drvspace --list
```

### Can I resize a compressed volume created with drvspace?
Yes, you can resize a compressed volume created with drvspace using the following command:
```cmd
drvspace --resize D: /size 4096
```

### How do I mount a compressed volume using drvspace?
To mount a compressed volume using drvspace, you can use the following command:
```cmd
drvspace --mount D:
```

### What is the syntax to unmount a compressed volume with drvspace?
To unmount a compressed volume with drvspace, use the following command:
```cmd
drvspace --unmount D:
```

### How can I delete a compressed volume created with drvspace?
To delete a compressed volume created with drvspace, use the following command:
```cmd
drvspace --delete D:
```
## Applications of the DRVSPACE Command

- Compressing disk space
- Managing disk space on drives
- Increasing the storage capacity of drives
- Improving performance by compressing unused files