---
title: msgs MacOS Command Guide
description: Learn how to use the msgs command on MacOS to send and receive messages between users in the terminal.
---

The MacOS msgs command allows users to send and receive messages within the terminal. This command can be used to communicate with other users on the same system, making it a convenient tool for collaboration and quick communication. By utilizing the msgs command, users can exchange short messages, notifications, or alerts without the need for a separate messaging application. This can be particularly useful in a multi-user environment or when working on a shared system. The msgs command is simple to use and can help streamline communication tasks within the MacOS terminal.
## msgs Syntax:
```bash
msgs [username] [message]
```
## Options:
| Option        | Description                     |
|---------------|---------------------------------|
| -a            | Send a message to all users      |
| -u            | Specify a specific username      |

## Parameters:
| Parameter     | Description                            |
|---------------|----------------------------------------|
| [username]    | The username of the recipient           |
| [message]     | The message to be sent                  |

:::caution
Be cautious when using the msgs command as it sends messages to users on the system, which can be considered intrusive or disruptive.
:::
## msgs Command Samples:
### Sending a Simple Message
```bash
msgs user "Hello, how are you today?"
```
This command sends a simple message "Hello, how are you today?" to the user.

### Sending a Message with a Title
```bash
msgs -title "Important Reminder" user "Don't forget to submit your report by EOD."
```
This command sends a message with the title "Important Reminder" followed by the message "Don't forget to submit your report by EOD." to the user.

### Sending a Message to Multiple Users
```bash
msgs user1 user2 "Meeting postponed to tomorrow, please update your calendars."
```
This command sends a message "Meeting postponed to tomorrow, please update your calendars." to user1 and user2.

### Sending a Message with an Alarm
```bash
msgs -alarm user "Time for your meeting in 15 minutes."
```
This command sends a message "Time for your meeting in 15 minutes." to the user along with an alarm notification.

### Sending a Message with a Background Color
```bash
msgs -background gray user "Reminder: Team lunch today at 12:30 PM."
```
This command sends a message "Reminder: Team lunch today at 12:30 PM." to the user with a gray background color.

### Sending a Message with a Specific Font
```bash
msgs -font Helvetica user "Project deadline approaching! Submit your work by Friday."
```
This command sends a message "Project deadline approaching! Submit your work by Friday." to the user using the "Helvetica" font.

### Sending a Message with Sound Notification
```bash
msgs -sound "Glass" user "Quick update: Client meeting rescheduled to next Monday."
```
This command sends a message "Quick update: Client meeting rescheduled to next Monday." to the user with a sound notification using the "Glass" sound.
:::tip
When using the `msgs` command in MacOS, make sure to carefully read the documentation and understand the various options available to tailor the output to your needs.
:::

### How do I display a simple message using msgs in MacOS?
To display a simple message using the `msgs` command in MacOS, run:
```bash
msgs "Hello, world!"
```

### What is the command to display a message in a specific color with msgs in MacOS?
To display a message in a specific color using the `msgs` command in MacOS, use:
```bash
msgs --color red "Error: Something went wrong."
```

### How can I show a warning message with blinking text using msgs in MacOS?
To display a warning message with blinking text using `msgs` in MacOS, use the following command:
```bash
msgs --blink --color yellow "Warning: Proceed with caution."
```

### How do I display a message in bold font using msgs in MacOS?
To display a message in bold font with the `msgs` command in MacOS, you can use:
```bash
msgs --style bold "Important: This is a critical message."
```

### Can I center-align a message using msgs in MacOS?
Yes, you can center-align a message using the `msgs` command in MacOS by running:
```bash
msgs --align center "Centered message"
```

### Is it possible to display a message with a specific background color using msgs in MacOS?
Yes, you can display a message with a specific background color using the `msgs` command in MacOS. For example:
```bash
msgs --bgcolor cyan "Message with cyan background"
```
## Applications of the msgs command

- Sending messages to logged in users
- Displaying alerts to users
- Broadcasting messages to multiple users
- Notifying users about system events