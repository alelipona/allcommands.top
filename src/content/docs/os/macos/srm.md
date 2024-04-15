---
title: srm MacOS command
description: Securely delete files with the MacOS srm command. Safely remove sensitive data from your system with this powerful tool.
---

The MacOS srm command is a powerful tool that allows users to securely delete files from their system. This command is designed to completely erase the contents of a file, making it unrecoverable by traditional means. By overwriting the file multiple times with random data, srm ensures that the original data cannot be recovered, even with advanced data recovery tools. This makes srm an ideal solution for securely deleting sensitive information, such as personal documents, financial records, or other confidential data. With the srm command, users can have peace of mind knowing that their data has been safely and permanently removed from their system.

## srm Syntax:
```bash
srm [options] [files/directories]
```
## Options:
| Option | Description                        |
|--------|------------------------------------|
| -s     | Recursively delete files/directories in the specified location. |
| -z     | Overwrite before deletion with zeros. |
| -f     | Force deletion without prompting for confirmation. |
| -ll    | Toggle low-level format. |
| -v     | Verbose mode, show progress. |

## Parameters:
| Parameter       | Description                              |
|-----------------|------------------------------------------|
| files/directories | Specify the files or directories to delete. |

:::caution
Exercise caution when using the srm command as it permanently deletes files and directories without the ability to recover them. Make sure you specify the correct files/directories to avoid data loss.
:::
### Securely Remove a File
```bash
srm important_file.txt
```
Permanently removes the file "important_file.txt" from the system securely.

### Overwrite and Securely Remove a File
```bash
srm -s -z 3 sensitive_data.xls
```
Overwrites the contents of "sensitive_data.xls" three times with zeros before securely removing it from the system.

### Remove a Directory and Its Contents
```bash
srm -r confidential_folder
```
Securely removes the directory "confidential_folder" along with all its contents.

### Remove Multiple Files
```bash
srm file1.txt file2.doc file3.pdf
```
Securely removes multiple files - "file1.txt", "file2.doc", and "file3.pdf" from the system.

### Specify a Custom Path for Removal
```bash
srm -d /custom/path/secret_file.txt
```
Securely removes the file "secret_file.txt" from the specified custom path "/custom/path/".

### Display Detailed Progress Information
```bash
srm -v important_doc.pdf
```
Displays detailed progress information while securely removing the file "important_doc.pdf".
:::tip
When using the srm command in MacOS, always double-check the files or directories you are targeting for secure deletion, as the process is irreversible and the data cannot be recovered.
:::

## srm Command Help Center:
### How do I use srm in MacOS?
To use the srm command in MacOS, execute the following command:
```bash
srm --option <value>
```

### What is the purpose of the srm command in MacOS?
The srm command in MacOS securely deletes files and directories by overwriting the data multiple times to prevent any chance of recovery.
```bash
srm -r /path/to/directory
```

### How can I permanently delete a file using the srm command in MacOS?
To permanently delete a file with the srm command in MacOS, use the following command:
```bash
srm file.txt
```

### How do I force the deletion of files with the srm command in MacOS?
To force the deletion of files with the srm command in MacOS, add the `-f` flag to the command.
```bash
srm -f file.txt
```

### How can I delete a directory and its contents with the srm command in MacOS?
To delete a directory and all its contents securely using the srm command in MacOS, use the `-r` flag.
```bash
srm -r /path/to/directory
```

### Can I use wildcards with the srm command in MacOS to delete multiple files?
Yes, you can use wildcards with the srm command in MacOS to delete multiple files at once.
```bash
srm *.txt
```

### How do I securely delete a file and display verbose output with the srm command in MacOS?
To securely delete a file with verbose output using the srm command in MacOS, use the `-v` flag.
```bash
srm -v file.txt
```
## Applications of the srm command

- Securely delete files and directories
- Overwrite the content of files before deletion
- Remove sensitive information from storage devices
- Erase data securely before selling or disposing of storage devices