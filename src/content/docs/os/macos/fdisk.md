---
title: MacOS fdisk command
description: The MacOS fdisk command is a powerful utility for managing disk partitions on your system. Learn how to use fdisk on MacOS to create, delete, and manage partitions efficiently.
---

The MacOS fdisk command is a versatile utility that allows users to manage disk partitions effectively. With fdisk, users can create, delete, and modify partitions on their system's hard drive. This command is a powerful tool for organizing and optimizing disk space, making it easier to store and access files. By mastering the fdisk command, MacOS users can take full control of their storage solutions and customize their disk partitions to suit their specific needs.

## fdisk Syntax:
```bash
sudo fdisk [options] [parameters]
```
## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| -e     | Edit the MBR partition tables.          |
| -i     | Initialize the MBR partition tables.     |
| -u     | Display units in sectors for some fields.|

## Parameters:
| Parameter | Description                                     |
|-----------|-------------------------------------------------|
| disk      | The path to the disk you want to operate on.    |
| type      | The type of the partition table (usually MBR).  |

:::caution
Exercise caution when using the fdisk command as it deals with disk partitioning tools and can result in data loss if used incorrectly.
:::
## fdisk Usage:
### Create a new DOS disklabel
```bash
fdisk -i /dev/disk2
```
Initializes a new DOS disklabel on the disk named disk2.

### Display partition information
```bash
fdisk /dev/disk3
```
Displays the partition information for the disk named disk3.

### Remove an existing partition
```bash
fdisk -e /dev/disk4
```
Opens the interactive edit mode to remove existing partitions from disk4.

### Update the MBR on a disk
```bash
fdisk -u /dev/disk5
```
Updates the Master Boot Record (MBR) on the disk named disk5.
:::tip
When using the fdisk command in MacOS, make sure to carefully review and understand the options and values you provide as they can have a significant impact on your disk partitions. It is recommended to create backups of important data before making any changes to disk partitions with fdisk.
:::

### How do I use fdisk in MacOS?
To use the fdisk command in MacOS, execute the following command:
```bash
fdisk /dev/disk0
```

### What is the purpose of the fdisk command in MacOS?
The fdisk command in MacOS is used for partitioning disks and modifying the partition tables on a disk. 

### How can I list the partitions on a disk using fdisk in MacOS?
To list the partitions on a disk using fdisk in MacOS, run the following command:
```bash
fdisk -l /dev/disk0
```

### How do I create a new partition using fdisk in MacOS?
To create a new partition using fdisk in MacOS, follow these steps:
```bash
fdisk -e /dev/disk0
```

### Can I delete a partition with fdisk in MacOS?
Yes, you can delete a partition with the fdisk command in MacOS. To delete a partition, use the following command:
```bash
fdisk -i /dev/disk0
```

### How do I change the partition type with fdisk in MacOS?
To change the partition type using fdisk in MacOS, you can use the following command:
```bash
fdisk -e /dev/disk0
```

### Is it possible to resize a partition using fdisk in MacOS?
No, the fdisk command in MacOS does not have the capability to resize partitions. It is primarily used for partitioning disks and modifying partition tables.
## Applications of the fdisk command

- Creating and managing disk partitions
- Displaying information about disk partitions
- Setting up disk partition tables