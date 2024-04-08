---
title: What is cupsfilter MacOS command?
description: cupsfilter is a MacOS command used to convert file formats for printing through CUPS (Common Unix Printing System). Learn how to use cupsfilter on MacOS.
---

cupsfilter is a command-line tool on MacOS that converts file formats for printing using the Common Unix Printing System. By utilizing cupsfilter, users can effortlessly convert files to a format supported by their printer for seamless printing.
## cupsfilter Syntax:
```bash
cupsfilter [options] [filename]
```
## cupsfilter Options:
| Option | Description                              |
|--------|------------------------------------------|
| -k     | Keep temporary files after filtering     |
| -m     | MIME media type of the input file        |
| -p     | Printer to use                           |
| -i     | Number of copies to make                 |
| -#     | Number of pages to print                 |
| -n     | Number-up printing                       |
| -o     | printer-option=value                     |
| -D     | debug-level                              |
| -J     | job-name                                 |
| -P     | Document format                          |
| -U     | Username for print job                   |

## Parameters:
| Parameter  | Description                  |
|------------|------------------------------|
| filename   | The file to be filtered      |
## cupsfilter Command Usage Examples:

### Convert a PDF file to PostScript format
```bash
cupsfilter -m application/pdf mydocument.pdf > mydocument.ps
```
Converts a PDF file named "mydocument.pdf" to PostScript format and saves it as "mydocument.ps".

### Convert a Word document to PDF format
```bash
cupsfilter -m application/vnd.openxmlformats-officedocument.wordprocessingml.document mydocument.docx > mydocument.pdf
```
Converts a Word document named "mydocument.docx" to PDF format and saves it as "mydocument.pdf".

### Print a plain text file directly
```bash
cupsfilter mytextfile.txt | lpr
```
Prints a plain text file named "mytextfile.txt" directly to the default printer.

### Convert an image file to PDF format
```bash
cupsfilter -m image/jpeg myimage.jpg > myimage.pdf
```
Converts an image file named "myimage.jpg" to PDF format and saves it as "myimage.pdf".

### Display the supported print job options
```bash
cupsfilter -O list
```
Displays the supported print job options that can be used with the cupsfilter command.
:::tip
When using the cupsfilter command in MacOS, make sure to check the available options and their syntax in the official documentation to effectively manipulate and filter print files.
:::

### How do I use cupsfilter in MacOS?
To use the cupsfilter command in bash, execute the following command:
```bash
cupsfilter --help
```

### What options are available in cupsfilter for MacOS?
To view the available options in cupsfilter, use the following command:
```bash
cupsfilter --list-conversions
```

### How do I convert a print file using cupsfilter in MacOS?
To convert a print file using cupsfilter, run the command with the appropriate options like this:
```bash
cupsfilter -m <media-type> -o <options> <file>
```

### How can I specify the output format when using cupsfilter in MacOS?
You can specify the output format by providing the desired MIME type as follows:
```bash
cupsfilter -m <output-MIME-type> <file>
```

### How do I print a file directly using cupsfilter in MacOS?
To print a file directly using cupsfilter, you can utilize the `-d <printer>` option like this:
```bash
cupsfilter -d <printer> <file>
```

### Can I specify the printer destination when using cupsfilter in MacOS?
Yes, you can specify the printer destination using the `-d <destination>` option. Here is an example command:
```bash
cupsfilter -d <destination> <file>
```

### How do I check the available MIME types for use with cupsfilter in MacOS?
You can check the available MIME types supported by cupsfilter by running the following command:
```bash
cupsfilter -T
```

### How do I specify custom filter options with cupsfilter in MacOS?
To specify custom filter options in cupsfilter, use the `-o` flag followed by the desired options like this:
```bash
cupsfilter -o <option1>=<value1> -o <option2>=<value2> <file>
```
## Applications of the cupsfilter macOS command

- Convert from one document format to another
- Prepare a document for printing on a CUPS-supported printer
- Extract and filter content from documents before printing
- Send a print job from the command line