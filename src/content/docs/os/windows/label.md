---
title: Windows LABEL command
description: Learn how to use the Windows LABEL command to change the label of a disk volume. 
---

The Windows LABEL command is a useful tool for changing the label of a disk volume. This command allows users to assign a new name or label to a specific drive, making it easier to identify and manage storage devices. By using the LABEL command, users can quickly and easily rename their disk volumes without having to navigate through complex settings or menus. This can be especially helpful for organizing and categorizing drives based on their contents or purposes. The LABEL command is a straightforward and efficient way to customize disk labels and enhance the overall user experience when working with storage devices on a Windows system.
## LABEL Syntax:
```cmd
command [option] [parameter]
```
## Options:
| Option | Description              |
|--------|--------------------------|
| /a     | Display all files        |
| /s     | Display files in subfolders |
| /l     | Display details in long format |
| /h     | Display help information |
| /r     | Display files in reverse order |

## Parameters:
| Parameter | Description              |
|-----------|--------------------------|
| path      | Specify the path to the directory or file |
| filename  | Specify the name of the file to display details |

:::caution
Exercise caution when using Windows command line commands, as they can alter or delete files on your system if not used properly.
:::
## LABEL Usage:
### Create a new label named "Important"
```cmd
label Important
```
Creates a new label with the name "Important".

### List all labels in the current directory
```cmd
label
```
Lists all the labels assigned to files and directories in the current directory.

### Assign a label "Confidential" to a specific file
```cmd
label Confidential "example.txt"
```
Assigns the label "Confidential" to the file named "example.txt".

### Remove a label "Personal" from a directory
```cmd
label /d /r Personal "Documents"
```
Removes the label "Personal" from the directory named "Documents".
:::tip
When using the label command in Windows CMD, make sure to use it carefully as it can change the volume label of a disk, which may affect the system's operations.
:::

### How do I use label in Windows?
To use the label command in Windows, execute the following command:
```cmd
label C: NewLabel
```

### What is the purpose of the label command in Windows?
The label command in Windows is used to display or set the volume label of a disk.

### How can I display the current volume label of a disk using the label command?
To display the current volume label of a disk in Windows, use the following command:
```cmd
label C:
```

### Can I change the volume label of a different disk using the label command?
Yes, you can change the volume label of a different disk by specifying the appropriate drive letter in the label command. 
For example:
```cmd
label D: DataDisk
```

### Is it possible to remove the volume label of a disk using the label command?
Yes, you can remove the volume label of a disk by specifying an empty string in the label command.
For example:
```cmd
label E: ""
```

### How can I set a new volume label for a disk with spaces in the label name using the label command?
When setting a new volume label for a disk with spaces in the label name, enclose the label name in double quotation marks.
For example:
```cmd
label F: "My New Label"
```

### What are some precautions to take when using the label command in Windows?
Always double-check the disk and label you are modifying with the label command to avoid any accidental changes to important volumes on your system.
## Applications of the LABEL Command

1. Renaming a disk volume label.
2. Assigning a label to a disk volume.
3. Listing the current labels assigned to disk volumes.
4. Modifying the label of a disk volume.
5. Deleting the label of a disk volume.