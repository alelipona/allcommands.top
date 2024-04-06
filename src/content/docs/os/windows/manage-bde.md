---
title: What is MANAGE-BDE Windows command?
description: Manage-BDE is a Windows command-line tool that enables users to manage BitLocker drive encryption on their devices easily.
---

Manage-BDE is a versatile Windows command-line tool that allows users to efficiently manage BitLocker drive encryption on their devices.

## MANAGE-BDE Syntax:
```cmd
manage-bde
```

## MANAGE-BDE Options:
| Option       | Description                                |
|--------------|--------------------------------------------|
| -autounlock  | Manages automatic unlocking of data volumes|
| -status      | Displays the encryption status of the volumes |
| -on          | Enables BitLocker protection on a volume   |
| -off         | Disables BitLocker encryption on a volume  |
| -pause       | Suspends BitLocker encryption on a volume  |
| -resume      | Resumes BitLocker encryption on a volume   |

:::caution
Exercise caution when using the manage-bde command, as it can have a significant impact on data security and accessibility. Make sure to follow proper procedures and backup important data before executing commands.
:::

## Parameters:
| Parameter    | Description                                |
|--------------|--------------------------------------------|
| -autounlock  | Specifies to enable or disable automatic unlocking for a data volume|
| -status      | Displays the encryption status of a specific volume or all volumes |
| -on          | Enables BitLocker protection on the specified volume or volumes |
| -off         | Disables BitLocker encryption on the specified volume or volumes |
| -pause       | Suspends BitLocker encryption on the specified volume or volumes |
| -resume      | Resumes BitLocker encryption on the specified volume or volumes |

## MANAGE-BDE Command Usage Examples:
### Enable BitLocker on Drive C
```cmd
manage-bde -on C:
```
Enables BitLocker encryption on drive C.

### Disable BitLocker on Drive D
```cmd
manage-bde -off D:
```
Disables BitLocker encryption on drive D.

### Change the BitLocker PIN for Drive E
```cmd
manage-bde -changepin E:
```
Allows changing the BitLocker PIN for drive E.

### Backup BitLocker Recovery Key for Drive F to a USB Drive
```cmd
manage-bde -protectors -get F: -type recoverykey > E:\RecoveryKey-BitLockerF.txt
```
Backs up the BitLocker recovery key for drive F to a USB drive.

### Resume BitLocker Encryption on Drive G
```cmd
manage-bde -resume G:
```
Resumes the BitLocker encryption process on drive G.
:::tip
When using the manage-bde command in Windows, make sure to run the Command Prompt as an administrator to avoid any permission-related issues.
:::

### How do I use manage-bde in Windows?
To use the manage-bde command in CMD, execute the following command:
```cmd
manage-bde --status
```

### How can I encrypt a specific drive with manage-bde?
To encrypt a specific drive using manage-bde, you can use the following command:
```cmd
manage-bde -on C:
```

### How do I decrypt a drive with manage-bde?
To decrypt a drive using manage-bde, you can run the following command:
```cmd
manage-bde -off D:
```

### Can I change the password for BitLocker using manage-bde?
Yes, you can change the password for BitLocker using manage-bde by executing the following command:
```cmd
manage-bde -changepassword E:
```

### How do I add a numerical password to a BitLocker-protected drive with manage-bde?
To add a numerical password to a BitLocker-protected drive using manage-bde, use the following command:
```cmd
manage-bde -protectors -add C: -TPMandPIN
```

### How can I backup the BitLocker recovery key using manage-bde?
To back up the BitLocker recovery key with manage-bde, you can run the following command:
```cmd
manage-bde -protectors -adbackup C: -ID {RecoveryKeyID}
```

### Can I generate a recovery password for BitLocker using manage-bde?
Yes, you can generate a recovery password for BitLocker using manage-bde with the following command:
```cmd
manage-bde -protectors -get C:
```

### How do I suspend BitLocker encryption temporarily with manage-bde?
To temporarily suspend BitLocker encryption using manage-bde, you can run the following command:
```cmd
manage-bde -protectors -disable F:
```

## Applications of the MANAGE-BDE Command

- Initialize-BitLocker
- Suspend-BitLocker
- Resume-BitLocker
- Lock-BitLocker
- Unlock-BitLocker
- Repair-BitLocker
- Update-BitLocker
- Backup-BitLockerKeyProtectors
- BackupToAAD-BitLockerKeyProtectors
- Remove-BitLockerKeyProtector
- Add-BitLockerKeyProtector
- Get-BitLockerVolume
- Enable-BitLocker
- Disable-BitLocker
- Disable-BitLockerAutoUnlock
- Enable-BitLockerAutoUnlock
- Disable-BitLockerRecovery
- Enable-BitLockerRecovery