---
title: What is BDEHDCFG Windows command?
description: Learn how to use the Windows bdehdcfg command to enable or disable BitLocker on a specific drive. 
---

The bdehdcfg command in Windows is used to manage BitLocker on a specific drive. It allows users to enable or disable BitLocker, change the encryption method, or even remove BitLocker protection altogether. By using bdehdcfg, users can control the BitLocker security settings for their drive with ease. This command provides a convenient way to manage encryption settings and ensure data security on Windows operating systems.
## BDEHDCFG Syntax:
```cmd
bdehdcfg -create -target c: -size 300
```
## BDEHDCFG Options:

| Option | Description                           |
|--------|---------------------------------------|
| -create| Creates a new BitLocker Drive Encryption partition.|
| -target| Specifies the target drive where the partition will be created.|
| -size  | Specifies the size of the partition in megabytes.|

## BDEHDCFG Parameters:

| Parameter | Description                           |
|-----------|---------------------------------------|
| c:        | The drive letter where the partition will be created.|
| 300       | The size of the partition in megabytes.    |
## BDEHDCFG Command Usage Examples:

### Disable BitLocker on a specific drive
```cmd
bdehdcfg -target C: -quiet
```
This command will disable BitLocker on the specified drive (in this case, drive C) quietly without any prompts.

### Prepare a drive for BitLocker encryption
```cmd
bdehdcfg -target D: -enable
```
This command will prepare the specified drive (drive D in this instance) for BitLocker encryption.

### Get BitLocker encryption status for a drive
```cmd
bdehdcfg -target E: -status
```
This command will display the BitLocker encryption status for the specified drive (drive E here) including whether it is enabled or disabled.

### Enable BitLocker and set a recovery password
```cmd
bdehdcfg -target F: -enable -pw
```
This command will enable BitLocker on the specified drive (drive F) and prompt to set a recovery password during the process.

### Decrypt a BitLocker-encrypted drive
```cmd
bdehdcfg -target G: -decrypt
```
This command will decrypt the specified BitLocker-encrypted drive (drive G) and remove the encryption from the drive.
:::tip
When using the bdehdcfg command in Windows CMD, make sure to carefully follow the syntax for the desired options to avoid errors and achieve the desired configuration changes effectively.
:::

### How do I use bdehdcfg in CMD?
To use the bdehdcfg command in CMD, execute the following command:
```cmd
bdehdcfg -target <target> -quiet
```

### What is the purpose of the bdehdcfg command in Windows?
The bdehdcfg command in Windows is used to configure BitLocker Drive Encryption settings.

### How can I enable BitLocker with bdehdcfg?
To enable BitLocker using bdehdcfg in CMD, use the following command:
```cmd
bdehdcfg -settarget default
```

### How do I check the BitLocker status with bdehdcfg?
To check the BitLocker status using bdehdcfg in CMD, run the command:
```cmd
bdehdcfg -target default -quiet -status
```

### What are some common options used with bdehdcfg in Windows CMD?
Some common options used with bdehdcfg in Windows CMD are `-target`, `-quiet`, `-status`, `-keylocation`, etc.

### How can I encrypt a specific drive with BitLocker using bdehdcfg?
To encrypt a specific drive with BitLocker using bdehdcfg, execute the command:
```cmd
bdehdcfg -target <drive_letter> -quiet -keylocation <path_to_store_key>
```

### How do I remove BitLocker encryption from a drive using bdehdcfg?
To remove BitLocker encryption from a drive using bdehdcfg, use the command:
```cmd
bdehdcfg -target <drive_letter> -quiet -uninstall
```

### Can I automate BitLocker configuration tasks with bdehdcfg in Windows CMD?
Yes, you can automate BitLocker configuration tasks using scripts and batch files that incorporate the bdehdcfg command.

## Applications of the BDEHDCFG Command

- Set up BitLocker for a specific drive.
- Manage BitLocker settings for a specific drive.
- Control security settings for specific drives.
- Update recovery information for BitLocker-protected drives.