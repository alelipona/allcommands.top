---
title: What is mogrify Linux command?
description: Lightweight image editing with the Linux mogrify command. Resize, rotate, or apply filters to multiple images at once effortlessly.
---

mogrify is a powerful command-line tool in Linux used for batch processing images. It allows users to resize, rotate, flip, convert, and apply various effects to multiple images at once, making it a handy tool for image manipulation tasks.

## mogrify Syntax:
```bash
mogrify [options] [parameters]
```

## mogrify Options:
| Option            | Description                               |
|-------------------|-------------------------------------------|
| -crop <geometry>  | crop an image to the specified geometry   |
| -resize <geometry>| resize the image                            |
| -rotate <degrees> | rotate the image by the specified degrees|
| -flip             | flip the image vertically                  |
| -flop             | flop the image horizontally               |
| -quality <value>  | set the image quality                      |

:::caution
Exercise caution when using the "mogrify" command as it modifies the original image files directly, which can result in permanent changes and irreversible data loss. It is recommended to make a backup of the files before using this command.
:::

## Parameters:
| Parameter    | Description                         |
|--------------|-------------------------------------|
| file(s)      | The image file(s) to be processed   |
## mogrify Command Usage Examples:
### Resize Images to a Specific Width
```bash
mogrify -resize 800x input_image.jpg
```
Resizes the input_image.jpg to have a width of 800 pixels while maintaining the aspect ratio.

### Convert PNG Images to JPEG Format
```bash
mogrify -format jpg *.png
```
Converts all PNG images in the current directory to JPEG format.

### Add Border to Images
```bash
mogrify -bordercolor black -border 20x20 *.jpg
```
Adds a black border of 20 pixels around all JPEG images in the current directory.

### Rotate Images
```bash
mogrify -rotate 90 *.jpg
```
Rotates all JPEG images in the current directory by 90 degrees clockwise.

### Convert Images to Grayscale
```bash
mogrify -type Grayscale *.jpg
```
Converts all JPEG images in the current directory to grayscale color mode.
:::tip
Remember to always make a backup of your files before using the mogrify command, as it will modify the original files.
:::

### How do I resize an image using mogrify in Linux?
To resize an image using mogrify in bash, execute the following command:
```bash
mogrify -resize 50% image.jpg
```

### How can I rotate an image with mogrify in Linux?
To rotate an image using the mogrify command in bash, you can use the following command:
```bash
mogrify -rotate 90 image.jpg
```

### How do I convert images to grayscale with mogrify in Linux?
To convert images to grayscale with mogrify in bash, you can run the following command:
```bash
mogrify -type Grayscale image.jpg
```

### How can I add a border to an image using mogrify in Linux?
To add a border to an image with mogrify in bash, use the following command:
```bash
mogrify -bordercolor black -border 20x20 image.jpg
```

### How do I crop an image using mogrify in Linux?
To crop an image with mogrify in bash, you can use the following command:
```bash
mogrify -crop 100x100+50+50 image.jpg
```

### How can I blur an image with mogrify in Linux?
To blur an image using mogrify in bash, execute the following command:
```bash
mogrify -blur 0x8 image.jpg
```

### How do I add text to an image using mogrify in Linux?
To add text to an image with mogrify in bash, you can use the following command:
```bash
mogrify -fill white -undercolor '#00000080' -pointsize 36 -annotate +100+100 'Example Text' image.jpg
```
## Applications of the mogrify command

- Batch resize images
- Batch rotate images
- Batch convert image formats
- Batch add effects or filters to images
- Batch compress images