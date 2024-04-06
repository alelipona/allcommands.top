---
title: All About RECIMG Windows command
description: Learn how to use the Windows recimg command to create custom recovery images for your system.
---

The Windows recimg command is a powerful tool that allows users to create custom recovery images for their system. By using this command, users can capture the current state of their Windows installation, including all installed applications and drivers, and save it as a recovery image. This can be especially useful for troubleshooting issues or restoring the system to a previous state in case of problems. The recimg command is a command-line tool that offers flexibility and control over the creation of recovery images, making it a valuable tool for Windows users.

## RECIMG Syntax:
```cmd
recimg /createimage <path_to_save_image>
```

## Options:
| Option       | Description                               |
|--------------|-------------------------------------------|
| /createimage | Creates a custom recovery image           |

## Parameters:
| Parameter              | Description                             |
|------------------------|-----------------------------------------|
| <path_to_save_image>   | Specifies the full path where the custom recovery image should be saved |

:::caution
Exercise caution when using the recimg command as creating a custom recovery image may overwrite existing recovery options on your system.
:::
## RECIMG CMD Examples:
### Create a Custom Recovery Image
```cmd
recimg /createimage C:\CustomRecoveryImage
```
Creates a custom recovery image in the location specified.

### Set the Custom Recovery Image Path
```cmd
recimg /setcurrent C:\CustomRecoveryImage
```
Sets the custom recovery image as the current recovery image.

### Show Details of the Current Recovery Image
```cmd
recimg /showcurrent
```
Displays details of the current recovery image set for the system.

### Delete the Custom Recovery Image
```cmd
recimg /deregister C:\CustomRecoveryImage
```
Deletes the specified custom recovery image.

### Set the Maximum Disk Usage for Recovery Images
```cmd
recimg /setconfigvalue maxpct 10
```
Sets the maximum percentage of disk space that can be used for storing recovery images.

### Register a New Recovery Image
```cmd
recimg /register D:\NewRecoveryImage
```
Registers a new recovery image located on the specified drive.
:::tip
When using the recimg command in Windows, make sure to run the command prompt with administrative privileges to avoid any issues with the creation or modification of the recovery image.
:::

### How do I use recimg in Windows?
To use the recimg command in Windows, execute the following command:
```cmd
recimg /createimage C:\CustomRefreshImages\ImageCustomRefresh.wim
```

### What is the purpose of the recimg command in Windows?
The recimg command in Windows is used to create and manage custom recovery images for troubleshooting and system recovery.

### How can I specify a custom path for the recovery image created with recimg?
You can specify a custom path for the recovery image by using the /path option in the recimg command. Here is an example:
```cmd
recimg /createimage /path D:\CustomRefreshImages\ImageCustomRefresh.wim
```

### Can I view the details of the current recovery image with the recimg command?
Yes, you can view the details of the current recovery image by using the /showcurrent option in the recimg command. Here is an example:
```cmd
recimg /showcurrent
```

### How can I set a custom configuration for the recovery image with the recimg command?
You can set a custom configuration for the recovery image by using the /setcurrent option followed by the path to the custom image. Here is an example:
```cmd
recimg /setcurrent D:\CustomRefreshImages\ImageCustomRefresh.wim
```

### Is it possible to delete the custom recovery image with the recimg command?
Yes, you can delete the custom recovery image by using the /deregister option in the recimg command. Here is an example:
```cmd
recimg /deregister
```

### How do I enable or disable the automatic creation of recovery images with the recimg command?
You can enable or disable the automatic creation of recovery images by using the /setcurrent option followed by the path to the custom image or by using the /deregister option. 

### Can I change the size limit of the recovery image created with the recimg command?
No, the size limit of the recovery image created with the recimg command is fixed and cannot be changed.
## Applications of the RECIMG Command

- Creating a custom recovery image for Windows
- Restoring a system to a previous state using a custom recovery image
- Deploying a customized Windows recovery environment
- Refreshing or resetting Windows with a custom recovery image