---
title: MacOS GetFileInfo command
description: Learn how to use the MacOS getfileinfo command to display metadata information about files and directories.
---

The MacOS **getfileinfo** command is a powerful tool that allows users to retrieve detailed metadata information about files and directories on their system. This command provides essential information such as file type, creator code, file size, and modification date. By using getfileinfo, users can easily access crucial details about their files without having to open them individually. This command is especially useful for users who need to quickly gather information about multiple files or for scripting purposes. With getfileinfo, MacOS users can efficiently manage and organize their files based on their metadata attributes.

## GetFileInfo Syntax:
```bash
mdls [option] [parameter]
```
## Options:
| Option          | Description                                |
|-----------------|--------------------------------------------|
| -name           | Display the specified metadata property     |
| -raw            | Display raw value of metadata property      |
| -plist          | Output in plist format                      |
| -null           | Separate attribute-value pairs with nulls   |
| -humanReadable  | Convert file sizes to human-readable strings|

## Parameters:
| Parameter  | Description                                  |
|------------|----------------------------------------------|
| file_path  | Path to the file for which metadata is needed|

:::caution
Exercise caution when using the 'mdls' command, as it directly accesses metadata of files and can reveal sensitive information. Ensure that you have the necessary permissions to access the specified file.
:::

### Check File Information
```bash
getfileinfo -a ~/Documents/example.txt
```
This command displays all available information about the file "example.txt" located in the "Documents" directory.

### Display Only File Type
```bash
getfileinfo -t ~/Pictures/photo.jpg
```
This command shows only the file type of the specified image "photo.jpg" in the "Pictures" directory.

### Get Extended Attributes
```bash
getfileinfo -x ~/Downloads/document.pdf
```
Use this command to retrieve the extended attributes of the file "document.pdf" located in the "Downloads" directory.

### Show Resource Fork Information
```bash
getfileinfo -r ~/Music/song.mp3
```
By executing this command, you can view the resource fork information of the file "song.mp3" in the "Music" directory.
```

## GetFileInfo Usage:
### Check File Information
```bash
getfileinfo -a ~/Documents/example.txt
```
This command displays all available information about the file "example.txt" located in the "Documents" directory.

### Display Only File Type
```bash
getfileinfo -t ~/Pictures/photo.jpg
```
This command shows only the file type of the specified image "photo.jpg" in the "Pictures" directory.

### Get Extended Attributes
```bash
getfileinfo -x ~/Downloads/document.pdf
```
Use this command to retrieve the extended attributes of the file "document.pdf" located in the "Downloads" directory.

### Show Resource Fork Information
```bash
getfileinfo -r ~/Music/song.mp3
```
By executing this command, you can view the resource fork information of the file "song.mp3" in the "Music" directory.
:::tip
When using the getfileinfo command in MacOS, make sure to replace <value> with the appropriate option or file path you want to inspect. Double-check your input to avoid errors and ensure you have the necessary permissions to access the files you are inspecting.
:::

### How do I use getfileinfo in MacOS?
To use the getfileinfo command in MacOS, execute the following command:
```bash
getfileinfo --name /path/to/file
```

### How can I check the file type with getfileinfo in MacOS?
To check the file type using getfileinfo in MacOS, run the following command:
```bash
getfileinfo --fileType /path/to/file
```

### How do I display the file creator and type information with getfileinfo in MacOS?
To display the file creator and type information using getfileinfo in MacOS, use the following command:
```bash
getfileinfo --creatorType /path/to/file
```

### How can I get information about the file size using getfileinfo in MacOS?
To retrieve information about the file size with getfileinfo in MacOS, enter the following command:
```bash
getfileinfo --size /path/to/file
```

### How do I show all available information about a file using getfileinfo in MacOS?
To display all available information about a file with getfileinfo in MacOS, use the following command:
```bash
getfileinfo --full /path/to/file
```

### How can I get the file flags using getfileinfo in MacOS?
To obtain the file flags using getfileinfo in MacOS, execute the following command:
```bash
getfileinfo --flags /path/to/file
```

### How do I view the file metadata attributes with getfileinfo in MacOS?
To view the file metadata attributes using getfileinfo in MacOS, run the following command:
```bash
getfileinfo --attributes /path/to/file
```

## Applications of the GetFileInfo command

- Retrieving information about files in the MacOS system.
- Checking the file type, creator, and other attributes.
- Viewing details like file size, creation date, and modification date.
- Assisting in file management and organization.
- Verifying file information for troubleshooting or maintenance purposes.
- Providing metadata details for files when needed.