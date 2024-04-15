---
title: rsync MacOS command
description: The MacOS rsync command is a powerful tool for syncing and transferring files efficiently. Learn how to use rsync on your MacOS system.
---

The MacOS rsync command is a powerful tool for syncing and transferring files efficiently. It allows users to copy files between local and remote systems with ease, utilizing options for preserving permissions, ownership, timestamps, and more. With rsync, users can sync files and directories, handle partial transfers, and automate backups. This command is especially useful for those looking to mirror directories, copy large amounts of data, or synchronize files between different locations. By mastering the rsync command on MacOS, users can streamline their file management processes and ensure data integrity during transfers.

## rsync Syntax:
```bash
rsync [OPTION]... SRC [DEST]
```
## Options:
| Option | Description                               |
|--------|-------------------------------------------|
| -v     | Verbose mode, increase verbosity          |
| -r     | Recurse into directories                   |
| -a     | Archive mode, archive and preserve attributes|
| -z     | Compress file data during the transfer     |
| -h     | Output numbers in a human-readable format  |
| -P     | Same as --partial --progress               |
| -c     | Skip based on checksum, not mod-time & size|
| -u     | Skip files that are newer on the receiver |
| -n     | Perform a trial run with no changes made  |
| -q     | Quiet mode, suppress non-error messages    |

## Parameters:
| Parameter | Description                                |
|-----------|--------------------------------------------|
| SRC       | Source file/directory to sync from         |
| DEST      | Destination file/directory to sync to      |

:::caution
Exercise caution when using the rsync command as it can overwrite files and delete data if not used correctly. Make sure to double-check the source and destination paths to avoid unintentional data loss.
:::
## rsync bash Examples:
### Sync Files and Directories Locally
```bash
rsync -av /path/to/source /path/to/destination
```
This command syncs files and directories from a source directory to a destination directory on the local machine.

### Sync Files and Directories Remotely over SSH
```bash
rsync -avz -e ssh /path/to/source username@remote_server:/path/to/destination
```
This command syncs files and directories from a local machine to a remote server over SSH using the rsync command.

### Exclude Specific Files or Directories
```bash
rsync -av --exclude='directory' /path/to/source /path/to/destination
```
Excludes a specific directory from the source directory while syncing files using rsync.

### Display Progress During Transfer
```bash
rsync -avh --progress /path/to/source /path/to/destination
```
This command displays the progress of the file transfer while syncing files and directories using rsync.

### Delete Files in the Destination Not Present in Source
```bash
rsync -av --delete /path/to/source /path/to/destination
```
Syncs files and directories, deleting any files in the destination that are not present in the source directory.

### Synchronize Files in Dry Run Mode
```bash
rsync -av --dry-run /path/to/source /path/to/destination
```
Performs a dry run of the rsync command, showing what files would be transferred without actually transferring them.
:::tip
When using the rsync command in MacOS, make sure to carefully review the available options and their respective values to achieve the desired synchronization or transfer result.
:::

### How do I specify a source and destination with rsync in MacOS?
To specify a source and destination with rsync in MacOS, use the following command:
```bash
rsync -av /path/to/source/ /path/to/destination/
```

### How do I exclude specific files or directories with rsync in MacOS?
To exclude specific files or directories with rsync in MacOS, you can use the `--exclude` option. Here's an example command:
```bash
rsync -av --exclude='file.txt' /path/to/source/ /path/to/destination/
```

### How can I compress data during transfer using rsync in MacOS?
To compress data during transfer using rsync in MacOS, include the `-z` option in your command. Here's how you can do it:
```bash
rsync -avz /path/to/source/ /path/to/destination/
```

### How do I sync files and directories recursively with rsync in MacOS?
To sync files and directories recursively with rsync in MacOS, add the `-r` option to your command. Here's an example:
```bash
rsync -avr /path/to/source/ /path/to/destination/
```

### How do I delete files from the destination that no longer exist in the source with rsync in MacOS?
To delete files from the destination that no longer exist in the source with rsync in MacOS, include the `--delete` option in your command. Here's how you can do it:
```bash
rsync -av --delete /path/to/source/ /path/to/destination/
```

### How do I print a verbose output during synchronization with rsync in MacOS?
To print a verbose output during synchronization with rsync in MacOS, add the `-v` option to your command. Here's an example:
```bash
rsync -av /path/to/source/ /path/to/destination/
```

### How do I preserve file permissions and ownership during synchronization using rsync in MacOS?
To preserve file permissions and ownership during synchronization using rsync in MacOS, include the `-p` and `-o` options in your command. Here's how you can do it:
```bash
rsync -avpo /path/to/source/ /path/to/destination/
```

### How do I show the progress of the rsync transfer in MacOS?
To show the progress of the rsync transfer in MacOS, you can use the `--progress` option. Here's an example command:
```bash
rsync -av --progress /path/to/source/ /path/to/destination/
```
## Applications of the rsync command

- Synchronize files between local directories
- Backup files to a remote server
- Copy files with specific permissions and attributes
- Mirror directories while preserving the file structure
- Transfer files securely over SSH
- Exclude certain files or directories from being synchronized