---
title: cpio command in MacOS
description: Learn how to efficiently handle archives with the cpio command in MacOS. Explore its options and functionalities for seamless archiving and extracting files.
---

The MacOS cpio command is a powerful tool for creating, extracting, and manipulating archives. It allows users to easily manage large sets of files by archiving them into a single file or extracting them from an existing archive. With cpio, you can preserve file permissions, timestamps, and ownership when creating or extracting archives. Additionally, you can specify various options to customize the behavior of cpio according to your needs.

## cpio Syntax:
```bash
cpio [options] [parameters]
```

## MacOS cpio Options:
| Option | Description |
|--------|-------------|
| -i     | Restore archive |
| -o     | Create archive |
| -t     | List archive contents |
| -v     | Verbose mode (print file names as processed) |
| -d     | Create leading directories where needed |
| -B     | Set the block size to 5120 bytes |

## cpio Parameters:
| Parameter     | Description              |
|---------------|--------------------------|
| directory     | Specify the directory to archive or extract files from |
| file          | Specify the file to archive or extract |
| archive_file  | Specify the archive file to create or extract from |

:::caution
Exercise caution when using the cpio command, as incorrect usage can lead to unintended consequences such as overwriting files or directories.
:::
## How to use cpio command:

### Create a cpio archive from a list of files
```bash
ls | cpio -o > archive.cpio
```
Create a cpio archive named "archive.cpio" from the list of files in the current directory.

### Extract files from a cpio archive
```bash
cpio -i < archive.cpio
```
Extract files from the cpio archive "archive.cpio" in the current directory.

### Create a compressed cpio archive
```bash
ls | cpio -o | gzip > archive.cpio.gz
```
Create a compressed cpio archive named "archive.cpio.gz" from the list of files in the current directory.

### Extract files from a compressed cpio archive
```bash
gunzip -c archive.cpio.gz | cpio -i
```
Extract files from the compressed cpio archive "archive.cpio.gz" in the current directory.

### Copy files and directories into a cpio archive
```bash
find . -print | cpio -oBv > archive.cpio
```
Copy files and directories from the current directory into a cpio archive named "archive.cpio" with verbose output.

### Extract specific files from a cpio archive
```bash
cpio -i -F archive.cpio 'file1.txt' 'directory1/file2.txt'
```
Extract specific files "file1.txt" and "file2.txt" from the cpio archive "archive.cpio".

### Copy files with extended attributes into a cpio archive
```bash
find . -print | cpio -oX@ > archive.cpio
```
Copy files from the current directory into a cpio archive "archive.cpio" preserving extended attributes.

### Extract files with extended attributes from a cpio archive
```bash
cpio -i -dX@ < archive.cpio
```
Extract files from the cpio archive "archive.cpio" while preserving extended attributes.
:::tip
When using the cpio command in MacOS, make sure to carefully read the command options and parameters to ensure proper execution. Additionally, always practice with test data to avoid accidental data loss or corruption.
:::

### How do I use cpio in MacOS?
To use the cpio command in MacOS, execute the following command:
```bash
cpio --create < files.txt
```

### What is the syntax for creating a cpio archive in MacOS?
To create a cpio archive in MacOS, use the following command syntax:
```bash
find . -depth -print0 | cpio --null --create --format=newc > archive.cpio
```

### How can I extract files from a cpio archive in MacOS?
To extract files from a cpio archive in MacOS, use the following command:
```bash
cpio --extract < archive.cpio
```

### How do I list the contents of a cpio archive in MacOS?
To list the contents of a cpio archive in MacOS, use the following command:
```bash
cpio --list < archive.cpio
```

### How can I create a compressed cpio archive in MacOS?
To create a compressed cpio archive in MacOS, use the following command:
```bash
find . -depth -print0 | cpio --null --create --file=archive.cpio.gz --format=newc | gzip
```

### What is the command for adding files to an existing cpio archive in MacOS?
To add files to an existing cpio archive in MacOS, use the following command:
```bash
find additional_files -depth -print0 | cpio --null --append < archive.cpio
```

### How can I extract a specific file from a cpio archive in MacOS?
To extract a specific file from a cpio archive in MacOS, use the following command:
```bash
cpio --extract --pattern="specific_file.txt" < archive.cpio
```

### What is the command to create an incremental cpio archive in MacOS?
To create an incremental cpio archive in MacOS, use the following command:
```bash
find . -depth -print0 | cpio --null --create --format=newc --reset-access-time > incremental.cpio
```

### How can I extract files interactively from a cpio archive in MacOS?
To extract files interactively from a cpio archive in MacOS, use the following command:
```bash
cpio --extract --verbose < archive.cpio
```

## Applications of the cpio command

- Creating archives
- Extracting files from archives
- Copying files between directories
- Preserving file permissions and ownership
- Incremental backups
- Verifying data integrity
- Listing contents of archives