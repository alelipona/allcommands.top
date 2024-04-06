---
title: HWRREG command in Windows
description: Execute the hwrreg command in Windows to manage handwriting recognition settings efficiently.
---

The hwrreg command in Windows is a powerful tool for configuring and managing handwriting recognition settings. This command allows users to customize various aspects of the handwriting recognition feature, such as language settings, recognition accuracy, and training data. By using the hwrreg command, you can fine-tune the handwriting recognition experience to suit your needs and preferences. This can help improve overall productivity and efficiency when using handwriting input on your Windows system.
## HWRREG Syntax:
```cmd
hwrreg [option] [parameter]
```
## Windows HWRREG Options:
| Option | Description              |
|--------|--------------------------|
| -r     | Registers a specified hardware component.   |
| -u     | Unregisters a specified hardware component. |
| -i     | Displays information about a specified hardware component. |
| -e     | Enumerates all registered hardware components. |
| -l     | Lists all registered hardware components. |

## HWRREG Parameters:
| Parameter           | Description                       |
|---------------------|-----------------------------------|
| component_name      | Specifies the name of the hardware component.   |
| GUID                | Specifies the Globally Unique Identifier (GUID) of the hardware component.   |
| Subcomponent_GUID   | Specifies the Subcomponent for a hardware component.   |
| Friendly_Name       | Specifies the friendly name of the hardware component.   |

:::caution
Exercise caution when using the hwrreg command as it deals with registering, unregistering, and managing hardware components on the system. Incorrect usage of this command can result in unexpected behavior or errors in the hardware configuration.
:::
## How to use HWRREG command:
### Display Hardware Registry information of the computer
```cmd
hwrreg
```
Displays the Hardware Registry information of the computer.

### Display the help information for the HWRREG command
```cmd
hwrreg /?
```
Shows the help information for the HWRREG command.

### Export the Hardware Registry information to a file
```cmd
hwrreg /export C:\hardware_info.txt
```
Exports the Hardware Registry information to a file named "hardware_info.txt" in the C drive.

### Force the Hardware Registry to rebuild
```cmd
hwrreg /rebuild
```
Forces the Hardware Registry to rebuild.

### Display detailed information about installed device drivers
```cmd
hwrreg /drivers
```
Shows detailed information about the installed device drivers.

### Import Hardware Registry information from a file
```cmd
hwrreg /import C:\hardware_info.txt
```
Imports Hardware Registry information from a file named "hardware_info.txt" in the C drive.

### Check the status of the Hardware Registry
```cmd
hwrreg /check
```
Checks the status of the Hardware Registry.

### Restore the Hardware Registry to a previous state
```cmd
hwrreg /restore
```
Restores the Hardware Registry to a previous state.
:::tip
Make sure to run the hwrreg command with the appropriate options and values to access and modify hardware registry settings effectively.
:::

### How do I use hwrreg in Windows?
To use the hwrreg command in Windows, execute the following command:
```cmd
hwrreg --query "HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion"
```

### What is the syntax for hwrreg command in CMD?
The syntax for the hwrreg command in CMD is as follows:
```cmd
hwrreg --option <value>
```

### How can I query a specific hardware registry key with hwrreg?
You can query a specific hardware registry key with hwrreg using the following command:
```cmd
hwrreg --query "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Class\{36FC9E60-C465-11CF-8056-444553540000}"
```

### Can hwrreg be used to modify hardware registry settings in Windows?
Yes, hwrreg can be used to modify hardware registry settings in Windows. Here is an example command to set a registry value:
```cmd
hwrreg --set "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ACPI\Parameters" -v EnableBrightnessControl -d 1 -t REG_DWORD
```

### How do I list all the available options for hwrreg command?
To list all the available options for the hwrreg command, you can use the following command:
```cmd
hwrreg --help
```

### Is it possible to export hardware registry settings using hwrreg?
Yes, you can export hardware registry settings using hwrreg with the following command:
```cmd
hwrreg --export "C:\Path\To\ExportedFile.reg" "HKEY_LOCAL_MACHINE\Hardware"
```

### How can I delete a specific hardware registry key using hwrreg?
You can delete a specific hardware registry key using hwrreg with the following command:
```cmd
hwrreg --delete "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NewKey"
```

### Can hwrreg be used for importing registry settings in Windows?
Yes, hwrreg can be used for importing registry settings in Windows. Here is an example command to import registry settings:
```cmd
hwrreg --import "C:\Path\To\ImportedFile.reg"
```

## Applications of the HWRREG Command

- Enable or disable hardware error 
- Retrieve hardware error information