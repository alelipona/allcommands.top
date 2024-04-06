---
title: Windows DELTREE command
description: Learn how to use the Windows deltree command to delete directories and all their contents with just a single command.
---

The Windows deltree command is a powerful tool that allows users to delete directories and all their contents in a single operation. This command is especially useful when you need to remove a directory and all of its subdirectories and files quickly and efficiently. 

To use the deltree command, simply open a command prompt and type "deltree" followed by the path to the directory you want to delete. Once you confirm the action, the deltree command will recursively delete the specified directory, including all files and subdirectories within it. 

It is important to exercise caution when using the deltree command, as it permanently deletes files and directories, and the operation cannot be undone. Make sure to double-check the path you are specifying to avoid accidentally deleting important data. 

Overall, the Windows deltree command is a handy tool for efficiently removing directories and their contents in a single operation. By following the proper syntax and taking necessary precautions, you can safely and effectively use the deltree command to manage your file system in Windows.

## DELTREE Syntax:
```cmd
deltree [/y] [/s] [folder]
```
## Options:
| Option | Description                      |
|--------|----------------------------------|
| /y     | Suppresses prompting to confirm the deletion of each file or folder                     |
| /s     | Deletes specified folder and all of its subfolders and files                                |

## Parameters:
| Parameter | Description                                             |
|-----------|---------------------------------------------------------|
| folder    | Specifies the folder to be deleted                       |

:::caution
Caution: Be extremely careful when using the deltree command as it permanently deletes files and folders without the possibility of recovery. Make sure you specify the correct folder to avoid unintentional data loss.
:::

### Delete a Folder and Its Contents
```cmd
deltree C:\Users\ExampleFolder
```
Deletes the folder named "ExampleFolder" along with all its contents.

### Delete Multiple Folders and Their Contents
```cmd
deltree C:\Users\Folder1 C:\Users\Folder2 C:\Users\Folder3
```
Deletes multiple folders "Folder1", "Folder2", and "Folder3" along with all their contents.

### Delete All Files in a Folder
```cmd
deltree /y C:\Users\ExampleFolder\*
```
Deletes all files in the folder named "ExampleFolder" without prompting for confirmation.

### Delete a Folder and Its Subfolders Recursively
```cmd
deltree /s C:\Users\ExampleFolder
```
Deletes the folder "ExampleFolder" along with all its subfolders and their contents recursively.
:::tip
When using the deltree command in Windows, be cautious as it will permanently delete folders and their contents without sending them to the Recycle Bin. Make sure to double-check the command and paths before executing to avoid accidental data loss.
:::

### How do I use deltree in Windows?
To use the deltree command in Windows, execute the following command:
```cmd
deltree C:\example\folder
```

### Can deltree delete multiple folders at once?
No, the deltree command in Windows can only delete one folder at a time. If you need to delete multiple folders, you must execute the command separately for each folder.

### Does the deltree command prompt for confirmation before deleting?
No, the deltree command does not provide a prompt for confirmation. It directly deletes the specified folder and its contents without asking for confirmation.

### Can deltree delete read-only files or folders?
Yes, the deltree command can delete read-only files and folders in Windows without any issues. However, it will not delete system files or folders protected by Windows.

### Is it possible to recover data deleted with the deltree command?
Once you use the deltree command in Windows to delete a folder, its contents are permanently removed and cannot be easily recovered. It is recommended to back up important data before using this command.

### Can deltree delete hidden folders or files?
Yes, the deltree command can delete hidden folders and files in Windows. It will delete any specified folder and its entire contents regardless of their visibility status.

### How can I view a list of options available for the deltree command?
To view the list of options available for the deltree command in Windows, you can use the /? flag:
```cmd
deltree /?
```

## Applications of the DELTREE Command

- Deleting a directory and all its subdirectories
- Removing a directory tree without any confirmation prompts
- Cleaning up old or unwanted directories and files efficiently