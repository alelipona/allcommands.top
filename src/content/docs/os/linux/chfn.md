---
title: chfn command in Linux
description: Linux chfn command allows users to change their finger information. Learn how to modify user details like GECOS fields using chfn.
---

The chfn command in Linux is used to change the finger information of a user. It allows users to modify their GECOS fields, including full name, office number, work phone, and more. By using chfn, users can easily update their personal information and provide details that can be viewed by others using the finger command.
## chfn Syntax:
```bash
chfn [options] [username]
```

## Linux chfn Options:
| Option | Description             |
|--------|-------------------------|
| -f     | Full name               |
| -r     | Room number             |
| -w     | Work phone              |
| -h     | Home phone              |
| -o     | Other                  |
| -t     | Office location         |

## chfn Parameters:
| Parameter | Description                    |
|-----------|--------------------------------|
| username  | Username of the user to change |

:::caution
Exercise caution when using the `chfn` command, as it can modify user information and potentially impact system access and permissions.
:::
## How to use chfn command:
### Update User Information
```bash
chfn
```
Allows the user to update their personal information.

### Change User's Full Name
```bash
chfn -f John Doe
```
Changes the user's full name to "John Doe".

### Change User's Office Location
```bash
chfn -o "Building A, Room 101"
```
Sets the user's office location to "Building A, Room 101".

### Change User's Office Phone Number
```bash
chfn -p 123-456-7890
```
Updates the user's office phone number to "123-456-7890".

### Change User's Home Phone Number
```bash
chfn -r 987-654-3210
```
Changes the user's home phone number to "987-654-3210".

### Set New Room Number
```bash
chfn -w 202
```
Assigns the user to a new room with the number 202.

### Update User's Login Shell
```bash
chfn -s /bin/bash
```
Changes the user's login shell to "/bin/bash".

### Clear User Information
```bash
chfn -e
```
Removes all the user's personal information.
:::tip
Remember to use the chfn command with caution, as it allows users to change their personal information stored in the system. Make sure you have the necessary permissions to modify user details.
:::

### How do I use chfn in Linux?
To use the chfn command in Linux, execute the following command:
```bash
chfn --option <value>
```

### What options are available with chfn in bash?
The chfn command in Linux provides several options for changing user information. One commonly used option is to change the user's full name. Here is an example:
```bash
chfn -f "John Doe" username
```

### How can I change a user's office location with chfn?
To update a user's office location using chfn, you can use the -o or --office option. Here's an example:
```bash
chfn --office "Building A, Room 123" username
```

### How do I set a new phone number for a user with chfn?
To set a new phone number for a user in Linux using chfn, you can use the -p or --phone option. Here's an example:
```bash
chfn --phone 123-456-7890 username
```

### Can I change a user's information interactively with chfn?
Yes, you can interactively change a user's information using chfn without specifying options. Simply run the command without any additional parameters:
```bash
chfn username
```

### How do I change a user's login shell with chfn in bash?
To change a user's login shell using chfn, you can use the -s or --shell option followed by the desired shell path. Here's an example:
```bash
chfn --shell /bin/bash username
```

### How can I view the current user information with chfn?
To view the current user information, you can simply run the chfn command without any additional options. Here's an example:
```bash
chfn
```

### How do I change a user's room number using chfn?
To update a user's room number with chfn in Linux, you can use the -r or --room option followed by the new room number. Here's an example:
```bash
chfn --room "Room 123A" username
```

### Can I change a user's information as root using chfn?
Yes, as a root user, you can change any user's information using chfn without restrictions. Ensure you have the necessary privileges before modifying user details.
```bash
sudo chfn --office "Main Building, Floor 5" username
```

## Applications of the chfn command

- Change the real name and other information of a user
- Update the user's finger information
- Modify details such as room number, work phone, home phone, etc.