---
title: What is DISM Windows command?
description: Learn how the Windows DISM command can help you manage and maintain your system efficiently.
---

The Deployment Image Servicing and Management (DISM) tool is a command-line utility in Windows that allows users to service, maintain, and prepare Windows images. It can be used to mount and service Windows images before deployment, repair Windows images, and manage device drivers, packages, and features within a Windows image. DISM is a powerful tool for system administrators and advanced users looking to customize and optimize Windows installations. With DISM, you can manage Windows features, packages, drivers, and international settings, making it a versatile tool for maintaining your system.

## DISM Syntax:
```cmd
dism [option] [parameter]
```

## DISM Options:
| Option      | Description                                     |
|-------------|-------------------------------------------------|
| /Online     | Targets the running operating system            |
| /Image      | Specifies the path to the Windows image file    |
| /ScratchDir | Specifies the directory for temporary files     |
| /All        | Enables all specified items in the command      |

:::caution
Exercise caution when using the DISM command as it directly impacts the Windows operating system.
:::

## Parameters:
| Parameter  | Description                                    |
|------------|------------------------------------------------|
| /Get-FeatureInfo| Displays information about features in an offline image     |
| /Add-Package    | Adds a .cab or .msu file to an offline image               |
| /Cleanup-Image  | Cleans up the unusable data in an online or offline image  |
| /Apply-Image    | Applies an image to the specified drive or directory       |
## DISM Command Usage Examples:

### Check Health of Windows Image
```cmd
dism /Online /Cleanup-image /CheckHealth
```
Verify the health of the Windows image without making any changes.

### Repair Windows Image
```cmd
dism /Online /Cleanup-image /RestoreHealth
```
Attempt to repair the Windows image by restoring corrupted files using Windows Update.

### Capture System Image for Deployment
```cmd
dism /Capture-Image /ImageFile:C:\image.wim /CaptureDir:C:\ /Name:"Custom Image"
```
Create a system image from the specified directory with a custom name for deployment.

### Mount Windows Image for Offline Editing
```cmd
dism /Mount-Image /ImageFile:C:\image.wim /MountDir:C:\Mount
```
Mount a Windows image file to a directory for making offline modifications.

### Add or Remove Drivers to Windows Image
```cmd
dism /Image:C:\mounted-image /Add-Driver /Driver:C:\drivers\example.inf
```
Inject drivers into a mounted Windows image to add or remove hardware support.
:::tip
When using the DISM command in Windows CMD, make sure to run the Command Prompt as an administrator to avoid any potential issues with permissions.
:::

## How to use DISM?:
### How do I use dism in Windows?
To use the dism command in CMD, execute the following command:
```cmd
dism /online /checkhealth
```

### What is the purpose of the /online parameter in the dism command?
The /online parameter in the dism command specifies that the action is to be taken on the running operating system.
```cmd
dism /online /cleanup-image /restorehealth
```

### How can I clean up the files from a previous Windows update using the DISM command?
You can clean up files from a previous Windows update using the following command:
```cmd
dism /online /cleanup-image /startcomponentcleanup
```

### How do I repair a Windows image with the DISM command?
To repair a Windows image with the DISM command, run the following command:
```cmd
dism /online /cleanup-image /restorehealth
```

### Can I use the DISM command to add drivers to a Windows image?
Yes, you can use the DISM command to add drivers to a Windows image. Here is an example command:
```cmd
dism /Image:C:\offline /Add-Driver /Driver:C:\drivers\mydriver.inf
```

### How can I check the health of a Windows image with DISM?
To check the health of a Windows image using DISM, you can run the following command:
```cmd
dism /Online /Cleanup-Image /CheckHealth
```

### Is it possible to use DISM to enable or disable Windows features?
Yes, you can use DISM to enable or disable Windows features. Here is an example command to enable a feature:
```cmd
dism /Online /Enable-Feature /FeatureName:<feature_name>
```

### How do I use the DISM command to capture and apply Windows images?
To capture a Windows image, use the following DISM command:
```cmd
dism /Capture-Image /ImageFile:C:\path\image.wim /CaptureDir:C:\path\of\files
```
## Applications of the DISM Command

- Capture a Windows image
- Apply a Windows image
- Mount a Windows image
- Unmount a Windows image
- Add or remove drivers to an image
- Add or remove updates to an image
- Enable or disable Windows features
- Check the health of an image
- Cleanup the WinSxS folder
- Check the state of the system image
- Repair a Windows image
- Set the location for the Windows image file
- Configure international settings in an image