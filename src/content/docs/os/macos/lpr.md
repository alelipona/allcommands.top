---
title: lpr MacOS command
description: Learn how to use the lpr command on MacOS for printing documents from the terminal efficiently and conveniently.
---

The lpr command on MacOS allows users to print files directly from the terminal. With this command, users can easily send documents to a printer without the need for a graphical user interface. The lpr command supports various options for specifying the printer, number of copies, print quality, and more. By mastering the lpr command, users can streamline their printing workflow and efficiently manage their printing tasks from the command line.

## lpr Syntax:
```bash
lpr [options] [filename]
```
## Options:
| Option | Description                |
|--------|----------------------------|
| -#     | Specify the number of copies to print |
| -P     | Specify the printer name    |
| -o     | Specify additional options  |
| -J     | Set the job name for the print job |
| -C     | Print the file in banner format |
| -Z     | Compress the data before sending it to the printer |
| -h     | Do not wait for the job to complete before exiting |

## Parameters:
| Parameter | Description                    |
|-----------|--------------------------------|
| filename  | The file to be printed          |

:::caution
Be cautious when using the lpr command on MacOS, as incorrect usage may result in unwanted print jobs or errors. Always ensure to specify the correct options and parameters to avoid any unexpected behavior.
:::
## lpr bash Examples:
### Print a File
```bash
lpr file.txt
```
Sends the file "file.txt" to the default printer to be printed.

### Print Multiple Files
```bash
lpr file1.txt file2.txt file3.txt
```
Prints multiple files ("file1.txt", "file2.txt", and "file3.txt") one after the other.

### Print a File with Specific Printer
```bash
lpr -P PrinterName file.txt
```
Directs the file "file.txt" to be printed on a specific printer named "PrinterName".

### Print a File in Black and White
```bash
lpr -o ColorModel=KGray file.txt
```
Prints the file "file.txt" in black and white using the KGray color model.

### Print a File with Double-Sided Printing
```bash
lpr -o sides=two-sided-long-edge file.txt
```
Prints the file "file.txt" with double-sided printing, flipping the pages along the long edge.

### Print a File with Multiple Copies
```bash
lpr -#3 file.txt
```
Prints 3 copies of the file "file.txt" in a single print job.
:::tip
When using the lpr command in MacOS, make sure to familiarize yourself with the available options and parameters to maximize its functionality and efficiency.
:::

### How do I check the version of lpr in MacOS?
To check the version of lpr in MacOS, use the following command:
```bash
lpr --version
```

### How do I print a file using lpr in MacOS?
To print a file using lpr in MacOS, execute the following command:
```bash
lpr file.txt
```

### How do I list available printers with lpr in MacOS?
To list available printers using lpr in MacOS, use the following command:
```bash
lpstat -p
```

### How do I set the number of copies with lpr in MacOS?
To set the number of copies using lpr in MacOS, execute the following command:
```bash
lpr -#2 file.txt
```

### How do I cancel a print job with lpr in MacOS?
To cancel a print job using lpr in MacOS, use the following command:
```bash
lprm <job_id>
```

### How do I print to a specific printer with lpr in MacOS?
To print to a specific printer using lpr in MacOS, execute the following command:
```bash
lpr -P printer_name file.txt
```

### How do I view print job status with lpr in MacOS?
To view print job status using lpr in MacOS, use the following command:
```bash
lpq
```

### How do I set page range for printing with lpr in MacOS?
To set a page range for printing using lpr in MacOS, execute the following command:
```bash
lpr -P printer_name -o page-ranges=1-5 file.txt
```
## Applications of the lpr command

1. Sending files to a printer for printing.
2. Managing print queues.
3. Specifying print options such as number of copies, page range, and print quality.
4. Printing from the command line.
5. Automating printing tasks using scripts or other programs.
6. Checking the status of print jobs.