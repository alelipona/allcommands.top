---
title: What is BOOTSECT Windows command?
description: Learn how to use the Windows bootsect command to manage the master boot record and the boot sector of your computer's hard drive.
---

The Windows bootsect command is a built-in tool that allows users to manage the master boot record (MBR) and the boot sector of their computer's hard drive. This command is mainly used to repair or rebuild the bootloader when issues arise during the boot process. By using the bootsect command, you can fix various boot-related problems, such as invalid MBR or missing boot sectors. It is also useful for configuring the active partition and ensuring that your computer can start up properly. Additionally, the bootsect command can be utilized to create a USB flash drive that is bootable, making it easier to install or repair Windows on a computer without an optical drive. This command is typically run from the Command Prompt with specific parameters to perform different tasks related to the boot process. Overall, the bootsect command is a powerful tool that helps users troubleshoot boot issues and manage their computer's boot configuration effectively.

## BOOTSECT Syntax:
```cmd
bootsect /nt60 [drive] [/mbr | /force] 
```
## BOOTSECT Options:

| Option   | Description                               |
|----------|-------------------------------------------|
| /nt60    | Updates the master boot code for Windows Vista, Windows Server 2008, Windows 7, Windows Server 2008 R2, Windows 8, and Windows Server 2012 |
| /mbr     | Updates the master boot record without testing the integrity of the volume   |
| /force   | Attempts to force upgrading the boot sector even if it is not necessary  |

:::caution
Using the bootsect command incorrectly can render your system unbootable. Ensure that you have a backup of critical data before running this command, and double-check the drive letter parameter to avoid accidentally modifying the wrong drive.
:::

## Parameters:

| Parameter   | Description                              |
|-------------|------------------------------------------|
| drive       | Specifies the drive letter followed by a colon (:) where the bootsect command will update the boot code. For example, "C:" or "D:". |
## BOOTSECT Command Usage Examples:
### Fix the Master Boot Record (MBR)
```cmd
bootsect /nt60 C: /mbr
```
This command restores the Master Boot Record (MBR) on the C: drive.

### Set the Windows Boot Manager
```cmd
bootsect /nt60 C:
```
Sets the Windows Boot Manager on the C: drive for booting into Windows.

### Rebuild the Boot Configuration Data
```cmd
bootsect /nt60 ALL /force
```
Forces the rebuilding of the Boot Configuration Data (BCD) on all drives.

### Display Help Information
```cmd
bootsect /help
```
Shows the available options and syntax for using the bootsect command.

### Create a USB Flash Drive Boot Sector
```cmd
bootsect /nt60 E: /force /mbr
```
Creates a boot sector on the E: drive of a USB flash drive with the MBR forcefully updated.
:::tip
When using the bootsect command in CMD, make sure to run it with administrative privileges to avoid any permission issues.
:::

### How do I install the boot sector of the active partition?	
To install the boot sector of the active partition, use the following command:
```cmd
bootsect /nt60 SYS /mbr
```

### How can I update the master boot record (MBR) of the system disk?
To update the master boot record of the system disk, you can run:
```cmd
bootsect /nt60 ALL /force /mbr
```

### What is the command to write a new boot sector to the system partition?	
The command to write a new boot sector to the system partition is:
```cmd
bootsect /nt60 C:
```

### How do I restore the boot code on the boot sector?
To restore the boot code on the boot sector, execute the following command:
```cmd
bootsect /nt60 SYS /MBR
```

### How can I change the boot manager from Windows 7 to Windows 10?	
To change the boot manager from Windows 7 to Windows 10, use:
```cmd
bootsect /nt60 C: /force /mbr
```

### What is the command to update the boot configuration on the target volume?
The command to update the boot configuration on the target volume is:
```cmd
bootsect /nt60 D: /force /mbr
```

### How do I view detailed options and help information for the bootsect command?
To view detailed options and help information for the bootsect command, run:
```cmd
bootsect /help
```

### How can I restore the boot sector of a specific partition without affecting the MBR?
To restore the boot sector of a specific partition without affecting the MBR, execute:
```cmd
bootsect /nt60 D: /force
```
## Applications of the BOOTSECT Command

- Updating the master boot code for a specified disk
- Setting up a disk to be bootable by a PC
- Fixing issues with the master boot record (MBR) or boot sector