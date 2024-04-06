---
title: GRAFTABL command in Windows
description: Learn how to use the Windows graftabl command to modify the system code page to support different character sets.
---

The Windows graftabl command is used to modify the system code page in order to support different character sets. This can be useful when working with languages that require special characters or symbols. By using graftabl, users can change the mapping of certain characters to different codes, allowing for better compatibility with various languages. This command can help ensure that text is displayed correctly and that applications function as intended when working with non-standard character sets.
## GRAFTABL Syntax:
```cmd
graftabl [option] [parameter]
```

## Windows GRAFTABL Options:
| Option    | Description                   |
|-----------|-------------------------------|
| /r        | Display current GRAFTABL code |
| /c        | Clears any previous GRAFTABL  |
| /l:<code> | Loads the specified GRAFTABL   |

## GRAFTABL Parameters:
| Parameter | Description                 |
|-----------|-----------------------------|
| code      | Specifies the GRAFTABL code |

:::caution
Caution: Exercise caution when using the GRAFTABL command as it can modify the system's behavior and should be used with care.
:::
## How to use GRAFTABL command:
### Load the table for Code Page 437
```cmd
graftabl 437
```
Loads the table for Code Page 437, which is commonly used for English.
### Unload the current table
```cmd
graftabl
```
Unloads the current table, reverting back to the default configuration.
### Display current table information
```cmd
graftabl /query
```
Displays information about the current code page table in use.
### Load the table for Cyrillic (Windows 1251)
```cmd
graftabl 1251
```
Loads the code page table for Cyrillic characters with Windows 1251 encoding.
### Switch the table to Hebrew (Windows 1255)
```cmd
graftabl 1255
```
Switches the current code page table to the one for Hebrew characters using Windows 1255 encoding.
### Check the available code page tables
```cmd
graftabl /status
```
Displays a list of available code page tables that can be loaded using graftabl.
### Load the Japanese (Shift-JIS) code page table
```cmd
graftabl 932
```
Loads the code page table for Japanese characters using Shift-JIS encoding.
### Revert back to default table after using a different one
```cmd
graftabl /revert 1252
```
Reverts back to the default code page table after temporarily loading the one for Western European languages.
```
:::tip
When using the graftabl command in Windows CMD, make sure to carefully follow the syntax and options provided by the command to achieve the desired results.
:::

### How do I use graftabl in Windows?
To use the graftabl command in Windows, execute the following command:
```cmd
graftabl
```

### What is the purpose of the graftabl command?
The graftabl command in Windows is used to enable or disable the ability of MS-DOS applications to display the extended character set.

### How can I list the current status of graftabl in Windows?
To list the current status of graftabl in Windows, you can use the following command:
```cmd
graftabl /status
```

### How do I enable graftabl in Windows CMD?
To enable graftabl in Windows CMD, use the following command:
```cmd
graftabl /enable
```

### How do I disable graftabl in CMD?
To disable graftabl in CMD, you can use the following command:
```cmd
graftabl /disable
```

### Can I change the code page using graftabl in Windows?
Yes, you can change the code page using graftabl in Windows with the following command:
```cmd
graftabl /codepage <codepage>
```

### How do I display help information for graftabl in Windows CMD?
To display help information for graftabl in Windows CMD, use the following command:
```cmd
graftabl /?
```

### Is it possible to reset graftabl settings in Windows?
Yes, you can reset graftabl settings in Windows by executing the following command:
```cmd
graftabl /reset
```

## Applications of the GRAFTABL Command

- Enable the use of extended ASCII characters in text mode.