---
title: Linux lynx command
description: Learn about the Linux lynx command, a powerful text-based web browser that allows you to browse the internet from the command line. 
---

The Linux lynx command is a text-based web browser that enables users to browse the internet from the command line interface. It is widely used for its simplicity and efficiency in retrieving and viewing web pages without the need for a graphical interface. Lynx supports HTML, HTTPS, and can render tables, frames, and lists. Its keyboard shortcuts provide a smooth browsing experience, making it a popular choice for users who prefer command line tools.

## lynx Syntax:
```bash
lynx [option] [URL]
```
## Options:
| Option | Description                      |
|--------|----------------------------------|
| -cfg   | Use specified configuration file |
| -help  | Display lynx help page           |
| -dump  | Dump formatted output to stdout  |
| -listonly | List only the referenced links |
| -source | Display the HTML source          |
| -crawl | Crawl pages within specified constraints |
| -post_data | Send POST data to a URL         |

## Parameters:
| Parameter | Description            |
|-----------|------------------------|
| URL       | The URL to be accessed |

:::caution
Exercise caution while using the lynx command as it may display or download sensitive information from websites. Make sure you have the necessary permissions before retrieving or interacting with any data.
:::
## lynx Usage:
### Access a website
```bash
lynx www.example.com
```

Display the contents of a website in the terminal using the Lynx command line web browser.

### Navigate using arrow keys
```bash
lynx -navigate www.example.com
```

Use the arrow keys to navigate through a website displayed in the Lynx command line web browser.

### Download a webpage as text
```bash
lynx -dump www.example.com > example.txt
```

Download the content of a webpage as plain text using Lynx and save it as a text file.

### Open Lynx with a specific user agent
```bash
lynx -useragent="Mozilla/5.0" www.example.com
```

Access a website using Lynx with a specific user agent to simulate a different web browser.
:::tip
When using the lynx command in Linux, remember that it is a text-based web browser. You can navigate web pages, follow links, and submit forms directly from the command line. 
:::

### How do I install lynx in Linux?
To install the lynx command in Linux, use the package manager specific to your distribution. For example, in Ubuntu or Debian, you can install it with the following command:
```bash
sudo apt-get install lynx
```

### How do I open a webpage with lynx in Linux?
To open a webpage using lynx in Linux, simply provide the URL as an argument to the lynx command. For example:
```bash
lynx https://www.example.com
```

### How do I navigate in a webpage using lynx in Linux?
To navigate within a webpage using lynx in Linux, you can use the arrow keys to move around, the Enter key to follow links, and the Backspace key to go back. 

### How do I exit lynx in Linux?
To exit lynx and close the browser in Linux, press the "Q" key on your keyboard. This will quit lynx and return you to the command line.

### How do I search for text in a webpage with lynx in Linux?
To search for text within a webpage using lynx in Linux, press the "/" key, enter the text you wish to find, and press Enter. 

### How do I save a webpage with lynx in Linux?
To save a copy of a webpage using lynx in Linux, you can use the -dump option to output the page content to a file. For example:
```bash
lynx -dump https://www.example.com > output.html
```

## Applications of the lynx command

1. Viewing and browsing websites in the terminal
2. Accessing and retrieving information from web pages
3. Reading online documentation or resources
4. Checking website content or markup
5. Automating web browsing tasks
6. Accessing web-based services or APIs
7. Downloading files over HTTP or HTTPS directly to the terminal
8. Testing website accessibility and usability
9. Reading and sending email using text-based interfaces like Mutt or Alpine
10. Navigating the web in a low-bandwidth environment