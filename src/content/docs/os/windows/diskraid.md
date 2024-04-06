---
title: All About DISKRAID Windows command
description: Learn how to effectively use the Windows diskraid command for managing disks, creating RAID arrays, and optimizing storage performance.
---

The Windows diskraid command is a powerful tool for managing disks, creating RAID arrays, and optimizing storage performance. With diskraid, you can create, delete, repair, and modify RAID arrays, as well as perform a variety of disk management tasks such as adding disks to arrays and changing RAID types. This command provides a command-line interface for managing storage configurations, making it a valuable tool for system administrators and power users. By utilizing the diskraid command effectively, you can improve data reliability, increase storage capacity, and enhance system performance.

## DISKRAID Syntax:
```cmd
diskraid [option] [parameter]
```
## Options:
| Option | Description                               |
|--------|-------------------------------------------|
| /L     | Lists all the available disk groups.       |
| /C     | Checks the consistency of the disk groups. |
| /R     | Repairs the corrupt disk groups.           |

## Parameters:
| Parameter    | Description                                    |
|--------------|------------------------------------------------|
| disk_group   | Specifies the disk group to perform the action.|

:::caution
Exercise caution when using the diskraid command as it directly interacts with disk groups on the system and can cause data loss if used incorrectly.
:::
## DISKRAID CMD Examples:
### Create RAID-5 Virtual Disk
```cmd
diskraid create /virtualdisk /raid:5 /disk:1,2,3 /size:102400
```
Creates a RAID-5 virtual disk using disks 1, 2, and 3 with a total size of 102400 MB.

### Add a Disk to an Existing Virtual Disk
```cmd
diskraid add /disk:4 /virtualdisk:1
```
Adds disk 4 to the existing virtual disk with the ID 1.

### Remove a Disk from a Virtual Disk
```cmd
diskraid remove /disk:2 /virtualdisk:1
```
Removes disk 2 from the virtual disk with the ID 1.

### List all Virtual Disks
```cmd
diskraid list /virtualdisk
```
Displays a list of all virtual disks configured in the system.

### Initialize Virtual Disk
```cmd
diskraid initialize /virtualdisk:1
```
Initializes the virtual disk with the ID 1.

### Rebuild a Failed Disk in a Virtual Disk
```cmd
diskraid rebuild /disk:2 /virtualdisk:1
```
Initiates the rebuilding process for the failed disk 2 in virtual disk 1.
:::tip
When using the diskraid command in Windows, make sure to run the command with administrative privileges to avoid any permission-related issues.
:::

### How do I use diskraid in Windows?
To use the diskraid command in Windows, execute the following command:
```cmd
diskraid --list
```

### What is the purpose of the diskraid --list option?
The diskraid --list option is used to display a list of all available RAID configurations on the system.
```cmd
diskraid --list
```

### How can I create a new RAID configuration using diskraid?
To create a new RAID configuration with diskraid, use the following command:
```cmd
diskraid --create --level <RAID_level> --disks <disk_list>
```

### What is the syntax for deleting a RAID configuration with diskraid?
To delete a RAID configuration using diskraid, you can use the following command syntax:
```cmd
diskraid --delete --id <RAID_ID>
```

### How can I repair a degraded RAID array with diskraid?
To repair a degraded RAID array using diskraid, you can use the following command:
```cmd
diskraid --repair --id <RAID_ID>
```

### What diskraid option can I use to check the status of a RAID configuration?
You can use the following diskraid command option to check the status of a RAID configuration:
```cmd
diskraid --status --id <RAID_ID>
```

### How do I add a disk to an existing RAID configuration with diskraid?
To add a disk to an existing RAID configuration using diskraid, you can use the following command syntax:
```cmd
diskraid --add --id <RAID_ID> --disks <disk_list>
```

### How can I get help and more information about the diskraid command in Windows?
For help and additional information about the diskraid command, you can use the following command:
```cmd
diskraid --help
```
## Applications of the DISKRAID Command

- Create disk groups
- Delete disk groups
- List disk groups
- Add disks to a disk group
- Remove disks from a disk group
- Display detailed information about a disk group
- Repair a disk group's redundancy
- Check the status of a disk group