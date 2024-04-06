---
title: Windows COLOR command
description: Learn how to use the Windows COLOR command to change text and background colors in the command prompt easily.
---

The Windows COLOR command is a useful tool for customizing the appearance of the command prompt in Windows. This command allows users to change the text and background colors quickly and easily. By using specific codes with the COLOR command, you can create a personalized command prompt environment that suits your preferences. Whether you want a traditional black background with white text or a bold color scheme, the COLOR command makes it simple to customize your command prompt. This feature is particularly helpful for users who spend a lot of time working in the command prompt and want to improve their workflow by making it more visually appealing. Overall, the Windows COLOR command is a handy tool for enhancing the user experience in the command prompt and adding a touch of personalization to your Windows operating system.
## COLOR Syntax:
```cmd
color [attribute]
```

## Options:
| Option    | Description                      |
|-----------|----------------------------------|
| 0         | Black                            |
| 1         | Blue                             |
| 2         | Green                            |
| 3         | Aqua (Light Blue)                |
| 4         | Red                              |
| 5         | Purple                           |
| 6         | Yellow                           |
| 7         | White                            |
| 8         | Gray                             |
| 9         | Light Blue                       |
| A         | Light Green                      |
| B         | Light Aqua                       |
| C         | Light Red                        |
| D         | Light Purple                     |
| E         | Light Yellow                     |
| F         | Bright White (intense)           |

## Parameters:
| Parameter | Description                      |
|-----------|----------------------------------|
| attribute | Specifies the color attribute to set. This can be a digit from 0 to F representing the color to set. |

:::caution
Changing the color using the 'color' command may affect the readability of text in the command prompt. It is recommended to use contrasting colors for foreground and background to ensure readability.
:::
## COLOR Usage:
### Change the Console Background Color to Blue
```cmd
color 17
```
Changes the console background to blue.

### Change the Console Text Color to Green
```cmd
color A2
```
Changes the console text color to green.

### Reset Console Colors to Default
```cmd
color
```
Resets the console colors to the default scheme.

### Display Available Colors
```cmd
color /?
```
Displays information on using the color command and the available color codes.
### How do I use color in CMD?
To use the color command in CMD, execute the following command:
```cmd
color --option <value>
```

### How can I change the text color in CMD?
To change the text color in CMD, use the color command followed by the desired text color code. For example:
```cmd
color 0A
```

### Can I change the background color in CMD?
Yes, you can change the background color in CMD using the color command. Simply specify the desired background color code after the command. For instance:
```cmd
color 5F
```

### How do I reset the color settings in CMD?
To reset the color settings in CMD back to the default color combination (black background and white text), you can use the color command without any additional parameters. Execute:
```cmd
color
```

### How many color combinations are available in CMD?
In CMD, you have a total of 16 different color combinations to choose from for text and background colors. Each combination is represented by a unique color code.

### Can I customize the color scheme in CMD?
Yes, you can customize the color scheme in CMD by choosing different text and background color combinations using the color command along with the appropriate color codes.

### What is the default text color in CMD?
The default text color in CMD is white, while the default background color is black.
​

:::tip
When using the color command in CMD, make sure to choose contrasting colors for better readability. Experiment with different color combinations to find the one that suits your preferences and improves your overall command line experience.
:::

## Common Questions on COLOR Usage:
{Questions}

## Applications of the COLOR Command

1. Changing the color of the command prompt text
2. Changing the color of the command prompt background
3. Customizing the appearance of the command prompt for better readability and personal preference.