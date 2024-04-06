---
title: What is CHKDSK Windows command?
description: Learn how the Windows chkdsk command can help you check and repair disk errors efficiently. 
---

The Windows chkdsk command is a built-in tool designed to check the integrity of the file system and storage devices. It scans the disk for errors such as bad sectors, lost clusters, and directory errors, then fixes them. CHKDSK can be run in two modes: read-only mode to detect errors without fixing them, and repair mode to fix any issues found during the scan. Running CHKDSK can help improve the overall performance and stability of your system by ensuring that the disk is functioning properly. This command is particularly useful in situations where you are experiencing disk-related issues such as frequent crashes, slow performance, or data corruption. By running chkdsk regularly, you can prevent potential data loss and maintain the health of your storage devices.

## CHKDSK Syntax:
```cmd
chkdsk [drive:][[path]filename] [/f] [/v] [/r] [/x] [/i] [/c] [/scan]
```

## CHKDSK Options:
| Option | Description                                    |
|--------|------------------------------------------------|
| /f     | Fixes errors on the disk.                      |
| /v     | Displays the name of each file in every directory as the disk is checked. |
| /r     | Locates bad sectors and recovers readable information. |
| /x     | Forces the volume to dismount first if necessary. |
| /i     | Runs a less vigorous check on the NTFS master file table (MFT). |
| /c     | Skips checking of cycles within the folder structure. |
| /scan  | Runs an online scan. Only available in Windows 8 and later versions. |

:::caution
It is recommended to backup important data before running the chkdsk command as it can result in data loss if errors are detected and fixed.
:::

## Parameters:
| Parameter     | Description                        |
|---------------|------------------------------------|
| drive:        | Specifies the drive to check.      |
| path          | Specifies the directory path to check. |
| filename      | Specifies the file name or wildcard pattern to check. |
## CHKDSK Command Usage Examples:
### Check a Specific Drive for Errors
```cmd
chkdsk C: /f
```
Checks the drive C: for errors and fixes them if found.

### Schedule a Disk Check on the Next System Restart
```cmd
chkdsk /f /r /x
```
Schedules a disk check on the next system restart and fixes any detected errors.

### Check Disk with Read-Only Mode
```cmd
chkdsk D: /r
```
Runs a disk check on drive D: in read-only mode and displays the status of the disk without fixing any errors.

### Checking an External Drive for Errors
```cmd
chkdsk F: /f /x
```
Checks the external drive F: for errors and fixes them forcefully.

### Check and Repair Corrupted File Systems on a Drive
```cmd
chkdsk E: /f
```
Checks and repairs any corrupted file systems on drive E:.
:::tip
When using the chkdsk command in CMD, it is recommended to run it with the appropriate options based on your specific needs and the current state of your disk. Ensure that you have administrative privileges when running chkdsk, as it may need to lock the drive to check for errors.
:::

{Questions}

## Applications of the CHKDSK Command

- Fixing file system errors
- Checking and repairing disk errors
- Verifying disk integrity
- Recovering readable information from corrupted disks
- Scanning for and fixing bad sectors
- Improving disk performance
- Restoring lost file allocation tables