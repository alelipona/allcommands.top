---
title: RENAME command in Windows
description: Learn how to efficiently rename files and directories in Windows using the powerful RENAME command. Automate batch renaming tasks with ease.
---

The Windows rename command is a powerful tool for efficiently renaming files and directories in the Windows operating system. By using this command, users can easily change the names of multiple files at once, saving time and effort. The rename command allows for various renaming options, such as adding prefixes or suffixes, replacing text within file names, and even renaming files based on specific criteria. This command is especially useful for automating batch renaming tasks and organizing files in a more systematic manner.

## RENAME Syntax:
```cmd
rename [drive:][path]filename1 filename2
```

## Windows RENAME Options:
| Option    | Description                         |
|-----------|-------------------------------------|
| No options| This command does not have any options.|

## RENAME Parameters:
| Parameter | Description                                                            |
|-----------|------------------------------------------------------------------------|
| drive:    | Specifies the drive containing the files to rename.                   |
| path      | Specifies the path to the file(s) that you want to rename.             |
| filename1 | Specifies the current name of the file you want to rename.             |
| filename2 | Specifies the new name for the file.                                  |

:::caution
Exercise caution when using the rename command as it can overwrite files if the new filename matches an existing file in the same directory.
:::
## How to use RENAME command:
### Rename a File
```cmd
rename file.txt newfile.txt
```
Rename the file "file.txt" to "newfile.txt".

### Rename a Folder
```cmd
rename folder1 folder2
```
Rename the folder "folder1" to "folder2".

### Rename with Path
```cmd
rename C:\folder1\file.txt C:\folder1\newfile.txt
```
Rename the file "file.txt" in folder "folder1" to "newfile.txt" while specifying the full path.

### Rename with Wildcard
```cmd
rename *.txt *.doc
```
Rename all files with the extension ".txt" to ".doc" in the current directory.

### Rename Multiple Files
```cmd
rename file1.txt file2.txt file3.txt
```
Rename multiple files in a sequential order - "file1.txt" becomes "file2.txt", "file2.txt" becomes "file3.txt", and so on.

### Rename with Directory Path
```cmd
rename "C:\folder with spaces\file.txt" "C:\folder with spaces\newfile.txt"
```
Rename a file located in a directory with spaces in its name.

### Undo a Rename Operation
```cmd
rename newfile.txt file.txt
```
Revert renaming operation by renaming "newfile.txt" back to "file.txt".

### Rename with Hidden Files
```cmd
rename "C:\folder\hiddenfile.txt" newname.txt
```
Rename a hidden file located in a folder.
:::tip
When using the Windows CMD `rename` command, make sure to carefully specify the source and target filenames to avoid accidentally overwriting important files. It is also recommended to use proper file extensions to ensure the files are correctly identified and renamed.
:::

## RENAME Command Troubleshooting Q&A:

### How do I use rename in Windows?
To use the rename command in Windows, execute the following command:
```cmd
rename --option <value>
```

### How do I use rename in CMD?
To use the rename command in Windows CMD, you can use the following syntax:
```cmd
rename "oldfilename.txt" "newfilename.txt"
```

### What is the purpose of the Windows CMD rename command?
The rename command in Windows CMD is used to change the name of a file or directory.

### Can I use wildcards with the Windows rename command?
Yes, you can use wildcards like `*` to rename multiple files that match a certain pattern. Here is an example:
```cmd
rename *.txt *.md
```

### How can I rename a directory in Windows using CMD?
To rename a directory in Windows using CMD, you can use the `rename` command with the directory paths. Here is an example:
```cmd
rename "oldfolder" "newfolder"
```

### Is it possible to rename a file extension in Windows CMD?
Yes, you can rename a file extension using the `rename` command in Windows CMD. Here is an example:
```cmd
rename "file.txt" "file.csv"
```

### How can I force rename a file in Windows CMD?
To force rename a file in Windows CMD without prompting for confirmation, you can use the `/Y` option. Here is an example:
```cmd
rename /Y "oldfile.txt" "newfile.txt"
```

### What should I do if the Windows CMD rename command fails?
If the Windows CMD rename command fails, ensure that you have the necessary permissions to rename the file or directory. Check if the file is in use by another program before attempting to rename it.

### How can I undo a rename operation in Windows CMD?
To undo a rename operation in Windows CMD, you need to rename the file back to its original name. Make sure to use the correct source and target filenames when reverting the rename operation.
## Applications of the RENAME Command

- Renaming files
- Renaming directories
- Batch renaming multiple files or directories
- Changing file extensions
- Moving files to a different location while changing their names