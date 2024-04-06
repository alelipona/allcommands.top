---
title: Windows MOUNT command
description: Learn how to use the Windows MOUNT command to mount a drive or volume. Use this command to attach a drive letter to a specific volume on your system.
---

The Windows MOUNT command allows users to attach a drive letter to a specific volume, enabling easy access to that volume. This command is particularly useful when managing storage devices or network shares. By using the MOUNT command, users can assign a drive letter to a volume that does not already have one, making it more accessible. This command can be run from the Command Prompt or PowerShell, providing a simple and effective way to manage volumes on a Windows system.

## MOUNT Syntax:
```cmd
mount [options] [parameters]
```

## Options:
| Option    | Description                           |
|-----------|---------------------------------------|
| -t        | Sets the filesystem type to mount.    |
| -o        | Provides a comma-separated list of options.  |

## Parameters:
| Parameter  | Description                         |
|------------|-------------------------------------|
| device     | Specifies the device to mount.      |
| directory  | Specifies the mount point directory.|

:::caution
Exercise caution when using the `mount` command in Windows as incorrect usage can lead to data loss or corruption.
:::
## MOUNT Usage:
### Mount a network drive
```cmd
mount \\server\share Z:
```
Mounts a network drive with the specified path to the local drive Z.

### Mount a VHD file
```cmd
mount C:\Path\example.vhd /p:1
```
Mounts a Virtual Hard Disk (VHD) file located at the specified path using partition number 1.

### Mount an ISO image
```cmd
mount C:\Path\example.iso /o drive
```
Mounts an ISO image file located at the specified path and assigns it the next available drive letter.

### Mount an NFS share
```cmd
mount -o anon \\server\share Z:
```
Mounts an NFS share with the specified path to the local drive Z with anonymous access.
:::tip
When using the mount command in Windows, make sure to carefully specify the correct options and values to ensure successful mounting of drives or network locations.
:::

### How do I use mount in Windows?
To use the mount command in Windows, execute the following command:
```cmd
mount --options <value>
```

### What is the purpose of the mount command in Windows?
The mount command in Windows is used to mount a storage device or a network share to a specific directory in the file system.

### How can I list mounted drives using the mount command in Windows?
You can list the currently mounted drives in Windows by running the following command:
```cmd
mount
```

### Can I specify a specific drive letter when mounting in Windows using the mount command?
Yes, you can specify a particular drive letter when mounting in Windows using the mount command. Here is an example:
```cmd
mount /d X: C:\Path\To\Mount
```

### Is it possible to mount network shares in Windows using the mount command?
Yes, you can mount network shares in Windows using the mount command. Here is an example:
```cmd
mount \\Server\Share /m C:\Mount\Point
```

### How do I unmount a drive or network location in Windows using the mount command?
To unmount a drive or network location in Windows using the mount command, you can use the following command:
```cmd
mount /u C:\Mount\Point
```

## Applications of the MOUNT Command

- Mounting a drive
- Assigning a drive letter to a specific partition
- Mounting a network share
- Making a drive accessible for use
- Assigning a specific file system to a drive