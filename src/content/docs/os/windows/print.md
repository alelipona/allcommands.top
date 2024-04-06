---
title: PRINT Windows Command Guide
description: Learn how to use the Windows print command efficiently to print documents from the command line.
---

The Windows print command allows users to print documents directly from the command line, providing a quick and efficient way to send files to a printer. By utilizing various options and parameters, such as specifying the printer name or setting printing preferences, users can customize their printing tasks to meet their specific needs. This guide will walk you through the different functionalities of the Windows print command, enabling you to effectively manage your printing tasks with ease.

## PRINT Syntax:
```cmd
print [/D:device] [[drive:][path]filename ...]
```

## Options:
| Option | Description                  |
|--------|------------------------------|
| /D     | Specifies the print device.  |

## Parameters:
| Parameter | Description                                        |
|-----------|----------------------------------------------------|
| /D:device | Specifies the print device                         |
| filename  | Specifies the file(s) to print                     |
| drive     | Specifies the drive containing the file to print   |
| path      | Specifies the directory containing the file to print|

:::caution
Caution: The PRINT command may not be available or obsolete in some Windows environments. Please check the compatibility before using this command.
:::
## PRINT Command Samples:

### Print a Text File
```cmd
print C:\Users\username\Documents\example.txt
```
Prints the content of the text file "example.txt" located in the specified directory.

### Print a PDF Document
```cmd
print C:\Users\username\Documents\example.pdf
```
Prints the content of the PDF document "example.pdf" located in the specified directory.

### Print Multiple Copies
```cmd
print C:\Users\username\Documents\example.docx /#2
```
Prints 2 copies of the Word document "example.docx" located in the specified directory.

### Print to a Specific Printer
```cmd
print C:\Users\username\Documents\example.jpg /D:PrinterName
```
Prints the image file "example.jpg" to the printer with the name "PrinterName".

### Print in Color
```cmd
print C:\Users\username\Documents\example.docx /COLOR
```
Prints the Word document "example.docx" located in the specified directory in color.

### Print a Test Page
```cmd
print /D:PrinterName /T
```
Sends a test page to the printer with the name "PrinterName" to check printer functionality.

### Print All Files in a Directory
```cmd
print C:\Users\username\Documents\*.*
```
Prints all files within the specified directory "Documents".
:::tip
It's important to note that the Windows print command is primarily used to print a text file to a specified printer. Make sure to have the correct printer drivers installed and configured on your system before attempting to use the print command.
:::

## PRINT FAQ:
### How do I use print in Windows?
To use the print command in Windows, execute the following command:
```cmd
print /D:\\COMPUTER\PRINTER C:\Users\Username\Documents\example.txt
```

### How can I print to a specific printer in Windows CMD?
To print to a specific printer in Windows CMD, you can use the following command:
```cmd
print /D:\\COMPUTER\PRINTER C:\Users\Username\Documents\example.txt
```

### How do I list all available printers using the print command in Windows?
To list all available printers using the print command in Windows, you can run the following command:
```cmd
wmic printer get name
```

### How can I set printing options with the Windows print command?
To set printing options with the Windows print command, use the following command syntax:
```cmd
print /D:\\COMPUTER\PRINTER /o l /t:50 C:\Users\Username\Documents\example.txt
```

### Can I print multiple copies of a file using the Windows print command?
Yes, you can print multiple copies of a file using the Windows print command by specifying the number of copies. Here is an example command:
```cmd
print /D:\\COMPUTER\PRINTER /c:2 C:\Users\Username\Documents\example.txt
```

### How do I cancel a print job with the print command in Windows CMD?
To cancel a print job with the print command in Windows CMD, use the following command:
```cmd
echo off > \\COMPUTER\PRINTER
```
## Applications of the PRINT Command

- Printing a text file
- Redirecting output to a printer
- Specifying printer settings
- Printing multiple copies of a document
- Printing a specific range of pages