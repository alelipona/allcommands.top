---
title: Windows CHKNTFS command
description: Learn how to use the Windows chkntfs command to display or modify the checking of the disk during system boot.
---

The Windows chkntfs command is used to display or modify the checking of the disk during system boot. This command allows users to enable or disable scheduled disk checking on a specified volume, or display the current status. By using this command, users can customize the disk checking process based on their preferences and requirements. With the chkntfs command, users can optimize the disk checking process to ensure the stability and performance of their Windows system.

## CHKNTFS Syntax:
```cmd
chkntfs [/D] [/T[:TimeToWait]] [/X[:TimeToForce]] [/C] [/L[:Drive]] 
```

## Options:
| Option | Description                           |
|--------|---------------------------------------|
| /D     | Restore default settings and exit.    |
| /T     | Set the Autochk timeout to TimeToWait (default is 8 seconds). |
| /X     | Set time in seconds to force volume dismount if dirty (default is 0). |
| /C     | Schedule the volume to be checked at next reboot. |
| /L     | Display or set the dirty bit flag on a volume. |

## Parameters:
| Parameter   | Description                             |
|-------------|-----------------------------------------|
| TimeToWait  | Time in seconds before Autochk is started.   |
| TimeToForce | Time in seconds before volume dismount is forced. |
| Drive       | Specifies the drive letter for which dirty bit should be set or queried. |

:::caution
Exercise caution when using the chkntfs command as it can schedule volume checks for the next reboot. Incorrect usage of this command can lead to unexpected behavior during system startup.
:::
## CHKNTFS Usage:
### Check if C: drive is scheduled for a disk check at boot time
```cmd
chkntfs C:
```
Checks if the C: drive is scheduled for a disk check at the next boot.

### Disable disk checking on C: drive at boot time
```cmd
chkntfs /x C:
```
Disables disk checking on the C: drive at boot time.

### Display current settings for all drives
```cmd
chkntfs /t
```
Displays the current settings for all drives on the system.

### Schedule disk checking on all drives at boot time
```cmd
chkntfs /c
```
Schedules disk checking on all drives at the next system boot.
:::tip
When using the chkntfs command in CMD, ensure you have administrative privileges to make changes to the system settings.
:::

### How do I use chkntfs in CMD?
To use the chkntfs command in CMD, execute the following command:
```cmd
chkntfs /t
```

### What does the chkntfs /t command do?
The chkntfs /t command displays the time before the automatic check disk is performed on the specified drive.

### How can I disable automatic disk checking using chkntfs?
To disable automatic disk checking using chkntfs, use the following command:
```cmd
chkntfs /x C:
```

### How can I set a custom countdown time for disk checking with chkntfs?
You can set a custom countdown time for disk checking using chkntfs with the following command:
```cmd
chkntfs /i 10
```

### How do I force checking at the next system restart using chkntfs?
To force checking at the next system restart using chkntfs, execute the following command:
```cmd
chkntfs /c C:
```

### Can I schedule disk checking on multiple drives with chkntfs?
Yes, you can schedule disk checking on multiple drives with chkntfs by specifying the drive letters in the command. For example:
```cmd
chkntfs /d /x C: D:
```

## Applications of the CHKNTFS Command

- Check the disk for errors at startup
- Display whether the automatic disk checking is scheduled for the next boot 
- Set or clear automatic disk checking at startup
- Display current settings for automatic disk checking
- Display the status of all local disk drives