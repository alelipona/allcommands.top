---
title: LPR Windows Command Guide
description: Learn how to use the Windows lpr command to send files for printing directly from the command line.
---

The Windows lpr command allows users to send files to a printer directly from the command line. By using the lpr command, users can easily submit print jobs without the need for a graphical user interface. This can be particularly useful for automating printing tasks or for printing files in batch mode. By following the appropriate syntax and options, users can specify the printer, print settings, and file to be printed. The lpr command is a powerful tool for users who prefer working with the command line interface in Windows.

## LPR Syntax:
```cmd
lpr [option] [parameter]
```

## Options:
| Option | Description                           |
|--------|---------------------------------------|
| -S     | Specify the hostname or IP address of the print server. |
| -P     | Specify the name of the printer.      |
| -#     | Specify the number of copies to print.|
| -o     | Specify additional options.           |
| -U     | Specify the username for authentication.|

## Parameters:
| Parameter | Description                              |
|-----------|------------------------------------------|
| file      | The file to be printed.                  |
| directory | The directory containing files to print. |


:::caution
Exercise caution when using the lpr command as it directly sends files to the printer for printing and may result in unintended or multiple printouts if not used carefully.
:::
## LPR Command Samples:
### Print a text file to a printer named "PrinterName"
```cmd
lpr -S <PrinterName> <filename.txt>
```
Prints a text file to a specific printer using the lpr command.

### Specify the number of copies to print
```cmd
lpr -# <number_of_copies> <filename.txt>
```
Prints multiple copies of a file using the lpr command.

### Print a PDF file to a printer named "PrinterName"
```cmd
lpr -S <PrinterName> -P <printer_port> <filename.pdf>
```
Prints a PDF file to a specific printer using the lpr command.

### Verify if a printer named "PrinterName" is available
```cmd
lpr -T <"Testing printer connection"> -U <username> -S <PrinterName>
```
Checks if a printer is available for printing using the lpr command.

### Specify a page range to print
```cmd
lpr -P <printer_port> -J <"Page Range"> -o page-ranges=1-3 <filename.txt>
```
Prints a specific range of pages from a text file using the lpr command.

### Print a file and place a custom title on the print job
```cmd
lpr -P <printer_port> -T <"Custom Title"> <filename.txt>
```
Prints a file to a printer with a custom title for the print job using the lpr command.

### Print a file with a specific print queue
```cmd
lprm -P <"queue_name"> -% <job_id>
```
Removes a specific print job from a print queue using the lprm command.
:::tip
When using the lpr command in Windows, make sure that your printer is properly set up and configured in your system. Check the printer's connection and settings to avoid any printing errors.
:::

## LPR FAQ:
### How do I use lpr in Windows?
To use the lpr command in Windows, execute the following command:
```cmd
lpr --option <value>
```

### What are some common options for the lpr command in Windows?
Some common options for the lpr command in Windows include selecting a specific printer, specifying the number of copies, setting the print orientation, and choosing the paper size.
```cmd
lpr -P PrinterName -#3 -o landscape -o media=A4 filename
```

### How can I print a specific file using the lpr command in Windows?
To print a specific file using the lpr command in Windows, you can specify the file path along with any desired options.
```cmd
lpr -P PrinterName C:\Users\username\Documents\example.pdf
```

### Can I cancel a print job sent using the lpr command in Windows?
Yes, you can cancel a print job sent using the lpr command in Windows by using the `lprm` command followed by the job ID.
```cmd
lprm JobID
```

### How can I list the print jobs in the queue using the lpr command in Windows?
You can list the print jobs in the queue using the `lpq` command in Windows. This will show you the status of each print job.
```cmd
lpq
```

### Is there a way to set default options for the lpr command in Windows?
Yes, you can set default options for the lpr command by creating a configuration file named `.lpoptions` in your user's home directory. This file can contain default options for the lpr command.
```cmd
echo "Default PrinterName" > %USERPROFILE%\.lpoptions
```
## Applications of the LPR Command

- Allows printing files to a network printer
- Sends print jobs from the command-line interface
- Useful for automation and batch printing tasks