---
title: What is RESTORE Windows command?
description: Learn how to use the Windows restore command to revert your system to a previous state. Fix issues and undo changes easily with this powerful tool.
---

The Windows restore command allows users to revert their system to a previous state, fixing issues and undoing changes easily.

## RESTORE Syntax:
```cmd
restore [option] [parameter]
```
## RESTORE Options:
| Option | Description |
|--------|-------------|
| -f     | Force restore without confirmation |
| -v     | Verbose mode, display detailed information during restore |
| -r     | Restore to a specific directory or location |

:::caution
Exercise caution when using the restore command as it may overwrite existing data without prompting for confirmation. It is recommended to perform a backup of important data before using this command.
:::

## Parameters:
| Parameter | Description |
|-----------|-------------|
| file      | Specifies the file to be restored |
| directory | Specifies the directory to restore the file to |
| date      | Specifies a specific date or timestamp to restore from |
## RESTORE Command Usage Examples:
### Restore the system to a previous restore point
```cmd
rstrui.exe
```
Opens the System Restore tool to restore the system to a previous restore point.

### Restore the system using a specific restore point
```cmd
rstrui.exe /restore
```
Directly opens the System Restore tool interface to choose a specific restore point for system restoration.

### Check if System Restore is enabled on the system
```cmd
vssadmin list shadows
```
Lists all of the available shadow copies, indicating whether System Restore is enabled on the system.

### View the available disks with shadow copies for System Restore
```cmd
vssadmin list volumes
```
Displays a list of all volumes along with their shadow copy information to identify disks eligible for System Restore.

### Create a new system restore point
```cmd
wmic.exe /Namespace:\\root\default Path SystemRestore Call CreateRestorePoint "MyRestorePoint", 100, 7
```
Allows the creation of a new restore point named "MyRestorePoint" with a description and importance level specified.
:::tip
When using the restore command in Windows CMD, make sure to have the necessary permissions to perform the restore operation. Additionally, always double-check the options and values you provide to avoid any unintentional data loss or modifications.
:::

### How do I use restore in Windows?
To use the restore command in CMD, execute the following command:
```cmd
restore --file "C:\backup\file.txt" --target "C:\destination"
```

### Can I restore multiple files at once with the restore command?
Yes, you can restore multiple files at once using wildcards. Here's an example:
```cmd
restore --file "C:\backup\*.txt" --target "C:\destination"
```

### How do I restore a folder in Windows using CMD?
To restore a folder with all its contents, you can use the following command:
```cmd
restore --file "C:\backup\folder\" --target "C:\destination"
```

### Is it possible to restore deleted files with the restore command?
No, the restore command in Windows CMD does not have the capability to recover deleted files. It is primarily used for restoring backed-up files or directories.

### How can I view a list of available options for the restore command?
You can view a list of available options for the restore command by using the help flag. Here's how you can do it:
```cmd
restore --help
```

### Can I specify a specific date or time for the restore operation?
Yes, you can specify a specific date or time for the restore operation using timestamps. Here's an example:
```cmd
restore --file "C:\backup\file.txt" --target "C:\destination" --timestamp "2022-01-01 12:00:00"
```

### Does the restore command in Windows CMD support incremental backups?
Yes, the restore command can support incremental backups by specifying the appropriate options during the restore operation.

### How can I verify the integrity of the restored files using CMD?
To verify the integrity of the restored files, you can use the verify option in the restore command. Here's an example:
```cmd
restore --file "C:\backup\file.txt" --target "C:\destination" --verify
```

## Applications of the RESTORE Command

- Revert system settings to a previous state
- Undo system changes made by recent software installations
- Recover files that were accidentally deleted or modified
- Fix system errors or issues by restoring a stable configuration
- Roll back changes caused by malware or viruses
- Restore system functionality after a system crash or failure