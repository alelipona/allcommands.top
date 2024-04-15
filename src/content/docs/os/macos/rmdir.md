---
title: MacOS rmdir command
description: Learn how to use the MacOS rmdir command to remove directories from the command line efficiently.
---

The MacOS rmdir command is used to remove empty directories from the command line. This command is handy when you need to delete directories without having to navigate through Finder. It is a quick and efficient way to clean up your file system and free up space. Keep in mind that the directory must be empty for the rmdir command to work, otherwise, you will receive an error message. This command is particularly useful for experienced users who prefer working with the command line interface for managing their files and directories.

## rmdir Syntax:
```bash
rmdir [option] [parameter]
```

## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| -p     | Remove parent directories as necessary. |
| -v     | Be verbose, showing each directory as it is removed. |
| -h     | Display help information.               |

## Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
| directory | Specifies the directory to be removed. |

:::caution
Exercise caution when using the rmdir command as it permanently deletes directories and their contents without the possibility of recovery.
:::
## rmdir Usage:
### Remove an Empty Directory
```bash
rmdir directory_name
```
Removes an empty directory named "directory_name".

### Remove Multiple Empty Directories
```bash
rmdir directory1 directory2 directory3
```
Removes multiple empty directories named directory1, directory2, and directory3.

### Forcefully Remove a Directory with Content
```bash
rmdir -rf directory_name
```
Forcefully removes a directory named "directory_name" along with its contents.

### Prompt Confirmation Before Removing Directory
```bash
rmdir -i directory_name
```
Prompts the user for confirmation before removing the specified directory.
:::tip
When using the rmdir command in MacOS, ensure that you have the necessary permissions to remove directories. Double-check the directory path before executing the command to avoid accidentally deleting important data.
:::

### How do I use rmdir in MacOS?
To use the rmdir command in MacOS, execute the following command:
```bash
rmdir <directory_name>
```

### Can rmdir remove directories with files in them?
The rmdir command can only remove empty directories. If a directory contains files or other directories, you need to use the `rm` command to delete them first before using rmdir.

### How can I force rmdir to remove non-empty directories in MacOS?
To force rmdir to remove non-empty directories in MacOS, you can use the `-p` or `--ignore-fail-on-non-empty` option to suppress the error messages and remove the directory along with its content.
```bash
rmdir -p <directory_name>
```

### How do I remove multiple directories at once with rmdir in MacOS?
You can remove multiple directories at once with rmdir in MacOS by specifying the directory names separated by spaces in the command.
```bash
rmdir <directory1> <directory2> <directory3>
```

### Can rmdir delete directories recursively in MacOS?
No, the rmdir command in MacOS does not have a built-in option to delete directories and their contents recursively. For recursive deletion, you should use the `rm` command with the `-r` or `-R` option.

### How can I make rmdir command prompt for confirmation before deleting in MacOS?
To make the rmdir command prompt for confirmation before deleting a directory in MacOS, use the `-i` or `--interactive` option.
```bash
rmdir -i <directory_name>
```

### Is there a way to view the directories that will be deleted before using rmdir in MacOS?
Yes, you can preview the directories that will be deleted before executing the rmdir command by using the `-v` or `--verbose` option.
```bash
rmdir -v <directory_name>
```

## Applications of the rmdir command

- Removes empty directories
- Can be used in scripts to delete directories as needed