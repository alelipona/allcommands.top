---
title: What is rmdir Linux command?
description: Learn how to remove directories in Linux using the rmdir command.
---

The rmdir command in Linux is used to remove empty directories. It is a simple and efficient way to clean up your file system and remove unwanted directories quickly.

## rmdir Syntax:
```bash
rmdir [option] [directory]
```

## rmdir Options:
| Option | Description                     |
|--------|---------------------------------|
| -p     | Remove DIRECTORY and its ancestors; e.g., 'rmdir -p a/b/c' is similar to 'rmdir a/b/c a/b a'.       |
| -v     | Output a diagnostic for every directory processed.       |
| --ignore-fail-on-non-empty | Ignore each failure to remove a directory that is non-empty.|

:::caution
Exercise caution while using the rmdir command as it will delete directories permanently and cannot be undone. Ensure you specify the correct directory to be removed to avoid data loss.
:::

## Parameters:
| Parameter  | Description                     |
|------------|---------------------------------|
| directory  | Specify the directory to be removed.        |
## rmdir Command Usage Examples:
### Remove an Empty Directory
```bash
rmdir directory_name
```
Removes the specified empty directory named "directory_name".

### Remove Multiple Empty Directories
```bash
rmdir dir1 dir2 dir3
```
Removes multiple empty directories named "dir1", "dir2", and "dir3".

### Remove Directory and Its Contents
```bash
rmdir -r myfolder
```
Recursively removes the directory "myfolder" along with all its contents.

### Remove Directory Silently
```bash
rmdir -q mydirectory
```
Removes the directory "mydirectory" without displaying any messages or errors.

### Remove Directory with a Prompt
```bash
rmdir -i directory_name
```
Prompts for confirmation before removing the specified directory.
:::tip
When using the rmdir command in Linux, make sure to double-check the directory you are removing, as the action is irreversible and does not prompt for confirmation. It is recommended to use the rm -r command instead of rmdir if you want to remove directories with content.
:::

### How do I use rmdir in Linux?
To use the rmdir command in bash, execute the following command:
```bash
rmdir directory_name
```

### How to remove multiple directories with rmdir?
To remove multiple directories using rmdir, you can specify the directories as space-separated values in a single command:
```bash
rmdir directory1 directory2 directory3
```

### How to force rmdir to remove non-empty directories?
To force the rmdir command to remove non-empty directories, you can use the -p flag, which removes the directory and its parent directories if they become empty.
```bash
rmdir -p directory_name
```

### How to make rmdir quiet?
To make the rmdir command quiet and suppress error messages, you can use the -q flag.
```bash
rmdir -q directory_name
```

### How to display verbose output with rmdir?
To display verbose output while using rmdir, you can use the -v flag, which shows the directories being processed.
```bash
rmdir -v directory_name
```

### How to remove a directory with a space in its name using rmdir?
When removing a directory with a space in its name using the rmdir command, enclose the directory name in quotes to prevent syntax errors.
```bash
rmdir "directory with space"
```

### How to interactively remove directories with rmdir?
To interactively remove directories using rmdir and be prompted for confirmation before deletion, you can use the -i flag.
```bash
rmdir -i directory_name
```
## Applications of the rmdir command

- Removing empty directories
- Deleting multiple empty directories at once
- For use in scripts to automate directory removal operations