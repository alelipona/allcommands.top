---
title: VSSADMIN command in Windows
description: Manage Volume Shadow Copy Service in Windows with the VSSADMIN command to create, delete, or list shadow copies and providers.
---

The VSSADMIN command in Windows allows users to manage the Volume Shadow Copy Service. This powerful tool can be used to create, delete, or list shadow copies and providers. By using various options and parameters, users can efficiently interact with the Volume Shadow Copy Service to meet their backup and recovery needs.

## VSSADMIN Syntax:
```cmd
vssadmin [option] [parameter]
```

## Windows VSSADMIN Options:
| Option | Description                              |
|--------|------------------------------------------|
| list   | Lists all VSS writers and providers.     |
| create | Creates a new shadow copy of a volume.   |
| resize | Resizes the storage area of a shadow copy.|
| delete | Deletes shadow copies.                   |
| list writers| Lists all subscribed VSS writers.    |
| list providers | Lists all registered VSS providers. |

## VSSADMIN Parameters:
| Parameter | Description                                           |
|-----------|-------------------------------------------------------|
| /quiet    | Redirects all output to the console without prompts. |
| /verbose  | Displays detailed output.                             |
| /for      | Specifies the volume for which the operation applies.|

:::caution
Exercise caution when using the VSSADMIN command, as it directly affects Volume Shadow Copies on the system and can impact the system's backup and restore functionality if not used correctly.
:::
## How to use VSSADMIN command:
### List all shadow copies on a specific volume
```cmd
vssadmin list shadows /for=C:
```
Displays a list of all shadow copies created on the C: volume.

### Create a shadow copy of a specific volume
```cmd
vssadmin create shadow /for=C:
```
Generates a new shadow copy for the C: volume.

### Delete a specific shadow copy
```cmd
vssadmin delete shadows /shadow={XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}
```
Removes the shadow copy identified by the specified shadow ID.

### Set the maximum size for shadow copies
```cmd
vssadmin Resize ShadowStorage /On=C: /For=C: /MaxSize=20%
```
Defines the maximum storage size allocated for shadow copies on the C: volume to 20%.

### List all shadow storage associations
```cmd
vssadmin list shadowstorage
```
Shows a list of all volumes and their associated shadow storage settings.

### Delete all shadow copies on a specific volume
```cmd
vssadmin delete shadows /for=C: /all
```
Removes all shadow copies created for the C: volume.

### List writers and their status
```cmd
vssadmin list writers
```
Displays a list of all writers along with their current status.

### Change the location where shadow copies are stored
```cmd
vssadmin Change ShadowStorage /For=C: /On=D: /MaxSize=10%
```
Updates the storage location for shadow copies from the C: volume to the D: volume with a maximum size of 10%.
:::tip
When using the vssadmin command in Windows, it is important to run it with administrative privileges to ensure proper functionality.
:::

### How do I use vssadmin in Windows?
To use the vssadmin command in Windows, execute the following command:
```cmd
vssadmin --option <value>
```

### What is the purpose of the vssadmin create shadow command?
The vssadmin create shadow command is used to create a new shadow copy on a specified volume. This can be helpful for backup or other data recovery purposes.
```cmd
vssadmin create shadow /for=C:
```

### How can I list all shadow copies on the system using vssadmin?
To list all shadow copies on the system, you can use the following vssadmin command:
```cmd
vssadmin list shadows
```

### What is the syntax for deleting a specific shadow copy with vssadmin?
To delete a specific shadow copy using vssadmin, you can use the following syntax:
```cmd
vssadmin delete shadows /shadow=<ShadowID>
```

### How do I resize the storage area for shadow copies with vssadmin?
To resize the storage area for shadow copies using vssadmin, you can use the following command:
```cmd
vssadmin resize shadowstorage /for=C: /on=C: /maxsize=50GB
```

### Can I schedule automatic shadow copy creation with vssadmin?
Yes, you can schedule automatic shadow copy creation using the vssadmin command along with Task Scheduler in Windows.
```cmd
vssadmin create shadow /for=C: /autoretry=3 /timewait=10
```

### How can I display detailed information about a specific shadow copy using vssadmin?
To display detailed information about a specific shadow copy, you can use the following vssadmin command:
```cmd
vssadmin list shadows /shadow=<ShadowID>
```

### Is it possible to change the default location for storing shadow copies in Windows with vssadmin?
Yes, you can change the default location for storing shadow copies using the vssadmin set shadowstorage command in Windows.
```cmd
vssadmin add shadowstorage /for=C: /on=D: /maxsize=50GB
```

## Applications of the VSSADMIN Command

- List all shadow copies on a system
- Create a shadow copy
- Delete a shadow copy
- List all shadow storage associations
- Delete shadow storage associations
- Resize shadow storage
- List providers
- List volumes that are eligible for shadow copies
- List all shadow copies associated with a particular volume