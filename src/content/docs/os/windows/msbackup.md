---
title: What is MSBACKUP Windows command?
description: Quickly learn about the MSBACKUP Windows command and how to use it effectively.
---

MSBACKUP is a command-line utility in Windows used to back up and restore files and directories. It allows for full or partial backups, scheduling backups, and specifying backup locations. The command is useful for creating and managing backups efficiently.

## MSBACKUP Syntax:
```cmd
msbackup [option] [parameters]
```

## MSBACKUP Options:
| Option | Description                         |
|--------|-------------------------------------|
| /B     | Specifies the backup file to create.|
| /T     | Specifies the type of backup.       |
| /D     | Specifies the description for the backup file.|
| /S     | Specifies the source files to include in the backup.|
| /A     | Adds files to an existing backup.   |

## Parameters:
| Parameter          | Description                                           |
|--------------------|-------------------------------------------------------|
| drive:\path        | Specifies the source or destination location for the backup. |
| backupname         | Specifies the name of the backup file to create.      |
## MSBACKUP Command Usage Examples:
### Backup a Directory
```cmd
msbackup c:\backup\ /d "Backup of important files" /t full /e
```
Backs up the directory "c:\backup\" with a description "Backup of important files" using a full backup type.

### Restore Files from a Backup
```cmd
msbackup /r /p c:\backup\ /e
```
Restores files from a backup located in "c:\backup\".

### Schedule a Backup Job
```cmd
at 06:00 /every:M,T,W,Th,F msbackup c:\backup\ /d "Daily Backup" /t incremental /e
```
Schedules a daily backup job at 6:00 AM on weekdays for the directory "c:\backup\" with a description "Daily Backup" using an incremental backup type.

### Verify Backup Integrity
```cmd
msbackup /v /p c:\backup\
```
Verifies the integrity of a backup located in "c:\backup\".

### List Backup Contents
```cmd
msbackup /l /p c:\backup\
```
Lists the contents of a backup located in "c:\backup\".
:::tip
When using the msbackup command in Windows CMD, make sure to run it with the necessary options and parameters to ensure proper backup and restoration of files. Double-check the paths and filenames you specify to avoid any data loss during the backup process.
:::

### How do I use msbackup in Windows?
To use the msbackup command in CMD, execute the following command:
```cmd
msbackup --backup "C:\sourceFolder" --destination "D:\backupFolder"
```

### What is the syntax for restoring files using msbackup?
To restore files using msbackup in CMD, use the following command:
```cmd
msbackup --restore "D:\backupFolder" --destination "C:\restoredFiles"
```

### How can I schedule automatic backups with msbackup?
To schedule automatic backups with msbackup, you can use the Windows Task Scheduler in combination with the msbackup command. Create a task that runs the msbackup command with the desired options at specified intervals.

### Is it possible to compress the backup files with msbackup?
Yes, you can compress the backup files using msbackup by adding the `--compress` option to the command. This will create a compressed backup file in the specified destination folder.

### Can I exclude certain files or folders from being backed up with msbackup?
Yes, you can exclude specific files or folders from being backed up with msbackup by using the `--exclude` option followed by the path to the file or folder you want to exclude.

### How do I view the contents of a backup file created with msbackup?
You can view the contents of a backup file created with msbackup by using the `--list` option followed by the path to the backup file. This will display a list of files contained in the backup.

### How do I force overwrite existing files during the restoration process with msbackup?
To force overwrite existing files during the restoration process with msbackup, use the `--overwrite` option in the command. This will replace any existing files in the destination folder with the restored files from the backup.

### Can I run msbackup in verbose mode to see detailed information during the backup process?
Yes, you can run msbackup in verbose mode by adding the `--verbose` option to the command. This will provide detailed information about each file being backed up or restored.

## Applications of the MSBACKUP Command

- Creating backups of files and directories
- Compressing file backups to save space
- Restoring files from backup archives