---
title: What is PNPUNATTEND Windows command?
description: Easily automate Plug and Play device installations with the Windows pnpunattend command.
---

The Windows pnpunattend command allows users to automate Plug and Play device installations, streamlining the process and saving time.

## PNPUNATTEND Syntax:
```cmd
pnpunattend [options] [parameters]
```
## PNPUNATTEND Options:
| Option    | Description                             |
|-----------|-----------------------------------------|
| /A        | Adds a PnP device                       |
| /R        | Removes a PnP device                    |
| /S        | Searches for a PnP device               |
| /F        | Finds all PnP devices                   |
| /H        | Prints the help information             |
| /V        | Verbose output                          |

:::caution
Use caution when using the pnpunattend command as it directly interacts with Plug and Play devices, which could disrupt system operations if used incorrectly.
:::

## Parameters:
| Parameter      | Description                       |
|----------------|-----------------------------------|
| DeviceID       | Specifies the device ID to search |

## PNPUNATTEND Command Usage Examples:
### Apply a Specific Driver Package during Windows Setup
```cmd
pnpunattend /S:C:\drivers /I:C:\drivers\driver.inf
```
Applies a specific driver package located in the C:\drivers directory during Windows setup.

### Enable Plug and Play Device Installation
```cmd
pnpunattend /ENABLE
```
Enables Plug and Play (PnP) device installation on the Windows system.

### Disable a Specific Device Installation by Hardware ID
```cmd
pnpunattend /DISABLE /ID:ACPI\PNP0A08
```
Disables the installation of a specific device with the hardware ID ACPI\PNP0A08 on the Windows system.

### List All Installed Devices with Full Information
```cmd
pnpunattend /ENUM /ALL
```
Lists all installed devices on the Windows system along with detailed information for each device.

### Import Plug and Play Configuration Settings from an XML File
```cmd
pnpunattend /IMPORT:C:\pnpConfig.xml
```
Imports Plug and Play configuration settings stored in the C:\pnpConfig.xml file into the Windows system.
:::tip
When using the pnpunattend command in Windows CMD, make sure to carefully follow the syntax and provide the necessary options and values to achieve the desired configuration. Refer to official documentation or resources for detailed information on available options and their usage.
:::

### How do I use pnpunattend in Windows?
To use the pnpunattend command in CMD, execute the following command:
```cmd
pnpunattend --option <value>
```

### What are some common options for pnpunattend in Windows?
When using the pnpunattend command in Windows CMD, some common options include:
```cmd
pnpunattend --install-driver
pnpunattend --remove-device
pnpunattend --restart-computer
```

### How can I install a specific driver using pnpunattend in Windows?
To install a specific driver using the pnpunattend command in CMD, use the following syntax:
```cmd
pnpunattend --install-driver "C:\Path\To\Driver.inf"
```

### Can I use pnpunattend to disable a device in Windows?
Yes, you can use the pnpunattend command to disable a device in Windows. Execute the following command:
```cmd
pnpunattend --disable-device "Device Name"
```

### How do I restart the computer using pnpunattend in Windows?
To restart the computer using the pnpunattend command in CMD, use the following syntax:
```cmd
pnpunattend --restart-computer
```

### Is it possible to list all devices using pnpunattend in Windows?
Yes, you can list all devices using the pnpunattend command in Windows CMD. Use the following command:
```cmd
pnpunattend --list-devices
```

### How can I remove a specific device using pnpunattend in Windows?
To remove a specific device using the pnpunattend command in CMD, use the following syntax:
```cmd
pnpunattend --remove-device "Device Name"
```

## Applications of the PNPUNATTEND Command

- Automatically installing device drivers during Windows setup
- Suppressing hardware component detection during Windows installation
- Skipping the Plug and Play device detection process during installation
- Avoiding potential issues with certain hardware devices during setup
- Streamlining the Windows installation process by pre-configuring device driver installation