---
title: iconv Linux Command Guide
description: The Linux iconv command is used to convert the character encoding of a file or multiple files. It is a powerful tool for handling different text encoding schemes efficiently.
---

The Linux `iconv` command is a useful tool for converting the character encoding of one or multiple files. It can handle a wide range of encoding schemes and is essential for ensuring proper communication between different systems and programs. The `iconv` command is versatile and can be used to convert text files between various encodings such as ASCII, UTF-8, and more. It is efficient for batch processing files and can be integrated into scripts for automation. Overall, the `iconv` command is a valuable tool for managing text encoding in a Linux environment.
## iconv Syntax:
```bash
iconv [options] -f from_encoding -t to_encoding inputfile(s) -o outputfile(s)
```
## Options:
| Option        | Description                           |
|---------------|---------------------------------------|
| -f encoding   | Specify the input encoding            |
| -t encoding   | Specify the output encoding           |
| -o file       | Write output to a file                |
| -c            | Omit invalid characters               |
| -s            | Suppress warnings                     |
| -l, --list    | List available encodings              |
| -h, --help    | Display help message                  |
| -v, --version | Display version information           |

## Parameters:
| Parameter      | Description                           |
|----------------|---------------------------------------|
| inputfile(s)   | The file(s) to convert encoding       |
| outputfile(s)  | The file(s) to save converted output   |

:::caution
Take caution when using the iconv command as incorrect usage may lead to data corruption or loss. Always ensure you specify the correct input and output encodings to prevent unexpected results.
:::
## iconv Command Samples:
### Convert a text file from UTF-8 to ASCII encoding
```bash
iconv -f UTF-8 -t ASCII input.txt > output.txt
```
Converts a text file named input.txt from UTF-8 encoding to ASCII encoding and saves the output to a new file called output.txt.

### Convert a file from ISO-8859-1 to UTF-8 encoding
```bash
iconv -f ISO-8859-1 -t UTF-8 input.txt > output.txt
```
Converts a file named input.txt from ISO-8859-1 encoding to UTF-8 encoding and stores the output in a new file named output.txt.

### Display a list of available character sets
```bash
iconv -l
```
Displays a list of available character sets that can be used with the iconv command.

### Convert a text file to uppercase
```bash
iconv -t ASCII//TRANSLIT -c -s -f UTF-8 input.txt | tr '[:lower:]' '[:upper:]'
```
Converts the text in a file named input.txt from UTF-8 encoding to ASCII encoding in uppercase letters.

### Convert a CSV file from UTF-8 to ISO-8859-1 encoding
```bash
iconv -f UTF-8 -t ISO-8859-1 input.csv > output.csv
```
Converts a CSV file named input.csv from UTF-8 encoding to ISO-8859-1 encoding and saves the output to a new file called output.csv.

### Ignore errors and convert a file from UTF-8 to ASCII encoding
```bash
iconv -c -f UTF-8 -t ASCII input.txt > output.txt 2>/dev/null
```
Converts a file named input.txt from UTF-8 encoding to ASCII encoding, ignoring any characters that cannot be converted, and saves the result to output.txt.

### Convert a file from UTF-8 to Shift-JIS encoding
```bash
iconv -f UTF-8 -t SHIFT-JIS input.txt > output.txt
```
Converts a file named input.txt from UTF-8 encoding to Shift-JIS encoding and saves the result in a new file named output.txt.
:::tip
When using the iconv command in Linux, make sure to carefully specify the input and output encodings to avoid data loss or corruption. Additionally, always test the command on a small sample of data before applying it to a large dataset.
:::

## iconv FAQ:
### How do I use iconv in Linux?
To use the iconv command in Linux, execute the following command:
```bash
iconv --option <value>
```

### What is the purpose of the iconv command in Linux?
The iconv command in Linux is used to convert the character encoding of a file from one specified encoding to another.

### How can I list all available encodings for iconv in Linux?
To list all available encodings for iconv in Linux, you can use the --list option as shown below:
```bash
iconv --list
```

### How do I convert a file from UTF-8 to ASCII using iconv in Linux?
To convert a file from UTF-8 to ASCII using iconv in Linux, you can use the following command:
```bash
iconv -f UTF-8 -t ASCII input.txt > output.txt
```

### Can iconv overwrite the original file during conversion in Linux?
Yes, iconv can overwrite the original file during conversion in Linux. To do this, you need to use the -o option followed by the same filename as the input file:
```bash
iconv -f UTF-8 -t ASCII input.txt -o input.txt
```

### How can I ignore conversion errors when using iconv in Linux?
To ignore conversion errors when using iconv in Linux, you can use the -c or --cvs option. This will replace characters that cannot be converted with a suitable replacement character:
```bash
iconv -f UTF-8 -t ASCII -c input.txt > output.txt
```
## Applications of the iconv command

- Convert text from one character encoding to another
- Modify or fix text encoding issues
- Transform text files to be in a compatible encoding for a specific application