---
title: What is gzip Linux command?
description: Compress and decompress files efficiently on Linux with the gzip command.
---

The gzip command in Linux is used to compress and decompress files efficiently. It is commonly used to reduce file size and save disk space.

## gzip Syntax:
```bash
gzip [option] [file]
```

## gzip Options:
| Option | Description |
|--------|-------------|
| -c     | Write output on standard output; keep original files unchanged. |
| -d     | Decompress; when this option is used, gzip will try to decompress the specified file(s). |
| -f     | Force compression or decompression even if the file has multiple links or the corresponding file already exists. |
| -h, --help | Display a help message and exit. |
| -k     | Keep the original file (don't delete it). |
| -l     | List the compressed file metadata only. |
| -q     | Quiet mode; suppress non-essential output. |
| -t     | Test the integrity of the specified file(s). |
| -v     | Verbose mode; show the compression ratio for each file processed. |
| -1 to -9 | Set the compression level (1 being the fastest and 9 being the best compression ratio). |

:::caution
Exercise caution when using the gzip command, as it will modify files by compressing them. It is important to make sure you have a backup of the original files before running gzip.
:::

## Parameters:
| Parameter | Description |
|-----------|-------------|
| file      | The file(s) to be compressed or decompressed. Wildcards can also be used to specify multiple files to process at once. |
## gzip Command Usage Examples:
### Compress a File
```bash
gzip file.txt
```
Compresses a file named "file.txt" using gzip.

### Compress Multiple Files Simultaneously
```bash
gzip file1.txt file2.txt file3.txt
```
Compresses multiple files ("file1.txt", "file2.txt", "file3.txt") simultaneously using gzip.

### Compress and Keep Original File
```bash
gzip -c file.txt > file.txt.gz
```
Compresses a file named "file.txt" using gzip and keeps the original file while creating a compressed file "file.txt.gz".

### Decompress a File
```bash
gzip -d file.txt.gz
```
Decompresses a file "file.txt.gz" that was previously compressed using gzip.

### Compress a Directory Recursively
```bash
tar -czf directory.tar.gz directory/ 
```
Compresses a directory "directory" recursively using "tar" and then compresses the tar file using gzip to create "directory.tar.gz".
:::tip
When using the gzip command in Linux, keep in mind that you can use various options to customize the compression process. Make sure to check the manual (man gzip) for a full list of available options and their descriptions.
:::

### How do I use gzip in Linux?
To use the gzip command in bash, execute the following command:
```bash
gzip file.txt
```

### How do I compress a file and keep the original using gzip?
To compress a file with gzip and keep the original, you can use the -k or --keep option. Here's an example:
```bash
gzip -k file.txt
```

### How do I decompress a file using gzip?
To decompress a file with gzip, you can use the -d or --decompress option. Here's an example:
```bash
gzip -d file.txt.gz
```

### How do I list the contents of a gzip file without decompressing it?
To list the contents of a gzip file without decompressing it, you can use the -l or --list option. Here's an example:
```bash
gzip -l file.txt.gz
```

### How do I force gzip to compress files, even if they are already compressed?
To force gzip to compress files, even if they are already compressed, you can use the -f or --force option. Here's an example:
```bash
gzip -f file.txt
```

### How do I set the compression level when using gzip?
To set the compression level when using gzip, you can use the -[1-9] option to specify the level (1 being the fastest and 9 being the best compression). Here's an example:
```bash
gzip -9 file.txt
```

### How do I compress multiple files using gzip?
To compress multiple files using gzip, you can list all the files as arguments. Here's an example:
```bash
gzip file1.txt file2.txt file3.txt
```

### How do I compress a directory and its contents using gzip?
To compress a directory and its contents using gzip, you can use the -r or --recursive option. Here's an example:
```bash
gzip -r directory/
```
## Applications of the gzip command

- Compressing files to reduce storage space
- Combining with tar to create compressed archive files
- Fast file compression and decompression