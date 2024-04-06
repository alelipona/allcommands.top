---
title: lsblk Linux Command Guide
description: Learn how to use the lsblk command in Linux to list block devices, their sizes, and mount points.
---

The lsblk command in Linux is used to list block devices along with information about their sizes, mount points, and filesystem types. It provides a clear overview of the storage devices connected to the system, making it easier to identify and manage storage devices. By default, lsblk displays information in a tree-like format, showing the relationships between different devices. This command is useful for system administrators and users who need to gather information about block devices on their Linux system.
## lsblk Syntax:
```bash
lsblk [options] [parameters]
```

## Options:
| Option           | Description                   |
|------------------|-------------------------------|
| -a, --all        | List all devices              |
| -d, --nodeps     | Do not print slaves, holders and partmaps |
| -e, --exclude    | Excludes the specified major-minor device number |
| -f, --fs         | Output info on filesystems |
| -i, --ascii      | Output ASCII parttable |
| -l, --list       | Output in list format |
| -m, --scsi       | Output info in SCSI generic mode |
| -n, --noheadings | Do not print a header line |
| -o, --output     | Specify columns to display |
| -p, --pairs      | Produce output suitable for parsing |

## Parameters:
| Parameter        | Description                   |
|------------------|-------------------------------|
| PATH             | Specify a device or mount point to list information |
| DEVICE           | Specifying the device to list information |
| -a, --all        | List all devices              |
| -b, --bytes      | Print size in bytes           |
| -h, --human      | Print sizes in human readable format |
| -t, --topology   | Output info in topology format |

:::caution
Exercise caution when using the lsblk command, especially when manipulating or formatting devices, as it may lead to data loss.
:::
## lsblk Command Samples:
### List all block devices
```bash
lsblk
```
Display information about all available block devices.

### List block devices with additional information
```bash
lsblk -a
```
Display all block devices including virtual ones.

### Display all available block devices including loop devices
```bash
lsblk -l
```
Show all block devices, including loop devices.

### Show only the block devices in a tree-like format
```bash
lsblk -t
```
Display block devices in a tree-like format.

### Show all block devices with filesystem information
```bash
lsblk -f
```
Display all block devices with filesystem information included.

### Display block devices and additional metadata
```bash
lsblk -m
```
Show block devices with additional metadata information.

### Show all block devices with information in JSON format
```bash
lsblk -J
```
Display block devices along with metadata in JSON format.
:::tip
When using the lsblk command, make sure to run it with appropriate permissions, as viewing block devices may require administrative privileges.
:::

### How do I list all block devices in Linux using lsblk?
To list all block devices in Linux with lsblk, run the following command:
```bash
lsblk
```

### How can I display more details, including mount points, with lsblk in Linux?
To display more details, including mount points, when using lsblk in Linux, use the following command:
```bash
lsblk -f
```

### How can I show the size of each block device in lsblk on Linux?
To show the size of each block device when using lsblk in Linux, execute the following command:
```bash
lsblk -b
```

### How do I display the tree-like format of partitions with lsblk in Linux?
To display the tree-like format of partitions using lsblk in Linux, use the following command:
```bash
lsblk -i
```

### How can I list all USB devices in Linux using lsblk?
To list all USB devices in Linux with lsblk, run the following command:
```bash
lsblk -d -o name,tran,rm,type
```

### How can I list only specific block devices using lsblk in Linux?
To list only specific block devices with lsblk in Linux, use the following command, replacing `<device>` with the device name:
```bash
lsblk /dev/<device>
```
## Applications of the lsblk command

- Viewing information about block devices
- Listing details about storage devices and their partitions
- Checking the device name, size, type, and mount points
- Displaying hierarchical information about the storage devices
- Assisting in identifying disk and partition information 
- Providing an overview of the block devices available on the system