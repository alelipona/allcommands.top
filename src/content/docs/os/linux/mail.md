---
title: mail Linux Command Guide
description: This guide provides everything you need to know about the Linux mail command, from sending and receiving emails to managing your mailbox efficiently.
---

The Linux mail command is a powerful tool for sending and receiving emails directly from the command line. It allows users to compose messages, specify recipients, and even attach files to their emails. By mastering the mail command, users can efficiently manage their mailbox without the need for a graphical email client. This comprehensive guide covers the basic syntax of the mail command, how to send and receive emails, work with attachments, manage email headers, and use aliases to simplify the email process. Whether you are a beginner looking to learn the basics of email management on Linux or an experienced user seeking to enhance your command line skills, this guide has everything you need to become proficient with the mail command.

## mail Syntax:
```bash
mail [options] [recipient]
```
## Options:
| Option | Description             |
|--------|-------------------------|
| -s     | Specify the message subject |
| -r     | Specify the sender's email address |
| -c     | Send a copy of the message to the specified email address |
| -b     | Send a blind carbon copy of the message to the specified email address |
| -a     | Attach a file to the email |

## Parameters:
| Parameter | Description             |
|-----------|-------------------------|
| recipient | The email address of the recipient |

:::caution
Exercise caution when using the mail command as it can send emails, potentially to unintended recipients, without additional confirmation prompts.
:::
## mail Command Samples:
### Send an Email with Subject
```bash
echo "This is the body of the email" | mail -s "Subject Line" recipient@example.com
```
Sends an email with a specified subject line to a recipient.

### Send an Email with Attachment
```bash
echo "Email with Attachment" | mail -s "Attachment Test" -A /path/to/attachment.pdf recipient@example.com
```
Sends an email with an attachment to a recipient.

### Send an Email to Multiple Recipients
```bash
echo "Email to Multiple Recipients" | mail -s "Multiple Recipients Test" recipient1@example.com recipient2@example.com
```
Sends an email to multiple recipients.

### Send an Email with CC and BCC
```bash
echo "Email with CC and BCC" | mail -s "CC and BCC Test" -c cc@example.com -b bcc@example.com recipient@example.com
```
Sends an email with Carbon Copy (CC) and Blind Carbon Copy (BCC) recipients.

### Send a Test Email to Local User
```bash
echo "Test email to local user" | mail -s "Local User Test" localuser
```
Sends a test email to a local user account.

### View the Mail Queue
```bash
mailq
```
Displays the current mail queue, showing emails waiting to be processed by the system.

### Read the Content of an Email
```bash
mail -f /var/mail/username
```
Reads the content of an email stored in the user's mailbox.
:::tip
When using the mail command in Linux, make sure you have a properly configured mail server to send and receive emails. Additionally, check the mail logs for any errors or delivery issues.
:::

## mail FAQ:
### How do I use mail in Linux?
To use the mail command in Linux, execute the following command:
```bash
mail --help
```

### What is the purpose of the mail command in Linux?
The mail command in Linux is used to send and receive emails from the command line.

### How can I send an email using the mail command in Linux?
To send an email using the mail command in Linux, you can use the following syntax:
```bash
echo "This is the body of the email" | mail -s "Subject" recipient@example.com
```

### How do I check my inbox with the mail command in Linux?
To check your inbox using the mail command in Linux, simply type `mail` in the terminal and press Enter. Use the `?` command to get a list of available commands within the mail interface.

### Can I send email attachments with the mail command in Linux?
Yes, you can send email attachments using the mail command in Linux. Here is an example on how to send an attachment:
```bash
echo "Body of the email" | mail -s "Subject" -A /path/to/attachment.txt recipient@example.com
```

### How do I delete all emails in my inbox using the mail command in Linux?
To delete all emails in your inbox using the mail command in Linux, you can enter the mail interface by typing `mail` in the terminal, then use the `d *` command to delete all emails.

## Applications of the mail command

- Sending emails from the command line
- Automating email notifications
- Integrating with scripts to send alert emails
- Testing email functionality on a Linux system
- Monitoring system alerts and notifications via email