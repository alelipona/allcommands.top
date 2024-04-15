---
title: MacOS pdisk command
description: A brief guide on how to use the MacOS pdisk command for partitioning and managing disks.
---

The MacOS pdisk command is a powerful tool used for partitioning and managing disks on Apple computers. With pdisk, users can create, delete, modify, and list partitions on their hard drives. This command provides a command-line interface for performing various disk management tasks efficiently. By using pdisk, users can easily interact with their disks and partitions, making it a valuable tool for system administrators and advanced users. Overall, the MacOS pdisk command simplifies the process of disk partitioning and management on Apple devices.
## pdisk Syntax:
```bash
pdisk [options] [parameters]
```

## Options:
| Option | Description               |
|--------|---------------------------|
| -l     | List partition information|
| -w     | Write partition table data|
| -e     | Edit partition table      |
| -i     | Initialize disk           |
| -x     | Explore disk information  |

## Parameters:
| Parameter | Description                      |
|-----------|----------------------------------|
| disk      | Specifies the disk to work with   |
| partition | Specifies the partition to work with |

:::caution
Exercise caution when using the pdisk command, as it deals with low-level disk operations and can potentially lead to data loss if not used correctly.
:::

## pdisk Usage:
### Display disk information
```bash
pdisk -l
```
Displays a list of all disks and partitions on the system.

### Create a new Apple partition map on a disk
```bash
pdisk /dev/disk3 -i
```
Initializes the disk /dev/disk3 with a new Apple partition map.

### Display detailed information about a specific partition
```bash
pdisk /dev/disk2s1
```
Shows detailed information about the partition /dev/disk2s1.

### Erase a partition on a disk
```bash
pdisk /dev/disk4s2 -E
```
Erases the partition /dev/disk4s2 from the disk.

:::tip
When using the pdisk command in MacOS, ensure that you have the necessary permissions to modify disk partitions. Incorrect usage of the command can result in data loss or corruption of your disk.
:::

### How do I create a new partition using pdisk in MacOS?
To create a new partition using pdisk in MacOS, you can use the following command:
```bash
pdisk /dev/disk1 --partition -s "New Partition Name" -i 2
```

### How do I list partitions with pdisk in MacOS?
To list partitions using pdisk in MacOS, you can use the following command:
```bash
pdisk /dev/disk1 -l
```

### How do I delete a partition with pdisk in MacOS?
To delete a partition using pdisk in MacOS, you can use the following command:
```bash
pdisk /dev/disk1 --delete -i 2
```

### How do I repair a partition map with pdisk in MacOS?
To repair a partition map using pdisk in MacOS, you can use the following command:
```bash
pdisk /dev/disk1 -r
```

### How do I format a partition with pdisk in MacOS?
To format a partition using pdisk in MacOS, you can use the following command:
```bash
newfs_hfs /dev/disk1s2
```

### How do I resize a partition with pdisk in MacOS?
To resize a partition using pdisk in MacOS, you can use the following commands:
```bash
pdisk /dev/disk1 --partition -s "New Size" -i 2
```

### How do I view disk information with pdisk in MacOS?
To view disk information using pdisk in MacOS, you can use the following command:
```bash
pdisk /dev/disk1 -v
```

## Applications of the pdisk command

- Create, delete, and edit partition tables on a disk.
- Display detailed information about the partitions and volumes on a disk.
- Initialize disks for use with MacOS.
- Convert between different partition table formats (e.g., GPT and MBR).
- Repair and recover corrupted partition tables.
- Set up dual-boot configurations on a single disk.