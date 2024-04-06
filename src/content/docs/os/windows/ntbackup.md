---
title: NTBACKUP command in Windows
description: Learn how to use the Windows ntbackup command efficiently to back up and restore your important files and folders.
---

The Windows ntbackup command allows users to create and manage backup jobs to protect their data. By utilizing this command, users can easily schedule regular backups, specify which files and folders to include, and restore data when needed. This efficient tool helps users safeguard their important information and minimize the risk of data loss.

## NTBACKUP Syntax:
```cmd
ntbackup backup [options] [parameters]
```

## Windows NTBACKUP Options:
| Option | Description                                |
|--------|--------------------------------------------|
| /a     | Backs up only files with the archive attribute set and resets the attribute. |
| /d     | Specifies the name of the backup description. |
| /g:{GUID} | Uses the specified globally unique identifier (GUID) as the tape name. |
| /hc:{on\|off} | Includes or excludes the NTFS security and file system information for a destination file. |
| /l:{f\|s\|n} | Specifies the type of log file. 'f' for full log, 's' for summary log, and 'n' for no log. |
| /m:{backupType} | Specifies the backup media type. |
| /n | Disables verification of written data. |
| /t:{Tape_Name} | Specifies the tape name. |
| /hc:{on\|off} | Includes or excludes the NTFS security and file system information for a destination file. |
| /o | Prevents the backing up of overwritten files. |

## NTBACKUP Parameters:
| Parameter    | Description                                            |
|--------------|--------------------------------------------------------|
| FileName.bks | Specifies the name of the backup operation to perform. |
| FileName     | Specifies the name of the file to back up.             |

:::caution
Exercise caution when using NTBACKUP command as it involves system-level operations and can potentially overwrite data if not used correctly.
:::

### Backup files from C drive
```cmd
ntbackup backup "C:\Temp" /n "Backup1" /d "Daily Backup" /m normal
```

Backup files from the C drive to a specified destination with the name "Backup1" using the normal backup method.

### Restore files from a backup file
```cmd
ntbackup restore /j "Backup1" /d "Daily Backup" /m normal
```

Restore files from a backup job named "Backup1" with the description "Daily Backup" using the normal backup method.

### Verify the integrity of a backup file
```cmd
ntbackup verify /j "Backup1" /d "Daily Backup"
```

Verify the integrity of a backup job named "Backup1" with the description "Daily Backup".

### Create a backup report for a specific backup job
```cmd
ntbackup report /v /d "Daily Backup" /j "Backup1"
```

Generate a detailed report for a backup job named "Backup1" with the description "Daily Backup".

### Schedule a daily backup job
```cmd
schtasks /create /sc daily /tn "DailyBackup" /tr "ntbackup backup \"C:\Data\" /n \"Backup1\" /d \"Daily Backup\" /m normal" /st 00:00
```

Schedule a daily backup job to run ntbackup at midnight to backup data from the C drive.

### Backup files to a specific tape drive
```cmd
ntbackup backup "C:\Data" /n "TapeBackup" /d "Weekly Backup" /v:yes /t "Tape0" /r:no /m normal
```

Backup files from the C drive to a specified tape drive named "Tape0" with the name "TapeBackup" using the normal backup method.

### Perform a system state backup
```cmd
ntbackup backup systemstate /n "SystemStateBackup" /j "System State Backup" /m normal
```

Perform a backup of the system state with the name "SystemStateBackup" and the description "System State Backup".

### Backup and overwrite existing files without prompt
```cmd
ntbackup backup "C:\Important" /n "ImportantBackup" /d "Important Files Backup" /l "C:\Logs" /hc:on
```

Backup important files from the C drive to a destination with the name "ImportantBackup" and overwrite existing files without prompting.
:::tip
Make sure to run the ntbackup command with the necessary options and parameters to perform the desired backup or restore operation successfully.
:::

### How do I use ntbackup in Windows?
To use the ntbackup command in Windows, execute the following command:
```cmd
ntbackup --option <value>
```

### How can I perform a full backup using ntbackup?
To perform a full backup using ntbackup, run the following command:
```cmd
ntbackup backup "@C:\BackupJob.bks" /n "FullBackup" /d "Full Backup" /v:yes /r:no /rs:no /hc:off /m normal /j "Full Backup" /l:s /f "D:\Backup\FullBackup.bkf"
```

### How do I restore files using ntbackup?
To restore files using ntbackup, execute the following command:
```cmd
ntbackup restore /r /j "Full Backup" /f "D:\Backup\FullBackup.bkf"
```

### What is the command to create a new backup job in ntbackup?
To create a new backup job in ntbackup, use the following command:
```cmd
ntbackup backup "@C:\NewBackupJob.bks"
```

### How can I schedule a backup job with ntbackup?
To schedule a backup job with ntbackup, you can use the Windows Task Scheduler in combination with the ntbackup command-line options.

### How do I list the available backup devices in ntbackup?
To list the available backup devices in ntbackup, run the following command:
```cmd
ntbackup backup
```

### How do I verify the integrity of a backup using ntbackup?
To verify the integrity of a backup using ntbackup, execute the following command:
```cmd
ntbackup verify /a /j "Full Backup" /f "D:\Backup\FullBackup.bkf"
```

### What is the command to backup System State using ntbackup?
To backup System State using ntbackup, use the following command:
```cmd
ntbackup backup systemstate "@C:\SystemStateBackup.bks"
```

### How can I set a specific backup type (incremental/differential) in ntbackup?
To set a specific backup type (incremental/differential) in ntbackup, you can use the `/m` option with either "incremental" or "differential" as the value.

## Applications of the NTBACKUP Command

- Creating backups of files and folders
- Scheduling automated backups
- Restoring backed up data
- Managing backup media
- Verifying backup integrity
- Logging backup operations
- Configuring backup settings
- Creating system state backups
- Performing incremental or differential backups