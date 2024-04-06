---
title: RSM Windows Command Guide
description: Learn how to use the RSM command in Windows to manage media resources efficiently. Find out about the different options and functionalities available for organizing and controlling removable storage devices on your system.
---

The RSM (Removable Storage Manager) command in Windows allows users to manage media resources efficiently. It provides various options and functionalities for organizing and controlling removable storage devices on the system. Users can use the RSM command to perform tasks such as mounting and dismounting media, querying information about media libraries, and controlling media changers. This command is useful for maintaining and accessing removable storage devices effectively within the Windows operating system.

## RSM Syntax:
```cmd
rsm [option] [parameter]
```

## Options:
| Option | Description                   |
|--------|-------------------------------|
| -a     | Lists all resources.          |
| -r     | Restarts a specific resource. |
| -d     | Deletes a resource.            |
| -s     | Stops a specific resource.    |

## Parameters:
| Parameter | Description                             |
|-----------|-----------------------------------------|
| resource  | Specifies the name of the resource.     |
| file      | Specifies the file to use for the action.|

:::caution
Always exercise caution when using the rsm command, as improper usage can lead to unintended consequences such as stopping or deleting critical resources.
:::
## RSM Command Samples:
### Eject a Tape from a Specific Drive
```cmd
rsm eject /pf"TapeDriveName"
```
Ejects a tape from the specified tape drive.

### Enumerate All Devices in the Library
```cmd
rsm view /gu
```
Displays all the devices (such as media and drives) in the library unit.

### Prepare a Media in a Specific Location
```cmd
rsm prepare /pf"MediaPoolName" /ast"AB1234"
```
Prepares a specific media in the specified location for use.

### Mark Media as Free
```cmd
rsm extend /pf"MediaPoolName" /mt"Free"/ast"AB1234"
```
Marks the specified media as free in the specified media pool.

### Inventory All Devices in the Library
```cmd
rsm inventory /gu
```
Initiates an inventory process for all devices in the library unit.

### Import Media from a Specific Location
```cmd
rsm import /pf"MediaPoolName" /asg"GroupName"
```
Imports media from a specific location into the specified media pool.

### Unload Media from a Specific Slot
```cmd
rsm unload /rg"MediaPoolName" /st123
```
Unloads the media in slot 123 from the specified media pool.
:::tip
When using the rsm command in Windows, make sure to run the command with administrative privileges to avoid any issues with the execution of the command.
:::

## RSM FAQ:
### How do I use rsm in Windows?
To use the rsm command in Windows, execute the following command:
```cmd
rsm --online "<drive letter>"
```

### What is the purpose of the rsm command in Windows?
The rsm command in Windows is used to manage removable storage.

### How can I view the status of removable storage using rsm in Windows?
To view the status of removable storage in Windows using rsm, use the following command:
```cmd
rsm view /t <type>
```

### Can I enable or disable removable storage with rsm in Windows?
Yes, you can enable or disable removable storage in Windows using rsm. 
```cmd
rsm --enable <drive letter>
```

### How do I list all the devices currently being managed by rsm in Windows?
To list all the devices currently being managed by rsm in Windows, run the following command:
```cmd
rsm list
```

### Is there a way to eject removable storage devices using the rsm command in Windows?
Yes, you can eject removable storage devices using the rsm command in Windows. 
```cmd
rsm eject <drive letter>
```
## Applications of the RSM Command

- Manages shared resources
- Displays information about shared resources
- Reconnects to a shared resource
- Deletes connections to shared resources