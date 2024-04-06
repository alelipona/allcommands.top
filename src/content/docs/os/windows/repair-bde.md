---
title: Windows REPAIR-BDE command
description: Learn how to use the Windows repair-bde command to repair BitLocker-protected drives easily.
---

The Windows repair-bde command allows users to repair BitLocker-encrypted drives and recover data in case of corruption or other issues. By following the necessary steps and providing the required information, users can utilize this command to fix problems with their BitLocker-protected drives efficiently.
## REPAIR-BDE Syntax:
```cmd
repair-bde -recoverykey <PathToRecoveryKey> <Volume> <DestinationVolume>
```
## Options:
| Option        | Description                         |
|---------------|-------------------------------------|
| -recoverykey  | Specifies the path to the recovery key file. |

## Parameters:
| Parameter           | Description                                  |
|---------------------|----------------------------------------------|
| <PathToRecoveryKey> | The full path to the BitLocker recovery key file.  |
| <Volume>            | The drive letter or mount point of the volume to repair. |
| <DestinationVolume> | The drive letter or mount point for the destination volume where recovered files will be saved. |

:::caution
Exercise caution when using the repair-bde command as the process may lead to permanent data loss if not performed correctly. It is recommended to back up all important data on the affected drive before attempting any repairs.
:::
## REPAIR-BDE Usage:
### Decrypt BitLocker-encrypted Drive
```cmd
repair-bde E: F: -rk C:\RecoveryKey.bek
```
This command decrypts a BitLocker-encrypted drive with the recovery key located at "C:\RecoveryKey.bek".

### Repair BitLocker-encrypted Drive
```cmd
repair-bde F: -rebuild
```
Initiates repair on a BitLocker-encrypted drive located at drive letter F: to fix any errors.

### Retrieve BitLocker Recovery Information
```cmd
repair-bde C: -protectors -get
```
Retrieves the recovery information for a BitLocker-encrypted drive located at drive letter C:.

### Change BitLocker Password
```cmd
repair-bde D: -changepassword
```
Allows the user to change the password of a BitLocker-encrypted drive located at drive letter D:.
:::tip
Make sure to run the repair-bde command with administrative privileges to ensure it has all the necessary permissions to repair a BitLocker-encrypted drive.
:::

### How do I use repair-bde in Windows?
To use the repair-bde command in Windows, execute the following command:
```cmd
repair-bde C: F: -RecoveryKey "C:\RecoveryKey.bek"
```

### What is the syntax for the repair-bde command in Windows?
The syntax for the repair-bde command in Windows is as follows:
```cmd
repair-bde <sourceDrive> <destinationDrive> -RecoveryKey "<pathToRecoveryKey>"
```

### How can I repair a BitLocker-encrypted drive using repair-bde?
To repair a BitLocker-encrypted drive using repair-bde, you need to specify the source drive, the destination drive, and the path to the recovery key file. Here is an example:
```cmd
repair-bde C: F: -RecoveryKey "C:\RecoveryKey.bek"
```

### Can repair-bde fix errors on a BitLocker-encrypted drive?
Yes, the repair-bde command can fix errors on a BitLocker-encrypted drive by using a provided recovery key file to decrypt and repair the drive.

### What should I do if repair-bde fails to repair my BitLocker-encrypted drive?
If repair-bde fails to repair your BitLocker-encrypted drive, ensure that you have correctly entered the recovery key and try again. If the issue persists, consider seeking professional help for data recovery.

### Is it possible to use repair-bde on a BitLocker-encrypted external drive?
Yes, you can use the repair-bde command on a BitLocker-encrypted external drive by connecting the drive to a Windows system and running the repair command with the appropriate parameters.

### How long does it typically take for repair-bde to repair a BitLocker-encrypted drive?
The time taken for repair-bde to repair a BitLocker-encrypted drive can vary depending on the size of the drive and the extent of the issues. Larger drives or more severe errors may take longer to repair.

## Applications of the REPAIR-BDE Command

- Repair the BitLocker-encrypted drive and recover data.