---
title: mdfind MacOS Command Guide
description: Learn how to use the MacOS mdfind command efficiently to search for files and metadata on your system.
---

The MacOS mdfind command allows users to search for files and metadata on their system using a variety of search criteria such as file name, content, file type, and more. This powerful command can help you quickly locate files and information across your system, making it easier to find what you need. By specifying search parameters, you can narrow down your search results and find the files you are looking for with ease. Additionally, mdfind supports advanced query options and syntax, allowing for complex and specific searches. With the mdfind command, you can search for files based on attributes like file creation date, modification date, file size, and more. This can be particularly useful when you need to find files that meet specific criteria or properties. In addition to searching for files, mdfind can also search for metadata associated with files, providing you with detailed information about the files on your system. Overall, mdfind is a versatile and powerful command that can help you effectively manage and organize your files on MacOS.
## mdfind Syntax:
```bash
mdfind [option] [parameter]
```

## Options:
| Option | Description                                |
|--------|--------------------------------------------|
| -onlyin path | Search only within the specified path. |
| -name file_name | Search for files with the specified name. |
| -live | Continuously update the search results. |
| -0 | Use null bytes to delimit results. |
| -s | Perform a case-sensitive search. |
| -i | Perform a case-insensitive search. |
| -literal | Treat the query string as a literal string. |
| -interpret | Interpret the query string. |
| -count | Display the number of matching files. |
| -list | Display the paths of matching files. |

## Parameters:
| Parameter | Description                     |
|-----------|---------------------------------|
| query     | The search query to be used.    |

:::caution
Exercise caution when using the mdfind command as it can search your entire system and potentially return a large number of results.
:::
## mdfind Command Samples:
### Search for all PDF files
```bash
mdfind -name pdf
```
This command will search for all PDF files on the system.

### Find files related to a specific application
```bash
mdfind kMDItemContentType=com.apple.application-bundle
```
Searches for files related to a specific application by their content type.

### Search for images modified within the last week
```bash
mdfind "kMDItemLastUsedDate >= '\$time.now(-7h)' && kMDItemContentTypeTree == 'public.image'"
```
Finds images modified within the last week using a specific time range.

### Locate files containing a specific keyword in the name
```bash
mdfind -name "keyword"
```
Searches for files containing a specific keyword in their name.

### Search for documents modified today
```bash
mdfind "kMDItemFSContentChangeDate >= '\$time.today(-1d)' && kMDItemContentTypeTree == 'public.text'"
```
Finds documents modified today based on the file system content change date.

### Find all audio files larger than 10MB
```bash
mdfind "kMDItemFSSize > 10000 && kMDItemContentTypeTree == 'public.audio'"
```
Searches for audio files larger than 10MB on the system.

### Search for files by a specific author
```bash
mdfind "kMDItemAuthors == 'Author Name'"
```
Finds files authored by a specific individual.
:::tip
When using the mdfind command in MacOS, make sure to understand the various options available to customize your search results. Experiment with different flags and search criteria to narrow down your results effectively.
:::

## mdfind FAQ:
### How do I use mdfind in MacOS?
To use the mdfind command in MacOS, execute the following command:
```bash
mdfind --name "example.txt"
```

### What are some common options used with mdfind in MacOS?
Common options used with the mdfind command in MacOS include:
```bash
mdfind -onlyin /path/to/directory "search query"
```

### How can I search for specific file types with mdfind in MacOS?
To search for specific file types using mdfind in MacOS, use the following command:
```bash
mdfind "kind:pdf"
```

### Can I limit search results in mdfind to a specific location in MacOS?
Yes, you can limit search results in mdfind to a specific location by using the "-onlyin" option. Here's an example:
```bash
mdfind -onlyin /path/to/directory "search query"
```

### How can I search for files modified within a specific timeframe with mdfind in MacOS?
To search for files modified within a specific timeframe using mdfind in MacOS, you can utilize the "-onlyin" and "-newer" options. Here's an example:
```bash
mdfind -onlyin /path/to/directory -newer "2021-01-01" "search query"
```

### Is it possible to search for files based on their content with mdfind in MacOS?
Yes, you can search for files based on their content using the mdfind command in MacOS. Here's an example command:
```bash
mdfind "content:keyword"
```
## Applications of the mdfind command

- Search for files or directories by name
- Search for files by file content
- Search for files by file type
- Search for files by specific metadata attributes