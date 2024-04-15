---
title: MacOS plutil command
description: Conveniently manipulate property list files with the MacOS plutil command.
---

The MacOS plutil command is a powerful utility for working with property list files. With plutil, users can easily validate, convert, and modify .plist files, which are used to store configuration data. This command-line tool supports various operations, such as checking the syntax of a plist file, converting between binary and XML formats, and even extracting specific values from a plist file. Whether you need to troubleshoot plist files, automate tasks, or simply manipulate configuration settings, the plutil command provides a simple and efficient solution for macOS users.

## plutil Syntax:
```bash
plutil [option] [parameter]
```

## Options:
| Option                  | Description                                |
|-------------------------|--------------------------------------------|
| -p, --print             | Print the property list in a human-readable format. |
| -lint, --lint           | Check the property list file for syntax errors. |
| -convert format         | Convert the property list to the specified format (xml1, binary1, json). |
| -o output_file          | Specify an output file for use with the -convert option. |
| -extract keyPath        | Extract a specific value at the specified keyPath. |
| -replace keyPath        | Replace the value at the specified keyPath with a new value. |
| -e, --extract           | Extract the value associated with a specified key path. |
| -r, --replace           | Replace the value associated with a specified key path. |
| -e, --erase             | Erase the value associated with a specified key path. |
| -s key value            | Set the value associated with the specified key. |
| -remove key             | Remove the entry associated with the specified key. |
| -help                   | Display help information for the plutil command. |

## Parameters:
| Parameter    | Description                                   |
|--------------|-----------------------------------------------|
| input_file   | Specify the input property list file.         |
| keyPath      | Specify the key path to extract or replace.   |
| value        | Specify the value to set or replace.          |
| format       | Specify the format to convert the property list to. |
| output_file  | Specify the output file for the -convert option. |

:::caution
Exercise caution when using the plutil command, as incorrect usage can modify or corrupt property list files.
:::
## plutil Usage:
### Convert a plist file to JSON
```bash
plutil -convert json file.plist
```
Converts the `file.plist` in plist format to JSON format.

### Check the syntax of a plist file
```bash
plutil -lint file.plist
```
Checks the syntax of the `file.plist` to ensure it is valid.

### Convert a JSON file to a plist file
```bash
plutil -convert xml1 file.json -o file.plist
```
Converts the `file.json` in JSON format to a plist file named `file.plist`.

### Display formatted output for a plist file
```bash
plutil -p file.plist
```
Displays the formatted output for the `file.plist` in a more human-readable form. 

## plutil Usage:
:::tip
When using the plutil command in MacOS, make sure to double-check the options and values to avoid any errors in processing property list files.
:::

### How do I check the syntax of a property list file using plutil in MacOS?
To check the syntax of a property list file in MacOS with plutil, use the following command:
```bash
plutil -lint path/to/property_list.plist
```

### How do I convert a property list file to XML format using plutil in MacOS?
To convert a property list file to XML format in MacOS using plutil, run the command:
```bash
plutil -convert xml1 path/to/property_list.plist
```

### How do I convert a property list file to binary format using plutil in MacOS?
To convert a property list file to binary format in MacOS using plutil, use the command:
```bash
plutil -convert binary1 path/to/property_list.plist
```

### How do I extract a value from a property list file using plutil in MacOS?
To extract a specific value from a property list file in MacOS with plutil, execute the command:
```bash
plutil -p key path/to/property_list.plist
```

### How do I modify a property list file using plutil in MacOS?
To modify a property list file in MacOS using plutil, use the following command:
```bash
plutil -replace key -string 'new_value' path/to/property_list.plist
```

### How do I validate a property list file against a schema using plutil in MacOS?
To validate a property list file against a schema in MacOS with plutil, run the command:
```bash
plutil -lint -s schema.plist path/to/property_list.plist
```

## Applications of the plutil command

- Convert property list file formats
- Validate property list files
- Print property list file in different formats
- Modify property list files