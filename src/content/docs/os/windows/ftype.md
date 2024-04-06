---
title: FTYPE Windows Command Guide
description: Learn how to manage file associations in Windows using the ftype command. Customize how files open and execute programs efficiently.
---

The Windows ftype command allows users to manage file associations, specifying which program should open certain file types. By using the ftype command, users can customize how files are opened, create new file types, and associate file types with specific programs. This command is useful for streamlining workflow and ensuring that files are opened with the desired application.

## FTYPE Syntax:
```cmd
ftype [FileType[=[OpenCommandString]]]
```
## Options:
| Option | Description                            |
|--------|----------------------------------------|
| FileType     | Specifies the file type to be modified. |
| OpenCommandString     | Specifies the command to use for opening files of the specified file type. |

## Parameters:
| Parameter         | Description                                                              |
|-------------------|--------------------------------------------------------------------------|
| FileType         | Specifies the file type to be modified.                                      |
| OpenCommandString | Specifies the command to use for opening files of the specified file type. |

:::caution
Exercise caution when modifying file types and their associated open command strings using the ftype command as it may impact the system's behavior and cause unexpected issues.
:::
## FTYPE Command Samples:
### Set the default program for .txt files to Notepad
```cmd
ftype txtfile="C:\Windows\System32\notepad.exe" %1
```
Sets Notepad as the default program for opening .txt files.

### Change the default program for .pdf files to Adobe Acrobat Reader
```cmd
ftype AcroRd32.pdf="C:\Program Files (x86)\Adobe\Acrobat Reader DC\Reader\AcroRd32.exe" %1
```
Changes the default program for opening .pdf files to Adobe Acrobat Reader.

### Assign VLC Media Player as the default program for .mp4 files
```cmd
ftype MP4file="C:\Program Files\VideoLAN\VLC\vlc.exe" %1
```
Assigns VLC Media Player as the default program for opening .mp4 files.

### Modify the default program for .jpg files to Windows Photo Viewer
```cmd
ftype jpegfile="C:\Program Files\Windows Photo Viewer\PhotoViewer.dll" %1
```
Modifies the default program for viewing .jpg files to Windows Photo Viewer.

### Set Google Chrome as the default program for .html files
```cmd
ftype htmlfile="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" %1
```
Sets Google Chrome as the default program for opening .html files.

### Change the default program for .docx files to Microsoft Word
```cmd
ftype Word.Document.12="C:\Program Files\Microsoft Office\Office14\WINWORD.EXE" /n /w "%1"
```
Changes the default program for opening .docx files to Microsoft Word.

### Assign Windows Media Player as the default program for .mp3 files
```cmd
ftype mp3file="C:\Program Files (x86)\Windows Media Player\wmplayer.exe" %1
```
Assigns Windows Media Player as the default program for playing .mp3 files.
:::tip
When using the ftype command in Windows, make sure to carefully specify the correct file type and associated program to avoid unintended consequences on file handling behavior.
:::

## FTYPE FAQ:
### How do I use ftype in Windows?
To use the ftype command in Windows, execute the following command:
```cmd
ftype --option <value>
```

### What is the purpose of the ftype command in Windows?
The ftype command in Windows is used to display or modify the file type associations.

### How can I list all file type associations using ftype in Windows?
To list all file type associations, you can use the following command:
```cmd
ftype
```

### How do I change a file type association using ftype in Windows?
To change a file type association, you can use the following command syntax:
```cmd
ftype <File_Type>=<Program_Name>
```

### Can I delete a file type association using the ftype command in Windows?
Yes, you can delete a file type association using the ftype command by specifying the extension with the equal sign without a program name like this:
```cmd
ftype <File_Type>=
```

### How can I set a default program for opening a specific file type using ftype in Windows?
To set a default program for opening a specific file type, you can use the following command syntax:
```cmd
ftype <File_Type>="C:\Path\To\Program.exe" "%1"
```
## Applications of the FTYPE Command

- Associate a file type with an executable program
- View and modify file type associations
- Manage how files are opened and processed based on their type