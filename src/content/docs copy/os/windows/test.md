---
title: COPY CMD Windows
description: Learn all about the Windows copy command, including its syntax and usage. Discover how to copy files and directories quickly and efficiently on your computer.
---
The Windows copy command is a powerful tool that allows users to duplicate files and directories with ease. By using the correct syntax, you can specify the source and destination of the files you want to copy. Whether you need to create backups, move files between folders, or simply make duplicates, the copy command can help you achieve your goals effectively. With its flexibility and functionality, this command is a valuable asset for managing your files efficiently on a Windows operating system.

## COPY Syntax:
```cmd
copy [options] [source] [destination]
```
## Options:
| Option | Description                                 |
|--------|---------------------------------------------|
| /D     | Allow the destination file to be updated    |
| /Y     | Suppress confirmation prompt for overwriting |
| /V     | Verify that new files are written correctly |
| /-Y    | Stop the COPY command from asking to confirm overwriting                             |
| /Z     | Copy files using resume-capable copy         |
## Parameters:
| Parameter  | Description                          |
|------------|--------------------------------------|
| source     | Specifies the file(s) to copy         |
| destination| Specifies the location to copy to     |
:::caution
Exercise caution while using the COPY command as it can overwrite files without warning. Ensure you have specified the correct source and destination to avoid unintentional data loss.
:::
## Examples:

### Copy a single file to a different directory
```cmd
copy C:\Users\User1\file.txt D:\Backup\
```
This command will copy the file.txt from the User1 folder to the Backup folder on the D drive.

### Copy multiple files to a different directory
```cmd
copy C:\Users\User1\file1.txt C:\Users\User1\file2.txt D:\Backup\
```
This command will copy file1.txt and file2.txt from the User1 folder to the Backup folder on the D drive.

### Copy a directory and all its contents to another location
```cmd
copy /s C:\Users\User1\Documents D:\Backup\
```
This command will copy the Documents folder and all its contents from the User1 folder to the Backup folder on the D drive.
## COPY FAQ:
### How do I use copy in CMD?
To use the copy command in CMD, execute the following command:
```cmd
copy --option <value>
```
...

### What is the purpose of the copy command in Windows CMD?
The copy command in Windows CMD is used to copy one or more files from one location to another.
```cmd
copy file1.txt destination_folder
```
***

### Can I use wildcards with the copy command in CMD?
Yes, you can use wildcards with the copy command in CMD to copy multiple files at once.
```cmd
copy *.txt destination_folder
```
...

### How can I overwrite an existing file with the copy command in Windows CMD?
To overwrite an existing file when using the copy command in Windows CMD, add the /Y option at the end of the command.
```cmd
copy file1.txt destination_folder /Y
```
***

:::tip
When using the copy command in CMD, make sure to double-check the file paths and folder locations to avoid accidentally overwriting or deleting important files.
:::