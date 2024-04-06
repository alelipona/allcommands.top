---
title: Linux curl command
description: Learn all about the Linux curl command, its syntax, options, and how to use it effectively in your terminal commands.
---

The Linux curl command is a powerful tool used to transfer data to or from a server. It supports various protocols like HTTP, HTTPS, FTP, and more. With its versatile options, you can customize the request headers, follow redirects, save the output to a file, and even send data in different formats. In addition to making basic GET and POST requests, curl can also perform tasks like downloading files, testing APIs, and automating tasks through scripts. Mastering the curl command is essential for any developer or system administrator working in a Linux environment.

## curl Syntax:
```bash
curl [options] [URL]
```
## Options:

| Option         | Description                               |
|----------------|-------------------------------------------|
| -X, --request  | Specify the request method (GET, POST, etc.) |
| -H, --header   | Add a header to the request               |
| -d, --data     | Send data in the request body             |
| -o, --output   | Write output to a file                    |
| -v, --verbose  | Make the operation more talkative         |
| -i, --include  | Include the HTTP-header in the output     |
| -A, --user-agent | Specify the User-Agent string            |

## Parameters:

| Parameter | Description                                     |
|-----------|-------------------------------------------------|
| URL       | The URL to send the request to                   |
| data      | Data to be sent in the request body              |
| method    | The request method to use (GET, POST, PUT, etc.) |
| file      | File to write output to                          |
| header    | Custom header to be included in the request      |

:::caution
Exercise caution when using the curl command, especially with options like -d (data) as it could potentially send sensitive information in the request body. Always ensure that the URL and data being sent are secure and intended recipients of the request.
:::
## curl Usage:
### Download a File from a URL
```bash
curl -O https://www.example.com/file.zip
```
Downloads a file named "file.zip" from the specified URL.

### Follow Redirects
```bash
curl -L https://www.example.com
```
Retrieves a page content from a URL and follows any redirects to the final destination.

### Save Output to a File
```bash
curl -o output.txt https://www.example.com/data
```
Retrieves data from a URL and saves the output to a file named "output.txt".

### Include HTTP Headers in Output
```bash
curl -i https://www.example.com/api
```
Retrieves the HTTP headers along with the content from the specified URL.
:::tip
When using the curl command in Linux, remember to check for available options and flags in the curl manual (`man curl`) for detailed usage instructions and examples.
:::

### How do I interact with a website using curl in Linux?
To interact with a website using curl in Linux, you can send a GET request to the URL. For example:
```bash
curl https://www.example.com
```

### How do I download a file using curl in Linux?
To download a file using curl in Linux, specify the URL of the file with the `-o` option to save it with a specific name. For example:
```bash
curl -o filename.zip https://www.example.com/file.zip
```

### How do I follow redirects with curl in Linux?
To follow redirects during a curl request in Linux, use the `-L` or `--location` option. For example:
```bash
curl -L https://www.example.com
```

### How do I set a custom user agent with curl in Linux?
To set a custom user agent header in the request using curl in Linux, use the `-A` or `--user-agent` option. For example:
```bash
curl -A "Custom User Agent" https://www.example.com
```

### How do I send POST data with curl in Linux?
To send POST data using curl in Linux, use the `-d` or `--data` option followed by the data to be sent. For example:
```bash
curl -d "key1=value1&key2=value2" https://www.example.com/api
```

### How do I download a file with progress information using curl in Linux?
To download a file with progress information displayed in Linux, use the `-#` or `--progress-bar` option with curl. For example:
```bash
curl -# -o filename.zip https://www.example.com/file.zip
```

## Applications of the curl command

- Download files from the web
- Upload files to a server
- Test API endpoints
- Retrieve web pages or website content
- Follow redirects
- Send form data
- Perform RESTful operations
- Transfer data over different protocols like HTTP, HTTPS, FTP, etc.