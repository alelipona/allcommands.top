---
title: links Linux command
description: Learn how to use the links command in Linux to view files and directories, create symbolic links, and manage links efficiently.
---

The links command in Linux is used to create, view, and manipulate symbolic links. Symbolic links are special files that act as pointers to another file or directory on the system. With the links command, you can easily create symbolic links, view the target of an existing link, or remove links when they are no longer needed. This command is particularly useful for managing files and directories in a more efficient and organized way on a Linux system. By using symbolic links, you can access files and directories from different locations without duplicating the actual data, saving storage space and streamlining your file management process.
## links Syntax:
```bash
links [options] [URL]
```
## Options:
| Option      | Description                     |
|-------------|---------------------------------|
| -download   | Download the file instead of    |
|             | viewing it in the browser        |
| -g          | Start the program in graphics    |
|             | mode (if available)              |
| -text       | Start the program in text mode   |
| -restrict   | Disallow JavaScript              |
| -version    | Display version information      |
| -help       | Display help information         |
| -nofinger   | Disable search for .finger file  |
| -noimage    | Disable displaying images        |
| -source     | View page source                 |
| -width      | Specify display width            |
| -dump       | Dump output to standard output   |
| -useragent  | Specify the User-Agent string    |
| -userheader | Specify user header string       |

## Parameters:
| Parameter   | Description                         |
|-------------|-------------------------------------|
| URL         | The URL of the webpage to open      |  

:::caution
Exercise caution when using the links command, as some options may affect how web content is displayed or interacted with. It is important to be mindful of the options chosen, especially when downloading files or limiting certain functionalities like JavaScript.
:::
## links bash Examples:
### Open a specific website
```bash
links www.example.com
```
Opens the website "www.example.com" using the links command.

### Navigate using the arrow keys
```bash
links www.example.com
```
After opening a website with links, use the arrow keys to navigate through links and interact with the webpage.

### Open a website in a new tab
```bash
links -g www.example.com
```
Opens the website "www.example.com" in a new tab using the links command.

### Download a file from a website
```bash
links -download www.example.com/file.txt
```
Downloads the file "file.txt" from "www.example.com" using the links command.

### View page source code
```bash
links -source www.example.com
```
Displays the source code of the webpage "www.example.com" using the links command.

### Submit a form on a website
```bash
links -submit www.example.com -post-data "username=myname&password=mypassword"
```
Submits a form with username and password on the website "www.example.com" using the links command.
:::tip
When using the links command in Linux, remember to navigate through the text-based interface using the arrow keys, Enter key, and relevant shortcuts provided within the program. You can access the help menu by pressing the 'h' key while using links.
:::

### How do I use links in Linux?
To use the links command in Linux, execute the following command:
```bash
links www.example.com
```

### How can I open a specific URL with links in Linux?
To open a specific URL with links in Linux, use the following command:
```bash
links https://www.example.com
```

### How do I navigate back to the previous page in links?
To navigate back to the previous page in links, press the left arrow key or the 'b' key on your keyboard.

### How can I open links in graphical mode?
To open links in graphical mode in Linux, use the following command:
```bash
links -g www.example.com
```

### How do I follow a link in the links command?
To follow a link in the links command, position the cursor over the link and press Enter.

### How can I save a webpage with links in Linux?
To save a webpage with links in Linux, you can use the save feature within the links program. Simply navigate to the desired page and press the 'd' key to save it.

### Is it possible to view images using the links command?
Yes, it is possible to view images using the links command by enabling graphics mode. You can toggle graphics mode by using the key combination 'g' followed by 'Shift+G'.

### How do I exit or quit the links program?
To exit or quit the links program, simply press the 'q' key on your keyboard.

## Applications of the links command

- Creating symbolic links
- Managing file shortcuts
- Referencing files in different directories
- Resolving file paths for easier access