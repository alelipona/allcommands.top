---
title: atsutil MacOS command
description: Discover how to leverage the power of the atsutil command in MacOS for managing font caches efficiently.
---

The atsutil command in MacOS enables users to interact with the Apple Type Services font system, facilitating tasks like clearing font caches, querying font metadata, and more. By running various commands through atsutil in the Terminal, users can troubleshoot font-related issues, optimize system performance, and ensure smooth rendering of text across different applications. This versatile tool provides a range of functionalities for managing fonts effectively on MacOS systems.
## atsutil Syntax:
```bash
atsutil [command] [option] [parameter]
```
## Options:
| Option | Description                                  |
|--------|----------------------------------------------|
| -r     | Reset the ATS font cache                      |
| -f     | Force an operation (use with caution)         |
| -d     | Display debugging information                 |
| -c     | Display cache information                     |
| -e     | Enumerate font directories                    |
| -l     | Display list of registered caches             |
| -u     | Unregister a cache                            |
| -d     | Display debugging information                 |
| -i     | Initialization                                |

## Parameters:
| Parameter    | Description                                      |
|--------------|--------------------------------------------------|
| file_path    | Path to the font file or directory to operate on |

:::caution
Exercise caution when using the atsutil command, as improper use can lead to unexpected behavior in the font cache system. Always make sure to back up relevant data before performing operations that reset or modify the font cache.
:::

## atsutil bash Examples:
### List all installed fonts
```bash
atsutil list
```
This command lists all installed fonts on your MacOS system.

### Clear the font cache
```bash
atsutil databases -removeUser
```
Use this command to clear the user font cache in MacOS.

### Enable verbose logging
```bash
atsutil -v verbose on
```
Enables verbose logging for font-related operations on MacOS.

### Verify the system font databases
```bash
atsutil databases -verify
```
This command allows you to verify the integrity of system font databases.

### Reset the font databases
```bash
atsutil databases -remove
```
Use this command to reset the font databases on your MacOS system.

### Disable anti-aliasing for font smoothing
```bash
atsutil antialias -off
```
Disables anti-aliasing for font smoothing in MacOS.
:::tip
When using the atsutil command in MacOS, make sure to carefully read the documentation and understand the options available to avoid unintended consequences.
:::

### How do I use atsutil in MacOS?
To use the atsutil command in MacOS, execute the following command:
```bash
atsutil --version
```

### What is the purpose of atsutil in MacOS?
The atsutil command in MacOS is used for managing font settings and the Apple Type Services font registry.
```bash
atsutil server -ping
```

### How can I list the available options for atsutil in MacOS?
To view a list of available options for the atsutil command in MacOS, you can use the help flag.
```bash
atsutil -h
```

### How do I clear the font cache using atsutil in MacOS?
You can clear the font cache in MacOS by running the following atsutil command:
```bash
atsutil databases -removeUser
```

### How can I enable or disable font anti-aliasing with atsutil in MacOS?
To enable or disable font anti-aliasing using atsutil in MacOS, you can use the following commands:
```bash
# Enable font anti-aliasing
atsutil antialias -on

# Disable font anti-aliasing
atsutil antialias -off
```

### How do I reset the font server using atsutil in MacOS?
You can reset the font server in MacOS by executing the following atsutil command:
```bash
atsutil server -shutdown
```

### How can I force the font server to update using atsutil in MacOS?
To force the font server to update in MacOS, you can use the following atsutil command:
```bash
atsutil server -update
```

### How do I check the status of the font server with atsutil in MacOS?
You can check the status of the font server in MacOS by running the following atsutil command:
```bash
atsutil server -status
```
## Applications of the atsutil command

- Managing the Apple Type Services font cache
- Clearing font caches
- Validating font files
- Listing the installed font families
- Forcing font registration