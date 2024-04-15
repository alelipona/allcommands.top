---
title: MacOS qlmanage command
description: Check out how to use the qlmanage command in MacOS to preview Quick Look files quickly and efficiently.
---

The MacOS qlmanage command allows users to interact with Quick Look plugins, preview files, debug plugins, and much more. With qlmanage, users can generate thumbnails, view metadata, and even export content. This versatile command can be used to get a sneak peek at various file types without the need to open them in separate applications. By utilizing qlmanage, users can streamline their workflow and access file information with just a few keystrokes.

## qlmanage Syntax:
```bash
qlmanage [option] [parameter]
```

## Options:
| Option | Description                         |
|--------|-------------------------------------|
| -p     | Preview the file                    |
| -t     | Display the type of the file        |
| -x     | Remove cached previews for the file |

## Parameters:
| Parameter | Description                        |
|-----------|------------------------------------|
| file      | The file you want to manage         |

:::caution
Exercise caution when using the qlmanage command, as incorrect usage of options or parameters can lead to unintended consequences or removal of cached previews.
:::
## qlmanage Usage:
### Preview an Image File
```bash
qlmanage -p image.jpg
```
This command will show a Quick Look preview of the image file "image.jpg".

### Display Help Information
```bash
qlmanage -h
```
Displays the help information to learn about the available options and arguments for qlmanage.

### Generate a Thumbnail for a PDF File
```bash
qlmanage -t -s 512 -o . document.pdf
```
Generates a thumbnail image of the PDF file "document.pdf" with a size of 512 pixels and saves it in the current directory.

### Clear Quick Look Cache
```bash
qlmanage -r cache
```
Clears the Quick Look cache, which can help troubleshoot issues related to Quick Look previews. 

## {EXAMPLES}
:::tip
To get started with qlmanage, it is important to familiarize yourself with its various options and functionalities. Experimenting with different commands and flags will help you understand how to efficiently utilize this versatile tool in macOS.
:::

### How do I use qlmanage in MacOS?
To use the qlmanage command in MacOS, execute the following command:
```bash
qlmanage -p <file_path>
```

### What is the purpose of qlmanage in MacOS?
The qlmanage command in MacOS is used to interact with Quick Look, allowing users to generate Quick Look previews for specified files.

### How can I list available options with qlmanage in MacOS?
To list available options with qlmanage in MacOS, run the following command:
```bash
qlmanage -h
```

### How can I display a Quick Look preview using qlmanage in MacOS?
To display a Quick Look preview using qlmanage in MacOS, use the following command:
```bash
qlmanage -p <file_path>
```

### Can I get detailed information about a file with qlmanage in MacOS?
Yes, you can get detailed information about a file using qlmanage in MacOS by running the command:
```bash
qlmanage -r info <file_path>
```

### How do I set a custom thumbnail size with qlmanage in MacOS?
To set a custom thumbnail size with qlmanage in MacOS, use the following command:
```bash
qlmanage -t /path/to/image.png -s 200
```

### Is it possible to refresh the Quick Look cache using qlmanage in MacOS?
Yes, you can refresh the Quick Look cache using qlmanage in MacOS with the following command:
```bash
qlmanage -r
```

## Applications of the qlmanage command

1. Previewing Quick Look thumbnails for files
2. Generating Quick Look previews for files
3. Inspecting Quick Look properties of files
4. Setting preferences for Quick Look
5. Clearing the Quick Look cache