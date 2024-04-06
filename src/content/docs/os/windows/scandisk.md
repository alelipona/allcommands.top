---
title: SCANDISK Windows Command Guide
description: Learn how to use the Windows scandisk command to check and repair disk errors on your computer.
---

The Windows scandisk command is a utility that scans and repairs disk errors on your computer. It helps to ensure the integrity and performance of your hard drive by identifying and fixing any issues that may be present. By running scandisk regularly, you can prevent data loss and improve the overall health of your system. This command is particularly useful for detecting bad sectors, file system errors, and other issues that could potentially cause problems.

## SCANDISK Syntax:
```cmd
chkdsk [drive:][[path]filename] [/f] [/v] [/r] [/x] [/l[:size]] [/b] [/scan] [/perf] [/sdcleanup] [/offlinescanandfix]
```
## Options:
| Option              | Description                                           |
|---------------------|-------------------------------------------------------|
| /F                  | Fixes errors on the disk.                             |
| /V                  | Displays the full path and name of every file on the disk. |
| /R                  | Locates bad sectors and recovers readable information. |
| /X                  | Forces the volume to dismount first if necessary.     |
| /L[:size]           | Changes the log file size to the specified number of kilobytes. |
| /B                  | Re-evaluates bad clusters on the volume (implies /R). |
| /SCAN               | Skips right to the online scan phase of the scan.     |
| /PERF               | Uses more system resources to complete a scan as fast as possible. |
| /SDCLEANUP          | Garbage collector in the sparse paging file.          |
| /OFFLINESCANANDFIX  | Runs an offline scan and fix on the dirty volume.     |

## Parameters:
| Parameter           | Description                                           |
|---------------------|-------------------------------------------------------|
| drive:              | Specifies the drive letter followed by a colon.       |
| path               | Specifies the location and name of a directory.       |
| filename            | Specifies the file(s) to check for fragmentation.     |

:::caution
Caution: Running scandisk with certain options like /F or /R can lead to data loss if not used correctly. Make sure to back up important data before running the command.
:::
## SCANDISK Command Samples:
### Check and fix errors on C: drive
```cmd
scandisk C:
```
This command will check the C: drive for errors and repair them if any are found.

### Perform an in-depth scan on D: drive
```cmd
scandisk D: /all
```
Executes a thorough scan on the D: drive, checking and repairing any detected errors.

### Schedule a scan and fix any errors on E: drive at the next system restart
```cmd
scandisk E: /scan /perf
```
Schedules a scan and repair operation on the E: drive to run at the next system boot, focusing on performance.

### Display detailed information about the scan on F: drive
```cmd
scandisk F: /check
```
Shows a detailed report of the scanning process on the F: drive to identify any errors.

### Scan and fix errors on the G: drive without prompting for confirmation
```cmd
scandisk G: /autofix
```
Checks the G: drive for errors and automatically fixes them without requiring user confirmation.

### Scan the H: drive for bad sectors and attempt to recover readable data
```cmd
scandisk H: /surface
```
Performs a surface scan on the H: drive to identify and possibly recover data from bad sectors.

### Verify disk integrity without fixing any errors on the I: drive
```cmd
scandisk I: /readonly
```
Checks the I: drive for errors but does not make any changes, providing a read-only verification of disk integrity.
:::tip
Before running the scandisk command, it is recommended to close all open programs and save your work to avoid potential data loss during the scanning and repair process.
:::

## SCANDISK FAQ:
### How do I use scandisk in Windows?
To use the scandisk command in Windows, execute the following command:
```cmd
scandisk --drive C:
```

### What is the purpose of the scandisk command?
The scandisk command in Windows is used to check and repair file systems and bad sectors on a disk drive.

### How can I scan a specific drive using scandisk?
You can scan a specific drive in Windows using scandisk by running the following command:
```cmd
scandisk --drive D:
```

### Can scandisk fix errors on a disk automatically?
Yes, scandisk can fix errors on a disk automatically by using the "/f" parameter in the command.
```cmd
scandisk --drive E: /f
```

### How do I view a detailed report after running the scandisk command?
To view a detailed report after running scandisk in Windows, you can use the "/v" parameter in the command.
```cmd
scandisk --drive F: /v
```

### Is there a way to schedule scandisk to run automatically at startup?
Yes, you can schedule scandisk to run automatically at startup by using the "chkdsk" command with the "/f" parameter followed by a reboot.
```cmd
chkdsk C: /f /r
```

## Applications of the SCANDISK Command

- Fix disk errors
- Repair bad sectors on the hard drive
- Check the integrity of the file system
- Recover data from corrupted files
- Improve system performance
- Prevent data loss