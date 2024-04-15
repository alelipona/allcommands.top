---
title: iconv command in MacOS
description: Convert text between different character encodings using the MacOS iconv command
---

The MacOS iconv command is a powerful tool to convert text between different character encodings. It can be used to convert files from one encoding to another, change the character set of a file, remove invalid characters, and more. With iconv, users can easily handle text files that use different character encodings, ensuring compatibility and consistency in their projects.

## iconv Syntax:
```bash
iconv [options] -f encoding -t encoding [inputfile]...
```

## MacOS iconv Options:
| Option | Description                             |
|--------|-----------------------------------------|
| -f     | Specifies the encoding of the input     |
| -t     | Specifies the encoding of the output    |
| -c     | Omit invalid characters from output     |
| -s     | Suppresses warnings                     |
| -o     | Specifies the output file               |
| -l     | Lists all available encodings           |

## iconv Parameters:
| Parameter    | Description                                |
|--------------|--------------------------------------------|
| inputfile    | The file that needs to be converted         |
| encoding     | Specifies the character encoding            |

## How to use iconv command:
### Convert a file from UTF-8 to ASCII
```bash
iconv -f UTF-8 -t ASCII input.txt > output.txt
```
Converts a text file from UTF-8 encoding to ASCII encoding.

### Convert a file from ISO-8859-1 to UTF-8
```bash
iconv -f ISO-8859-1 -t UTF-8 input.txt > output.txt
```
Converts a text file from ISO-8859-1 encoding to UTF-8 encoding.

### Convert a file from Windows-1252 to UTF-8
```bash
iconv -f WINDOWS-1252 -t UTF-8 input.txt > output.txt
```
Converts a text file from Windows-1252 encoding to UTF-8 encoding.

### Convert a file from UTF-16LE to UTF-8
```bash
iconv -f UTF-16LE -t UTF-8 input.txt > output.txt
```
Converts a text file from UTF-16LE encoding to UTF-8 encoding.

### Convert a file from UTF-8 to UTF-16BE
```bash
iconv -f UTF-8 -t UTF-16BE input.txt > output.txt
```
Converts a text file from UTF-8 encoding to UTF-16BE encoding.

### Check supported encodings
```bash
iconv -l
```
Lists all the supported encodings by iconv.

### Convert a file and ignore characters that cannot be converted
```bash
iconv -c -f UTF-8 -t ASCII input.txt > output.txt
```
Converts a text file from UTF-8 encoding to ASCII encoding, ignoring characters that cannot be converted.

### Convert a string directly
```bash
echo "Hello World" | iconv -f ASCII -t UTF-8
```
Converts a string "Hello World" from ASCII encoding to UTF-8 encoding.
:::tip
Make sure to always specify the correct input and output encodings when using the iconv command in MacOS. This will ensure that the conversion is done accurately.
:::

## iconv Command Troubleshooting Q&A:
{Questions}

### How do I use iconv in MacOS?
To use the iconv command in MacOS, execute the following command:
```bash
iconv --option <value>
```

### How do I convert a file to a different encoding using iconv in MacOS?
To convert a file to a different encoding using iconv in MacOS, use the following command:
```bash
iconv -f <from_encoding> -t <to_encoding> <input_file> > <output_file>
```

### How do I list all available encodings for iconv in MacOS?
To list all available encodings for iconv in MacOS, run the following command:
```bash
iconv -l
```

### How do I convert a file from UTF-8 to ASCII using iconv in MacOS?
To convert a file from UTF-8 to ASCII using iconv in MacOS, use the following command:
```bash
iconv -f UTF-8 -t ASCII <input_file> > <output_file>
```

### How do I ignore characters that cannot be converted by iconv in MacOS?
To ignore characters that cannot be converted by iconv in MacOS, use the following command:
```bash
iconv -c -f <from_encoding> -t <to_encoding> <input_file> > <output_file>
```

### How do I convert a file in MacOS using iconv and append the result to an existing file?
To convert a file in MacOS using iconv and append the result to an existing file, execute the following command:
```bash
iconv -f <from_encoding> -t <to_encoding> <input_file> >> <existing_file>
```

### How do I convert a string in MacOS using iconv and display the output in the terminal?
To convert a string in MacOS using iconv and display the output in the terminal, use the following command:
```bash
echo "input_string" | iconv -f <from_encoding> -t <to_encoding>
```

### How do I convert multiple files at once using iconv in MacOS?
To convert multiple files at once using iconv in MacOS, you can use a loop in combination with the iconv command. Here is an example command:
```bash
for file in *.txt; do iconv -f <from_encoding> -t <to_encoding> "$file" > "$file.converted"; done
```

### How do I convert a file in MacOS using iconv and show the progress of the conversion?
To convert a file in MacOS using iconv and show the progress of the conversion, you can use the pv command in combination with iconv. Here is an example command:
```bash
pv input_file | iconv -f <from_encoding> -t <to_encoding> > output_file
```

## Applications of the iconv command

- Convert text from one character encoding to another
- Convert text from a file specified by the path given in the input-file argument
- Convert text from standard input
- Convert text and write the output to a file specified by the path given in the output-file argument
- Display the available character encodings
- Ignore or show warnings for unsupported characters during conversion