---
title: bless MacOS command
description: The bless command in MacOS is used to specify which volume to bless on startup. Learn how to use bless command in MacOS to set the blessed volume.
---

The bless command in MacOS is a utility used to specify which volume to bless on startup. This command is primarily used to set the blessed volume, which is the startup volume that the system will boot from. By using the bless command, users can choose which volume contains the necessary boot files for the system to start up properly. The bless command has various options that allow users to customize the boot process and ensure that the correct volume is selected for startup. This command is typically run from the Terminal application and requires administrative privileges to make changes to the system's boot process.

## bless Syntax:
```bash
bless [options] [parameters]
```
## Options:
| Option | Description                     |
|--------|---------------------------------|
| -info  | Display information about the bless configuration for a device. |
| -unbless | Remove an existing blessing from a specified volume. |
| -legacy | Applies legacy boot settings to a specified volume. |
| -setBoot | Set the blessed system folder to the specified folder. |

## Parameters:
| Parameter | Description                               |
|-----------|-------------------------------------------|
| device    | Specify the device to bless or unbless.   |
| folder    | Specify the folder to set as the blessed system folder. |

:::caution
Exercise caution when using the bless command as it directly affects the boot configuration of the specified volume. Incorrect usage may lead to boot issues or data loss.
:::
## bless bash Examples:
### Set Device as Default Startup Disk
```bash
sudo bless --setBoot --device /dev/disk1
```
Set a specific device (/dev/disk1) as the default startup disk.

### Get Current Bless Information
```bash
bless --info
```
Display information about the current bless settings on the system.

### List Bootable Devices
```bash
bless --getBoot
```
List all devices that can be set as the default startup disk.

### Specify an EFI File
```bash
sudo bless --mount /Volumes/EFI --file /EFI/BOOT/BOOTX64.efi
```
Specify an EFI file to boot from a specific partition.

### Reset NVRAM
```bash
sudo bless --reset --update
```
Reset the NVRAM to the default settings and update bless information.

### Unmount EFI Partition
```bash
sudo bless --unbless /dev/disk1
```
Unmount the EFI partition on a specific device (/dev/disk1).

:::tip
Remember to use the bless command with caution, as it interacts with the bootable state of your macOS system.
:::

### How do I use bless in MacOS?
To use the bless command in MacOS, execute the following command:
```bash
bless --folder /Volumes/Macintosh\ HD/System/Library/CoreServices --file /Volumes/Macintosh\ HD/System/Library/CoreServices/boot.efi --setBoot
```

### How can I set a specific device as the startup disk with bless in MacOS?
To set a specific device as the startup disk using bless in MacOS, use the command:
```bash
bless --mount /Volumes/MyDisk --setBoot
```

### How do I reset the default startup disk using bless on MacOS?
To reset the default startup disk using bless on MacOS, run this command:
```bash
bless --mount / --setBoot
```

### How do I show the current blessed system file with bless on MacOS?
To display the current blessed system file using bless on MacOS, use this command:
```bash
bless --info
```

### How can I set a folder's bootloader file as the default using bless in MacOS?
To set a folder's bootloader file as the default using bless in MacOS, run:
```bash
bless --folder /Volumes/MyDisk/System/Library/CoreServices --file /Volumes/MyDisk/System/Library/CoreServices/boot.efi --setBoot
```

### How do I specify the type of system file when blessing with bless on MacOS?
To specify the type of system file when blessing with bless on MacOS, use this command:
```bash
bless --folder /System/Library/CoreServices --file /System/Library/CoreServices/boot.efi --filetype boot
```

### How can I view the options and syntax of the bless command in MacOS?
To view the options and syntax of the bless command in MacOS, you can refer to the man page by running:
```bash
man bless
```

### How do I remove the bless setting for a specific volume on MacOS?
To remove the bless setting for a specific volume on MacOS, you can use the following command:
```bash
bless --unbless /Volumes/MyDisk
```
## Applications of the bless command

- Setting the startup disk on a Mac
- Blessing a macOS system folder
- Blessing a macOS bootable volume