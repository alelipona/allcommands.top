---
title: tmutil MacOS command
description: The tmutil command in MacOS allows users to manage Time Machine backups and perform various operations efficiently.
---

The tmutil command in MacOS is a powerful utility that provides users with advanced options for managing Time Machine backups. With tmutil, users can control Time Machine settings, create, delete, or restore backups, and monitor backup status. This command enables users to efficiently manage their backup storage and ensure that their important data is securely backed up. By utilizing tmutil, MacOS users can take full control of their Time Machine backups and have peace of mind knowing that their data is protected.

## tmutil Syntax:
```bash
tmutil [command] [options] [arguments]
```

## Options:
| Option | Description                           |
|--------|---------------------------------------|
| -h     | Help - Show help for the tmutil command. |
| -v     | Verbose - Enable verbose mode for more detailed output.         |

## Parameters:
| Parameter  | Description                                 |
|------------|---------------------------------------------|
| command    | The specific action to perform with tmutil (e.g., startbackup, disablelocal, compare).|
| options    | Additional settings or configurations for the command.                   |
| arguments  | File names, directories, or other data needed for the specific command. |

:::caution
Exercise caution when using the tmutil command, as it interacts with Time Machine settings and backups. Making incorrect changes can lead to data loss or unwanted modifications to backup configurations.
:::
## tmutil bash Examples:
### Backing Up a Specific Folder
```bash
tmutil startbackup /path/to/folder
```
Starts a backup of a specific folder using tmutil.

### Listing Available Snapshots
```bash
tmutil listlocalsnapshots /
```
Displays a list of available local snapshots for the root file system.

### Checking Backup Status
```bash
tmutil status
```
Checks the status of the Time Machine backup process.

### Excluding a Folder from Backup
```bash
tmutil addexclusion /path/to/folder
```
Excludes a specific folder from being backed up by Time Machine.

### Restoring a File from Backup
```bash
tmutil restore /path/to/destination /path/to/file
```
Restores a file from a Time Machine backup to a specific destination.

### Deleting a Local Snapshot
```bash
tmutil deletelocalsnapshots <snapshot_name>
```
Deletes a specific local snapshot by its name.
:::tip
When using the tmutil command in MacOS, make sure to carefully read the command options and their descriptions to ensure you are using the command correctly for your specific needs.
:::

### How do I use tmutil in MacOS?
To use the tmutil command in MacOS, execute the following command:
```bash
tmutil --option <value>
```

### What is the purpose of the tmutil command in MacOS?
The tmutil command in MacOS is used for performing Time Machine tasks and managing Time Machine backups.
```bash
tmutil startbackup
```

### How can I list Time Machine snapshots with tmutil?
You can list Time Machine snapshots using the tmutil command with the following command:
```bash
tmutil listlocalsnapshots /
```

### How do I exclude a directory from Time Machine backups using tmutil?
To exclude a directory from Time Machine backups with tmutil, use the following command:
```bash
tmutil addexclusion /path/to/directory
```

### How can I restore a specific file from a Time Machine backup with tmutil?
To restore a specific file from a Time Machine backup using tmutil, you can run the following command:
```bash
tmutil restore /path/to/file
```

### How do I enable Time Machine backups with tmutil?
To enable Time Machine backups using tmutil, execute the command:
```bash
tmutil enable
```

### How can I verify the integrity of a Time Machine backup with tmutil?
To verify the integrity of a Time Machine backup using tmutil, run the following command:
```bash
tmutil verifychecksums /path/to/backup
```

### How do I disable Time Machine backups with tmutil?
To disable Time Machine backups using tmutil, use the following command:
```bash
tmutil disable
```
## Applications of the tmutil command

- Enable and disable local Time Machine backups
- Start and stop Time Machine backups
- Customize Time Machine settings
- Check and manage backup status
- List and delete existing backups
- Compare backups
- Restore files from backups