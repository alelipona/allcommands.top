---
title: What is ripole Linux command?
description: Extract images and attachments from MS Word files using the ripole command in Linux.
---

The ripole command in Linux is used to extract images and attachments from Microsoft Word files. It is a useful tool for retrieving embedded content from Word documents.

## ripole Syntax:
```bash
ripole [options] [input_file.pdf] [output_file] [image_directory]
```

## ripole Options:

| Option           | Description                             |
|------------------|-----------------------------------------|
| -e, --extract    | Extract images and attachments          |
| -m, --meta       | Extract metadata                        |
| -o, --output     | Specify output directory                |
| -i, --ignore     | Ignore images with lower DPI            |
| -h, --help       | Display help information                |

## Parameters:
| Parameter          | Description                            |
|--------------------|----------------------------------------|
| input_file.pdf      | The input PDF file to extract from      |
| output_file         | The output file from extracted data     |
| image_directory     | The directory to save extracted images  |

## ripole Command Usage Examples:
### Extract OLE2 Compound Document Content
```bash
ripole document.doc > extracted_content.txt
```
Extracts the content of an OLE2 compound document and saves it to a text file.

### View Metadata Information of an OLE2 File
```bash
ripole -i presentation.ppt
```
Displays the metadata information of an OLE2 file, such as author, title, creation date, etc.

### Extract Embedded Object from OLE2 File
```bash
ripole -i -D extracted_files/ presentation.doc
```
Extracts all embedded objects from an OLE2 file and saves them in the specified directory.

### Extract Macros from an OLE2 File
```bash
ripole -m malicious_file.xls
```
Extracts any macros present in an OLE2 file, which can be useful for security analysis.

### Convert OLE2 Document to Plain Text
```bash
ripole -c report.doc > extracted_text.txt
```
Converts the content of an OLE2 document to plain text and saves it to a text file.
:::tip
When using the ripole command in Linux, make sure to specify the appropriate options and values to extract specific information from OLE (Object Linking and Embedding) files. Refer to the ripole man page or documentation for more details on available options and their usage.
:::

### How do I use ripole in Linux?
To use the ripole command in bash, execute the following command:
```bash
ripole -i document.doc
```

### What is the purpose of the ripole command in Linux?
The ripole command in Linux is used to extract text, images, and other embedded data from OLE (Object Linking and Embedding) files, such as Microsoft Office documents.

### How can I extract images from an OLE file using ripole?
You can extract images from an OLE file using ripole by specifying the "-i" option followed by the input OLE file. Here is an example:
```bash
ripole -i presentation.ppt
```

### Can ripole be used to extract metadata from OLE files?
Yes, ripole can be used to extract metadata from OLE files. Use the "-m" option to extract metadata information. Here is an example:
```bash
ripole -m spreadsheet.xls
```

### How to extract all content from an OLE file using ripole?
To extract all content from an OLE file using ripole, you can specify the "-a" option. This will extract all available content types. Here is an example:
```bash
ripole -a document.doc
```

### Is it possible to specify an output directory for extracted content with ripole?
Yes, you can specify an output directory for the extracted content using the "-o" option followed by the desired directory path. Here is an example:
```bash
ripole -i document.doc -o /path/to/output/
```

### How can I extract text content from an OLE file using ripole?
To extract text content from an OLE file using ripole, you can specify the "-t" option. This will extract text data from the file. Here is an example:
```bash
ripole -t presentation.ppt
```

### Does ripole support extracting embedded Excel data from OLE files?
Yes, ripole supports extracting embedded Excel data from OLE files. Use the "-e" option to extract embedded Excel data. Here is an example:
```bash
ripole -e document.xls
```

## Applications of the ripole command

- Extracting data from RIFF-based files
- Analyzing and viewing content of RIFF files
- Recovering audio or video streams from RIFF files