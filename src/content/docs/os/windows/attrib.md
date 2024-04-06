---
title: All About ATTRIB Windows command
description: Learn all about how to use the Windows attrib command to manage file attributes efficiently.
---

The Windows attrib command is a powerful tool used to manage file attributes on your computer. By using the attrib command, you can change the attributes of a file or directory, such as hidden, read-only, system, and archive. This command allows you to control how files are displayed and accessed in the Windows operating system. Overall, the Windows attrib command is a versatile tool that can help you manage file attributes efficiently. Whether you need to hide files, protect them from modifications, or mark them for backup, the attrib command provides the functionality you need to control how files are treated in the Windows environment.

## ATTRIB Syntax:
```cmd
attrib [+ attribute | - attribute] [pathname] [/s [/d]]
```
## Options:
| Option     | Description                                    |
|------------|------------------------------------------------|
| + attribute| Sets an attribute                                |
| - attribute| Clears an attribute                             |
| /s         | Processes files in the current folder and all subfolders                   |
| /d         | Processes folders as well                          |

## Parameters:
| Parameter | Description                        |
|-----------|------------------------------------|
| [pathname]| Specifies the path to the file or folder                        | 

## ATTRIB CMD Examples:
### Display Attributes of a File
```cmd
attrib C:\example.txt
```
This command displays the attributes of the file named "example.txt" located in the C: drive.

### Remove Read-Only Attribute from a File
```cmd
attrib -r D:\document.docx
```
This command removes the read-only attribute from the file named "document.docx" located in the D: drive.

### Set Archive Attribute for a Folder and Its Contents
```cmd
attrib +a /s /d E:\folder
```
This command sets the archive attribute for the folder named "folder" and all its contents in the E: drive.

### Hide a File
```cmd
attrib +h F:\hiddenfile.txt
```
This command hides the file named "hiddenfile.txt" located in the F: drive.

### Remove Hidden Attribute from a Folder
```cmd
attrib -h G:\secretfolder
```
This command removes the hidden attribute from the folder named "secretfolder" located in the G: drive.
:::tip
When using the attrib command in CMD, make sure to double-check the options and values you are providing to avoid accidentally modifying important file attributes.
:::

### How do I use attrib in CMD?
To use the attrib command in CMD, execute the following command:
```cmd
attrib +h C:\example.txt
```
---

### What is the purpose of attrib +h in CMD?
The attrib +h command in CMD is used to set the hidden attribute for a file. This command makes the file invisible in normal directory listings.
```cmd
attrib +h C:\example.txt
```
---

### How can I remove the hidden attribute from a file using attrib in CMD?
To remove the hidden attribute from a file using the attrib command in CMD, you can execute the following command:
```cmd
attrib -h C:\example.txt
```
---

### How do I display all attributes of a file with attrib in CMD?
To display all attributes of a file using the attrib command in CMD, you can use the following command:
```cmd
attrib C:\example.txt
```
---

### Can I make a file read-only using the attrib command in CMD?
Yes, you can make a file read-only using the attrib command in CMD by executing the following command:
```cmd
attrib +r C:\example.txt
```
---

### How do I remove the read-only attribute from a file using attrib in CMD?
To remove the read-only attribute from a file using the attrib command in CMD, you can use the following command:
```cmd
attrib -r C:\example.txt
```
---

### Is it possible to change multiple attributes of a file simultaneously using attrib in CMD?
Yes, you can change multiple attributes of a file simultaneously using the attrib command in CMD. For example, to make a file read-only and hidden, you can use the following command:
```cmd
attrib +r +h C:\example.txt
```
## Applications of the attrib Command

1. Display or change file attributes.
2. Hide files or folders.
3. Remove the hidden attribute from files.
4. Set the read-only attribute on files.
5. Remove the read-only attribute from files.
6. Set the archive attribute on files.
7. Remove the archive attribute from files.