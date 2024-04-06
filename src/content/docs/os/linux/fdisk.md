---
title: fdisk command in Linux
description: Learn how to use the fdisk command in Linux to manage disk partitions effectively.
---

The Linux fdisk command is a powerful tool used to create, modify, and delete disk partitions on a Linux system. It allows users to view existing partitions, change partition sizes, set partition types, and more. By using fdisk, users can effectively manage their disk space and optimize their system's performance.

## fdisk Syntax:
```bash
fdisk [options] [device]
```
## Linux fdisk Options:
| Option | Description |
|--------|-------------|
| -l     | List the partition tables for the specified devices. |
| -u     | Specify the units to display sizes in cylinders (c), sectors (s), or bytes (b). |
| -s     | Display the partition information in a short format. |
| -t     | Change the system ID of a partition. |
| -v     | Display the fdisk version. |
| -h     | Display a help message. |

## fdisk Parameters:
| Parameter | Description |
|-----------|-------------|
| device    | The device to perform the partitioning on, such as /dev/sda. |
:::caution
Exercise caution while using the fdisk command as it can modify the partition table on the specified device. Make sure you understand what you are doing before making any changes to avoid data loss.
:::
## How to use fdisk command:

### Display disk information
```bash
fdisk -l
```
The command displays information about all disks connected to the system.

### Create a new partition
```bash
fdisk /dev/sdb
n
p
1
ENTER
ENTER
```
This sequence will create a new primary partition on the disk /dev/sdb.

### Change the system ID of a partition
```bash
fdisk /dev/sdb
t
1
6
```
This command will change the system ID of partition 1 on /dev/sdb to FAT16.

### Delete a partition
```bash
fdisk /dev/sdb
d
1
```
This will delete the first partition on the disk /dev/sdb.

### Set the bootable flag on a partition
```bash
fdisk /dev/sdb
a
1
```
This will set the bootable flag on the first partition of the disk /dev/sdb.

### Write the partition table to disk and exit
```bash
fdisk /dev/sdb
w
```
This command will write the partition changes to disk and exit fdisk.

### Print partition table
```bash
fdisk -l /dev/sdb
```
The command prints the partition table for the specific disk /dev/sdb.

### View help information
```bash
fdisk --help
```
Displays the help information for the fdisk command, showing all available options and flags.
:::tip
When using the fdisk command in Linux, ensure you have the necessary permissions to modify disk partitions, and always double-check the device name before making any changes to avoid accidental data loss.
:::

## fdisk Command Troubleshooting Q&A:

### How do I use fdisk in Linux?
To use the fdisk command in Linux, execute the following command:
```bash
fdisk --option <value>
```

### How can I list all partitions using fdisk?
You can list all partitions by running the following command:
```bash
fdisk -l
```

### How do I create a new partition with fdisk?
To create a new partition using fdisk, follow this example command:
```bash
fdisk /dev/sdx
n
<provide partition information>
w
```

### How can I delete a partition using fdisk?
To delete a partition with fdisk, use this command sequence:
```bash
fdisk /dev/sdx
d
<partition number>
w
```

### How do I change the partition type with fdisk?
To change the partition type using fdisk, follow this example command:
```bash
fdisk /dev/sdx
t
<partition number>
<new type code>
w
```

### How can I display sector size using fdisk?
You can display the sector size by running the following command:
```bash
fdisk -s /dev/sdx
```

### How do I print the partition table using fdisk?
To print the partition table with fdisk, use the following command:
```bash
fdisk -l /dev/sdx
```

### How can I backup and restore partition table using fdisk?
You can backup and restore a partition table with fdisk using the commands:
```bash
fdisk -d /dev/sdx > sdx-backup.txt   # Backup
fdisk /dev/sdx < sdx-backup.txt      # Restore
```

### How do I align partitions to optimize performance in fdisk?
To align partitions for optimal performance, use multiples of the disk's physical sector size. For example, ensure the starting sector of your partition is a multiple of 2048 for a disk with 4KB sectors.


## Applications of the fdisk command

- Creating new disk partitions
- Displaying existing partitions
- Modifying partition table
- Deleting partitions
- Changing partition types