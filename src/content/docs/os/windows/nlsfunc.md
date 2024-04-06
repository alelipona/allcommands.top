---
title: NLSFUNC Windows Command Guide
description: Learn how to use the Windows nlsfunc command to manage national language support settings for MS-DOS programs.
---

The Windows nlsfunc command is used to manage national language support settings for MS-DOS programs. This command allows users to specify different code pages, keyboard layouts, and country settings to ensure proper language support within MS-DOS programs. NLSFUNC can be particularly useful for users who work with multiple languages or need to run MS-DOS programs that require specific language settings. By using the nlsfunc command, users can configure their system to accurately display and process text in different languages, improving overall user experience and productivity.

## NLSFUNC Syntax:
```cmd
nlsfunc [options] [parameter]
```

## Options:
| Option | Description                  |
|--------|------------------------------|
| /s     | Display current NLS settings |
| /l     | List available locales       |
| /c     | Set code page                |
| /w     | Set default week start day   |
| /t     | Set time format              |
| /d     | Set date format              |
| /f     | Set currency format          |

## Parameters:
| Parameter | Description                      |
|-----------|----------------------------------|
| nlsinfo   | Specifies the NLS information to change or display |

:::caution
Exercise caution when using the nlsfunc command as incorrect settings may lead to unexpected behavior in the system.
:::
## NLSFUNC Command Samples:
### Check the Installed Code Page
```cmd
nlsfunc
```
Displays the currently installed code page on the system.

### List Available Code Pages
```cmd
nlsfunc /L
```
Lists all the available code pages that can be installed on the system.

### Install a Code Page
```cmd
nlsfunc /I:437
```
Installs the code page with the code number 437 on the system.

### Remove a Code Page
```cmd
nlsfunc /R:437
```
Removes the code page with the code number 437 from the system.

### Show Code Page Status
```cmd
nlsfunc /S:437
```
Displays the status of the code page with the code number 437 on the system.

### Set Default Code Page
```cmd
nlsfunc /SE:437
```
Sets the code page with the code number 437 as the default code page on the system.

### Reset Default Code Page
```cmd
nlsfunc /RSE
```
Resets the default code page on the system to the system default.
:::tip
When using the nlsfunc command in Windows, always ensure you have the necessary permissions to execute the command and follow the correct syntax for the option you are trying to use.
:::

## NLSFUNC FAQ:
### How do I use nlsfunc in Windows?
To use the nlsfunc command in Windows, execute the following command:
```cmd
nlsfunc --option <value>
```

### What is the purpose of the nlsfunc command in Windows?
The nlsfunc command in Windows is used for managing code page and font in the Command Prompt window.

### How can I list all available options for the nlsfunc command in Windows?
You can list all available options for the nlsfunc command in Windows by using the following command:
```cmd
nlsfunc --help
```

### Can I change the active code page using the nlsfunc command in Windows?
Yes, you can change the active code page using the nlsfunc command in Windows. Here is an example command to change the active code page to 437:
```cmd
nlsfunc codepage --set 437
```

### How do I revert to the default code page using the nlsfunc command in Windows?
To revert to the default code page using the nlsfunc command in Windows, you can execute the following command:
```cmd
nlsfunc codepage --set 850
```

### Is it possible to change the font setting using the nlsfunc command in Windows?
Yes, you can change the font setting using the nlsfunc command in Windows. Here is an example command to change the font to Lucida Console:
```cmd
nlsfunc font --set "Lucida Console"
```
## Applications of the NLSFUNC Command

- Loading National Language Support
- Managing language-related settings