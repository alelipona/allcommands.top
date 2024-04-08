---
title: What is chflags MacOS command?
description: Learn how to use the MacOS chflags command to manage file flags for enhanced security and control.
---

The MacOS chflags command allows users to modify file flags for improved security and control over file access and permissions.

## chflags Syntax:
```bash
chflags [options] [parameters] file
```
## chflags Options:
| Option | Description                |
|--------|----------------------------|
| -R     | Recursively set flags      |
| -v     | Explain what is being done |
| -h     | Operate on a symlink       |
| -arch  | Set architecture hint      |

## Parameters:
| Parameter    | Description                                 |
|--------------|---------------------------------------------|
| flags        | A comma-separated list of flags to set      |
| file         | The file(s) to which the flags will be set  |

## chflags Command Usage Examples:
### Hide a File in Finder
```bash
chflags hidden myfile.txt
```
This command hides the file "myfile.txt" in Finder.

### Prevent a File from Being Deleted
```bash
chflags uchg important_document.doc
```
Sets the "uchg" flag on the file "important_document.doc" to prevent it from being deleted or modified.

### Show Hidden Files in Finder
```bash
chflags nohidden hiddenfile.txt
```
Reveals the hidden file "hiddenfile.txt" in Finder by removing the hidden flag.

### Lock a File to Prevent Changes
```bash
chflags schg important_file.txt
```
Locks the file "important_file.txt" to prevent any changes or deletions.

### Restore Default Flags to a File
```bash
chflags nouchg myfile.doc
```
Removes the "uchg" flag from the file "myfile.doc" to restore default permissions.
:::tip
When using the chflags command in MacOS, make sure to carefully read the manual or documentation to understand the available options and their effects. Additionally, exercise caution when using chflags as it can change file attributes that may impact the system's operation or security.
:::

### How do I use chflags in MacOS?
To use the chflags command in bash, execute the following command:
```bash
chflags -R hidden /path/to/directory
```

### What is the purpose of the chflags command in MacOS?
The chflags command in MacOS is used to change file flags or file attributes such as hidden, immutable, archived, and more.

### How can I make a file immutable using chflags?
To make a file immutable using chflags, run the following command:
```bash
chflags uchg /path/to/file
```

### How do I recursively remove the hidden flag from a directory with chflags?
You can recursively remove the hidden flag from a directory using the chflags command with the "nohidden" option as shown below:
```bash
chflags -R nohidden /path/to/directory
```

### What does the "uchg" flag do in the chflags command?
The "uchg" flag in the chflags command sets the user immutable flag, which prevents the file or directory from being modified or deleted even by the superuser (root).

### How can I list the flags set on a file using chflags?
To list the flags set on a file using chflags, you can use the following command:
```bash
ls -lO /path/to/file
```

### Can chflags be used to hide files in MacOS?
Yes, the chflags command can be used to hide files in MacOS by setting the hidden flag on the desired file or directory.

### How do I clear all flags from a file with chflags?
To clear all flags from a file using chflags, you can run the following command:
```bash
chflags 0 /path/to/file
```
## Applications of the chflags command

1. Set or clear various attributes of files or directories such as immutable, archived, hidden, nodump, sappend, schg, simmutable, sunlnk, uappend, uchg, uimmutable, and urestricted.
2. Allow files or directories to be inaccessible or undeletable by certain users.
3. Manage file and directory permissions and access control.
4. Provide additional security and protection for sensitive files or directories.
5. Prevent accidental deletion or modification of critical system files.