---
title: Windows RD command
description: The Windows RD command is used to remove directories from a filesystem. Check out how to use this command effectively.
---

The Windows RD command is a powerful tool used to remove directories from a filesystem. It allows users to delete directories and all their contents quickly and efficiently. This command is especially useful for freeing up disk space and cleaning up unnecessary files on a system. By mastering the RD command, users can manage their directories more effectively and maintain a well-organized file structure.

## RD Syntax:
```cmd
rd [option] [parameter]
```
## Options:
| Option         | Description                            |
|----------------|----------------------------------------|
| /S             | Removes all directories and files in the specified directory in addition to the directory itself.                              |
| /Q             | Quiet mode, do not ask if ok to remove a directory tree with /S.                                    |

## Parameters:
| Parameter      | Description                            |
|----------------|----------------------------------------|
| directory_name | Specifies the name of the directory to remove.                        |

:::caution
Caution: Be cautious while running the rd command as it permanently deletes directories and files within them.
:::
## RD Usage:
### Delete a Folder
```cmd
rd C:\example_folder
```
Deletes the folder named "example_folder" located in the C: drive.

### Delete a Folder with Subfolders
```cmd
rd /s C:\example_folder
```
Deletes the folder named "example_folder" located in the C: drive along with all its subfolders and files.

### Delete a Folder without Confirmation
```cmd
rd /q C:\example_folder
```
Deletes the folder named "example_folder" located in the C: drive without asking for confirmation from the user.

### Delete a Hidden System Folder
```cmd
rd /s /q C:\example_folder
```
Deletes the folder named "example_folder" located in the C: drive along with all its subfolders and files without asking for confirmation, even if it's a hidden system folder.
:::tip
When using the rd command in Windows, be cautious as it permanently deletes directories without sending them to the Recycle Bin. Make sure to double-check the directory path before executing the command to avoid unintentional data loss.
:::

### How do I use rd in Windows?
To use the rd command in Windows, execute the following command:
```cmd
rd /s /q C:\ExampleDirectory
```

### What does the /s option do in the rd command?
The /s option in the rd command removes all directories and files in the specified directory in addition to the directory itself. It is used for deleting directories with content.
```cmd
rd /s C:\ExampleDirectory
```

### How can I force a deletion using the rd command in Windows?
To force a deletion without prompting for confirmation, you can use the /q option with the rd command in Windows.
```cmd
rd /s /q C:\ExampleDirectory
```

### Is it possible to remove multiple directories with a single rd command?
Yes, you can remove multiple directories with a single rd command by providing multiple directory paths as arguments.
```cmd
rd /s /q C:\ExampleDirectory1 C:\ExampleDirectory2
```

### How can I remove a read-only directory using the rd command?
If you encounter a read-only directory, you can use the /s /q /a-h attributes with the rd command to remove it. 
```cmd
rd /s /q /a-h C:\ReadOnlyDirectory
```

### Can I use wildcards with the rd command in Windows?
No, the rd command in Windows does not support the use of wildcards. You need to specify the full path of the directory you want to remove.
```cmd
rd /s /q C:\DirectoryToDelete
```

### What is the difference between rmdir and rd commands in Windows?
In Windows, rmdir and rd are essentially the same command for removing directories. Both commands are used interchangeably to delete directories.
```cmd
rd /s /q C:\DirectorytoDelete
```

## Applications of the RD Command

1. Deleting directories
2. Removing folders with content
3. Deleting system and hidden folders
4. Removing read-only folders
5. Deleting directories without confirmation prompts