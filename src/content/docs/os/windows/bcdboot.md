---
title: Windows BCDBOOT command
description: Command to manage the boot configuration data for Windows operating systems.
---

The Windows bcdboot command is a powerful tool used to manage the boot configuration data (BCD) for Windows operating systems. This command allows users to create, repair, or update the BCD store, which is essential for the system to boot properly. By using bcdboot, users can add boot entries, specify the boot partition, and set boot configuration options. This command is particularly useful in situations where the boot configuration is corrupted or missing, resulting in startup issues. With bcdboot, users can restore the BCD store and fix boot problems, ensuring the system can boot successfully. Additionally, bcdboot can be used to configure multiple boot options for dual-boot or multi-boot setups, allowing users to choose which operating system to boot into. Overall, the Windows bcdboot command is a crucial tool for managing the boot process and ensuring the proper functioning of Windows operating systems.

## BCDBOOT Syntax:
```cmd
bcdboot <source> [/l <locale>] [/s <volume>] [/t <firmware>] [/v] [/m [{ALL | <ID>}]] [/p] [/d] [/f {<FirmwareType[,...]>}] [/copy {BOOTMGR | NTLDR | <File>}] [/addlast] [/device <Device>] [/quiet] [/createramdisk <SizeInMB>]
```

## Options:
| Option       | Description                                                                                                 |
|--------------|-------------------------------------------------------------------------------------------------------------|
| /l           | Sets the locale for the system.                                                                             |
| /s           | Specifies the system partition where boot files will be copied.                                              |
| /t           | Sets the firmware type to be used.                                                                          |
| /v           | Provides verbose output.                                                                                    |
| /m           | Specifies the update options to apply to the BCD store.                                                      |
| /p           | Polishes the BCD store for the firmware type.                                                               |
| /d           | Restores the default system partition letter.                                                               |
| /f           | Specifies the firmware type for the boot files.                                                             |
| /copy        | Copies a valid existing boot manager file to the system partition.                                          |
| /addlast     | Forces the BCD store update to be the last step.                                                            |
| /device      | Specifies the device on which to update the BCD store.                                                      |
| /quiet       | Suppresses all output except for errors.                                                                    |
| /createramdisk | Creates a ramdisk for the new boot files and specifies its size in megabytes.                               |

## Parameters:
| Parameter    | Description                                                                                                 |
|--------------|-------------------------------------------------------------------------------------------------------------|
| <source>     | Specifies the location of the Windows directory to use as the source for copying boot environment files.   |
| <locale>     | Specifies the locale to use for the boot configuration data.                                                |
| <volume>     | Specifies the system partition or the EFI system partition where boot files will be copied.                |
| <firmware>   | Specifies the firmware type to be used.                                                                     |
| ALL          | Specifies that settings should be applied to all firmware types.                                             |
| <ID>         | Specifies only the specified firmware type to be updated.                                                   |
| <FirmwareType[,...]> | Specifies one or more firmware types for the boot files.                                              |
| BOOTMGR      | Specifies to copy BOOTMGR from the source.                                                                  |
| NTLDR        | Specifies to copy NTLDR from the source.                                                                    |
| <File>       | Specifies a specific file to copy from the source.                                                         |
| <Device>     | Specifies the device to update with new boot files.                                                        |
| <SizeInMB>  | Specifies the size of the RAM disk in megabytes.                                                           |

:::caution
Exercise caution when using the bcdboot command as it involves updating essential boot configuration data. Incorrect usage may render the system unbootable.
:::
## BCDBOOT Usage:
### Create a new BCD store on a system partition
```cmd
bcdboot C:\Windows /s C:
```
Creates a new Boot Configuration Data (BCD) store on the system partition.

### Repair the BCD store using a specified source
```cmd
bcdboot D:\Windows /s C:
```
Repairs the BCD store on the C: drive by using the Windows installation files located in the D:\Windows directory.

### Copy boot files to the EFI System Partition
```cmd
bcdboot C:\Windows /s Z: /f UEFI
```
Copies necessary boot files from C:\Windows to the EFI System Partition (ESP) on drive Z: in UEFI mode.

### Set the store option for a particular target operating system
```cmd
bcdboot C:\Windows /s C: /f BIOS /t Windows
```
Sets the BCD store option for the target Windows operating system to boot in BIOS mode.
:::tip
When using the bcdboot command in CMD, always ensure that you have administrative privileges to avoid any permission errors.
:::

### How do I use bcdboot in CMD?
To use the bcdboot command in CMD, execute the following command:
```cmd
bcdboot C:\windows
```

### What is the purpose of the bcdboot command?
The bcdboot command is used to quickly set up a system partition, boot configuration data (BCD), and boot files on a currently running Windows OS partition.


### Can I use bcdboot to repair the boot environment?
Yes, bcdboot can be used to repair the boot environment by recreating the system partition, including the Windows boot files and BCD store.
```cmd
bcdboot C:\windows /s C:
```

### How do I specify the target location when using bcdboot?
When using bcdboot, you can specify the target location by providing the path to the Windows directory or partition where the boot files should be copied. Below is an example:
```cmd
bcdboot D:\windows
```

### Is it possible to set the boot configuration data store with bcdboot?
Yes, you can set the BCD store location by using the /m parameter in the bcdboot command. Here is an example:
```cmd
bcdboot X:\windows /m {bootmgr}
```

### Can bcdboot be used to change the default boot entry?
Yes, you can use bcdboot to change the default boot entry by specifying it with the /default parameter. For instance:
```cmd
bcdboot C:\windows /s C: /f UEFI /v /l en-US /default {current}
```
---

### How can I view the current boot configuration settings with bcdboot?
To view the current boot configuration settings, you can use the /enum option with bcdboot. Running the following command will display the current BCD settings:
```cmd
bcdboot /enum
```

##Applications of the BCDBOOT Command

1. Create or repair a boot partition.
2. Configure the boot configuration data (BCD).
3. Set up or repair the boot environment for Windows installations.
4. Update the boot files on the system partition.
5. Rebuild the Boot Configuration Data store.