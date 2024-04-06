---
title: chpasswd Linux Command Guide
description: Change multiple user passwords in Linux easily with the chpasswd command. Learn how to update passwords in batch efficiently.
---

The chpasswd command in Linux is used to change multiple user passwords at once. It reads a list of username and password pairs from standard input and updates the passwords accordingly. This command is particularly useful for system administrators who need to change passwords for multiple users efficiently. By using chpasswd, you can update passwords in batch, saving time and streamlining the password management process on your Linux system.

## chpasswd Syntax:
```bash
chpasswd [options]
```
## Options:
| Option   | Description                             |
|----------|-----------------------------------------|
| -e       | Use crypt(3) to encrypt the password    |
| -h, --help | Display a help message                 |

## Parameters:
| Parameter | Description                               |
|-----------|-------------------------------------------|
| (none)    | Reads a list of username:password pairs from standard input |

:::caution
Exercise caution when using the chpasswd command, as it can update passwords in bulk without user verification. Make sure to double-check the input file or data stream to avoid unintentional changes to user passwords.
:::
## chpasswd Command Samples:
### Change Password for User "john"
```bash
echo "john:newpassword" | chpasswd
```
Changes the password for the user "john" to "newpassword".

### Change Password for Multiple Users
```bash
echo -e "user1:password1\nuser2:password2" | chpasswd
```
Changes the passwords for multiple users "user1" and "user2" to "password1" and "password2" respectively.

### Read Usernames and Passwords from a File
```bash
chpasswd < usernames_passwords.txt
```
Reads usernames and passwords from a file "usernames_passwords.txt" to change passwords for multiple users.

### Change Passwords Interactively
```bash
chpasswd -e
```
Changes passwords interactively, prompts users for new passwords when executed.

### Restrict Password Length
```bash
echo "username:newpass" | chpasswd -c SHA512 -s 8
```
Changes the password for "username" to "newpass" using the SHA512 encryption method and enforces a minimum password length of 8 characters.

### Change Password for LDAP User
```bash
echo "cn=user,dc=example,dc=com:newpass" | chpasswd -e
```
Changes the password for the LDAP user "cn=user,dc=example,dc=com" to "newpass".

### Display Help Information
```bash
chpasswd --help
```
Displays the help information and usage options for the chpasswd command.
:::tip
Remember to use the chpasswd command with caution, as it directly modifies user passwords in Linux systems. Always ensure that you have the necessary permissions to change passwords and verify the input to prevent accidental changes or security risks.
:::

## chpasswd FAQ:
### How do I change passwords using a file with chpasswd in Linux?
To change passwords using a file with the chpasswd command in Linux, you can use the following command:
```bash
chpasswd < /path/to/passwords.txt
```

### How can I specify a different password encryption method with chpasswd in Linux?
To specify a different password encryption method with the chpasswd command in Linux, use the `-e` flag followed by the encryption method. For example, to use SHA-512 encryption, you can run:
```bash
echo 'username:newpassword' | chpasswd -e SHA512
```

### How can I change passwords for multiple users at once with chpasswd in Linux?
To change passwords for multiple users at once with the chpasswd command in Linux, you can provide the usernames and new passwords in a single command. For example:
```bash
echo 'user1:password1' 'user2:password2' | chpasswd
```

### How do I change passwords interactively with chpasswd in Linux?
To change passwords interactively with the chpasswd command in Linux, you can use the `-i` flag. This will prompt you to enter the username and new password. Here's an example:
```bash
chpasswd -i
```

### Can I change a user's password without knowing the current password using chpasswd in Linux?
Yes, you can change a user's password without knowing the current password by using the `--encrypted` flag with the chpasswd command in Linux. For example, to change the password for a user to `newpassword`, you can run:
```bash
echo 'username:$6$rounds=5000$SALT$U1ruW9nH.E5y8qYvzslRoSbEKap3qw8SbT8DjvDGm1C./7Efn1XyN4v6kI7vz0e82TpW/Fdmc89YvEoMvnNC5.' | chpasswd --encrypted
```
## Applications of the chpasswd command

- Change the passwords of one or more users in a batch process.