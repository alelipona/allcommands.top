---
title: mutt command in Linux
description: Mutt is a powerful text-based email client for Linux. It allows users to read and send emails from the command line efficiently.
---

Mutt is a versatile and highly configurable command-line email client for Linux. It supports various protocols and can easily handle multiple mailboxes. Users can efficiently read, send, and manage emails using Mutt's advanced features and keyboard shortcuts. With support for threading, encryption, and a rich set of customization options, Mutt is a popular choice for many Linux users who prefer a text-based email interface.

## mutt Syntax:
```bash
mutt [options] [mail-file]
```
## Linux mutt Options:
| Option                  | Description                             |
|-------------------------|-----------------------------------------|
| -a file                 | Attach a file to the email              |
| -s subject              | Specify the subject of the email        |
| -c address              | Send a copy of the email to the address |
| -b address              | Send a blind carbon copy to the address |
| -e editor               | Specify the text editor to use          |
| -i file                 | Specify a different initial email       |
| -F file                 | Specify a different configuration file  |
| -H                      | Display full headers in the pager       |
| -q                      | Quit after sending the email            |
| -v                      | Verbose mode: display more information  |

## mutt Parameters:
| Parameter   | Description                                |
|-------------|--------------------------------------------|
| mail-file   | The file containing the email to be sent   |

:::caution
Exercise caution while using the `mutt` command, as it sends emails directly from the command line, potentially without any user interface to confirm actions. Ensure all email addresses, subjects, and attachments are correct before sending messages.
:::
## How to use mutt command:
### Sending an Email with mutt
```bash
echo "This is the body of the email" | mutt -s "Subject Here" recipient@example.com
```
Sends an email with the specified subject and body content to the recipient email address.

### Attaching a File to an Email with mutt
```bash
echo "See the attached file" | mutt -s "Attachment Test" -a /path/to/attachment.txt recipient@example.com
```
Sends an email with an attached file to the recipient email address.

### Sending an Email from a File with mutt
```bash
mutt -s "Subject Here" recipient@example.com < email_body.txt
```
Sends an email with the subject specified and the content from the email_body.txt file to the recipient email address.

### Sending an Email with Cc and Bcc using mutt
```bash
echo "Body of the email" | mutt -s "Subject Here" -c cc@example.com -b bcc@example.com recipient@example.com
```
Sends an email with Cc and Bcc recipients specified along with the main recipient.

### Sending HTML Email with mutt
```bash
echo "<html><body><h1>Hello</h1></body></html>" | mutt -e "set content_type=text/html" -s "HTML Email Test" recipient@example.com
```
Sends an HTML formatted email to the recipient email address.

### Sending an Email with Attachments using mutt
```bash
echo "Check out the attachments" | mutt -s "Attachments Test" -a file1.txt -a file2.jpg recipient@example.com
```
Sends an email with multiple attachments to the recipient email address.

### Sending an Email with Multiple Attachments from a Directory with mutt
```bash
echo "See the attachments" | mutt -s "Multiple Attachments Test" -A /path/to/attachments_directory/ recipient@example.com
```
Sends an email with all the files from a specified directory as attachments to the recipient email address.

### Sending an Encrypted Email using mutt
```bash
echo "Confidential message" | gpg --encrypt --recipient recipient@example.com | mutt -s "Encryption Test" recipient@example.com
```
Sends an encrypted email message using GNU Privacy Guard (GPG) along with mutt.
:::tip
When using the mutt command in Linux, make sure you are familiar with the key bindings and commands to navigate through emails efficiently. Refer to the official mutt documentation or online guides for a comprehensive list of available options and features.
:::

### How do I configure mutt in Linux?
To configure mutt in Linux, you can create a `.muttrc` configuration file in your home directory and add your desired settings. 
```bash
vim ~/.muttrc
```

### How do I send an email using mutt in bash?
To send an email using mutt in bash, you can use the following command:
```bash
echo "This is the body of the email" | mutt -s "Subject" recipient@example.com
```

### How do I list emails in a mailbox using mutt?
To list emails in a mailbox using mutt, you can open mutt and press `?` to view the available key bindings for navigation.
```bash
mutt
Press ?
```

### How do I open a specific mailbox in mutt?
To open a specific mailbox in mutt, you can specify the mailbox path as an argument when launching mutt.
```bash
mutt -f /path/to/mailbox
```

### How do I search for an email in mutt?
To search for an email in mutt, you can press `/` to enter the search mode and type your search query.
```bash
mutt
Press /
Enter search query
```

### How do I reply to an email in mutt?
To reply to an email in mutt, open the email you want to reply to and press `r` to start composing a reply.
```bash
mutt
Open email
Press r
```

### How do I save an email in mutt?
To save an email in mutt, you can press `s` while viewing the email to save it to a specified folder.
```bash
mutt
Open email
Press s
```

### How do I delete an email in mutt?
To delete an email in mutt, you can press `d` while viewing the email to mark it for deletion.
```bash
mutt
Open email
Press d
```

### How do I quit mutt without saving changes?
To quit mutt without saving changes, you can press `q` to exit mutt without saving any modifications.
```bash
mutt
Press q
```

## Applications of the `mutt` command

1. Composing and sending emails from the command line
2. Reading and managing emails in various folders
3. Viewing attachments in emails
4. Managing email accounts and configurations
5. Scripting and automation of email-related tasks