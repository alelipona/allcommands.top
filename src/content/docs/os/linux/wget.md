---
title: What is wget Linux command?
description: Download files with ease using the Linux wget command. Learn about its features, options, and usage in this comprehensive guide.
---

The wget command in Linux allows users to download files from the internet easily and efficiently. It supports downloading via HTTP, HTTPS, and FTP protocols, with options to resume downloads, download recursively, and more. This guide provides an in-depth look at wget's features, syntax, and usage.

## wget Syntax:
```bash
wget [option] [URL]
```
## wget Options:

| Option | Description                  |
|--------|------------------------------|
| -r     | Recursively download files   |
| -np    | Do not ascend to the parent directory |
| -nc    | Do not overwrite existing files |
| -P dir | Save files to specified directory |
| -O file | Save downloaded file with a different name |
| -q     | Quiet mode (no output)       |
| -S     | Show server response         |
| -c     | Continue interrupted download |
| -b     | Download in the background    |
| -i file | Download multiple URLs listed in a file |
| --spider | Check existence of a file without downloading |
| -V     | Print version information    |

:::caution
Use wget command carefully and ensure that you have permission to download the files you are attempting to retrieve. Misuse of this command may violate copyright laws.
:::

## Parameters:
| Parameter | Description                    |
|-----------|--------------------------------|
| URL       | The URL of the file to download |
## wget Command Usage Examples:
### Download a Single File
```bash
wget https://example.com/file.zip
```
Downloads the file named "file.zip" from the specified URL.

### Download a File and Rename It Locally
```bash
wget -O newfile.zip https://example.com/file.zip
```
Downloads the file named "file.zip" from the specified URL and saves it locally as "newfile.zip".

### Download a File in the Background
```bash
wget -b https://example.com/file.zip
```
Downloads the file named "file.zip" from the specified URL in the background.

### Download a Full Website
```bash
wget --mirror -p --convert-links -P ~/local-directory/ https://example.com
```
Downloads the entire website located at "https://example.com" and converts the links for local browsing, saving all files in the specified local directory.

### Limit Download Speed
```bash
wget --limit-rate=100k https://example.com/file.zip
```
Downloads the file named "file.zip" from the specified URL but limits the download speed to 100 KB/s.
:::tip
Make sure to always check the wget manual or help section (`man wget` or `wget --help`) for detailed information on its usage and options.
:::

### How do I use wget in Linux?
To use the wget command in bash, execute the following command:
```bash
wget http://example.com/file.zip
```

### What is the purpose of the wget command?
The wget command is used to retrieve content from web servers, allowing users to download files from the internet directly to their local system.
```bash
wget http://example.com/image.jpg
```

### How do I specify a different output file name with wget?
To specify a different output file name when using wget, you can use the `-O` option followed by the desired file name.
```bash
wget http://example.com/archive.zip -O newarchive.zip
```

### How can I resume a partially downloaded file with wget?
To resume a partially downloaded file using wget, you can use the `-c` or `--continue` option to continue the download from where it left off.
```bash
wget -c http://example.com/largefile.tar.gz
```

### How do I limit the download speed with wget?
You can limit the download speed using the `--limit-rate` option followed by the desired speed limit. For example:
```bash
wget --limit-rate=100k http://example.com/largefile.iso
```

### How can I download multiple files with wget?
To download multiple files using wget, you can provide a list of URLs separated by spaces on the command line.
```bash
wget http://example.com/file1.txt http://example.com/file2.txt http://example.com/file3.txt
```

### How to download a file and save it with a different name using wget?
To download a file with wget and save it with a different name on your local system, use the `-O` option followed by the desired file name.
```bash
wget http://example.com/document.pdf -O newdocument.pdf
```

### How do I download a file securely using wget with authentication?
To download a file securely with wget that requires authentication, you can include the username and password in the command using the `--user` and `--password` options.
```bash
wget --user=myusername --password=mypassword http://example.com/securefile.zip
```
## Applications of the wget command

- Download files from the internet
- Download entire websites for offline viewing
- Mirror websites for backup
- Retrieve file listings from FTP servers
- Automate file downloads with scripts
- Recursively download files from a directory
- Download files using HTTP, HTTPS, or FTP protocols
- Limit download speed for efficient bandwidth usage
- Use with cron jobs for scheduled downloads
- Download files in the background