---
title: hdiutil MacOS command
description: Manage disk images on MacOS using the powerful hdiutil command.
---

The hdiutil command in MacOS is a versatile tool used for creating, manipulating, and converting disk images. It allows users to mount, unmount, verify, and resize disk images, as well as convert them between different formats. With hdiutil, users can also encrypt and decrypt disk images, making it a valuable utility for managing disk images efficiently on MacOS.

## hdiutil Syntax:
```bash
hdiutil command [option] [parameter]
```

## hdiutil Options:

| Option | Description                     |
|--------|---------------------------------|
| -help  | Display help for hdiutil command |
| -create| Create a new disk image         |
| -attach| Attach a disk image              |
| -detach| Detach a disk image              |
| -info  | Display information about a disk image |
| -convert| Convert a disk image from one format to another |

:::caution
Use caution when using the hdiutil command as it deals with disk images and can potentially lead to data loss if not used correctly.
:::

## Parameters:

| Parameter  | Description                            |
|------------|----------------------------------------|
| command    | The specific hdiutil command to execute |
| option     | The option to modify the command behavior |
| parameter  | Additional parameter required for the command execution |

## hdiutil Command Usage Examples:
### Create a New Blank Image
```bash
hdiutil create -size 100m -fs HFS+ -volname MyDisk MyDisk.dmg
```
Creates a new blank disk image named MyDisk.dmg with a size of 100 MB formatted with HFS+ file system.

### Encrypt an Image with a Password
```bash
hdiutil create -encryption AES-256 -size 200m -fs HFS+ -volname EncryptedDisk EncryptedDisk.dmg
```
Creates a new encrypted disk image named EncryptedDisk.dmg with a size of 200 MB, using AES-256 encryption and formatted with HFS+ file system.

### Mount an Image
```bash
hdiutil attach MyDisk.dmg
```
Mounts the disk image file MyDisk.dmg to the system, allowing you to access its contents.

### Convert an Image to Read-Only
```bash
hdiutil convert -format UDRO -o ReadOnlyImage.dmg MyDisk.dmg
```
Converts the disk image file MyDisk.dmg to a read-only disk image file named ReadOnlyImage.dmg in UDRO format.

### Verify Integrity of an Image
```bash
hdiutil verify MyDisk.dmg
```
Verifies the integrity of the disk image file MyDisk.dmg to ensure it is not corrupt or damaged.
:::tip
When using the hdiutil command in MacOS, make sure to carefully read the command's documentation and understand the available options to avoid any unexpected outcomes.
:::

### How do I mount a disk image using hdiutil in MacOS?
To mount a disk image using hdiutil in bash, execute the following command:
```bash
hdiutil attach /path/to/disk_image.dmg
```

### How do I create a new disk image using hdiutil in MacOS?
To create a new disk image using hdiutil in bash, execute the following command:
```bash
hdiutil create -size 1g -fs APFS -volname NewDisk /path/to/new_image.dmg
```

### How do I unmount a disk image using hdiutil in MacOS?
To unmount a disk image using hdiutil in bash, execute the following command:
```bash
hdiutil detach /path/to/mount_point
```

### How do I verify a disk image using hdiutil in MacOS?
To verify a disk image using hdiutil in bash, execute the following command:
```bash
hdiutil verify /path/to/disk_image.dmg
```

### How do I convert a disk image format using hdiutil in MacOS?
To convert a disk image format using hdiutil in bash, execute the following command:
```bash
hdiutil convert /path/to/original_image.dmg -format UDTO -o /path/to/converted_image.cdr
```

### How do I list information about a disk image using hdiutil in MacOS?
To list information about a disk image using hdiutil in bash, execute the following command:
```bash
hdiutil imageinfo /path/to/disk_image.dmg
```

### How do I create a sparse disk image using hdiutil in MacOS?
To create a sparse disk image using hdiutil in bash, execute the following command:
```bash
hdiutil create -size 1g -type SPARSE -fs APFS -volname SparseDisk /path/to/sparse_image.sparseimage
```

### How do I compact a sparse disk image using hdiutil in MacOS?
To compact a sparse disk image using hdiutil in bash, execute the following command:
```bash
hdiutil compact /path/to/sparse_image.sparseimage
```
## Applications of the hdiutil command

- Create disk images
- Convert disk images between formats
- Mount disk images
- Verify and repair disk images
- Burn disk images to physical media
- Resize disk images
- Encrypt and decrypt disk images
- Split disk images into segments