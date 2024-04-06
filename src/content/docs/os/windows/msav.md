---
title: MSAV command in Windows
description: Perform manual scanning and removal of viruses using the Windows msav command. Learn how to use this command efficiently.
---

The Windows msav command is a powerful tool that allows users to manually scan and remove viruses from their system. By running the msav command, users can perform a thorough scan of their files and folders, identifying and removing any malicious software that may be present. This command is especially useful for users who suspect that their system may be infected with a virus and want to take immediate action. By following the correct syntax and options for the msav command, users can ensure that their system is safe and secure from potential threats.
## MSAV Syntax:
```cmd
msav [options] [parameters]
```

## Windows MSAV Options:
| Option | Description                        |
|--------|------------------------------------|
| -f     | Perform a full system scan         |
| -q     | Quick scan for selected files      |
| -r     | Remove infected files              |
| -s     | Schedule a scan for a specific time|
| -u     | Update virus definitions           |
  
## MSAV Parameters:
| Parameter | Description                    |
|-----------|--------------------------------|
| FILE      | Specify a file to scan         |
| DIRECTORY | Specify a directory to scan    |
| DRIVE     | Specify a drive to scan        |

:::caution
Exercise caution when using the MSAV command as it can impact system files and settings. Make sure to have a backup of important data before performing any scans or removal operations.
:::
## How to use MSAV command:

### Scan a specific file for viruses
```cmd
msav C:\Users\username\Documents\file.txt
```
Scans the file "file.txt" for viruses.

### Scan a specific folder for viruses
```cmd
msav C:\Users\username\Downloads
```
Scans all files in the "Downloads" folder for viruses.

### Scan all files on the C drive for viruses
```cmd
msav C:\
```
Scans all files on the C drive for viruses.

### Scan a specific file for viruses and clean it
```cmd
msav -c C:\Users\username\Downloads\infected_file.exe
```
Scans the file "infected_file.exe" for viruses and attempts to clean it.

### Specify a log file for virus scan results
```cmd
msav -l C:\Users\username\Documents\scan_log.txt C:\Users\username\Downloads
```
Scans all files in the "Downloads" folder for viruses and saves the scan results to "scan_log.txt".

### Scan specific files for viruses and exclude a file type
```cmd
msav -x .pdf C:\Users\username\Documents
```
Scans all files in "Documents" folder for viruses, excluding PDF files.

### Update virus definition files
```cmd
msav -u
```
Updates the virus definition files used by the Windows msav command.

### Scan a specific file for viruses with hidden mode
```cmd
msav -h C:\Users\username\Documents\hidden_file.exe
```
Scans the file "hidden_file.exe" for viruses in hidden mode.
:::tip
When using the msav command in Windows CMD, make sure to refer to the command's documentation or help menu for detailed information on available options, syntax, and usage examples. This will help you make the most out of the command and troubleshoot any issues more effectively.
:::

### How do I use msav in Windows?
To use the msav command in Windows, execute the following command:
```cmd
msav --option <value>
```

### How do I check the version of msav in CMD?
To check the version of msav in CMD, use the following command:
```cmd
msav --version
```

### How can I list available options with msav?
To list available options with msav, use the following command:
```cmd
msav --help
```

### How do I scan a specific file with msav?
To scan a specific file with msav, use the following command:
```cmd
msav --scan <file_path>
```

### How do I scan a directory with msav?
To scan a directory with msav, use the following command:
```cmd
msav --scan <directory_path>
```

### How can I enable verbose mode with msav?
To enable verbose mode with msav, use the following command:
```cmd
msav --verbose
```

### How do I update the virus definition database with msav?
To update the virus definition database with msav, use the following command:
```cmd
msav --update
```

### How do I quarantine a file detected by msav?
To quarantine a file detected by msav, use the following command:
```cmd
msav --quarantine <file_path>
```

### How do I exclude specific files from being scanned by msav?
To exclude specific files from being scanned by msav, use the following command:
```cmd
msav --exclude <file_path>
```

## Applications of the MSAV Command

- Backup and restore system files
- Scan and repair damaged or corrupted system files
- Verify the integrity of system files
- Fix issues related to missing or changed system files