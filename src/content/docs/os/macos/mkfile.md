---
title: mkfile MacOS command
description: Learn how to use the mkfile command in MacOS to create empty files with specific sizes efficiently.
---

The mkfile command in MacOS allows users to create empty files with specific sizes easily. Used in the Terminal, this command can be handy for various tasks such as testing disk space, creating placeholder files, and more. By specifying the file size in bytes, kilobytes, megabytes, or gigabytes, users can generate files quickly and efficiently. This command provides a straightforward way to create files without any content, making it a useful tool for managing file systems and testing purposes.

## mkfile Syntax:
```bash
mkfile [-nv] size[b|k|m|g] filename ...
```

## Options:
| Option | Description                   |
|--------|-------------------------------|
| -n     | Do a dry run without creating the file. |
| -v     | Verbose mode. Displays progress information. |

## Parameters:
| Parameter | Description                                |
|-----------|--------------------------------------------|
| size      | Size of the file to be created.            |
| b         | Size in bytes.                             |
| k         | Size in kilobytes.                         |
| m         | Size in megabytes.                         |
| g         | Size in gigabytes.                         |
| filename  | Name of the file to be created.            |

:::caution
Be cautious when using the `mkfile` command as it creates files of specified sizes, which can quickly consume disk space.
:::
## mkfile bash Examples:
### Create a 1GB File
```bash
mkfile 1g file1
```
Creates a file named "file1" with a size of 1GB.

### Create Multiple Files of Different Sizes
```bash
mkfile 100m file2 200m file3 500m file4
```
Creates three files named "file2", "file3", and "file4" with sizes of 100MB, 200MB, and 500MB, respectively.

### Create a File with a Specified Block Size
```bash
mkfile -n 1024k file5
```
Creates a file named "file5" with a size of 1MB using a block size of 1024KB.

### Create a Sparse File
```bash
mkfile -n 1g file6
```
Creates a sparse file named "file6" with an allocated size of 1GB but does not actually consume that much disk space.

### Create a File with a Specified Number of Blocks
```bash
mkfile -s 10k file7
```
Creates a file named "file7" with a size of 10KB by specifying the number of blocks instead of a total size.

### Create a File Using Random Data
```bash
mkfile -Bpi 100m file8
```
Creates a file named "file8" with a size of 100MB filled with random data using the HFS+ Compression API.
:::tip
When using the `mkfile` command in MacOS, make sure to specify the file size and destination path to create a new file with the given size.
:::

### How do I use mkfile in MacOS?
To use the mkfile command in MacOS, execute the following command:
```bash
mkfile 1g example_file.txt
```

### What is the purpose of mkfile in MacOS?
The mkfile command is used to create one or more files of a specified size.

### How can I specify the size of the file created with mkfile in MacOS?
To specify the size of the file to be created, you can use options like 'b' for bytes, 'k' for kilobytes, 'm' for megabytes, 'g' for gigabytes, and 't' for terabytes.

### Can I create multiple files using mkfile in MacOS?
Yes, you can create multiple files at once by providing multiple file names after specifying the size.

### How do I create a file with random data using mkfile in MacOS?
To create a file with random data, you can use the `-n` option with the desired size.
```bash
mkfile -n 100m random_data.dat
```

### Is it possible to create a sparse file with mkfile in MacOS?
Yes, you can create a sparse file using the `-s` option to specify a sparse file size.
```bash
mkfile -s 1g sparse_file.img
```

### How can I display the help information for mkfile in MacOS?
To display the help information and available options for the mkfile command, use the `-h` or `--help` option.
```bash
mkfile --help
```

### Can I use mkfile to create a file with a specific file system block size in MacOS?
Yes, you can use the `-b` option followed by the block size in bytes to create a file with a specific block size.
```bash
mkfile -b 4096 1m_file.txt
```

## Applications of the mkfile command

- Creating empty files
- Creating files with specific size
- Testing disk I/O performance
- Creating test files for disk benchmarks 
- Generating dummy data for testing purposes