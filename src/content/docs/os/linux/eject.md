---
title: eject command in Linux
description: Learn how to use the Linux eject command to safely remove external storage devices from your system.
---

The eject command in Linux is used to safely remove external storage devices such as USB drives, CDs, or DVDs from your system. It ensures that all data is written to the device before it is unmounted and ejected, preventing potential data loss or corruption. This command is especially useful for ensuring that your removable storage devices are safely disconnected from your system without any risk of damage.

## eject Syntax:
```bash
eject [options] [device]
```

## Linux eject Options:
| Option       | Description                                 |
|--------------|---------------------------------------------|
| -d, --default| Use the default ejection method              |
| -r, --retract| Eject the media and retract the device      |
| -T, --trayclose| Close the tray if the drive supports this  |
| -v, --verbose| Display more information during ejection    |
| -n, --noop   | Do not actually eject, just show what would happen |

## eject Parameters:
| Parameter | Description                             |
|-----------|-----------------------------------------|
| device    | The device node or mount point to eject | 

:::caution
Exercise caution when using the eject command as it can cause data loss or corruption if not used properly. Always double-check the device specified to avoid ejecting the wrong disk or partition.
:::
## How to use eject command:
### Eject the CD/DVD tray
```bash
eject
```
Ejects the CD/DVD tray in the optical drive.

### Eject a specific device by device name
```bash
eject /dev/cdrom
```
Ejects the CD/DVD tray by specifying the device name "/dev/cdrom".

### Eject a specific device by mount point
```bash
eject /mnt/cdrom
```
Ejects the CD/DVD tray by specifying the mount point "/mnt/cdrom".

### Eject multiple devices simultaneously
```bash
eject /dev/cdrom /dev/cdrom1
```
Ejects multiple CD/DVD trays at the same time by specifying multiple device names.

### Eject a specific media by mount point
```bash
eject /media/cdrom
```
Ejects the CD/DVD tray for the media mounted at "/media/cdrom".

### Eject without closing the tray
```bash
eject -r
```
Ejects the CD/DVD tray without automatically closing it after ejection.

### Display help information for the eject command
```bash
eject --help
```
Shows the help manual for the eject command with detailed information on its usage.

### Eject a remote device over SSH
```bash
ssh user@remote_host eject /dev/cdrom
```
Ejects the CD/DVD tray of a remote device by running the eject command over SSH connection.
:::tip
Remember to always safely eject removable media like USB drives to prevent data corruption or loss.
:::

### How do I use eject in Linux?
To use the eject command in Linux, execute the following command:
```bash
eject /dev/sdb
```

### What is the purpose of the eject command in Linux?
The eject command in Linux is used to eject removable media, such as CDs, DVDs, or USB drives, from the system.

### How do I force eject a stuck CD/DVD using eject in bash?
To force eject a stuck CD/DVD using the eject command in Linux, you can use the following command:
```bash
eject -f /dev/sr0
```

### How can I display help information for the eject command in Linux?
To display help information for the eject command in Linux, you can use the following command:
```bash
eject --help
```

### How do I eject a specific drive with eject in bash?
To eject a specific drive using the eject command in Linux, you can specify the device as an argument. For example:
```bash
eject /dev/sdc
```

### How do I prevent the tray from closing after ejecting with the eject command in Linux?
To prevent the tray from closing automatically after ejecting using the eject command in Linux, you can use the following command:
```bash
eject -T /dev/sr0
```

### How do I list available devices for eject in Linux?
To list available devices for the eject command in Linux, you can use the following command:
```bash
eject -d
```

### Can I use the eject command to eject network shares in Linux?
No, the eject command in Linux is specifically designed for ejecting physical removable media and cannot be used to eject network shares.

### How do I eject multiple devices simultaneously with the eject command in bash?
To eject multiple devices simultaneously using the eject command in Linux, you can specify each device as separate arguments. For example:
```bash
eject /dev/sdb /dev/sdc
```

## Applications of the eject command

- Ejecting removable media such as CDs or DVDs
- Ejecting external storage devices like USB drives
- Ejecting virtual disks mounted on the system