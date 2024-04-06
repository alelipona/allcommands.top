---
title: What is blkid Linux command?
description: Learn about the Linux blkid command and how it helps identify block devices on your system.
---

The Linux blkid command is used to locate or print block device attributes such as label, UUID, or file system type. It helps in identifying storage devices connected to the system.

## blkid Syntax:
```bash
blkid [options] [device|label|UUID]
```

## blkid Options:
| Option           | Description                             |
|------------------|-----------------------------------------|
| -c <file>        | Read cache from the specified file      |
| -o <format>      | Output in the specified format          |
| -s <list>        | Comma-separated list of items to display|
| -g               | Use the e2fsprogs ext2/ext3 UUID        |
| -p <path>        | Look in the specified directory for devices|
| -t               | Probe for filesystems only             |
| -u <list>        | Comma-separated list of items to update in the cache|
| -l               | List known filesystems                 |

## Parameters:
| Parameter        | Description                             |
|------------------|-----------------------------------------|
| [device]         | Specify the device to query for         |
| [label]          | Search for devices by label             |
| [UUID]           | Search for devices by UUID              |
  
## blkid Command Usage Examples:
### Display Information of a Specific Device
```bash
blkid /dev/sda1
```
This command displays the information of a specific block device (/dev/sda1).

### Display All Block Device Information
```bash
blkid
```
Executing this command will display information about all block devices on the system.

### Show UUID of a Specific Device
```bash
blkid -s UUID /dev/sda1
```
Displays only the UUID of the specified block device (/dev/sda1).

### Display only Filesystem Type of Devices
```bash
blkid -s TYPE
```
This will list the filesystem types of all block devices on the system.

### Display Information in JSON Format
```bash
blkid --output=json
```
Formats the output of blkid command in JSON format for easy parsing and integration with other tools.
:::tip
When using the blkid command in Linux, ensure you have the necessary permissions to view device information, as some devices may require root privileges to access. Additionally, make sure to review the available options and values that can be used with blkid to retrieve specific information about block devices.
:::

### How do I use blkid in Linux?
To use the blkid command in bash, execute the following command:
```bash
blkid
```

### How to list only specific device information with blkid?
To list specific device information like UUIDs and labels, use the following command:
```bash
blkid /dev/sda1
```

### How can I display only UUIDs of block devices using blkid?
To display only the UUIDs of block devices using blkid, run the following command:
```bash
blkid -o value -s UUID
```

### How do I force blkid to read devices even if they are in use?
To force blkid to read devices even if they are in use, use the following command:
```bash
blkid -p
```

### How to display information about filesystems with blkid?
To display detailed information about filesystems, use the following blkid command:
```bash
blkid -s TYPE
```

### How can I show empty partitions with blkid?
To display information about empty partitions using blkid, run the following command:
```bash
blkid -p -u unmounted
```

### How to ignore specific devices using blkid?
To ignore specific devices like CD-ROMs and loop devices when running blkid, use the following command:
```bash
blkid -t TYPE=TYPE_TO_IGNORE
```

### How do I save blkid output to a file?
To save blkid output to a file, use the following command:
```bash
blkid > blkid_output.txt
```
## Applications of the blkid Command

- Retrieving information about block devices
- Displaying UUIDs and file system types
- Finding information about partitions and storage devices
- Identifying device attributes
- Automating tasks in shell scripts