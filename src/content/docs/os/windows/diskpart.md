---
title: DISKPART Windows command
description: Manage your disk partitions efficiently with the Diskpart command in Windows. Learn how to create, delete, format, and resize partitions seamlessly.
---

The Diskpart command in Windows is a powerful tool that allows users to manage disk partitions effectively. With Diskpart, users can create, delete, format, and resize partitions on their hard drives. This command-line utility provides more control and flexibility compared to the standard Windows Disk Management tool. By using Diskpart, users can easily perform advanced disk management tasks without the need for third-party software. It is especially useful for system administrators and power users who need to work with disk partitions frequently. Diskpart operates through a command-line interface, allowing users to input commands to perform various disk management operations. Understanding the syntax and available commands of Diskpart is essential to use it effectively. Overall, the Diskpart command is a valuable tool for managing disk partitions efficiently in Windows systems.
## DISKPART Syntax:
```cmd
DISKPART
```

## Windows DISKPART Options:
| Option | Description                     |
|--------|---------------------------------|
| select | Select a disk or volume         |
| list   | List the disks or volumes        |
| create | Create a partition or volume    |
| delete | Delete a partition or volume     |
| format | Format a partition or volume     |
| assign | Assign a drive letter or mount point |
| detail | Display detailed information    |
| online | Bring an offline disk or volume online |
| offline| Take a disk or volume offline    |
| extend | Extend a volume                 |
| shrink | Shrink a volume                  |
| convert| Convert the format of a volume   |
| exit   | Exit DiskPart                    |

## DISKPART Parameters:
| Parameter  | Description                                             |
|------------|---------------------------------------------------------|
| DiskNumber | The number of the disk to be operated on                |
| VolumeNumber | The number of the volume to be operated on            |
| Filesystem | The file system to be used when formatting a partition  |

:::caution
Exercise caution when using the DISKPART command as it directly interacts with the storage devices of your system. Incorrect usage can lead to data loss or system instability. Make sure to double-check the selected disk or volume before executing any commands.
:::
## How to use DISKPART command:
### List all available disks
```cmd
diskpart
list disk
```
Displays a list of all available disks on the system.

### Select a disk to work with
```cmd
diskpart
select disk 1
```
Selects disk 1 as the focus for subsequent operations.

### Check disk attributes
```cmd
diskpart
attributes disk
```
Displays the current attributes of the selected disk.

### Clean a disk
```cmd
diskpart
select disk 1
clean
```
Cleans the selected disk by removing all partitions and volumes.

### Create a partition
```cmd
diskpart
select disk 1
create partition primary size=1024
```
Creates a primary partition with a size of 1024 MB on the selected disk.

### Assign a drive letter to a partition
```cmd
diskpart
select disk 1
select partition 1
assign letter=E
```
Assigns drive letter E to partition 1 on the selected disk.

### Extend a volume
```cmd
diskpart
select volume 1
extend
```
Extends the selected volume to utilize all available unallocated space.

### Remove a drive letter from a partition
```cmd
diskpart
select disk 1
select partition 1
remove letter=E
```
Removes drive letter E from partition 1 on the selected disk.
:::tip
When using the diskpart command in CMD, always make sure to double-check the disk number or volume you are working on to avoid making changes to the wrong disk or partition. Use caution when using diskpart as it can irreversibly change your disk configuration.
:::

### How do I use diskpart in CMD?
To use the diskpart command in CMD, execute the following command:
```cmd
diskpart
```


### How can I list all disks using diskpart in CMD?
To list all disks using diskpart in CMD, use the following command:
```cmd
list disk
```


### How do I select a disk to work with using diskpart in CMD?
To select a disk using diskpart in CMD, follow these steps:
```cmd
list disk
select disk <disk_number>
```


### How do I create a new partition using diskpart in CMD?
To create a new partition using diskpart in CMD, execute the following commands:
```cmd
select disk <disk_number>
create partition primary size=<desired_size>
```


### How can I format a partition using diskpart in CMD?
To format a partition using diskpart in CMD, use the following command:
```cmd
format fs=ntfs quick
```


### How do I assign a drive letter to a partition using diskpart in CMD?
To assign a drive letter to a partition using diskpart in CMD, follow these steps:
```cmd
list volume
select volume <volume_number>
assign letter=<desired_letter>
```


### How can I extend a volume using diskpart in CMD?
To extend a volume using diskpart in CMD, execute the following commands:
```cmd
select volume <volume_number>
extend
```


### How do I delete a partition using diskpart in CMD?
To delete a partition using diskpart in CMD, follow these steps:
```cmd
list volume
select volume <volume_number>
delete volume
```


### How can I clean a disk using diskpart in CMD?
To clean a disk using diskpart in CMD, use the following commands:
```cmd
select disk <disk_number>
clean
```

## Applications of the DISKPART Command

- Creating, deleting, and formatting partitions on a disk
- Assigning or changing drive letters
- Setting active partitions
- Extending or shrinking volumes
- Converting disks between basic and dynamic
- Converting disks from MBR to GPT
- Managing virtual hard disks
- Viewing disk information
- Setting disk attributes
- Resizing partitions