---
title: Linux mesg command
description: Learn how to use the Linux mesg command to control whether other users can send messages to your terminal. 
---

The Linux mesg command is used to control whether other users can send messages to your terminal. It changes the permission for users to write to your terminal. By default, users are allowed to send messages to your terminal. Using mesg, you can enable or disable this feature. When mesg is used without any arguments, it displays the current message permission status. By specifying + or - along with mesg, you can allow or disallow other users to send messages. This command is particularly useful when you want to avoid being interrupted by messages from other users on the system.

## mesg Syntax:
```bash
mesg [y|n]
```

## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| y      | Allow messages to be received           |
| n      | Block messages from being received      |

## Parameters:
| Parameter | Description                        |
|-----------|------------------------------------|
| y         | Allow messages to be received      |
| n         | Block messages from being received |

:::caution
Use this command with caution, as it can affect the ability to receive messages from other users.
:::

## mesg Usage:
### Enable messages from other users
```bash
mesg y
```
This command enables messages from other users on the system.

### Disable message reception
```bash
mesg n
```
By running this command, you can disable message reception from other users on the system.

### Check current message status
```bash
mesg
```
Running this command without any options displays the current message status for the user.

### Allow messages from a specific user
```bash
mesg y username
```
Using this command allows messages from a specific user to be received by the current user.
:::tip
Remember that the mesg command is used to control whether messages can be received. You can use this command to allow or disallow other users to send messages to your terminal.
:::

### How do I use mesg in Linux?
To use the mesg command in Linux, execute the following command:
```bash
mesg +y
```

### What is the purpose of the mesg command in Linux?
The mesg command is used to control whether messages can be received on your terminal.

### How can I prevent other users from sending messages to my terminal using mesg?
You can prevent other users from sending messages to your terminal by executing the following command:
```bash
mesg -n
```

### How can I allow other users to send messages to my terminal using mesg?
To allow other users to send messages to your terminal, use the following command:
```bash
mesg +y
```

### How can I check the current mesg status in Linux?
You can check the current mesg status by running the following command:
```bash
mesg
```

### Can I use mesg to enable message receiving temporarily?
Yes, you can temporarily enable message receiving by executing the following command:
```bash
mesg -y
```

### How do I enable message receiving permanently on my terminal using mesg?
To enable message receiving permanently on your terminal, use the following command:
```bash
chmod u+s /usr/bin/mesg
```

## Applications of the mesg command

- Allow or deny messages from other users
- Control access to your terminal