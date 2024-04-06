---
title: convert Linux Command Guide
description: Learn how to use the Linux convert command for converting images between different formats, resizing, and more.
---

The Linux convert command is a powerful tool for converting image files between different formats, resizing images, and applying various transformations and effects. It is part of the ImageMagick suite of tools and can be used from the command line. The convert command supports a wide range of image formats and provides options for specifying output quality, resolution, and other parameters. By mastering the convert command, you can efficiently manipulate and enhance images for various projects and purposes.


## convert Syntax:
```bash
convert [options] input_file output_file
```
## Options:
| Option | Description                      |
|--------|----------------------------------|
| -resize | Resize the image to the specified dimensions |
| -quality | Set the image quality level |
| -rotate | Rotate the image by the specified angle |
| -format | Set the output file format |

## Parameters:
| Parameter  | Description                     |
|------------|---------------------------------|
| input_file | Input image file                 |
| output_file| Output image file                |

:::caution
Exercise caution when using the convert command as it may overwrite existing files without warning.
:::
## convert Command Samples:
### Convert an Image to a Different Format
```bash
convert image.jpg new_image.png
```
Converts the image.jpg file to a new_image.png file.

### Resize an Image
```bash
convert -resize 50% image.jpg resized_image.jpg
```
Resizes image.jpg to 50% and saves the resized image as resized_image.jpg.

### Convert Multiple Images to a PDF
```bash
convert *.jpg output.pdf
```
Converts all JPEG images in the current directory to a single PDF file named output.pdf.

### Rotate an Image
```bash
convert -rotate 90 image.jpg rotated_image.jpg
```
Rotates image.jpg by 90 degrees clockwise and saves the rotated image as rotated_image.jpg.

### Create a Thumbnail Image
```bash
convert -thumbnail 200x200 image.jpg thumbnail.jpg
```
Creates a thumbnail of image.jpg with a size of 200x200 pixels and saves it as thumbnail.jpg.

### Change Image Quality
```bash
convert -quality 80 image.jpg high_quality_image.jpg
```
Reduces the quality of image.jpg to 80% and saves it as high_quality_image.jpg.

### Convert an Image to Grayscale
```bash
convert -colorspace Gray image.jpg grayscale_image.jpg
```
Converts image.jpg to grayscale and saves the grayscale version as grayscale_image.jpg.
:::tip
When using the convert command in Linux, remember to check the available options and parameters in the command's documentation to ensure proper usage and desired results.
:::

## convert FAQ:
### How do I use convert in Linux?
To use the convert command in Linux, execute the following command:
```bash
convert --option <value>
```

### What is the purpose of the convert command in Linux?
The convert command in Linux is used for image conversion and manipulation tasks like resizing, cropping, rotating, and more.
```bash
convert input.jpg -resize 50% output.jpg
```

### How can I resize an image using convert in Linux?
You can resize an image using the convert command in Linux by specifying the desired dimensions to scale the image.
```bash
convert input.jpg -resize 800x600 output.jpg
```

### How do I convert an image format using convert in Linux?
To convert an image format using convert in Linux, specify the output format along with the filename.
```bash
convert input.png output.jpg
```

### Can the convert command in Linux be used to rotate images?
Yes, the convert command in Linux can be used to rotate images to the desired angle.
```bash
convert input.jpg -rotate 90 output.jpg
```

### How do I add text to an image using convert in Linux?
To add text to an image using convert in Linux, specify the text, font, and position on the image.
```bash
convert input.jpg -pointsize 24 -draw "text 100,100 'Sample Text'" output.jpg
```
## Applications of the convert command

- **Image format conversion**: converting between different image formats.
- **Image resizing**: changing the dimensions of an image.
- **Image rotation**: rotating images to different orientations.
- **Image compression**: reducing the file size of an image.
- **Adding watermark**: overlaying a watermark onto an image.
- **Colorspace conversion**: changing the colorspace of an image.