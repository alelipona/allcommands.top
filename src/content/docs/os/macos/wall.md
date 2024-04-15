---
title: wall command in MacOS
description: Learn how to use the wall command in MacOS to send messages to all logged-in users on a system. Master the syntax and options for effective communication.
---

The wall command in MacOS allows users to broadcast messages to all logged-in users on a system. By using this command, you can efficiently communicate with multiple users simultaneously without the need for individual messages. This can be especially useful for system-wide announcements or alerts. The wall command takes a message as input and displays it on the terminal of all users currently logged in.

## wall Syntax:
```bash
wall [message]
```

## MacOS wall Options:
| Option | Description                   |
|--------|-------------------------------|
| -n     | Suppresses the hostname prefix on each line of the message. |
| -h     | Prints a help message with usage information. |

## wall Parameters:
| Parameter | Description                             |
|-----------|-----------------------------------------|
| message   | Specifies the message to be broadcast to all users. |

:::caution
Exercise caution when using the `wall` command, as it broadcasts a message to all logged-in users on the system. Ensure that the message is appropriate and relevant for all users.
:::
## How to use wall command:
### Broadcast a Message to All Users
```bash
wall "Please note that the system will undergo maintenance tomorrow."
```
Sends a broadcast message to all users with the specified text.

### Broadcast a Warning Message to All Users
```bash
wall "WARNING: Server will be shut down in 10 minutes for maintenance."
```
Sends a warning message to all users about an impending server shutdown.

### Send a Custom Message to All Users
```bash
wall "All users are required to save their work as the system will be restarted."
```
Sends a customized message to alert users about an upcoming system restart.

### Notify Users of an Emergency Situation
```bash
wall "Attention: There is a security breach, please log off immediately."
```
Notifies all users about an urgent security issue and instructs them to log off.

### Display a Reminder Message to All Users
```bash
echo "Don't forget to backup your data regularly." | wall
```
Uses a pipeline to send a reminder message to all users to backup their data.

### Send a Notification to All Users with Important Information
```bash
cat notification.txt | wall
```
Reads the content of a file named "notification.txt" and sends it as a message to all users.

### Broadcast System Maintenance Message with Timestamp
```bash
echo "$(date): System maintenance in progress. Please bear with us." | wall
```
Includes the timestamp along with the message to inform users about ongoing maintenance.

### Send Regular Updates to Users
```bash
while true; do echo "Check your email for important notifications." | wall; sleep 3600; done
```
Sends periodic updates to all users reminding them to check their emails for notifications.
:::tip
Make sure to have the necessary permissions to use the `wall` command in MacOS, as it is typically restricted to superuser privileges.
:::

### How do I use wall in MacOS?
To use the wall command in MacOS, execute the following command:
```bash
wall --n
```

### How can I broadcast a message to all users in MacOS using wall?
To broadcast a message to all users in MacOS, use the following command:
```bash
echo "Your message here" | sudo wall
```

### How do I specify a file as the input for the wall command in MacOS?
To specify a file as the input for the wall command in MacOS, you can use the following command:
```bash
wall < path_to_file.txt
```

### How can I display a message on all terminals in MacOS using wall?
To display a message on all terminals in MacOS, use the following command:
```bash
echo "Message for all users" | wall
```

### How do I show the current implementation of wall in MacOS?
To show the current implementation of wall in MacOS, execute the following command:
```bash
which wall
```

### How can I check the manual page for wall command in MacOS?
To check the manual page for the wall command in MacOS, use the following command:
```bash
man wall
```

### How do I set the priority of a message when using wall in MacOS?
To set the priority of a message when using wall in MacOS, you can use the following command:
```bash
echo "High Importance Message" | sudo wall -n
```

### How can I broadcast a message to a specific user using the wall command in MacOS?
To broadcast a message to a specific user using the wall command in MacOS, you can use the following command:
```bash
echo "Message for specific user" | sudo wall -u username
```

## Applications of the wall command

- Broadcasting messages to all users on a Unix or macOS system.