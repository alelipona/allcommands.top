---
title: KLIST Windows Command Guide
description: Learn how to use the Windows klist command to manage Kerberos tickets and view ticket information.
---

The Windows klist command allows users to manage Kerberos tickets, view ticket information, and purge tickets from the cache. By using various options and parameters, users can perform tasks such as listing tickets in the cache, purging specific tickets, and renewing tickets. This command is essential for troubleshooting Kerberos authentication issues and managing ticket information on Windows systems.

## KLIST Syntax:
```cmd
klist [tickets | tgt | tgt <TargetName> | purge | purge <TargetName> | keys | purgekeys | credentials | tgt <TargetName> /EXPORT | tgt <TargetName> /PURGE | tickets /export [/f <filename>] [/e] | purge | luid <Luid> | tgt <TargetName> /renreq | tgt <TargetName> /renew [/E | /P] | tgt <TargetName> /referer <TargetName> | tgt <TargetName> /verify | tgt <TargetName> /delete | tgt <TargetName> /setpass [/P <oldpassword>] [/N <newpassword>] | tgt <TargetName> /showkeys | enttgt | initialtgt | tgt /cache | passwd /fromkey | /oncemode | /status]
```

## Options:
| Option         | Description                                    |
|----------------|-----------------------------------------------|
| tickets        | Display ticket list                           |
| tgt            | Display the current ticket-granting ticket    |
| tgt <TargetName> | Display the ticket for the specified target   |
| purge          | Purge all tickets                             |
| keys           | Display list of key(s) in the keytab file      |
| purgekeys      | Purge all keys from the keytab file           |
| credentials    | Display credential cache                      |
| tgt <TargetName> /EXPORT | Export specified ticket to a file        |
| tgt <TargetName> /PURGE  | Purge specific ticket                        |
| tickets /export [/f <filename>] [/e] | Export the ticket cache to a file     |
| purge          | Purge the ticket cache                        |
| luid <Luid>    | Perform operation related to LUID             |
| tgt <TargetName> /renreq | Renew a ticket                                |
| tgt <TargetName> /renew [/E | /P] | Renew a ticket                     |
| tgt <TargetName> /referer <TargetName> | Display the referrer of the ticket  |
| tgt <TargetName> /verify | Verify a ticket                               |
| tgt <TargetName> /delete | Delete a ticket                               |
| tgt <TargetName> /setpass [/P <oldpassword>] [/N <newpassword>] | Change password|
| tgt <TargetName> /showkeys | Display keys for a ticket                    |
| enttgt         | Display enterprise ticket                      |
| initialtgt     | Display initial ticket                         |
| tgt /cache     | Perform operations related to tickets cache    |
| passwd /fromkey | Perform password change using keys            |
| /oncemode      | Display or set the once-per-boot ticket flag  |
| /status        | Display current KDC status                    |
| tgt            | Display tgt credentials                        |

## Parameters:
| Parameter       | Description                                     |
|-----------------|-------------------------------------------------|
| tgt <TargetName>  | Name of the target for the ticket operation      |
| /EXPORT         | Export the specified ticket to a file           |
| /PURGE          | Purge the specified ticket                       |
| /f <filename>   | Filename to export the tickets to                |
| /e              | Export tickets to ASCII instead of binary format |
| /P <oldpassword>| Old password for changing password               |
| /N <newpassword>| New password for changing password               |
| /E              | Encrypt the renewed ticket                       |
| /P              | Plain text the renewed ticket                    |
| /referer <TargetName> | Target name to show referrer for           |
| /verify         | Ticket to verify                                 |
| /delete         | Ticket to delete                                 |
| /setpass        | Target and old/new password for changing password|
| /showkeys       | Display keys for a ticket                       |
| /cache          | Operations related to the tickets cache         |


:::caution
Exercise caution while using klist command as it deals with Kerberos tickets and authentication tokens which are critical for security purposes.
:::
## KLIST Command Samples:
### Display Current Ticket Information
```cmd
klist
```
This command will display the current Kerberos ticket information.

### Purge Kerberos Tickets
```cmd
klist purge
```
Use this command to purge all Kerberos tickets from the cache.

### Refresh Ticket Information
```cmd
klist -R
```
Refreshes the ticket information by requesting a new TGT (Ticket Granting Ticket).

### Display Ticket Information for a Specific Ticket File
```cmd
klist -c ticket_file.CC
```
Displays the ticket information for a specific Kerberos ticket file.

### List All Tickets in the Cache
```cmd
klist -f
```
Lists all tickets in the cache including client principal, server principal, issue time, and expiry time.

### Renew a Ticket in the Cache
```cmd
klist -R -i <ticket_index>
```
Renews a specific ticket in the cache by specifying the index of the ticket.

### Display Ticket Information Verbosely
```cmd
klist -v
```
Displays the ticket information verbosely, providing additional details about the tickets in the cache.

:::tip
When using the klist command in Windows, make sure to run it in a Command Prompt window with administrative privileges to avoid any permission-related issues.
:::

## KLIST FAQ:
### How do I use klist in Windows?
To use the klist command in Windows, execute the following command:
```cmd
klist
```

### How can I display all the cached Kerberos tickets with klist?
To display all the cached Kerberos tickets using klist, use the following command:
```cmd
klist tickets
```

### How can I purge all cached Kerberos tickets using klist?
To purge all cached Kerberos tickets with klist, run the following command:
```cmd
klist purge
```

### How can I list the current credentials and ticket-granting tickets with klist?
To list the current credentials and ticket-granting tickets using klist, use the command:
```cmd
klist cred
```

### How do I force klist to list all credentials and tickets, including invalid ones?
To force klist to list all credentials and tickets, including invalid ones, use the command:
```cmd
klist tgt /all
```

### How can I show detailed information about all tickets, including their flags and encryption types, with klist?
To show detailed information about all tickets, including their flags and encryption types, using klist, run:
```cmd
klist tgt /verbose
```
## Applications of the KLIST Command

- View the currently cached Kerberos tickets
- Renew Kerberos tickets
- Purge (delete) Kerberos tickets
- List Kerberos tickets for a specific user
- Display detailed information about Kerberos tickets