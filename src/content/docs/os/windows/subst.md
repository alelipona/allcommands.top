---
title: Windows SUBST command
description: Learn how to use the Windows subst command to create virtual drives and map them to folders. Save time and improve your workflow with this powerful tool.
---

The Windows subst command is a useful utility that allows users to create virtual drives and map them to folders on their computer. By using this command, you can access specific directories more quickly and easily, saving time and improving your workflow. This feature can be especially helpful for managing files and folders that are frequently used or deeply nested within the file system. The subst command is simple to use and can greatly enhance your productivity when working with files on a Windows system.

## SUBST Syntax:
```cmd
subst [DriveLetter:] [Path]
```
## Options:
| Option     | Description                            |
|------------|----------------------------------------|
| /D         | Delete the virtual drive                |

## Parameters:
| Parameter  | Description                           |
|------------|---------------------------------------|
| DriveLetter| Specifies the virtual drive to create  |
| Path       | Specifies the path that the virtual drive will represent |

:::caution
Caution: Incorrect usage of the subst command can lead to the creation of unwanted virtual drives on your system. Make sure to use this command carefully and only when necessary.
:::
## SUBST Usage:
### Map Drive Letter to a Folder
```cmd
subst X: C:\ExampleFolder
```
Creates a virtual drive X: that points to the folder "C:\ExampleFolder".

### Unmap Virtual Drive
```cmd
subst X: /d
```
Removes the virtual drive mapping associated with drive letter X:.

### View Current Virtual Drive Mappings
```cmd
subst
```
Displays all the current virtual drive mappings.

### Map Drive Letter to a Network Path
```cmd
subst X: \\Server\Share
```
Maps drive letter X: to a network path "\\Server\Share" for easier access.
:::tip
When using the Windows subst command, make sure to always specify the correct drive letter and path to avoid unintentionally overriding existing mappings or directories.
:::

### What is the purpose of subst in Windows?
The subst command in Windows is used to create a virtual drive letter that points to a specific folder in the file system. This can be useful for accessing frequently used directories quickly.
```cmd
subst X: C:\ExampleFolder
```

### How do I list the current virtual drives created with subst?
To list all the current virtual drives created using subst in Windows, you can execute the following command:
```cmd
subst
```

### How do I remove a virtual drive created with subst in Windows?
To remove a virtual drive created with subst in Windows, you can use the following command:
```cmd
subst X: /d
```

### Can I map a network location as a virtual drive using subst in Windows?
Yes, you can map a network location as a virtual drive using the subst command in Windows. Here is an example:
```cmd
subst X: \\server\share
```

### How do I persistently create virtual drives with subst in Windows?
To persistently create virtual drives using subst in Windows, you can add the command to a startup script or the registry. For example, to create a virtual drive on startup:
```cmd
reg add "HKCU\Software\Microsoft\Command Processor" /v AutoRun /t REG_SZ /d "subst X: C:\ExampleFolder" /f
```

### Can I access files on a virtual drive created with subst from the Command Prompt?
Yes, you can access files on a virtual drive created with subst from the Command Prompt just like you would with a physical drive. Here's an example:
```cmd
dir X:\
```

## Applications of the SUBST Command

- Creating a virtual drive mapping an existing folder path to a new drive letter
- Simplifying file and folder access by assigning a drive letter to frequently accessed directories
- Facilitating access to deep directory structures by avoiding long path names
- Running legacy applications that require files to be located at a specific drive letter
- Organizing and grouping related files and folders under a specific virtual drive