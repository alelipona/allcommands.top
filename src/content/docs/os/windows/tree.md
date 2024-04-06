---
title: What is TREE Windows command?
description: Display folder structure with the Windows tree command.
---

The Windows tree command is a built-in utility that displays the folder structure of a specified directory in a tree format in the command prompt. It helps users visualize the hierarchy of files and directories within a specific folder.

## TREE Syntax:
```cmd
tree [drive:][path] [/F] [/A] [/Q] [/S] [/D] [/L n]
```

## TREE Options:

| Option | Description                          |
|--------|--------------------------------------|
| /F     | Displays the names of the files in each directory. |
| /A     | Uses ASCII instead of extended characters. |
| /Q     | Displays the ownership of each file. |
| /S     | Includes the subdirectories in the list. |
| /D     | Lists the contents of each directory. |
| /L n   | Specifies that the tree should only go up to a specific level n in the directory tree. |

## Parameters:
| Parameter   | Description                          |
|-------------|--------------------------------------|
| drive:      | Specifies the drive letter to display the tree from. |
| path        | Specifies the starting directory for the tree.      |

## TREE Command Usage Examples:
### Display Directory Structure
```cmd
tree
```
This command displays the directory structure starting from the current directory.

### Display Directory Structure with Subdirectories
```cmd
tree /f
```
It displays the file names in addition to the directory structure.

### Display Directory Structure with Specific Depth
```cmd
tree /f /a 2
```
It shows the directory structure up to a depth of 2 levels along with file names.

### Save Directory Structure to a Text File
```cmd
tree /f /a > directory_structure.txt
```
This command saves the directory structure with file names to a text file named "directory_structure.txt".

### Display Directory Structure Including Hidden Files
```cmd
tree /a /f /h
```
It displays the directory structure including hidden files and folders.
:::tip
When using the tree command in Windows CMD, make sure to always specify the correct options and values to display the desired directory structure. Additionally, you can save the output to a text file by using the output redirection operator (>). This can be particularly helpful when you need to share or analyze the directory structure later.
:::

### How do I use tree in Windows?
To use the tree command in CMD, execute the following command:
```cmd
tree
```

### What option can I use to show the tree in Windows CMD?
To display the directory structure in the Windows CMD using the tree command, you can use the /A option to specify ansi characters. Example:
```cmd
tree /A
```

### How can I include the filenames while using tree in Windows CMD?
When using the tree command in Windows CMD, you can include filenames in the directory structure by using the /F option. Here's an example:
```cmd
tree /F
```

### How do I display the tree structure with specific level of depth in Windows CMD?
To display the tree structure up to a specific level of depth in Windows CMD using the tree command, you can use the /L option followed by the desired depth level. Example:
```cmd
tree /L 2
```

### Can I save the output of the tree command to a text file in Windows CMD?
Yes, you can save the output of the tree command to a text file in Windows CMD by using the output redirection operator (>). For example:
```cmd
tree > output.txt
```

### How to show only directories with tree in Windows CMD?
To exclusively display directories without files in the tree structure using the tree command in Windows CMD, you can use the /F and /A options together. Here's an example:
```cmd
tree /F /A
```

### How do I exclude specific directories from the tree structure in Windows CMD?
To exclude specific directories from the tree structure when using the tree command in Windows CMD, you can utilize the /I option followed by the directory name(s) to be excluded. Example:
```cmd
tree /I "directory1" /I "directory2"
```

### How to display the complete directory structure with tree in Windows CMD?
To display the complete directory structure in Windows CMD using the tree command, simply run the command without any additional options. Example:
```cmd
tree
```

## Applications of the TREE Command

- Display directory structure
- List subdirectories and files within a directory
- Show hierarchical view of folders and files
- Print the structure of directories in a tree-like format
- Help visualize the organization of files and folders