---
title: screencapture MacOS command
description: Learn how to take screenshots on MacOS using the screencapture command line tool. Capture your screen with ease and customize settings.
---

The MacOS screencapture command is a powerful tool that allows users to take screenshots directly from the command line. This tool offers various options for capturing screenshots, such as selecting a specific area, capturing a window, including or excluding the cursor, and setting a delay timer. Users can also choose the file format and location to save the screenshot. The screencapture command provides a convenient way to capture your screen without having to rely on third-party applications.

## screencapture Syntax:
```bash
screencapture [options] [file]
```

## screencapture Options:
| Option      | Description                            |
|-------------|----------------------------------------|
| -c          | Force the screen capture to go to the clipboard.|
| -T seconds  | Take the picture after a delay of seconds.|
| -t type     | Image format to create (default is png).|
| -o          | Open the captured image with Preview.|
| -i          | Capture a screen image of an interactive window.|
| -s          | Only allow mouse selection mode.|

:::caution
Be cautious when using the screencapture command as it can capture sensitive information on your screen. Make sure to double-check the options and file destination to avoid accidental sharing of confidential data.
:::

## Parameters:
| Parameter   | Description                            |
|-------------|----------------------------------------|
| file        | Specify the file destination for the screen capture.|
## screencapture Command Usage Examples:
### Capture the Entire Screen
```bash
screencapture screenshot.png
```
Capture the entire screen and save it as a PNG file named "screenshot.png".

### Capture a Selected Window
```bash
screencapture -o -W window.png
```
Capture the selected window and save it as a PNG file named "window.png".

### Capture a Timed Screenshot
```bash
screencapture -T 5 timed.png
```
Capture the screen after a 5-second delay and save it as a PNG file named "timed.png".

### Capture a Specific Region
```bash
screencapture -R30,50,500,400 region.png
```
Capture a specific region starting at coordinates (30, 50) and save it as a PNG file named "region.png".

### Capture Screen and Open in Preview
```bash
screencapture -P preview.png
```
Capture the screen and open the image in Preview for viewing and editing.
:::tip
When using the screencapture command in MacOS, make sure to explore the various options available to capture the screen in different ways, such as capturing a specific window, selecting a portion of the screen, or setting a timer for the capture.
:::

### How do I use screencapture in MacOS?
To use the screencapture command in bash, execute the following command:
```bash
screencapture -i screenshot.png
```

### What is the syntax for capturing a selected portion of the screen?
To capture a selected portion of the screen with the screencapture command in MacOS, use the following syntax:
```bash
screencapture -s selection.png
```

### How can I capture the screen and open the captured image in a specific application?
To capture the screen with the screencapture command in MacOS and open the captured image in a specific application, use the following command:
```bash
screencapture -o -a -e open -a Preview screenshot.png
```

### Is it possible to capture the screen after a delay using screencapture?
Yes, you can capture the screen after a delay using the screencapture command in MacOS. Here is an example command:
```bash
screencapture -T 5 delayed.png
```

### How can I capture the screen and play a sound when the capture is complete?
To capture the screen with the screencapture command in MacOS and play a sound when the capture is complete, use the following command:
```bash
screencapture -x -m screenshot.png && afplay /System/Library/Sounds/Ping.aiff
```

### What is the command to capture the screen without the shadow effect?
To capture the screen without the shadow effect using the screencapture command in MacOS, execute the following command:
```bash
screencapture -o screenshot.png
```

### How do I capture the screen and copy the screenshot to the clipboard?
To capture the screen and copy the screenshot to the clipboard using the screencapture command in MacOS, use the following command:
```bash
screencapture -c screenshot.png
```

### Can I capture the screen and save the screenshot in a specific folder?
Yes, you can capture the screen and save the screenshot in a specific folder by specifying the path. Here is an example command:
```bash
screencapture -o ~/Desktop/screenshots/screenshot.png
```
## Applications of the screencapture command

- Taking screenshots of the entire screen
- Capturing a specific window or region on the screen
- Setting a delay before capturing the screen
- Saving the screenshot to a specified location
- Copying the screenshot to the clipboard
- Capturing the screen and opening the screenshot in a specific application