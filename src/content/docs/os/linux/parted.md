---
title: Linux parted command
description: Use the Linux parted command to manage disk partitions efficiently. Learn how to create, delete, resize, and modify partitions on your system.
---

The Linux parted command is a useful tool for managing disk partitions on a Linux system. It allows users to create, delete, resize, and modify partitions with ease. By using parted, you can effectively manage your disk space allocation and optimize the performance of your system. This command provides a flexible and powerful way to work with partitions, making it a valuable tool for system administrators and advanced users. With its versatile features and options, the Linux parted command is a handy utility for handling disk partitioning tasks efficiently.
## parted Syntax:
```bash
parted [options] [device [command [parameters...]]]
```

## Options:
| Option           | Description                                |
|------------------|--------------------------------------------|
| -h, --help       | Displays a help message and exits          |
| -l, --list       | Lists partition layout on all devices      |
| -s, --script     | Never prompts for user intervention         |
| -a, --align      | Set alignment for new partitions           |
| -v, --version    | Displays version information and exits     |

## Parameters:
| Parameter | Description                                 |
|-----------|---------------------------------------------|
| device    | Specifies the device to be partitioned      |
| command   | Specifies the action to be taken on the device |
| parameters| Additional parameters for the specified command |

:::caution
Exercise caution when using the parted command as incorrect usage can lead to data loss or corrupted partitions.
:::
## parted Usage:
### Create a new partition
```bash
parted /dev/sdb mkpart primary ext4 0% 100%
```
Create a new primary partition with ext4 filesystem from the beginning to the end of the disk.

### Resize a partition
```bash
parted /dev/sdb resizepart 1 0 50%
```
Resize the first partition on /dev/sdb to use only the first 50% of the disk.

### Check partition alignment
```bash
parted /dev/sdb align-check minimal 1
```
Check if the first partition on /dev/sdb is aligned properly with minimal alignment.

### Set partition flag
```bash
parted /dev/sdb set 1 boot on
```
Set the boot flag on the first partition on /dev/sdb.
:::tip
When using the parted command in Linux, always ensure you have the necessary permissions to modify disk partitions. It is recommended to use sudo or run the command as a superuser to avoid any issues with accessing or modifying partitions.
:::

### How do I use parted in Linux?
To use the parted command in Linux, execute the following command:
```bash
parted /dev/sdx
```

### How do I list partitions with parted?
To list partitions using parted, run the following command:
```bash
parted -l
```

### How do I create a new partition with parted?
To create a new partition using parted, follow this example:
```bash
parted /dev/sdx mkpart primary 1MiB 100MiB
```

### How can I resize a partition with parted?
To resize a partition with parted, use the following command format:
```bash
parted /dev/sdx resizepart <partition_number> 1MiB 200MiB
```

### How do I format a partition using parted?
To format a partition using parted, you can use the mkfs command. Here's an example for formatting a partition as ext4:
```bash
mkfs.ext4 /dev/sdx1
```

### How can I align partitions in parted?
To align partitions in parted for optimal performance, consider using the "align-check optimal" command. Here's how you can do it:
```bash
parted /dev/sdx align-check optimal <partition_number>
```

### How do I label a partition using parted?
To label a partition with a specific name using parted, you can use the "name" command. Here's an example:
```bash
parted /dev/sdx name <partition_number> 'Data'
```

## Applications of the parted command

- Managing disk partitions
- Creating, resizing, moving, and deleting disk partitions
- Setting partition labels and flags
- Viewing partition information
- Checking and fixing disk partition issues