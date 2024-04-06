---
title: WBADMIN Windows Command Guide
description: A comprehensive guide on using the Windows wbadmin command to manage backups and recovery tasks effectively.
---

The Windows wbadmin command is a powerful tool for managing backups and recovery tasks on a Windows system. It allows users to perform various operations such as creating backups, restoring data, scheduling tasks, and managing storage. By utilizing the wbadmin command, users can ensure the safety of their data and recover it in case of any unexpected events. This guide provides detailed information on how to use the wbadmin command effectively for backup and recovery purposes.

## WBADMIN Syntax:
```cmd
wbadmin [command] [parameters] [options]
```

## Options:
| Option    | Description                                 |
|-----------|---------------------------------------------|
| -backupTarget: | Specifies the storage location for the backup. |
| -include: | Specifies the specific files, folders, or volumes to include in the backup. |
| -exclude: | Specifies the specific files, folders, or volumes to exclude from the backup. |
| -allCritical | Specifies that all critical volumes on the system should be included in the backup. |
| -quiet | Performs the backup operation without any prompts or confirmations. |

## Parameters:
| Parameter    | Description                                 |
|--------------|---------------------------------------------|
| Start Backup | Initiates a backup operation.               |
| Start Recovery | Initiates a recovery operation.             |
| Start SysRecovery | Initiates a system recovery operation.     |
| Start SystemStateBackup | Initiates a system state backup operation. |

:::caution
Exercise caution when using the wbadmin command as it can perform critical operations on your system. Ensure that you have a good understanding of the options and parameters you are using to avoid data loss or system instability.
:::
## WBADMIN Command Samples:
### List all available backups
```cmd
wbadmin get versions
```
Displays a list of all available backups.

### Perform a system state backup
```cmd
wbadmin start systemstatebackup -backupTarget:D:
```
Initiates a system state backup and stores it in the "D:" drive.

### Backup specific folders
```cmd
wbadmin start backup -include:C:\Folder1,C:\Folder2 -backupTarget:E:
```
Creates a backup of specific folders, "Folder1" and "Folder2", and saves it in the "E:" drive.

### Restore a specific backup
```cmd
wbadmin start systemstaterecovery -version:10/13/2021-08:00 -backupTarget:C:
```
Restores a specific system state backup created on 10/13/2021 at 08:00 AM from the "C:" drive.

### Schedule a daily backup
```cmd
wbadmin enable backup -addtarget:E: -schedule:23:00 -include:C: -quiet
```
Sets up a daily backup at 11:00 PM, including the "C:" drive, and stores it in the "E:" drive without user interaction.

### Delete a specific backup
```cmd
wbadmin delete systemstatebackup -version:10/13/2021-08:00
```
Removes a specific system state backup created on 10/13/2021 at 08:00 AM.

### Perform a bare metal recovery
```cmd
wbadmin start sysrecovery -version:10/15/2021-14:00 -backupTarget:E: -machine:<computername>
```
Initiates a bare metal recovery using the backup created on 10/15/2021 at 2:00 PM, stored in the "E:" drive, and specifies the target machine by its name.
:::tip
When using the wbadmin command in Windows, ensure that you have the necessary permissions and familiarity with the options available to perform backup and recovery tasks effectively.
:::

## WBADMIN FAQ:
### How do I use wbadmin in Windows?
To use the wbadmin command in Windows, execute the following command:
```cmd
wbadmin --option <value>
```

### How do I back up a specific drive using wbadmin?
To back up a specific drive using wbadmin, use the following command:
```cmd
wbadmin start backup -backupTarget:<TargetDrive:> -include:<DriveLetter>:\
```

### Can I schedule a backup using wbadmin in Windows?
Yes, you can schedule a backup using wbadmin in Windows by running the following command:
```cmd
wbadmin enable backup -addtarget:<TargetDrive:> -schedule:<Time>
```

### How do I restore files from a Windows backup using wbadmin?
To restore files from a Windows backup using wbadmin, run the following command:
```cmd
wbadmin start recovery -version:<VersionIdentifier> -itemType:File -items:<PathToFiles> -recursive
```

### Is there a way to exclude specific files from a backup using wbadmin?
Yes, you can exclude specific files from a backup using wbadmin by running the following command:
```cmd
wbadmin start backup -backupTarget:<TargetDrive:> -allCritical -exclude:<PathToFile>
```

### How do I view the backup status and details in Windows using wbadmin?
To view the backup status and details in Windows using wbadmin, execute the following command:
```cmd
wbadmin get status
```

## Applications of the WBADMIN Command

- Start and stop backups
- Manage recovery points
- Restore items from backups
- Configure backup schedules
- Validate backups
- List backups
- Delete backups