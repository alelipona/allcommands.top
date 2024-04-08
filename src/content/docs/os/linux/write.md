---
title: Linux write command
description: The Linux write command is a useful tool for sending messages to other users logged into the same system.
---

The Linux write command is a built-in utility that allows users to send messages to other users who are logged into the same system. This can be a helpful way to communicate with coworkers or friends who are also working on the same machine. The write command is straightforward to use, requiring only the username of the recipient and the message to be sent. Once the message is entered, it will appear on the recipient's terminal window, notifying them of the incoming message. This can be especially useful for coordinating tasks, asking quick questions, or providing updates in a shared work environment. The write command can help streamline communication and improve collaboration among users on a Linux system.
## write Syntax:
```bash
write [username] [tty]
```
## Options:
| Option   | Description                           |
|----------|---------------------------------------|
| -f file  | Specify the file to write to           |
| -c chat  | Invite user for secure chat            |

## Parameters:
| Parameter | Description                           |
|-----------|---------------------------------------|
| username  | Username of the user to send the message to  |
| tty       | Specify the tty name to write to             |

:::caution
Exercise caution when using the write command as it allows directly sending messages to users on the system.
:::
## write Usage:
### Display a Message to Another User
```bash
write user1 Hello, how are you?
```
Allows user to send a message to another user who is logged in.

### Send Message to a Specific Terminal
```bash
write tty1 Hello from tty2!
```
Sends a message to a specific terminal (tty1 in this example).

### Warning Message to All Users
```bash
write -w -t 300 All Attention! System will be down for maintenance in 5 minutes.
```
Sends a warning message to all users logged in, giving them a 5-minute notice before system maintenance.

### Chat with a Remote User
```bash
write user2@remote_host Let's discuss the project deadline.
```
Initiates a chat session with a user on a remote host.
:::tip
When using the write command in Linux, make sure to specify the correct user you want to communicate with and ensure that the recipient is currently logged in to the system. Additionally, remember that the recipient can deny the message using the `mesg n` command.
:::

### How do I use write in Linux?
To use the write command in Linux, execute the following command:
```bash
write username
```

### How can I send a message to another user in Linux using write?
To send a message to another user in Linux using the write command, use the following syntax:
```bash
write username
```

### How to check if a user is available to receive messages with write in Linux?
To check if a user is available to receive messages using write in Linux, you can use the `who` command to see if the user is logged in.
```bash
who
```

### How can I deny messages from a specific user in Linux write?
To deny messages from a specific user in Linux using the write command, you can use the `mesg n` command.
```bash
mesg n
```

### Can I send a message to all users logged in with write in Linux?
Yes, you can send a message to all users logged in using the write command in Linux by specifying `all` as the recipient.
```bash
write all
```

### How do I reply to a message received with write in Linux?
To reply to a message received with the write command in Linux, you can simply start typing your response, and it will be sent back to the originating user.

### How to exit the write command in Linux?
To exit the write command in Linux, simply press `Ctrl + D` on your keyboard. This will close the current write session.

## Applications of the write command

- Sending messages to another user on the same system.
- User-to-user communication in a multi-user environment.
- Collaborative editing of a file with multiple users.