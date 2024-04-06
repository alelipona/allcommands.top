---
title: What is sdel Linux command?
description: Learn about the sdel command in Linux, its usage, options, and more.
---

The sdel command in Linux is used to securely delete files and directories by overwriting them multiple times to prevent data recovery. It helps protect sensitive information from being accessed by unauthorized users.

## sdel Syntax:
```bash
sdel [options] [file/directory]
```
## sdel Options:
| Option | Description            |
|--------|------------------------|
| -r     | Recursively delete     |
| -f     | Force delete (no prompts) |
| -v     | Verbose mode (show details) |
| -h     | Help (display usage information) |

:::caution
Exercise caution while using the `sdel` command as it permanently deletes files and directories without moving them to the trash. Double-check the provided parameters to prevent accidental loss of important data.
:::

## Parameters:
| Parameter    | Description                      |
|--------------|----------------------------------|
| file/directory | The file or directory to be deleted. |
## sdel Command Usage Examples:
### Delete a Single File
```bash
sdel file.txt
```
Deletes the file named "file.txt".

### Purge a Directory Recursively
```bash
sdel -r directory
```
Removes all files and subdirectories in the specified directory recursively.

### Delete Multiple Files
```bash
sdel file1.txt file2.txt file3.txt
```
Deletes multiple files named "file1.txt", "file2.txt", and "file3.txt".

### Securely Delete a File
```bash
sdel -s confidential.txt
```
Overwrites the content of the file "confidential.txt" before deleting it, making it unrecoverable.

### Empty Trash Can
```bash
sdel -t
```
Permanently deletes all files in the trash can, instead of moving them to the trash directory.
:::tip
When using the sdel command in Linux, make sure to carefully read the command options and their respective values to avoid unintended data deletion or irreversible actions.
:::

### How do I use sdel in Linux?
To use the sdel command in bash, execute the following command:
```bash
sdel --option <value>
```

### What are the available options with the sdel command?
The sdel command in Linux offers various options for secure file deletion. You can explore these options by typing:
```bash
sdel --help
```

### How can I securely delete a specific file using sdel?
To securely delete a specific file with sdel, use the following command format:
```bash
sdel --file <filename>
```

### Can I use sdel to delete multiple files at once?
Yes, you can delete multiple files at once using sdel in Linux by providing a list of filenames as arguments. Here is an example:
```bash
sdel --file file1.txt file2.txt file3.txt
```

### How can I securely delete a directory with sdel?
To securely delete a directory and its contents with sdel, use the following command format:
```bash
sdel --dir <directory_path>
```

### Is there a way to verify the secure deletion process with sdel?
You can enable the verification option to confirm the secure deletion process with sdel. Include the `--verify` flag in your command like this:
```bash
sdel --file <filename> --verify
```

### How do I change the number of overwrites for secure deletion in sdel?
To set a specific number of overwrites for secure deletion in sdel, you can use the `--repeats` option followed by the desired number. Here is an example:
```bash
sdel --file <filename> --repeats 10
```

### Can I force the deletion of files without any confirmation using sdel?
If you want to force the deletion of files without any confirmation prompts, you can use the `--force` option in your sdel command. For example:
```bash
sdel --file <filename> --force
```
## Applications of the sdel command

- Securely delete files or directories
- Shred sensitive information before disk disposal or sharing
- Ensure that deleted data cannot be recovered through file recovery tools