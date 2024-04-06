---
title: All About PATH Windows command
description: Discover how to manage the Windows path command efficiently and optimize your system's environment variables for seamless navigation.
---

The Windows path command is a crucial tool for setting environment variables to specify the locations of executable files. By adjusting the PATH variable, users can access applications and scripts from any directory within the command prompt. This eliminates the need to input the full file path each time a program needs to be executed, simplifying the workflow and enhancing productivity. The PATH command allows users to customize their system settings, streamline operations, and efficiently manage software dependencies.
## PATH Syntax:
```cmd
path [filename]
```
## Options:
| Option | Description                    |
|--------|--------------------------------|
|        | Display the current directory   |

## Parameters:
| Parameter | Description                       |
|-----------|-----------------------------------|
| filename  | Specifies the file to display     |

:::caution
Caution: Exercise caution when using the filename parameter as it will display the path for the specified file.
:::
## PATH CMD Examples:
### Change Directory
```cmd
cd C:\Users\Documents
```
Changes the current working directory to “C:\Users\Documents”.

### List Contents of a Directory
```cmd
dir
```
Lists the contents of the current working directory.

### Create a New Directory
```cmd
mkdir NewFolder
```
Creates a new directory named “NewFolder” in the current working directory.

### Delete a File
```cmd
del Example.txt
```
Deletes the file named “Example.txt” from the current working directory.

### Copy a File
```cmd
copy File1.txt C:\Backup
```
Copies the file “File1.txt” to the “C:\Backup” directory.

### Rename a Directory
```cmd
ren OldFolder NewFolder
```
Renames the directory “OldFolder” to “NewFolder”.
:::tip
When using the path command in Windows, remember to include the necessary options and values to customize its behavior according to your requirements.
:::

### How do I use path in Windows?
To use the path command in Windows, execute the following command:
```cmd
path --option <value>
```

### How can I add a directory to the PATH in Windows CMD?
To add a directory to the PATH in Windows CMD, use the following command:
```cmd
setx PATH "%PATH%;C:\new\directory" /m
```

### How do I view the current PATH in Windows?
To view the current PATH in Windows, run the following command:
```cmd
echo %PATH%
```

### How can I remove a directory from the PATH in Windows CMD?
To remove a directory from the PATH in Windows CMD, use the following command:
```cmd
setx PATH "%PATH:;C:\unwanted\directory=%" /m
```

### How do I clear the PATH in Windows CMD?
To clear the PATH in Windows CMD, execute the following command:
```cmd
setx PATH "" /m
```

### How can I permanently set the PATH in Windows CMD?
To permanently set the PATH in Windows CMD, use the following command:
```cmd
setx PATH "%PATH%;C:\new\path" /m
```

### How do I check if a directory is in the PATH in Windows CMD?
To check if a directory is in the PATH in Windows CMD, run the following command:
```cmd
echo %PATH% | findstr /C:"C:\desired\directory" >nul && echo Found || echo Not found
```
## Applications of the PATH Command

- Display the current list of directories in the PATH variable: `path`
- Add a directory to the PATH variable: `path C:\newdirectory`
- Remove a directory from the PATH variable: `path %PATH:;C:\deletedirectory=%`
- Restore the PATH variable to its default value: `path %SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem`