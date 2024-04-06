---
title: pax Linux command
description: The pax command in Linux is a versatile archiving tool that can create, modify, and extract different archive formats like tar, cpio, and zip. It offers a wide range of options for customizing the archive creation process and is commonly used for backup and data transfer purposes.
---

The pax command in Linux is a versatile tool for working with archives. It can create, modify, and extract various types of archive formats, including tar, cpio, and zip. Pax offers a wide range of options for customizing the archive creation process, such as preserving file attributes and permissions, excluding specific files or directories, and compressing archives. It is commonly used for backup and data transfer purposes, providing users with a flexible and powerful tool for managing their files and data.

## pax Syntax:
```bash
pax [options] [parameters]
```
## Options:
| Option | Description                       |
|--------|-----------------------------------|
| -c     | Create a new archive               |
| -r     | Add files to an archive            |
| -a     | Append files to an archive         |
| -w     | Append files to an archive with current mtime |
| -f     | Specify the archive file           |
| -v     | Verbose mode (display progress)    |

## Parameters:
| Parameter | Description                      |
|-----------|----------------------------------|
| file      | Specify the file or directory to be archived |
## pax bash Examples:
### Create a new archive "myarchive.tar" from files in the current directory
```bash
pax -w -f myarchive.tar *
```
This command creates a new archive file named "myarchive.tar" containing all files in the current directory.

### Extract files from an existing archive "myarchive.tar" to a specific directory "/home/user/documents"
```bash
pax -r -f myarchive.tar -s'|.*|/home/user/documents/|' '*.txt'
```
Extracts all files with a .txt extension from the "myarchive.tar" archive to the "/home/user/documents" directory.

### List the contents of an archive "myarchive.tar"
```bash
pax -f myarchive.tar
```
Displays a list of all files and directories within the "myarchive.tar" archive.

### Copy files from a source directory to a target directory using pax
```bash
pax -rw -s'|.*|/source/directory/|' '*.txt' /target/directory/
```
Copies all txt files from the source directory to the target directory.

### Create a new archive "backup.tar" with full file path preservation
```bash
find /var/log/ -type f -name '*.log' | pax -wZ > backup.tar
```
Creates an archive named "backup.tar" containing all .log files in the /var/log directory with full file path preservation.

### Extract specific files matching a pattern from an existing archive "myarchive.tar"
```bash
pax -r -f myarchive.tar '*.txt'
```
Extracts all files with a .txt extension from the "myarchive.tar" archive.
:::tip
When using the pax command in Linux, make sure to carefully read the available options and their descriptions in the documentation or help center. Understanding how to specify options correctly is crucial for the successful operation of the pax command.
:::

## pax Command Help Center:

### How do I use pax in Linux?
To use the pax command in Linux, execute the following command:
```bash
pax --option <value>
```

### How can I create a new archive with pax in Linux?
To create a new archive using pax in Linux, use the following command:
```bash
pax -w -f archive.pax file1 file2
```

### How do I extract files from a pax archive in Linux?
To extract files from a pax archive in Linux, use the following command:
```bash
pax -r -f archive.pax
```

### How can I list the contents of a pax archive in Linux?
To list the contents of a pax archive in Linux, use the following command:
```bash
pax -f archive.pax
```

### How do I add files to an existing pax archive in Linux?
To add files to an existing pax archive in Linux, use the following command:
```bash
pax -w -f archive.pax newfile
```

### Can I compress a pax archive in Linux?
Yes, you can compress a pax archive in Linux using the following command:
```bash
pax -w -f archive.pax | gzip > archive.pax.gz
```

### How can I extract a compressed pax archive in Linux?
To extract a compressed pax archive in Linux, use the following command:
```bash
gzip -d -c archive.pax.gz | pax -r
```

### How do I copy files and directories with pax in Linux?
To copy files and directories using pax in Linux, use the following command:
```bash
pax -rw -s '/oldpath/newpath/' -pe /source /destination
```
## Applications of the pax command

- Creating archive files
- Extracting files from archive files
- Listing contents of archive files
- Copying files while preserving timestamps and permissions