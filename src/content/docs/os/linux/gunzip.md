---
title: Linux gunzip command
description: Learn how to efficiently decompress gzip files using the Linux gunzip command.
---

The Linux gunzip command is used to decompress gzip files in the terminal. It is a simple and efficient tool for unpacking files that have been compressed using gzip compression. By running the gunzip command followed by the name of the gzip file you want to decompress, you can quickly extract the original uncompressed file. Gunzip is often used in combination with other Linux commands to streamline file compression and decompression processes.
## gunzip Syntax:
```bash
gunzip [option] [parameter]
```
## Options:

| Option | Description             |
|--------|-------------------------|
| -c     | Write output on standard output; keep original files unchanged. |
| -d     | Decompress.             |
| -f     | Force. Ignore nonexistent files and do not prompt. |
| -k     | Keep input files during decompression. |
| -l     | List the uncompressed size and compression ratio of the compressed files. |
| -r     | Recursively uncompress. |
| -t     | Test the integrity of the compressed files. |
| -v     | Verbose. Display the name and percentage reduction for each file processed. |

## Parameters:

| Parameter | Description                       |
|-----------|-----------------------------------|
| file      | The file(s) to be decompressed.   |
| directory | The directory containing files to be decompressed. |

:::caution
Exercise caution while using the gunzip command. Improper usage can lead to loss of data or unintended consequences. Always ensure that you have backups of important files before proceeding with decompression operations.
:::
## gunzip Usage:
### Extract a gzip-compressed file
```bash
gunzip file.txt.gz
```
This command will decompress the file.txt.gz and create a new file named file.txt.

### Decompress multiple gzip-compressed files
```bash
gunzip *.gz
```
All the files with .gz extension in the current directory will be decompressed.

### Keep the original gzip file
```bash
gunzip -k file.txt.gz
```
The -k option will keep the original .gz file after decompressing file.txt.gz.

### Verbose output during decompression
```bash
gunzip -v file.txt.gz
```
The -v option provides verbose output, showing the progress and details of the decompression process.
:::tip
Remember that the gunzip command is used to decompress files that have been compressed using gzip. Make sure to have the necessary permissions to read/write the files you are working with.
:::

### How do I use gunzip in Linux?
To use the gunzip command in Linux, execute the following command:
```bash
gunzip file.txt.gz
```

### What is the purpose of the gunzip command?
The gunzip command is used in Linux to decompress files that have been compressed using the gzip compression tool.

### How can I list the contents of a gzip file without decompressing it?
To list the contents of a gzip file without decompressing it, you can use the zcat command along with the file name. For example:
```bash
zcat file.txt.gz
```

### Can I specify a different output file name when using gunzip?
Yes, you can specify a different output file name when using gunzip by using the -c option followed by the desired output file name. For example:
```bash
gunzip -c file.txt.gz > output.txt
```

### How can I decompress multiple gzip files at once using gunzip?
To decompress multiple gzip files at once using gunzip, you can use a wildcard (*) to specify the files you want to decompress. For example:
```bash
gunzip *.gz
```

### Is it possible to maintain the original gzip files after decompressing with gunzip?
Yes, you can maintain the original gzip files after decompressing them with gunzip by using the -k or --keep option. For example:
```bash
gunzip -k file.txt.gz
```

### How can I force the decompression of a file using gunzip?
To force the decompression of a file using gunzip, you can use the -f or --force option. For example:
```bash
gunzip -f file.txt.gz
```

## Applications of the gunzip command

- Decompresses .gz files
- Used to extract compressed files
- Often used in combination with tar for working with .tar.gz files