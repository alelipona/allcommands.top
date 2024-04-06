---
title: AUDITPOL Windows Command Guide
description: Learn how to use the Windows auditpol command to manage security auditing settings on your system.
---

The Windows auditpol command is a powerful tool that allows users to manage security auditing settings on their systems. By using this command, users can enable or disable auditing for specific events, control the size and behavior of the security log, and configure advanced audit policies. The auditpol command can also be used to view the current audit policies in place on the system, as well as to troubleshoot any audit-related issues that may arise. With its flexibility and range of options, the auditpol command is an essential tool for system administrators looking to enhance the security of their Windows environments.

## AUDITPOL Syntax:
```cmd
auditpol [options] [parameters]
```

## Options:
| Option | Description                                 |
|--------|---------------------------------------------|
| /get   | Retrieves the current audit policy settings |
| /set   | Configures the audit policy settings         |
| /list  | Lists the available audit policy categories  |
| /backup| Backs up the current audit policy settings   |
| /restore| Restores audit policy settings from a backup|

## Parameters:
| Parameter   | Description                                            |
|-------------|--------------------------------------------------------|
| /category:  | Specifies the audit policy category to be configured   |
| /subcategory:| Specifies the audit policy subcategory to be configured|
| /success:   | Configures auditing for successful events              |
| /failure:   | Configures auditing for failed events                  |
| /enable     | Enables the specified audit policy                     |
| /disable    | Disables the specified audit policy                    |
| /file:      | Specifies the file path for backup or restore operations|

:::caution
Exercise caution when using the auditpol command, as incorrectly configuring audit policies can lead to unexpected security vulnerabilities or loss of audit data.
:::
## AUDITPOL Command Samples:

### Enable All Audit Policies
```cmd
auditpol /set /category:*
```
Enables all audit policies on the system.

### Disable Specific Audit Subcategory
```cmd
auditpol /set /subcategory:"Logoff" /success:disable /failure:disable
```
Disables auditing for the "Logoff" subcategory both for successful and failed events.

### Display Current Audit Policy
```cmd
auditpol /get /category:*
```
Displays the current audit policy settings for all categories on the system.

### Enable Audit Policy for Object Access
```cmd
auditpol /set /subcategory:"File System" /success:enable /failure:enable
```
Enables auditing for Object Access subcategory "File System" for both successful and failed events.

### Remove a Specific Audit Policy
```cmd
auditpol /remove /subcategory:"Credential Validation" /success:enable /failure:enable
```
Removes the audit policy for the "Credential Validation" subcategory for successful and failed events.
:::tip
When using the auditpol command in Windows CMD, make sure to run the Command Prompt as an administrator to ensure that you have the necessary permissions to configure audit policies.
:::

## AUDITPOL FAQ:
### How do I use auditpol in CMD?
To use the auditpol command in CMD, execute the following command:
```cmd
auditpol /get /category:*
```
---
### How can I enable auditing for a specific event category using auditpol in CMD?
To enable auditing for a specific event category using auditpol in CMD, you can use the following command:
```cmd
auditpol /set /subcategory:"Account Lockout" /success:enable /failure:enable
```
---
### What command should I use to clear all audit policies using auditpol in CMD?
To clear all audit policies using auditpol in CMD, you can run the following command:
```cmd
auditpol /clear
```
---
### Is there a way to export the audit policy settings to a file using auditpol in CMD?
Yes, you can export the audit policy settings to a file using auditpol in CMD by running the following command:
```cmd
auditpol /backup /file:C:\AuditPolicyBackup.txt
```
---
### How do I restore audit policy settings from a backup file using auditpol in CMD?
To restore audit policy settings from a backup file using auditpol in CMD, you can use the following command:
```cmd
auditpol /restore /file:C:\AuditPolicyBackup.txt
```
---
### Can I view specific audit policy details for a particular category using auditpol in CMD?
Yes, you can view specific audit policy details for a particular category using auditpol in CMD by running the following command:
```cmd
auditpol /get /category:"Logon/Logoff"
```
## Applications of the auditpol Command

- Enabling or disabling auditing for specific categories
- Configuring audit policies for success and failure events
- Viewing the current audit policies
- Backing up and restoring audit policies
- Analyzing audit logs for security purposes