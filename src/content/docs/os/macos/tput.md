---
title: tput MacOS Command Guide
description: Learn how to use the MacOS tput command to control terminal output and cursor positioning efficiently.
---

The MacOS tput command is a powerful tool for controlling terminal output and cursor positioning. It allows users to manipulate various terminal capabilities such as colors, cursor movement, and text attributes. By using tput, users can enhance the visual appearance of their scripts and create dynamic and interactive terminal interfaces. With its easy-to-use syntax and wide range of functionality, tput is an essential command for any MacOS user looking to streamline their terminal workflow.
## tput Syntax:
```bash
tput [option] [parameter]
```

## Options:
| Option | Description                  |
|--------|------------------------------|
| clear  | Clear the screen             |
| cup    | Move cursor to specified position |
| bold   | Set bold mode                |
| dim    | Set dim mode                 |
| smul   | Start underline mode          |
| rmul   | End underline mode            |
| rev    | Set reverse video mode        |

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| sgr0      | Turn off all attributes (ANSI escape)  |
| setaf     | Set foreground color (ANSI escape)     |
| setab     | Set background color (ANSI escape)     |
| blink     | Set blink mode                         |
| civis     | Make cursor invisible                  |

:::caution
Use the tput command with caution as it directly interacts with the terminal settings and can impact the display and functionality of the terminal. Incorrect usage of options or parameters may lead to unexpected outcomes.
:::
## tput Command Samples:
### Change Text Color to Red
```bash
tput setaf 1
```
This command changes the text color to red.

### Change Background Color to Green
```bash
tput setab 2
```
This command changes the background color to green.

### Reset Text Color to Default
```bash
tput sgr0
```
This command resets the text color to the default setting.

### Hide Cursor
```bash
tput civis
```
This command hides the cursor.

### Show Cursor
```bash
tput cnorm
```
This command shows the cursor.

### Move Cursor to Specific Position
```bash
tput cup 5 10
```
The command moves the cursor to the 5th row and 10th column on the terminal screen.

### Get Terminal Size
```bash
tput cols
tput lines
```
These commands display the number of columns and lines in the terminal window, respectively.
:::tip
When using the tput command in MacOS, make sure to consult the manual (`man tput`) for a full list of options and capabilities. Additionally, combining tput with other shell commands can enhance the functionality and customization of your scripts and terminal sessions.
:::

### How do I use tput in MacOS?
To use the tput command in MacOS, execute the following command:
```bash
tput --option <value>
```

### What is the purpose of tput in MacOS?
The tput command in MacOS is used to query and set terminal capabilities such as cursor movement, text coloring, and terminal modes.

### How do I change the text color using tput in MacOS?
To change the text color using tput in MacOS, you can use the following command to set the text color to red:
```bash
tput setaf 1
```

### Can tput in MacOS be used to move the cursor position?
Yes, tput in MacOS can be used to move the cursor position. For example, the following command moves the cursor to the 10th column and 5th row:
```bash
tput cup 5 10
```

### How can I clear the screen using tput in MacOS?
To clear the screen using tput in MacOS, you can use the following command:
```bash
tput clear
```

### Is it possible to set bold text using tput in MacOS?
Yes, you can set bold text using tput in MacOS. The following command sets the text to bold:
```bash
tput bold
```
## Applications of the tput command

- Clear the screen
- Move the cursor to a specific position
- Get the number of columns on the current terminal
- Change text attributes like bold, underline, etc.
- Change text colors
- Save the current cursor position
- Restore the saved cursor position
- Hide or show the cursor