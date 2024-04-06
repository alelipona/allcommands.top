---
title: All About CHCP Windows command
description: Learn how to use the Windows chcp command to change the active console code page for internationalization purposes.
---

The chcp command in Windows is used to display or set the active code page number in the Command Prompt. This command is essential for managing internationalization settings in Windows, allowing users to change the code page to display characters in different languages correctly.

By default, the code page is set to 437 in the Command Prompt window, which supports the English language. However, users may need to change the code page when working with files or applications that use a different character set. 

To display the active code page, simply type `chcp` in the Command Prompt window. To change the code page, use the command followed by the code page number (e.g., `chcp 1252` for Western European languages). 

Different languages and regions have specific code page numbers assigned to them, and using the chcp command allows users to interact with files and programs in their preferred language. It is important to note that changing the code page can affect how characters are displayed in the Command Prompt window, so users should be cautious when using this command.

Overall, the chcp command is a versatile tool for managing internationalization settings in Windows, allowing users to work with different languages and character sets effectively.
## CHCP Syntax:
```cmd
chcp [code_page]
```

## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| /?     | Displays help for the chcp command.     |

## Parameters:
| Parameter  | Description                                   |
|------------|-----------------------------------------------|
| code_page  | Specifies the code page to set for the console. |

:::caution
Be cautious when changing the code page using the chcp command, as it can result in unexpected behavior or issues with how characters are displayed in the console.
:::
## CHCP CMD Examples:
### Change the Active Code Page to UTF-8
```cmd
chcp 65001
```
Changes the active code page to UTF-8 to support extended character sets.

### Display the Current Active Code Page
```cmd
chcp
```
Displays the current active code page being used in the command prompt.

### Change the Active Code Page to Latin-1 (ISO 8859-1)
```cmd
chcp 28591
```
Changes the active code page to Latin-1 (ISO 8859-1) to support Western European languages.

### Switch to the Default Code Page (ANSI)
```cmd
chcp 1252
```
Switches the active code page to the default code page (ANSI) for the system.

### List all Available Code Pages
```cmd
chcp /?
```
Lists all available code pages that can be used with the chcp command.
:::tip
When using the chcp command in Windows CMD, make sure to specify the correct code page value to set the desired character encoding for the console. This can help prevent displaying garbled characters or incorrect text formatting.
:::

### How do I use chcp in CMD?
To use the chcp command in CMD, execute the following command:
```cmd
chcp 65001
```

### What is the purpose of the chcp command in CMD?
The chcp command in CMD is used to display or set the active code page number for the console. 

### How can I list all available code pages using chcp in CMD?
To list all available code pages using the chcp command in CMD, run the following command:
```cmd
chcp /list
```

### Can I change the code page without restarting the CMD session with chcp?
Yes, you can change the code page without restarting the CMD session using the chcp command. 

### How do I revert to the default code page using chcp in CMD?
To revert to the default code page using the chcp command in CMD, enter the following command:
```cmd
chcp 437
```

### What happens if I set an invalid code page value with chcp in CMD?
If you set an invalid code page value with the chcp command in CMD, an error message will be displayed, and the code page will not be changed.

### How can I see the current active code page using chcp in CMD?
To see the current active code page using the chcp command in CMD, simply type:
```cmd
chcp
```

### Is it possible to use chcp to change the code page for a specific script or batch file in CMD?
Yes, you can use the chcp command within a script or batch file to change the code page for that specific script or file without affecting the rest of the CMD session.
## Applications of the CHCP Command

- Changing the active code page
- Viewing available code pages
- Setting the default system code page
- Configuring the console to display specific characters and symbols based on the selected code page