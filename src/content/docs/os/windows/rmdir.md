---
title: RMDIR Windows Command Guide
description: Learn how to use the Windows rmdir command to remove directories quickly and efficiently. Find step-by-step instructions and examples for deleting folders in your system.
---

The Windows rmdir command is a powerful tool for deleting directories in the command line interface. By using this command, you can easily remove folders from your system without having to navigate through a graphical user interface. This guide provides step-by-step instructions on how to use the rmdir command effectively, along with tips and tricks for advanced users. Mastering the rmdir command can help you manage your files and directories more efficiently in a Windows environment.
## RMDIR Syntax:
```cmd
rmdir [option] [parameter]
```
## Options:
| Option   | Description                            |
|----------|----------------------------------------|
| /s       | Removes all directories and files in the specified directory and then removes the directory itself.            |
| /q       | Quiet mode, do not ask if you want to remove the directory.                   |
| /a       | Removes even the read-only directories.                   |

## Parameters:
| Parameter   | Description                            |
|-------------|----------------------------------------|
| Directory   | Specifies the directory to be removed.           |

:::caution
Exercise caution when using the `rmdir` command as it will permanently delete the specified directory and all its contents without prompting for confirmation. Ensure you specify the correct directory to prevent accidental data loss.
:::
## RMDIR Command Samples:
### Remove a Directory
```cmd
rmdir C:\example
```
Removes the directory named "example" located in the C drive.

### Remove a Directory and its Contents
```cmd
rmdir /s C:\example
```
Removes the directory named "example" along with all its contents in the C drive.

### Forcefully Remove a Directory
```cmd
rmdir /s /q C:\example
```
Forcefully removes the directory named "example" along with all its contents in the C drive without confirmation.

### Remove Multiple Directories
```cmd
rmdir /s C:\dir1 C:\dir2
```
Removes multiple directories named "dir1" and "dir2" along with their contents.

### Remove Directory with a Path Longer Than 260 Characters
```cmd
rmdir /s /q "\\?\C:\very\long\path"
```
Removes a directory with a path longer than 260 characters by using the extended UNC syntax.

### Remove Hidden Directory
```cmd
rmdir /s /ah C:\hidden
```
Removes a hidden directory named "hidden" along with all its contents in the C drive.

### Remove Read-Only Directory
```cmd
rmdir /s /ar C:\readonly
```
Removes a read-only directory named "readonly" along with all its contents in the C drive.
:::tip
When using the rmdir command in Windows, ensure that you have the necessary permissions to delete the specified directory. Deleting a directory is irreversible, so double-check the path you provide to avoid accidental data loss.
:::

## RMDIR FAQ:
### How do I use rmdir in Windows?
To use the rmdir command in Windows, execute the following command:
```cmd
rmdir /s /q C:\example_directory
```

### What is the purpose of the rmdir command?
The rmdir command is used in Windows to remove (delete) directories from the file system.

### How can I force delete a directory using rmdir?
To force delete a directory and all of its contents without confirmation in Windows, run the following command:
```cmd
rmdir /s /q C:\example_directory
```

### Can I use wildcards with rmdir in Windows?
Yes, you can use wildcards with the rmdir command in Windows to delete multiple directories that match a specified pattern. For example:
```cmd
rmdir /s /q C:\example_directory\*
```

### How can I delete a directory that is not empty with rmdir?
To delete a directory that is not empty in Windows using rmdir, you can use the `/s` flag to remove all files and subdirectories. For example:
```cmd
rmdir /s /q C:\example_directory
```

### Is there a way to include hidden and system files when using rmdir in Windows?
Yes, to include hidden and system files when deleting a directory with rmdir, you can add the `/a` flag. For example:
```cmd
rmdir /s /q /a C:\example_directory
```
## Applications of the RMDIR Command

- Remove a directory
- Remove multiple directories at once by specifying their names
- Delete directories even if they are non-empty, along with all their contents
- Can be used in batch scripts or command line to automate directory removal