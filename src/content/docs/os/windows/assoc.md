---
title: ASSOC Windows command
description: Learn how to use the Windows assoc command to associate file extensions with specific programs and actions.
---

The Windows assoc command is a useful tool that allows users to associate file extensions with specific programs and actions. By using the assoc command in the command prompt, users can easily manage the file associations on their system. This can be particularly helpful when dealing with files that are not opening in the desired program or when wanting to change default programs for specific file types. The assoc command displays the current file associations and allows users to create new associations or modify existing ones. By understanding how to use the assoc command, users can take control over how files are opened and processed on their Windows system.
## ASSOC Syntax:
```cmd
assoc [.extension=[fileType]] 
```

## Windows ASSOC Options:
| Option       | Description                                 | 
|--------------|---------------------------------------------| 
| .extension=  | Specifies the file extension to associate with the specified file type. |

## ASSOC Parameters:
| Parameter    | Description                           | 
|--------------|---------------------------------------| 
| .extension   | Specifies the file extension to associate with a specific file type. | 

:::caution
Caution: Incorrectly using the assoc command can result in unintended file associations. Make sure to double-check the file extension and file type when using this command.
:::
## How to use assoc command:

### Assigning a File Extension to a File Type
```cmd
assoc .txt=txtfile
```
Associates the ".txt" file extension with the file type "txtfile".

### Displaying the File Type Associated with a File Extension
```cmd
assoc .txt
```
Shows the file type associated with the ".txt" file extension.

### Removing a File Extension Association
```cmd
assoc .txt=
```
Removes the association of the ".txt" file extension with any file type.

### Listing All File Extension Associations
```cmd
assoc
```
Displays a list of all file extensions and their associated file types.

### Changing the File Type Associated with a File Extension
```cmd
assoc .txt=textfile
```
Changes the file type association of the ".txt" file extension to "textfile".

### Associating a File Extension with a Specific Program
```cmd
assoc .docx=Word.Document.12
```
Associates the ".docx" file extension with the Microsoft Word program.

### Restoring Default File Extension Associations
```cmd
assoc .txt=txtfile
```
Restores the default association of the ".txt" file extension with the "txtfile" file type.

### Displaying Help Information
```cmd
assoc /?
```
Shows the help information for using the assoc command.
:::tip
When using the assoc command in CMD, it is important to remember that changing file associations can have a significant impact on how files are opened and handled by the operating system. Make sure to proceed with caution and understand the implications of the changes you are making.
:::

### How do I use assoc in CMD?
To use the assoc command in CMD, execute the following command:
```cmd
assoc
```
---

### What does the assoc command do in CMD?
The assoc command in CMD displays or modifies file name extension associations. It is used to associate a file extension with a file type.

```cmd
assoc .txt=txtfile
```
---

### How can I list all file associations using assoc in CMD?
You can list all file associations by simply executing the assoc command without any parameters.

```cmd
assoc
```
---

### How do I remove a file association using assoc in CMD?
To remove a file association for a specific file extension, you can use the following command format:

```cmd
assoc .txt=
```
## Applications of the assoc Command

- Linking file extensions to specific file types and programs.