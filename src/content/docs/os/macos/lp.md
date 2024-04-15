---
title: lp MacOS Command Guide
description: Learn how to efficiently print files from the command line on MacOS using the lp command. Find out about options and functionalities to customize your printing tasks.
---

The MacOS lp command allows users to print files directly from the command line. By utilizing this command, users can easily send print tasks to designated printers with various options for customization. The lp command supports different printing formats, including PDF, text files, and images. Users can specify the printer destination, number of copies, paper size, print quality, and more. With the lp command, users can streamline their printing tasks and enhance productivity by avoiding the need for graphical user interfaces.

## lp Syntax:
```bash
lp [options] [filename(s)]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -q     | Perform a quiet operation    |
| -d     | Specify the printer to use   |
| -n     | Specify the number of copies |
| -o     | Provide additional options   |

## Parameters:
| Parameter  | Description                           |
|------------|---------------------------------------|
| filename(s)| Specify the file(s) to be printed     |

:::caution
Exercise caution when using the lp command as it directly sends files to the printer without any further confirmation or preview. Make sure the specified printer is correct and double-check the files being sent to avoid wasting resources or printing incorrect documents.
:::
## lp Command Samples:
### Print a Single Copy of a File
```bash
lp file.txt
```
Prints a single copy of the file "file.txt".

### Specify the Printer to Use
```bash
lp -d printer_name file.txt
```
Prints the file "file.txt" using the specified printer "printer_name".

### Print Multiple Copies of a File
```bash
lp -n 3 file.txt
```
Prints three copies of the file "file.txt".

### Print a PDF File
```bash
lp file.pdf
```
Prints the PDF file "file.pdf".

### Print a File in Grayscale
```bash
lp -o ColorModel=KGray file.txt
```
Prints the file "file.txt" in grayscale.

### Print a File Duplex (Double-Sided)
```bash
lp -o sides=two-sided-long-edge file.txt
```
Prints the file "file.txt" in duplex mode with long-edge binding.

### Print a File with Specific Page Range
```bash
lp -o page-ranges=1-3 file.txt
```
Prints pages 1 to 3 of the file "file.txt".
:::tip
Make sure to check the printer status and availability before using the lp command to avoid any printing issues.
:::

### How do I use lp in MacOS?
To use the lp command in MacOS, execute the following command:
```bash
lp -d printer_name file_name
```

### How can I print multiple copies of a file using lp in MacOS?
To print multiple copies of a file in MacOS using the lp command, you can specify the number of copies with the `-n` option. Here is an example command:
```bash
lp -n 3 file_name
```

### How do I set the page orientation when printing with lp in MacOS?
To set the page orientation (landscape or portrait) when printing using the lp command in MacOS, you can use the `-o` option. Here is an example command:
```bash
lp -o landscape file_name
```

### How can I print a PDF file using lp in MacOS?
To print a PDF file in MacOS using the lp command, you need to specify the printer and the PDF file location. Here is an example command:
```bash
lp -d printer_name file_path.pdf
```

### How do I cancel a print job using lp in MacOS?
To cancel a print job in MacOS using the lp command, you can use the `cancel` command followed by the job ID. Here is an example command:
```bash
cancel -a
```

### How do I list available printers with lp in MacOS?
To list all available printers in MacOS using the lp command, you can use the `-p` option. Here is an example command:
```bash
lpstat -p
```
## Applications of the lp command

- Print files
- Manage print jobs
- Set print job options
- Cancel print jobs