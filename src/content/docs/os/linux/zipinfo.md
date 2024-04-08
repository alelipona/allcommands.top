---
title: zipinfo Linux command
description: Learn how to use the Linux zipinfo command to display information about files in a ZIP archive. 
---

The `zipinfo` command in Linux is used to display detailed information about the files contained within a ZIP archive. It provides a comprehensive list of files, their sizes, compression ratios, and modification times. This command is useful for quickly checking the contents of a ZIP file without having to extract it. Additionally, `zipinfo` can be used to verify the integrity of the archive by displaying any errors or inconsistencies found.

## zipinfo Syntax:
```bash
zipinfo [options] [zipfile]
```

## Options:
| Option  | Description                     |
|---------|---------------------------------|
| -1      | Show one line of information     |
| -2      | Show two lines of information    |
| -h      | Show a short help                |
| -l      | Display file details             |
| -T      | Test the zip file                |
| -v      | Display more information         |
| -z      | Display zip file comment         |
| -Z      | Display a zipfile comment        |

## Parameters:
| Parameter | Description                    |
|-----------|--------------------------------|
| zipfile   | Specifies the zip file to view |
  
:::caution
Exercise caution when using the zipinfo command to view information about zip files. Ensure the accuracy of the file path provided to avoid unintended operations or potential data loss.
:::
## zipinfo bash Examples:
### Display Information About a Zip file
```bash
zipinfo file.zip
```
This command displays detailed information about the contents of the "file.zip" archive.

### List Files in a Zip Archive
```bash
zipinfo -1 archive.zip
```
List all files contained in the "archive.zip" without additional details.

### Display Archive Comment
```bash
zipinfo -z document.zip
```
View any comment attached to the "document.zip" archive.

### Get Compression Method Information
```bash
zipinfo -v report.zip
```
Display detailed information about the compression methods used in the "report.zip" archive.

### Show File Permissions in a Zip Archive
```bash
zipinfo -l data.zip
```
List file permissions and other details for files within the "data.zip" archive.

### Extract Archive Metadata
```bash
zipinfo -m backup.zip
```
Extract and display metadata information for the contents within the "backup.zip" archive.
:::tip
When using the zipinfo command in Linux, remember to consult the manual page for detailed information on various options and usage scenarios.
:::

### How do I use zipinfo in Linux?
To use the zipinfo command in Linux, execute the following command:
```bash
zipinfo -1 example.zip
```

### What is the purpose of the zipinfo command?
The zipinfo command in Linux is used to display information about files in a ZIP archive.
```bash
zipinfo example.zip
```

### How can I view the contents of a ZIP archive using zipinfo?
You can view the contents of a ZIP archive by using the zipinfo command with the archive file as the argument.
```bash
zipinfo -l example.zip
```

### How do I list the files in a ZIP archive without details with zipinfo in Linux?
To list the files in a ZIP archive without details, use the following command:
```bash
zipinfo -1 example.zip
```

### How can I extract specific files from a ZIP archive using zipinfo?
You can extract specific files from a ZIP archive with the help of zipinfo by first noting the file paths and then using the unzip command.
```bash
zipinfo example.zip | grep "desired_file.txt" | xargs unzip example.zip
```

### Is it possible to display detailed information about a specific file in a ZIP archive using zipinfo?
Yes, you can display detailed information about a specific file in a ZIP archive by providing the filename as an argument to the zipinfo command.
```bash
zipinfo -l example.zip specific_file.txt
```

### How do I list metadata of files and directories in a ZIP archive with zipinfo?
To list metadata of files and directories in a ZIP archive, use the following command:
```bash
zipinfo -m example.zip
```

### Can zipinfo display file comments in a ZIP archive?
Yes, zipinfo can display file comments in a ZIP archive. You can view file comments along with file details.
```bash
zipinfo -z example.zip
```
## Applications of the zipinfo command

- Viewing the contents of a zip archive
- Extracting metadata from a zip archive
- Checking the integrity of a zip file
- Listing the files and directories inside a zip archive