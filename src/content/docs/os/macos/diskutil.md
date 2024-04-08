---
title: diskutil MacOS command
description: Manage your MacOS disks with the diskutil command. Learn how to format, repair, and manage disk images efficiently.
---

The MacOS diskutil command is a powerful tool that allows users to manage disks and volumes on their Mac computers. With diskutil, you can format, partition, repair, and erase disks, as well as create and manage disk images. This command provides a comprehensive set of options for managing your storage in a reliable and efficient manner. Whether you need to troubleshoot disk issues, create backups, or optimize your storage space, diskutil has you covered. Familiarize yourself with the various functions and parameters of diskutil to effectively manage your MacOS disks.
## diskutil Syntax:
```bash
diskutil [verb [options] [objects]]
```

## Options:
| Option          | Description                                         |
|-----------------|-----------------------------------------------------|
| -e              | Stay awake for disconnected devices                 |
| -f              | Force. Do not prompt for confirmation.              |
| -h              | Show help for the given verb                        |
| -q              | Quiet mode. Print less information.                 |
| -v              | Increase verbosity                                  |
| -list           | List all disks and volumes                          |
| -mount point    | Mount the specified volume by specifying its path   |
| -unmount force  | Force the unmount of a volume                      |
| -resize size    | Resize a volume to the specified size               |

## Parameters:
| Parameter   | Description                                        |
|-------------|----------------------------------------------------|
| verb        | The diskutil operation to perform                  |
| objects     | The disks or volumes to operate on                 |
| options     | Additional options for the operation               |

:::caution
Exercise caution when using the diskutil command, as it can manipulate disks and volumes on your system. Ensure you have a backup of important data before performing any diskutil operations.
:::
## diskutil bash Examples:
### List all connected disks
```bash
diskutil list
```
Display a list of all connected disks, including internal and external storage devices.

### Erase a disk and format it as APFS
```bash
diskutil eraseDisk APFS NewDisk /dev/disk2
```
Format the disk located at `/dev/disk2` as APFS and label it "NewDisk."

### Repair a disk
```bash
diskutil repairVolume /dev/disk2s1
```
Check and repair the disk located at `/dev/disk2s1` for any issues.

### Mount a disk
```bash
diskutil mount /dev/disk2s1
```
Mount the disk located at `/dev/disk2s1` to make it accessible.

### Unmount a disk
```bash
diskutil unmount /dev/disk2s1
```
Unmount the disk located at `/dev/disk2s1` to safely remove it.

### Resize a volume
```bash
diskutil resizeVolume /dev/disk2s1 50G
```
Resize the volume located at `/dev/disk2s1` to 50GB in size.
:::tip
When using the diskutil command in MacOS, make sure to double-check the options and values you provide to avoid unintended consequences such as data loss or disk corruption.
:::

## diskutil Command Help Center:

### How do I use diskutil in MacOS?
To use the diskutil command in MacOS, execute the following command:
```bash
diskutil --option <value>
```

### How can I list all disks in MacOS using diskutil?
To list all disks in MacOS with diskutil, use the following command:
```bash
diskutil list
```

### How do I format a disk in MacOS using diskutil?
To format a disk in MacOS with diskutil, you can use the following command:
```bash
diskutil eraseDisk <format> <name> <identifier>
```

### How can I repair a disk in MacOS using diskutil?
To repair a disk in MacOS with diskutil, you can use the following command:
```bash
diskutil repairVolume <identifier>
```

### How do I mount a disk in MacOS using diskutil?
To mount a disk in MacOS with diskutil, use the following command:
```bash
diskutil mount <identifier>
```

### How can I unmount a disk in MacOS using diskutil?
To unmount a disk in MacOS with diskutil, you can use the following command:
```bash
diskutil unmount <identifier>
```

### How do I check the available space on a disk in MacOS using diskutil?
To check the available space on a disk in MacOS with diskutil, use the following command:
```bash
diskutil info <identifier>
```

### How can I enable or disable journaling on a disk in MacOS using diskutil?
To enable or disable journaling on a disk in MacOS with diskutil, you can use the following command:
```bash
diskutil enableJournaling <identifier>
diskutil disableJournaling <identifier>
```
## Applications of the diskutil command

- Partitioning disks
- Mounting and unmounting volumes
- Formatting disks and volumes
- Verifying and repairing disks
- Managing CoreStorage volumes
- Managing RAID sets
- Managing file systems
- Mounting disk images