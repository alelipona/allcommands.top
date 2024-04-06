---
title: rsync Linux Command Guide
description: Your ultimate guide to mastering the Linux rsync command for efficient file synchronization and backup.
---

The rsync command in Linux is a powerful tool used for efficient file synchronization and data backup. It allows users to copy and synchronize files and directories locally or between different systems. With its numerous options and capabilities, rsync provides users with flexibility and control over the synchronization process. Whether you need to mirror data, create backups, or transfer files securely, rsync is a versatile solution for managing your data effectively.

## rsync Syntax:
```bash
rsync [option] [source] [destination]
```
## Options:
| Option | Description                            |
|--------|----------------------------------------|
| -v     | Verbose - increase verbosity           |
| -a     | Archive mode - preserve symbolic links, special and device files, modification times, group, owner, and permissions |
| -z     | Compress file data during the transfer |
| -u     | Skip files that are newer on the receiver |
| -r     | Recursive - copy directories recursively |
| -h     | Output numbers in a human-readable format |
| -P     | Show progress during transfer          |

## Parameters:
| Parameter  | Description                                      |
|------------|--------------------------------------------------|
| source     | Specifies the source directory or file to sync   |
| destination| Specifies the destination directory or file      |

:::caution
Be cautious with the rsync command, as incorrect usage can result in data loss or unexpected behavior. Make sure to double-check the source and destination paths before executing the command.
:::
## rsync Command Samples:
### Copy Files and Directories Locally
```bash
rsync -av /path/to/source /path/to/destination
```
Copy files and directories from a source to a destination on the same machine.

### Synchronize Files and Directories on Remote Server
```bash
rsync -avz -e ssh /path/to/source remote_username@remote_host:/path/to/destination
```
Synchronize files and directories from a local machine to a remote server using SSH.

### Exclude Files or Directories
```bash
rsync -av --exclude 'file.txt' /path/to/source /path/to/destination
```
Copy files and directories while excluding specific files or directories.

### Show Progress During Transfer
```bash
rsync -av --progress /path/to/source /path/to/destination
```
Display the transfer progress while copying files and directories.

### Delete Files in Destination Not Present in Source
```bash
rsync -av --delete /path/to/source /path/to/destination
```
Synchronize files and also delete any files in the destination that are not in the source.

### Preserve File Permissions
```bash
rsync -av --perms /path/to/source /path/to/destination
```
Preserve the file permissions while copying files and directories.

### Limit Bandwidth Usage
```bash
rsync -av --bwlimit=1000 /path/to/source /path/to/destination
```
Limit the bandwidth used by rsync during the file transfer.
:::tip
When using the rsync command, make sure to double-check your source and destination paths to avoid accidentally overwriting or deleting important files. It is recommended to use the `--dry-run` option first to simulate the sync operation before actually executing it.
:::

### How do I use rsync in Linux?
To use the rsync command in Linux, execute the following command:
```bash
rsync --options <source> <destination>
```

### What is the purpose of rsync in Linux?
The rsync command is used in Linux for efficient file synchronization and transfer between a source and a destination. It can be used locally or over a network.

### How can I exclude certain files or directories when using rsync?
To exclude specific files or directories during an rsync operation in Linux, use the `--exclude` option followed by the file or directory you want to exclude. For example:
```bash
rsync --options --exclude=filename <source> <destination>
```

### Can rsync be used to copy files between two remote servers?
Yes, rsync can be used to copy files between two remote servers by specifying the remote locations using the `user@host:` syntax. For example:
```bash
rsync --options user1@host1:/path/to/source user2@host2:/path/to/destination
```

### How can I enable compression during rsync to speed up file transfer?
To enable compression during an rsync operation in Linux, use the `-z` or `--compress` option. This can help speed up the file transfer process, especially when transferring large files or over a slow network.
```bash
rsync --options -z <source> <destination>
```

### Is it possible to preserve file permissions and timestamps with rsync?
Yes, it is possible to preserve file permissions and timestamps during an rsync operation in Linux using the `-a` or `--archive` option, which stands for archive mode. This option ensures that all file attributes are preserved.
```bash
rsync --options -a <source> <destination>
```
## Applications of the rsync command

- Synchronizing files and directories between local and remote computers
- Backing up data securely over a network
- Mirroring data from one location to another
- Uploading files to a remote server
- Maintaining a consistent copy of data across multiple devices or locations