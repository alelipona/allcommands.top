---
title: apropos command in MacOS
description: Find relevant commands using the MacOS apropos command. Discover how to search for commands by keywords and access useful information quickly.
---

The apropos command in MacOS is a powerful tool that allows users to search for relevant commands based on keywords. By simply typing "apropos" followed by a keyword, users can quickly access a list of commands that match the search criteria. This can be particularly useful when trying to find a specific command but only remember certain keywords associated with it. The apropos command searches through the entire man page descriptions of commands, making it easier to find the information you need.

## apropos Syntax:
```bash
apropos [keyword]
```

## MacOS apropos Options:
| Option      | Description                           |
|-------------|---------------------------------------|
| -e          | Search for exact keyword match        |
| -w          | Match only whole words               |
| -r          | Use basic regular expressions         |
| -M          | Search specific man page directories  |
| -s          | Restrict search to specific sections  |

## apropos Parameters:
| Parameter   | Description                           |
|-------------|---------------------------------------|
| keyword     | The keyword or phrase to search for in man pages |

:::caution
Exercise caution while using the apropos command to ensure accurate search results. When using regular expressions with the -r option, make sure the syntax is correct to avoid unexpected results.
:::
## How to use apropos command:
### Search for commands related to "copy"
```bash
apropos copy
```
Searches for commands related to the keyword "copy".

### Find commands related to "man"
```bash
apropos man
```
Finds commands related to the keyword "man".

### List commands related to "search"
```bash
apropos search
```
Lists commands related to the keyword "search".

### Explore commands for "delete"
```bash
apropos delete
```
Explores commands related to the keyword "delete".

### Search for commands related to "compress"
```bash
apropos compress
```
Searches for commands related to the keyword "compress".

### Find commands related to "processes"
```bash
apropos processes
```
Finds commands related to the keyword "processes".

### Browse commands for "print"
```bash
apropos print
```
Browses commands related to the keyword "print".

### List commands related to "network"
```bash
apropos network
```
Lists commands related to the keyword "network".
:::tip
When using the apropos command in MacOS, make sure to provide relevant keywords to search for commands, as the command will return results based on those keywords.
:::

### How do I use apropos in MacOS?
To use the apropos command in MacOS, execute the following command:
```bash
apropos <keyword>
```

### What is the purpose of the apropos command in bash?
The apropos command in bash is used to search the man pages for matches to a specified keyword.
```bash
apropos keyword
```

### How can I get more detailed information with apropos in MacOS?
To get more detailed information with the apropos command in MacOS, you can use the -a flag to display all found matches.
```bash
apropos -a keyword
```

### Can I search for commands with wildcards using apropos in MacOS?
Yes, you can use wildcards like '*' with the apropos command in MacOS to search for commands containing a specific keyword.
```bash
apropos 'key*word'
```

### How do I search case-insensitively with apropos in bash?
To perform a case-insensitive search with the apropos command in bash, you can use the -i flag.
```bash
apropos -i keyword
```

### How do I find commands related to a specific topic with apropos in MacOS?
To find commands related to a specific topic using the apropos command in MacOS, you can search for keywords related to that topic.
```bash
apropos topic
```

### Can I search for commands with descriptions using apropos in MacOS?
Yes, you can search for commands along with their descriptions using the apropos command in MacOS by providing relevant keywords to search for.
```bash
apropos --long keyword
```

### How do I search for commands in a specific section with apropos in MacOS?
To search for commands in a specific section using the apropos command in MacOS, you can specify the section number alongside the keyword.
```bash
apropos <keyword> <section_number>
```

### Is there a way to display only exact matches with apropos in bash?
Yes, you can display only exact matches with the apropos command in bash by using the -w flag.
```bash
apropos -w keyword
```

## Applications of the apropos command

- Search for available commands and their descriptions
- Find relevant commands based on keywords
- Explore the functionalities of different commands
- Discover how to use specific utilities or tools
- Reference manual pages for various commands