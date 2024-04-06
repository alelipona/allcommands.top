---
title: EDIT command in Windows
description: Learn how to use the Windows edit command to create and modify text files directly from the command prompt.
---

The Windows edit command is a built-in tool that allows users to create and modify text files directly from the command prompt. This command provides a simple yet effective way to work with text files without needing to rely on external text editors. By using the edit command, users can quickly open, edit, save, and close text files all within the command prompt environment. This can be particularly useful for users who prefer working in a text-based interface or need to perform quick text editing tasks without launching a separate program.

## EDIT Syntax:
```cmd
edit [filename]
```

## Windows EDIT Options:
| Option      | Description                      |
|-------------|----------------------------------|
| /A          | Processes files as ASCII text     |
| /B          | Performs the command on binary files      |
| /H          | Specifies that the file is in HTML format |
| /L          | Opens the file in read-only mode    |

## EDIT Parameters:
| Parameter   | Description                      |
|-------------|----------------------------------|
| filename    | Specifies the file to be edited  |

:::caution
Caution: Ensure to specify the correct file name while using the edit command to avoid unintentional changes to files.
:::
### Create a New Text File
```cmd
edit newfile.txt
```
Opens a new text file named "newfile.txt" for editing within the command prompt.

### Edit an Existing Text File
```cmd
edit existingfile.txt
```
Opens the existing text file named "existingfile.txt" for editing.

### Copy Text from One File to Another
```cmd
edit sourcefile.txt
edit targetfile.txt
```
Copy and paste text from "sourcefile.txt" to "targetfile.txt" using the edit command.

### Save Changes and Exit
```cmd
edit myfile.txt
```
Save changes made to the text file "myfile.txt" and exit the edit command.

### Search for a Specific String
```cmd
edit textfile.txt
SearchStr
```
Search for the string "SearchStr" within the text file "textfile.txt" using the edit command.

### Undo Last Change
```cmd
edit myfile.txt
Ctrl + Z
```
Undo the last change made in the text file "myfile.txt" using the Ctrl + Z keyboard shortcut in edit command.

### Delete a Specific Line
```cmd
edit mytextfile.txt
Ctrl + Y
```
Delete a specific line in the text file "mytextfile.txt" using the Ctrl + Y keyboard shortcut in edit command.

### Change Font Style
```cmd
edit document.rtf
Ctrl + Shift + F
```
Change the font style in the RTF file "document.rtf" using the Ctrl + Shift + F keyboard shortcut in edit command.
:::tip
When using the edit command in CMD, make sure to save your changes before exiting the editor to avoid losing any modifications you have made.
:::

### How do I use edit in CMD?
To use the edit command in CMD, execute the following command:
```cmd
edit example.txt
```

### What does the edit command in CMD do?
The edit command in CMD is used to open a simple text editor where you can create or modify text files.

### How can I save a file in edit CMD?
To save a file in edit CMD, press `Alt` to reveal the menu options, then select `File` and choose `Save`.

### Can I open multiple files using the edit command in CMD?
Yes, you can open multiple files using the edit command in CMD by providing the file names as arguments.
```cmd
edit file1.txt file2.txt
```

### How do I exit the edit CMD editor?
To exit the edit CMD editor, press `Alt` to reveal the menu options, then select `File` and choose `Exit`. You will be prompted to save any unsaved changes.

### Is it possible to change the settings of the text editor in edit CMD?
Yes, you can change the settings of the text editor in edit CMD by navigating to the `Options` menu and customizing the editor preferences.

### How can I copy and paste text within the edit CMD editor?
You can copy and paste text within the edit CMD editor by using the `Copy` and `Paste` options under the `Edit` menu.

### Can I undo changes in the edit CMD editor?
Yes, you can undo changes in the edit CMD editor by pressing `Ctrl + Z` or by selecting the `Undo` option under the `Edit` menu.

### How do I search for specific text within a file using the edit CMD editor?
To search for specific text within a file using the edit CMD editor, press `Ctrl + F` to open the Find dialog box and enter the text you want to search for.

## Applications of the EDIT Command

- Writing and editing text files
- Creating batch files
- Code editing in a simple text-based interface