---
title: uuidgen MacOS Command Guide
description: Generate unique identifiers on MacOS using the uuidgen command.
---

The MacOS uuidgen command generates and prints a unique identifier using the UUID library. This command creates a new universally unique identifier (UUID) in a standard format. UUIDs are 128-bit numbers that guarantee uniqueness across space and time. The generated UUIDs can be useful in various scenarios, such as generating unique file names, database keys, or tracking unique items. The uuidgen command on MacOS allows for easy generation of UUIDs without the need for external libraries or tools.
## uuidgen Syntax:
```bash
uuidgen
```

## Options:
| Option | Description                  |
|--------|------------------------------|
| -hdr   | Print UUID in human-readable form. |
| -t time | Generate time-based UUID. |
| -s     | Generate random-based UUID. |
| -n ns   | Generate name-based UUID (namespace is a UUID). |

## Parameters:
There are no parameters for the `uuidgen` command.

:::caution
Exercise caution when using the `uuidgen` command, as it generates unique identifiers and should be used carefully to avoid unintended consequences.
:::
## uuidgen Command Samples:
### Generate a random UUID
```bash
uuidgen
```
Generates a random UUID.

### Generate 5 UUIDs in uppercase
```bash
uuidgen -U -n5
```
Generates 5 random UUIDs in uppercase.

### Generate a UUID without hyphens
```bash
uuidgen -h
```
Generates a random UUID without hyphens.

### Generate a UUID for use in the Mac OS pasteboard
```bash
uuidgen | pbcopy
```
Generates a random UUID and copies it to the Mac OS pasteboard.

### Generate a UUID for use in a filename
```bash
echo "file_$(uuidgen)" > new_file.txt
```
Generates a random UUID and appends it to a filename.

### Generate a UUID using a specified format
```bash
uuidgen -F '%A-%B-%C-%D-%E'
```
Generates a random UUID using a user-specified format.

### Generate a UUID compatible with RFC4122 version 3
```bash
uuidgen -r
```
Generates a UUID that is compatible with RFC4122 version 3.
:::tip
When using the uuidgen command in MacOS, make sure to familiarize yourself with the available options to generate UUIDs according to your specific requirements.
:::

### How do I use uuidgen in MacOS?
To use the uuidgen command in MacOS, execute the following command:
```bash
uuidgen
```

### What is the output format of uuidgen in MacOS?
The output format of uuidgen in MacOS is a standard UUID string in the following format:
```bash
6B29FC40-CA47-1067-B31D-00DD010662DA
```

### Can I generate multiple UUIDs at once with uuidgen in MacOS?
Yes, you can generate multiple UUIDs at once with the `-n` option in uuidgen. For example:
```bash
uuidgen -n 5
```

### How can I generate a UUID in uppercase format using uuidgen in MacOS?
To generate a UUID in uppercase format, you can use the `-U` option with uuidgen as shown below:
```bash
uuidgen -U
```

### Is there a way to generate a UUID without hyphens in MacOS using uuidgen?
Yes, you can generate a UUID without hyphens in MacOS by using the `-H` option with uuidgen. Here's an example:
```bash
uuidgen -H
```
## Applications of the uuidgen command

- Generating unique identifiers
- Creating universally unique names
- Generating random UUIDs for various purposes