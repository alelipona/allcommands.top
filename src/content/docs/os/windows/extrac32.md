---
title: What is EXTRAC32 Windows command?
description: Learn how to use the EXTRAC32 Windows command efficiently for file extraction and compression tasks.
---

The EXTRAC32 command in Windows is used for file extraction and compression tasks. It enables users to compress files using the CAB format and extract files from CAB archives. This command is helpful for managing files efficiently and conserving disk space.

## EXTRAC32 Syntax:
```cmd
extrac32 /c path\to\compressed.cab destination_folder
```
## EXTRAC32 Options:
| Option | Description                  |
|--------|------------------------------|
| /c     | Extracts the contents of the compressed .cab file. |

## Parameters:
| Parameter        | Description                               |
|------------------|-------------------------------------------|
| path\to\compressed.cab | Specifies the path to the compressed .cab file. |
| destination_folder     | Specifies the destination folder where the contents will be extracted. |
   
:::caution
Exercise caution when using the extrac32 command as it directly extracts files to the specified destination folder without prompting for confirmation, potentially overwriting existing files.
:::
## EXTRAC32 Command Usage Examples:
### Extract a Compressed File
```cmd
extrac32 source.cab destination_folder
```
Extracts the contents of the "source.cab" file to the specified "destination_folder".

### View Help Information
```cmd
extrac32 /?
```
Displays help information about using the extrac32 command and its various options.

### Extract Files with Specified Parameters
```cmd
extrac32 -o -p source.cab destination_folder
```
Extracts the files from "source.cab" to the "destination_folder" while preserving the folder structure.

### Extract Specific File Types
```cmd
extrac32 -e source.cab *.txt destination_folder
```
Extracts all text files (*.txt) from "source.cab" to the "destination_folder".

### Extract Compressed Files Silently
```cmd
extrac32 source.cab /Y
```
Extracts the contents of "source.cab" to the current directory without displaying any prompts to the user.
:::tip
Before using the extrac32 command in Windows CMD, make sure you have the necessary permissions to extract files and that you are providing the correct options and values. Double-check the syntax of the command to avoid any errors.
:::

### How do I use extrac32 in Windows?
To use the extrac32 command in CMD, execute the following command:
```cmd
extrac32 --option <value>
```

### What are the available options for the extrac32 command?
The extrac32 command in Windows CMD supports various options. You can view the available options by using the following command:
```cmd
extrac32 /?
```

### How to extract a specific file using extrac32?
To extract a specific file using the extrac32 command in Windows CMD, you can use the following syntax:
```cmd
extrac32 <archive.cab> <file_to_extract> --destination <output_path>
```

### Can I extract files from a CAB archive using extrac32?
Yes, you can extract files from a CAB archive using the extrac32 command in Windows CMD. Simply specify the CAB archive file as input. Here is an example command:
```cmd
extrac32 example.cab --destination C:\ExtractedFiles
```

### How to overwrite existing files during extraction with extrac32?
If you want to overwrite existing files during extraction using the extrac32 command, you can use the `/Y` option. Here is an example command:
```cmd
extrac32 example.cab --destination C:\ExtractedFiles /Y
```

### How to extract files silently with extrac32?
To extract files silently (without displaying progress) using extrac32 in Windows CMD, you can use the `/Q` option. Here is an example command:
```cmd
extrac32 example.cab --destination C:\ExtractedFiles /Q
```

### How to list the contents of a CAB archive with extrac32?
You can list the contents of a CAB archive using the extrac32 command in Windows CMD by specifying the archive file. Here is an example command:
```cmd
extrac32 example.cab
```

### Can I extract files to a specific directory with extrac32?
Yes, you can extract files to a specific directory by specifying the destination path using the `--destination` option with extrac32. Here is an example command:
```cmd
extrac32 example.cab --destination C:\ExtractedFiles
```

## Applications of the EXTRAC32 Command

- Extract files from a compressed cabinet (.cab) archive.