---
title: MOUNTVOL Windows Command Guide
description: Learn how to use the Windows mountvol command to manage volume mount points efficiently.
---

The Windows mountvol command is a powerful tool that allows users to create, delete, or query volume mount points. By using mountvol, users can easily manage volume mount points, assign drive letters to volumes, and control the association between volumes and drive letters on a Windows system. This command is particularly useful for system administrators and power users who need to manage storage volumes effectively. With mountvol, users can seamlessly handle various storage devices and optimize the organization of their data within the Windows operating system.
## MOUNTVOL Syntax:
```cmd
mountvol [drive:] [VolumeName]
```
## Options:
| Option         | Description                            |
|----------------|----------------------------------------|
| /r             | Removes the drive letter assignment.   |
| /p             | Removes the drive letter assignment.   |
| /s             | Lists the volumes in the system.       |

## Parameters:
| Parameter      | Description                                                            |
|----------------|------------------------------------------------------------------------|
| [drive:]       | Specifies the drive letter to assign or remove.                       |
| [VolumeName]   | Specifies the path to the volume that you want to assign a drive letter. |

:::caution
Exercise caution when using the mountvol command as incorrect usage can lead to data loss or system instability.
:::
## MOUNTVOL Command Samples:
### Create a new mount point for a volume
```cmd
mountvol S:\ \\?\Volume{12345678-abcd-1234-abcd-1234567890ab}\
```
Creates a new mount point with the drive letter S:\ for the specified volume.

### List all existing mount points
```cmd
mountvol
```
Displays a list of all existing mount points on the system.

### Delete a specific mount point
```cmd
mountvol S:\ /D
```
Deletes the mount point associated with the drive letter S:\.

### Assign a mount point to a specific volume
```cmd
mountvol C:\ \\?\Volume{87654321-dcba-4321-dcba-0987654321ba}\
```
Assigns the mount point C:\ to the specified volume.

### Reassign a mount point to a different volume
```cmd
mountvol D:\ \\?\Volume{09876543-dcba-9876-dcba-8765432190ab}\
```
Reassigns the mount point D:\ to a different volume.

### Disable automatic mounting of new volumes
```cmd
mountvol /N
```
Disables the automatic mounting of new volumes in the system.

### Enable automatic mounting of new volumes
```cmd
mountvol /E
```
Enables the automatic mounting of new volumes in the system.
:::tip
When using the mountvol command in Windows, make sure to run the command prompt as an administrator to avoid any permission-related issues.
:::

## MOUNTVOL FAQ:
### How do I use mountvol in Windows?
To use the mountvol command in Windows, execute the following command:
```cmd
mountvol C: /S
```

### What is the purpose of the mountvol command in Windows?
The mountvol command in Windows is used to create, delete, or list a volume mount point.

### How can I list all existing volume mount points using mountvol in Windows?
To list all existing volume mount points in Windows using mountvol, run the following command:
```cmd
mountvol
```

### How do I assign a drive letter to a volume using mountvol in Windows?
To assign a drive letter (E:) to a volume with a specific volume path (\\?\Volume{0c2a5f03-7039-11e7-9b45-806e6f6e6963}\), use the mountvol command as follows:
```cmd
mountvol E: \\?\Volume{0c2a5f03-7039-11e7-9b45-806e6f6e6963}\
```

### Can I remove a drive letter assignment using mountvol in Windows?
Yes, you can remove a drive letter assignment in Windows using the mountvol command. To remove the drive letter (E:), execute the following:
```cmd
mountvol E: /D
```

### How do I create a new volume mount point with a specified path using mountvol in Windows?
To create a new volume mount point with a specific path (C:\Mount\MountedVolume) for a volume (\\?\Volume{0c2a5f03-7039-11e7-9b45-806e6f6e6963}\), use the mountvol command:
```cmd
mountvol C:\Mount\MountedVolume \\?\Volume{0c2a5f03-7039-11e7-9b45-806e6f6e6963}\
```
## Applications of the MOUNTVOL Command

- Assign a mount point folder to a volume
- List all mounted volumes and their corresponding volume names
- Remove a mount point folder from a volume
- Display the mounted volume name for a given drive letter or volume GUID