---
title: What is FORFILES Windows command?
description: Discover how to efficiently manage files using the powerful Windows forfiles command.
---

The Windows forfiles command is a versatile tool that allows users to perform batch operations on files, such as deletion, archiving, or moving based on specified criteria. It offers a range of options for filtering files and executing actions, making it a valuable asset for automated file management tasks.

## FORFILES Syntax:
```cmd
forfiles /P <Path> /S /C "<Command>"
```

## FORFILES Options:
| Option | Description                                     |
|--------|-------------------------------------------------|
| /P     | Specifies the path to start searching.          |
| /S     | Search in all subdirectories.                   |
| /C     | Executes the specified command on each file.    |

:::caution
Exercise caution when using the forfiles command as it can potentially impact a large number of files if not used properly.
:::

## Parameters:
| Parameter  | Description                                      |
|------------|--------------------------------------------------|
| Path       | Specifies the starting directory for the search. |
| Command    | Defines the command to be executed for each file.|
## FORFILES Command Usage Examples:
### Delete Files Older Than 7 Days
```cmd
forfiles /p "C:\path\to\folder" /s /m *.* /d -7 /c "cmd /c del @file"
```
This command will delete all files older than 7 days in the specified folder and its subfolders.

### List Files Smaller Than 1MB
```cmd
forfiles /p "C:\path\to\folder" /s /m *.* /c "cmd /c if @fsize lss 1048576 echo @path"
```
It will list all files smaller than 1MB in the specified folder without accessing subfolders.

### Run a Command on Files Created Today
```cmd
forfiles /p "C:\path\to\folder" /m *.* /d +0 /c "cmd /c echo @path"
```
This command executes the specified command on files created today in the specified folder.

### Copy Files Modified This Month
```cmd
forfiles /p "C:\path\to\folder" /m *.* /d +01 /c "cmd /c copy @path C:\destination\folder"
```
Copies files modified within the current month from the specified folder to the destination folder.

### Execute a Command on Text Files
```cmd
forfiles /p "C:\path\to\folder" /s /m *.txt /c "cmd /c echo @file is a text file"
```
This command runs a command on all text files in the specified folder and its subfolders.

:::tip
When using the forfiles command in Windows CMD, make sure to carefully specify the options and values to avoid unintended consequences. Always double-check your command before executing it to prevent any unexpected deletions or modifications to files.
:::

### How do I use forfiles in Windows?
To use the forfiles command in CMD, execute the following command:
```cmd
forfiles /p "C:\Path\to\directory" /s /m *.txt /c "cmd /c echo @path"
```

### What is the purpose of the /p option in forfiles?
The /p option in forfiles is used to specify the path that the command will operate on. It allows you to define the directory where forfiles will start its search.
```cmd
forfiles /p "C:\Path\to\directory" /c "cmd /c echo @file"
```

### How do I use forfiles to delete files older than a specific date?
To delete files older than a specific date using forfiles, you can use the /d parameter with the desired date and the /c parameter to specify the command to be executed.
```cmd
forfiles /p "C:\Path\to\directory" /s /d -30 /c "cmd /c del @file"
```

### How can I make forfiles search subdirectories as well?
To make forfiles search subdirectories, use the /s option in the command. This will enable forfiles to search within all subdirectories of the specified path.
```cmd
forfiles /p "C:\Path\to\directory" /s /c "cmd /c echo @path"
```

### How do I list files modified within the last 7 days using the forfiles command?
To list files modified within the last 7 days with forfiles, use the /m option with the appropriate wildcard and the /d parameter to specify the number of days.
```cmd
forfiles /p "C:\Path\to\directory" /m *.txt /c "cmd /c echo @file"
```

### How can I use forfiles to move files from one directory to another?
To move files from one directory to another using forfiles, you can utilize the move command in the /c parameter to specify the move operation.
```cmd
forfiles /p "C:\Source\directory" /m *.txt /c "cmd /c move @file C:\Destination\directory"
```

### How do I use forfiles to execute a command on each file in a directory?
To execute a command on each file in a directory with forfiles, use the /c option to define the command to be executed for each file.
```cmd
forfiles /p "C:\Path\to\directory" /c "cmd /c echo @path"
```
## Applications of the FORFILES Command

1. Delete files older than a certain number of days
2. List files in a directory
3. Execute a command on files that meet specific criteria
4. Move files to another location based on specified conditions
5. Rename files in bulk using specific criteria
6. Copy files to a different location based on certain attributes
7. Run commands on files that match a particular pattern or extension
8. Archive files that meet specific conditions
9. Delete files with a particular extension
10. Zip files that match certain criteria