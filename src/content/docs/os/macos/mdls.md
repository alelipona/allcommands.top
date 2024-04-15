---
title: mdls MacOS command
description: A comprehensive guide to the MacOS mdls command for metadata retrieval and display.
---

The MacOS mdls command is a powerful tool for retrieving and displaying metadata information for files on your system. This command allows you to access various details such as file creation date, file type, pixel dimensions for images, and much more. By running the mdls command followed by the file path, you can quickly gather valuable metadata information that can be useful for organizing and managing files on your Mac. Furthermore, you can use the mdls command in scripts or workflows to automate metadata retrieval tasks.

## mdls Syntax:
```bash
mdls [option] [parameter]
```
## mdls Options:

| Option | Description         |
|--------|---------------------|
| -h     | Show help message   |
| -p     | Specify the property to display metadata for   |
| -n     | Print just the metadata values, no titles   |
| -s     | Print just the metadata values, no titles and extra information   |


:::caution
Exercise caution when using the mdls command, as it displays metadata attributes for files on macOS. Be careful with sensitive information that may be revealed.
:::

## Parameters:
| Parameter | Description                                   |
|-----------|-----------------------------------------------|
| path      | Specify the file path to display metadata for |
## mdls Command Usage Examples:
### Display Metadata of a File
```bash
mdls /Users/username/Documents/file.docx
```
Retrieves and displays the metadata of the specified file.

### View Metadata of a PDF File
```bash
mdls /Users/username/Documents/document.pdf
```
Shows the metadata details of a PDF file located in the specified path.

### Show Metadata of an Image
```bash
mdls /Users/username/Pictures/photo.jpg
```
Displays the metadata information of the image file "photo.jpg".

### Check Metadata of a Music File
```bash
mdls /Users/username/Music/song.mp3
```
Shows the metadata details of the music file "song.mp3".

### List Metadata of a Folder
```bash
mdls /Users/username/Documents/
```
Lists the metadata of all files and subdirectories within the specified folder.
:::tip
When using the mdls command in MacOS, make sure to properly specify the options and values to retrieve the desired metadata information accurately. Additionally, consider using the man page for mdls (`man mdls`) to explore more options and learn about its functionality.
:::

### How do I use mdls in MacOS?
To use the mdls command in bash, execute the following command:
```bash
mdls file.txt
```

### What information does mdls provide in MacOS?
The mdls command in MacOS provides metadata information about a specified file, including details like file type, size, creation date, modification date, and more.
```bash
mdls document.pdf
```

### How to display all available metadata attributes using mdls?
To display all available metadata attributes for a specific file using mdls, run the following command:
```bash
mdls -name *
```

### How can I search for specific metadata attributes using mdls in MacOS?
You can search for specific metadata attributes using the mdls command by specifying the attribute name as shown in the example below.
```bash
mdls -name kMDItemContentType document.pdf
```

### Can I use mdls with multiple files at once?
Yes, you can use mdls with multiple files at once by providing the file paths as arguments to the command separated by a space.
```bash
mdls file1.txt file2.txt
```

### How to filter the output of mdls to display specific metadata attributes?
To filter the output of mdls and display only specific metadata attributes, use the `-name` option followed by the attribute name as shown in the command below.
```bash
mdls -name kMDItemDisplayName document.pdf
```

### Is it possible to save the output of mdls to a file in MacOS?
Yes, you can save the output of mdls to a file by using standard output redirection in bash. 
```bash
mdls document.pdf > metadata_info.txt
```

### How can I get help or more information about the mdls command in MacOS?
For more information about the mdls command, you can refer to its man page by running the following command:
```bash
man mdls
```
## Applications of the mdls command

- Extracting metadata information from files
- Investigating file attributes using Spotlight metadata
- Scripting and automation tasks to access file metadata
- Checking file creation and modification dates in macOS