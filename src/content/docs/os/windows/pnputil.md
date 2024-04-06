---
title: PNPUTIL command in Windows
description: Manage Windows drivers with ease using the PNPUTIL command. Learn how to add, remove, and list drivers with this powerful tool.
---

The PNPUTIL command in Windows allows users to manage device drivers effortlessly. From adding new drivers to removing old ones, and listing all currently installed drivers, PNPUTIL provides a convenient way to handle driver management tasks. The command can be run from the Command Prompt or PowerShell, making it accessible to both novice and advanced users. Whether you need to troubleshoot driver issues or simply want to keep your system up to date, PNPUTIL is a valuable tool in the Windows environment.
## PNPUTIL Syntax:
```cmd
pnputil [options] [parameters]
```

## Windows PNPUTIL Options:
| Option          | Description                            |
|-----------------|----------------------------------------|
| -a              | Add a driver package to the driver store. |
| -d              | Delete a driver package from the driver store. |
| -e              | Enumerate all 3rd party driver packages. |
| -f              | Force the operation to succeed when the driver package is unsigned. |
| -i              | Install a driver package. |
| -u              | Uninstall a driver package. |
| -y              | Quiet mode, do not ask for confirmation. |
| -?              | Display help. |

## PNPUTIL Parameters:
| Parameter       | Description                            |
|-----------------|----------------------------------------|
| /?              | Display help information. |
| /add-driver     | Install a driver package. |
| /delete-driver  | Delete a driver package. |
| /disable        | Disable a device. |
| /enable         | Enable a device. |
| /enum-drivers   | Enumerate all 3rd party drivers. |
| /export-driver  | Copy the driver files from the driver store to a specified directory. |
| /import-driver  | Copy the driver files to the driver store. |
| /install        | Install a driver package. |
| /update         | Update a device. |
| /uninstall      | Uninstall a device and delete the driver package. |

:::caution
Exercise caution when using the pnputil command, as it directly interacts with driver packages and can lead to system instability if used incorrectly.
:::
## How to use PNPUTIL command:
### List all driver packages
```cmd
pnputil /enum-drivers
```
This command lists all driver packages currently in the driver store.

### Add a driver package to the driver store
```cmd
pnputil /add-driver C:\Path\to\Driver\driver.inf
```
Adds a driver package located at the specified path to the driver store.

### Remove a driver package from the driver store
```cmd
pnputil /delete-driver DriverPackageName.inf
```
Deletes a specific driver package from the driver store using its name.

### Import a driver package to the driver store
```cmd
pnputil /add-driver C:\Path\to\Driver\driver.inf /install
```
Imports and installs a driver package from the specified path to the driver store.

### Scan for new hardware
```cmd
pnputil /scan-devices
```
Initiates a scan to detect new hardware devices on the system.

### List all published driver packages
```cmd
pnputil /enum-published-drivers
```
Displays a list of all published driver packages in the driver store.

### List devices with a driver package
```cmd
pnputil /enum-devices
```
Lists all devices along with their associated driver packages in the driver store.

### Remove all driver packages
```cmd
pnputil /delete-driver * /uninstall
```
Removes all driver packages from the driver store, effectively uninstalling all drivers.
:::tip
When using the pnputil command in Windows CMD, make sure to run the command prompt as an administrator to avoid any permission issues.
:::

### How do I use pnputil to list all the drivers on my system?
To list all the drivers on your system using pnputil, run the following command:
```cmd
pnputil /e
```

### How can I add a driver package using pnputil?
To add a driver package using pnputil, use the following command:
```cmd
pnputil /a <driverinf>
```

### How do I uninstall a driver package with pnputil?
To uninstall a driver package with pnputil, execute the command:
```cmd
pnputil /d <OEM*.INF>
```

### Can I export a driver package with pnputil?
Yes, you can export a driver package using pnputil by running the command:
```cmd
pnputil /e /f <path\to\exported\folder>
```

### How do I search for a specific driver package with pnputil?
To search for a specific driver package using pnputil, use the following command:
```cmd
pnputil /f /s <keyword>
```

### How can I get detailed information about a driver package with pnputil?
To get detailed information about a driver package with pnputil, run the command:
```cmd
pnputil /a <driverinf> /?
```

### Can I force an update of a driver package using pnputil?
Yes, you can force an update of a driver package with pnputil by running the command:
```cmd
pnputil /i /a <driverinf> /f
```

### How do I remove all driver packages in the driver store with pnputil?
To remove all driver packages in the driver store using pnputil, execute the following command:
```cmd
pnputil /delete-driver *
```

## Applications of the PNPUTIL Command

- Add a driver package to the driver store
- List all driver packages in the driver store
- Delete a driver package from the driver store
- Enable or disable specific driver packages
- Export a driver package from the driver store
- Import a driver package into the driver store
- Show information about a specific driver package in the driver store