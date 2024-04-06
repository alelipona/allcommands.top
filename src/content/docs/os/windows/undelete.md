---
title: UNDELETE Windows command
description: Easily recover deleted files on Windows using the UNDELETE command.
---

The Windows undelete command allows users to restore deleted files from their computer, providing a straightforward way to recover accidentally deleted data. By using the UNDELETE command in the Windows Command Prompt, users can quickly retrieve deleted files without the need for third-party software. This command works by scanning the file system for recently deleted files and offers a simple and efficient way to restore them. Overall, the UNDELETE command is a useful tool for recovering lost data on Windows systems.
## UNDELETE Syntax:
```cmd
undelete [drive:][path]filename
```
## Options:
| Option | Description                     |
|--------|---------------------------------|
| /S     | Restore all deleted files        |
| /T     | Restores the file with original time stamp |
| /P     | Displays prompt for confirmation |

## Parameters:
| Parameter | Description                                                        |
|-----------|--------------------------------------------------------------------|
| drive:    | Specifies the drive to restore the file from                      |
| path      | Specifies the path of the file to restore                         |
| filename  | Specifies the name of the file to restore                         |

:::caution
The undelete command can potentially overwrite existing files when restoring deleted files. It is advisable to use this command with caution and ensure the correct file is being restored to avoid unwanted data loss.
:::
## UNDELETE CMD Examples:
### Undelete a File in the Current Directory
```cmd
undelete filename.txt
```
Recovers the file named "filename.txt" from the current directory.

### Undelete a File in a Specific Directory
```cmd
undelete C:\Users\John\Documents\deleted_file.docx
```
Restores the file "deleted_file.docx" from the specified directory.

### Undelete Multiple Files
```cmd
undelete file1.txt file2.jpg file3.pdf
```
Recovers multiple files simultaneously - file1.txt, file2.jpg, and file3.pdf.

### Undelete Files with Wildcards
```cmd
undelete *.jpg
```
Recovers all deleted files with the .jpg extension in the current directory.

### Undelete a File and Rename It
```cmd
undelete deleted_doc.txt -r mydoc.txt
```
Restores "deleted_doc.txt" and renames it to "mydoc.txt" during recovery.

### Undelete a File and Specify the Output Directory
```cmd
undelete C:\Deleted\photo.jpg -o D:\Recovered
```
Recovers the file "photo.jpg" from C:\Deleted\ and saves it in the D:\Recovered directory.
:::tip
When using the undelete command in Windows, make sure to specify the correct options and values to recover the desired files. Additionally, it is recommended to avoid delay in running the command after realizing the files have been deleted to increase the chances of successful recovery.
:::

## UNDELETE Command Help Center:

### How do I use undelete in Windows?
To use the undelete command in Windows, execute the following command:
```cmd
undelete --option <value>
```

### Can I recover multiple files at once with undelete?
Yes, you can recover multiple files at once with the undelete command by specifying the file names or using wildcards in the command.

### Is it possible to recover files from a specific directory with undelete?
Yes, you can specify the directory path in the undelete command to recover files only from that particular directory.

### How can I view a list of recoverable files before restoring them with undelete?
You can use the "list" option with undelete command to view a list of recoverable files before actually restoring them. 

### Does undelete have any options for restoring files to a specific location?
Yes, undelete provides options to specify the destination directory where the recovered files should be saved.

### How can I filter the files to be recovered based on their type with undelete?
You can use the appropriate file type as a parameter in the undelete command to filter the files to be recovered based on their type.

### Can I recover deleted files from a specific date range with undelete?
Yes, you can specify a date range in the undelete command to recover files deleted within that specific timeframe.

### Is there a way to recover files with specific attributes using undelete?
Yes, you can include file attributes as part of the undelete command to recover files with specific attributes intact.
## Applications of the UNDELETE Command

- Restore deleted files
- Recover accidentally deleted data
- Retrieve files deleted from the recycle bin
- Recover lost documents
- Restore images and videos
- Recover deleted emails