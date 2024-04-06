---
title: FINDSTR Windows Command Guide
description: Learn how to use the FINDSTR command in Windows to search for strings within files efficiently.
---

The Windows FINDSTR command is a powerful tool used to search for specific strings within files. It allows users to perform advanced search operations with various options and parameters. FINDSTR can search for literal strings, regular expressions, and can even perform case-sensitive searches. By using FINDSTR, users can quickly locate information within files, making it a valuable tool for troubleshooting and data analysis tasks.
## FINDSTR Syntax:
```cmd
findstr [options] [string] [filename]
```
## Options:
| Option                  | Description                                      |
|-------------------------|--------------------------------------------------|
| /B                      | Matches pattern if at the beginning of a line.  |
| /E                      | Matches pattern if at the end of a line.        |
| /L                      | Uses search string literally.                    |
| /R                      | Uses search string as a regular expression.      |
| /S                      | Searches subdirectories.                         |
| /I                      | Case-insensitive search.                         |
| /C:[string]             | Uses specified string as a literal search string.|
| /G:[file]               | Gets search strings from the specified file.     |
| /F:[file]               | Reads console input and searches specified file.|
| /M                      | Prints only filenames containing the search string.|
| /N                      | Prints line numbers with output.                |
| /X                      | Searches for whole line matches.                |
| /V                      | Prints non-matching lines.                      |
| /P                      | Skips files with non-printable characters.      |

## Parameters:
| Parameter   | Description                              |
|-------------|------------------------------------------|
| string      | Specifies the string to search for.       |
| filename    | Specifies the file(s) to search.          |

:::caution
Use caution when utilizing the findstr command. Incorrect usage can lead to unintended search results or errors.
:::
## FINDSTR Command Samples:
### Search for a Specific String in a File
```cmd
findstr "keyword" file.txt
```
Searches for the specified "keyword" in the "file.txt" file and displays the matching lines.

### Case-Insensitive Search
```cmd
findstr /i "example" file.txt
```
Performs a case-insensitive search for the string "example" in the "file.txt" file.

### Display Line Numbers
```cmd
findstr /n "error" file.txt
```
Searches for the string "error" in the "file.txt" file and displays the line numbers of the matching lines.

### Search for Multiple Strings
```cmd
findstr "string1 string2" file.txt
```
Searches for both "string1" and "string2" in the "file.txt" file and displays lines containing either string.

### Recursive Search in Subdirectories
```cmd
findstr /s "pattern" *.txt
```
Performs a recursive search for the "pattern" in all .txt files in the current directory and its subdirectories.

### Search for Whole Words
```cmd
findstr /w "word" file.txt
```
Searches for the whole word "word" in the "file.txt" file, ensuring only complete words are matched.

### Invert the Match
```cmd
findstr /v "exclude" file.txt
```
Displays lines not containing the string "exclude" in the "file.txt" file.
:::tip
When using the findstr command in Windows, make sure to carefully review the available options and syntax to ensure accurate search results. Remember to encapsulate search phrases in double quotes if they contain spaces or special characters.
:::

## FINDSTR FAQ:
### How do I use findstr in Windows?
To use the findstr command in Windows, execute the following command:
```cmd
findstr /i "search term" filename.txt
```

### What does the /i option do in findstr?
The /i option in findstr is used to make the search case-insensitive. This means that the search will ignore the case of the text while looking for the specified pattern.
```cmd
findstr /i "search term" filename.txt
```

### How can I search for a specific string in multiple files using findstr?
To search for a specific string in multiple files using findstr, you can use the following command:
```cmd
findstr "search term" *.txt
```

### What is the purpose of the /s option in findstr?
The /s option in findstr is used to search for matching files in the current directory and all subdirectories. It helps in searching for a specific string recursively through all files.
```cmd
findstr /s "search term" *.txt
```

### Can I display line numbers along with the search results in findstr?
Yes, you can display line numbers along with the search results in findstr by using the /n option. This option will show the line number before each line that matches the search criteria.
```cmd
findstr /n "search term" filename.txt
```

### How do I search for multiple strings (OR condition) using findstr?
You can search for multiple strings using an OR condition in findstr by separating the search terms with spaces inside double quotes. This will look for lines that contain either of the specified strings.
```cmd
findstr "string1 string2" filename.txt
```
## Applications of the FINDSTR Command

- Searching for specific text in files
- Filtering the output of other commands
- Finding specific patterns in files
- Searching for text within directories and subdirectories
- Using regular expressions to search for complex patterns