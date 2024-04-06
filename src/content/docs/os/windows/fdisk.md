---
title: FDISK command in Windows
description: Manage your hard drive partitions efficiently with the Windows fdisk command. Learn how to create, delete, and format partitions easily.
---

The Windows fdisk command allows users to manage hard drive partitions effectively. With fdisk, users can create, delete, and format partitions on their hard drives. By using the various options and parameters available with the fdisk command, users can optimize their hard drive space and allocate it as needed. This powerful tool is essential for system administrators and advanced users who need to manage disk partitions efficiently.

## FDISK Syntax:
```cmd
fdisk [options] [parameters]
```
## Windows FDISK Options:

| Option | Description                            |
|--------|----------------------------------------|
| /status| Display partition information           |
| /list  | Display a list of disk drives          |
| /mbr   | Create or repair the MBR (Master Boot Record) on disk |
| /info  | Display disk partition information     |

## FDISK Parameters:

| Parameter | Description                          |
|-----------|--------------------------------------|
| drive     | Specifies the drive letter or number of the disk |
| /disk: number | Selects the disk number to work with |
| /add      | Add a new partition to the disk      |
| /delete   | Delete a partition from the disk      |
| /setid    | Set the partition ID for a partition  |

:::caution
Exercise caution when using the fdisk command as it directly modifies disk partition information and can result in data loss if not used properly.
:::

### List all available disk drives
```cmd
fdisk -l
```
Displays a list of all available disk drives on the system.

### Create a new DOS partition table
```cmd
fdisk /mbr
```
Creates a new DOS partition table on the master boot record.

### Delete a partition
```cmd
fdisk /del 1
```
Deletes the partition with the number 1 on the disk.

### Set the active partition
```cmd
fdisk /activate 2
```
Sets the second partition as the active partition.

### Display partition information
```cmd
fdisk /info
```
Displays detailed information about the disk partitions.

### Change the partition ID
```cmd
fdisk /id 1 07
```
Changes the partition ID of partition 1 to 07.

### Create a new primary partition
```cmd
fdisk /new
```
Prompts to create a new primary partition on the disk.

### Set the partition size
```cmd
fdisk /size 1 100M
```
Sets the size of partition 1 to 100 megabytes.
:::tip
When using the fdisk command in Windows, be cautious as it deals with disk partitioning, which can result in data loss if not used correctly. Make sure to back up important data before making any changes to disk partitions.
:::

### How do I use fdisk in Windows?
To use the fdisk command in Windows, execute the following command:
```cmd
fdisk --option <value>
```

### How can I list all available disk partitions using fdisk in CMD?
To list all available disk partitions using fdisk in CMD, use the following command:
```cmd
fdisk -l
```

### How do I create a new partition with fdisk in Windows?
To create a new partition with fdisk in Windows, follow these steps:
```cmd
fdisk /create partition primary
```

### How can I format a partition using fdisk in CMD?
To format a partition using fdisk in CMD, use the following command:
```cmd
fdisk /format fs=ntfs quick
```

### How do I delete a partition with fdisk in Windows?
To delete a partition with fdisk in Windows, use the following command:
```cmd
fdisk /delete partition
```

### How can I change the active partition using fdisk in CMD?
To change the active partition using fdisk in CMD, execute the following command:
```cmd
fdisk /set active
```

### How do I check the current disk status with fdisk in Windows?
To check the current disk status with fdisk in Windows, use the command:
```cmd
fdisk /status
```

### How can I resize a partition using fdisk in CMD?
To resize a partition using fdisk in CMD, execute the following command:
```cmd
fdisk /resize
```

### How do I display detailed disk information with fdisk in Windows?
To display detailed disk information with fdisk in Windows, use the command:
```cmd
fdisk /detail
```

## Applications of the FDISK Command

- Creating a new partition
- Deleting a partition
- Displaying partition information
- Changing partition sizes
- Setting the active partition
- Checking disk integrity
- Managing disk partitions