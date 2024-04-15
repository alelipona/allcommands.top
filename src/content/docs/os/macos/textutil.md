---
title: textutil MacOS command
description: Convert, modify, and analyze text files efficiently with the MacOS textutil command.
---

The MacOS textutil command allows users to perform various operations on text files, such as converting between different text formats, modifying text content, and analyzing text files. This powerful command-line tool provides options for manipulating text files in bulk, making it a versatile tool for managing text content. Users can leverage textutil to streamline workflows, automate text-related tasks, and ensure consistency across text documents. With its wide range of features and functionalities, textutil is a valuable tool for anyone working with text files on MacOS.

## textutil Syntax:
```bash
textutil [option] [parameter]
```
## textutil Options:

| Option             | Description                           |
|---------------------|---------------------------------------|
| -convert format     | Convert input file to specified format|
| -info              | Display information about the input file|
| -cat format     | Concatenate input files into specified format|
| -stdin              | Read from standard input |
| -stdout             | Write to standard output|
| -font fontname     | Set the font used when converting to RTF or Word format|
| -inputencoding encoding | Specify the encoding of the input file|
| -outputencoding encoding | Specify the encoding of the output file|
| -showfonts      | Display available font names|
| -excludedproprietary  | Exclude proprietary RTF extensions when converting to RTF format|
| -extension extension     | Specify file extension when using -output and input files have no extension|
| -noload             | Do not load the main window when launched|
| -pagewebarchive  | Convert to a Web Archive|
| -html  | Convert to HTML format|
| -intlediting       | Set internal unicode bit to allow editing of unicode characters in Word format output|
| -font fontname      | Set the font used when converting to RTF or Word format|
| -fontsize size     | Set the font size when converting to RTF or Word format|

:::caution
Exercise caution when using the textutil command as it directly modifies or converts text files. Ensure to backup important files before performing any conversions or modifications.
:::

## Parameters:

| Parameter         | Description                          |
|-------------------|--------------------------------------|
| inputfile(s)      | The file(s) to be processed by textutil|
| outputfile        | The output file for the result of the textutil command|
| directory         | The directory where the output file will be saved|
| format            | The format to convert the input file(s) to, such as rtf, html, doc, docx, txt, etc.|
| fontname          | The name of the font to use when converting to RTF or Word format|
| encoding          | The encoding to use for the input or output file|
| extension         | The file extension to use when input files have no extension|
## textutil Command Usage Examples:
### Convert a TXT file to RTF
```bash
textutil -convert rtf example.txt
```
Converts the text file "example.txt" to Rich Text Format (RTF).

### Convert a DOCX file to TXT
```bash
textutil -convert txt example.docx
```
Converts the Word document "example.docx" to plain text format (TXT).

### Display Word Count of a Text File
```bash
textutil -info example.txt | grep "Words"
```
Displays the word count of the text file "example.txt".

### Convert a DOC file to HTML
```bash
textutil -convert html example.doc
```
Converts the Word document "example.doc" to HTML format.

### Convert a HTML file to DOCX
```bash
textutil -convert docx example.html
```
Converts the HTML file "example.html" to Word document (DOCX) format.
:::tip
When using the textutil command in MacOS, it is important to remember that it has various options that can manipulate text files in different ways, such as converting between different formats or adjusting the formatting of a text document. Familiarize yourself with the available options to make the most out of this command.
:::

### How do I use textutil in MacOS?
To use the textutil command in bash, execute the following command:
```bash
textutil --convert txt document.rtf
```

### What is the purpose of the textutil command in MacOS?
The textutil command in MacOS is used for various text-related operations, such as converting between different text formats, adjusting text formatting, and interacting with text files in the terminal.

### How can I convert a text file to a different format using textutil?
To convert a text file to a different format using textutil, you can use the following command:
```bash
textutil -convert <format> <input_file>
```

### Can textutil be used to convert Rich Text Format (RTF) files?
Yes, textutil can be used to convert Rich Text Format (RTF) files to other formats or vice versa. 
One example of converting an RTF file to a PDF file is shown below:
```bash
textutil -convert pdf document.rtf
```

### How can I view the available options and usage information for textutil?
To view the available options and usage information for the textutil command, you can use the following command:
```bash
textutil --help
```

### Is it possible to adjust the formatting of a text document using textutil?
Yes, you can adjust the formatting of a text document using textutil by specifying options like font, size, and spacing. 
An example of adjusting the font size of a text file is shown below:
```bash
textutil -font Times 12 document.txt
```

### How do I strip text formatting from a document using textutil?
To strip text formatting from a document using textutil, you can use the following command:
```bash
textutil -convert txt document.rtf
```

### Can textutil handle batch processing of multiple text files?
Yes, textutil can handle batch processing of multiple text files by specifying multiple input files or using wildcards in the command. 
An example of converting multiple RTF files to TXT files is shown below:
```bash
textutil -convert txt *.rtf
```
## Applications of the textutil command

- Convert text
- Convert RTF 
- Convert RTFD 
- Convert Word 
- Convert WordML 
- Convert HTML 
- Convert ODT 
- Convert webarchive 
- Convert XML 
- Convert MHT 
- Convert plain text 
- Combine text files 
- Merge RTF files 
- Merge RTFD files 
- Merge Word documents 
- Merge WordML documents 
- Merge HTML files 
- Merge ODT files 
- Generate a Table of Contents 
- Format a document for printing 
- Check spelling and grammar.