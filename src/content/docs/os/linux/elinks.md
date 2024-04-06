---
title: elinks Linux command
description: Use the elinks command in Linux to browse the web from the terminal. Access websites, navigate links, submit forms, and more efficiently.
---

The elinks command in Linux is a text-based web browser that allows users to browse the internet directly from the terminal. It provides a fast and efficient way to access websites, navigate links, submit forms, and interact with web content without the need for a graphical interface. With elinks, users can enjoy a lightweight browsing experience while still having access to essential web functionalities.

## elinks Syntax:
```bash
elinks [options] [URL]
```
## Options:
| Option               | Description                                         |
|----------------------|-----------------------------------------------------|
| -dump                | Display the content of the specified URL            |
| -no-connect          | Start without connecting to the network             |
| -no-references       | Do not show references on the screen                |
| -no-numbering        | Do not show line numbering on the screen            |
| -no-references       | Do not highlight the references on the screen       |
| -no-backup           | Do not make backups of files being edited           |
| -no-mouse            | Disable mouse functionality in the terminal         |

## Parameters:
| Parameter  | Description                                      |
|------------|--------------------------------------------------|
| URL        | The URL of the website to be viewed or interacted | 

:::caution
Use caution when using the elinks command as incorrect usage could lead to unexpected behavior or errors.
:::
## elinks bash Examples:
### Open a Website in Text Mode
```bash
elinks example.com
```
Opens the website example.com in text mode using elinks.

### Navigate Forward and Backward in Links
```bash
elinks -force-html -dump 1 https://example.com
```
Uses elinks to navigate forward and backward through links on a web page.

### Save Website Content to a File
```bash
elinks -dump https://example.com > website_content.txt
```
Saves the content of the website example.com to a text file using elinks.

### Display Images from a Web Page
```bash
elinks -dump 1 https://example.com
```
Uses elinks to display images from a web page in text mode.

### Access a Specific URL
```bash
elinks -source https://example.com
```
Accesses the specific URL https://example.com using elinks.

### Search for Text on a Web Page
```bash
elinks -dump https://example.com | grep "search_term"
```
Uses elinks to search for a specific text ("search_term") on the web page example.com.
:::tip
When using the elinks command in Linux, remember to familiarize yourself with the various options and configurations available. Experiment with different parameters to customize your browsing experience and make the most out of this text-based web browser.
:::

### How do I use elinks in Linux?
To use the elinks command in Linux, execute the following command:
```bash
elinks --dump https://example.com
```

### How can I open a specific URL using elinks in Linux?
To open a specific URL using elinks in Linux, use the following command:
```bash
elinks https://example.com
```

### How do I navigate through links on a web page in elinks?
To navigate through links on a web page in elinks, you can use the arrow keys on your keyboard. Press the right arrow key to follow a link and the left arrow key to go back.

### How can I save a web page using elinks in Linux?
To save a web page using elinks in Linux, use the following command:
```bash
elinks -dump https://example.com > saved_page.txt
```

### Can I use elinks to browse the web without a graphical interface in Linux?
Yes, elinks is a text-based web browser that allows you to browse the web in the terminal without the need for a graphical interface.

### How do I search for text on a web page in elinks?
To search for text on a web page in elinks, press the "/" key on your keyboard, enter the text you want to search for, and press Enter. Elinks will highlight the text on the page.

### How do I exit elinks in Linux?
To exit elinks in Linux, press the "Q" key on your keyboard. This will quit the elinks browser and return you to the command line.

### How can I view the complete list of keyboard shortcuts in elinks?
To view the complete list of keyboard shortcuts in elinks, you can press the "?" key while in the elinks browser to access the help menu, which includes a list of available shortcuts.
## Applications of the elinks command

- Browse the web
- Access websites in text mode
- Read documentation and articles in a terminal-friendly format
- Navigate websites through links and forms
- Download files from the internet
- View and interact with web pages without a graphical browser