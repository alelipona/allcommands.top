---
title: MKLINK command in Windows
description: Learn how to create symbolic links and hard links in Windows using the mklink command. Improve your file organization and save disk space.
---

The Windows mklink command allows users to create symbolic links and hard links between files and folders. This can help improve file organization, save disk space, and make accessing files easier. By using the mklink command, users can create a symbolic link that points to a target file or folder, allowing them to access the target through the symbolic link. Hard links, on the other hand, create additional references to the target file or folder, saving disk space by eliminating the need for duplicate files. Using the mklink command can be a powerful tool for managing files and folders efficiently in Windows.

## MKLINK Syntax:
```cmd
mklink /D Link Target
mklink /H Link Target
mklink /J Link Target
```

## Windows MKLINK Options:
| Option | Description                       |
|--------|-----------------------------------|
| /D     | Creates a directory symbolic link.|
| /H     | Creates a hard link.              |
| /J     | Creates a directory junction.     |

## MKLINK Parameters:
| Parameter | Description                       |
|-----------|-----------------------------------|
| Link      | Specifies the name of the symbolic link to be created.    |
| Target    | Specifies the path (relative or absolute) that the new link will refer to. |

:::caution
Exercise caution when using the mklink command as creating incorrect links can lead to unexpected behavior or loss of data.
:::
## How to use MKLINK command:
### Create a Symbolic Link
```cmd
mklink /d "C:\myFolderLink" "D:\myFolder"
```
Creates a symbolic link named "myFolderLink" in the C drive that points to the "myFolder" directory in the D drive.

### Create a Hard Link
```cmd
mklink /h "C:\myFileLink.txt" "D:\myFile.txt"
```
Creates a hard link named "myFileLink.txt" in the C drive that points to the "myFile.txt" file in the D drive.

### Create a Junction
```cmd
mklink /j "C:\junctionLink" "D:\myFolder"
```
Creates a junction named "junctionLink" in the C drive that points to the "myFolder" directory in the D drive.

### List all Symbolic Links
```cmd
mklink
```
Lists all symbolic links on the system.

### Determine if a File is a Symbolic Link
```cmd
mklink /h
```
Checks if a file is a symbolic link.

### Display Detailed Information about Symbolic Link
```cmd
mklink /d "C:\myFolderLink"
```
Displays detailed information about the symbolic link "myFolderLink" in the C drive.

### Create a Relative Symbolic Link
```cmd
mklink /d /j "..\OtherFolderLink" "D:\myOtherFolder"
```
Creates a symbolic link with a relative path named "OtherFolderLink" in the current directory that points to "myOtherFolder" in the D drive.

### Create a Symbolic Link with Spaces in Path
```cmd
mklink /d "C:\my Link" "D:\my Folder"
```
Creates a symbolic link with spaces in the name "my Link" in the C drive that points to the "my Folder" directory in the D drive.
:::tip
When using the mklink command in Windows CMD, make sure to run the Command Prompt as an administrator to avoid permission issues.
:::

### How do I use mklink in Windows?
To use the mklink command in Windows, execute the following command:
```cmd
mklink --option <value>
```

### What is the purpose of the mklink command in Windows?
The mklink command in Windows is used to create a symbolic link or a hard link to a file or a directory.
```cmd
mklink /D C:\LinkToFolder C:\TargetFolder
```

### How can I create a symbolic link with mklink?
To create a symbolic link using mklink, use the /D flag for directories or the /H flag for files.
```cmd
mklink /D C:\LinkToFolder C:\TargetFolder
```

### Can I create a hard link with mklink in Windows?
Yes, you can create a hard link using the mklink command by specifying the /H option.
```cmd
mklink /H C:\LinkToFile.txt C:\TargetFile.txt
```

### What is the difference between a symbolic link and a hard link in Windows?
A symbolic link points to a file or directory by name, while a hard link points to the file's data on the disk.
```cmd
mklink /D C:\SymbolicLink C:\TargetFolder
```

### How can I check if a symbolic link is valid in Windows?
You can validate a symbolic link in Windows by using the dir command with the /AL flag.
```cmd
dir /AL C:\SymbolicLink
```

### Is it possible to create a symbolic link for a network folder using mklink?
Yes, you can create a symbolic link for a network folder with mklink by specifying the network path.
```cmd
mklink /D C:\NetworkLink \\Server\SharedFolder
```

### Can I delete a symbolic link using mklink in Windows CMD?
Yes, you can delete a symbolic link created with mklink by using the del command followed by the link path.
```cmd
del C:\SymbolicLink
```

## Applications of the MKLINK Command

- Creating symbolic links
- Creating hard links
- Linking directories
- Linking files