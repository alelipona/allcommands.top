---
title: mdimport command in MacOS
description: Learn how to use the MacOS mdimport command to index and import metadata of files efficiently. 
---

The MacOS mdimport command is used to index and import metadata of files, making it easier to search for and organize files on your system. By using mdimport, you can improve the speed and efficiency of file searches, as well as access important metadata such as author, date created, and file type. This command is especially useful for users who work with a large number of files and need to quickly locate specific information.

## mdimport Syntax:
```bash
mdimport [options] [parameters]
```
## MacOS mdimport Options:
| Option | Description |
|--------|-------------|
| -d     | Force the reindexing of the specified directory. |
| -l     | List the importer plugins. |
| -r     | Remove the metadata for the specified item. |
| -n     | Do not update the metadata for the specified item. |
| -T     | Test the import paths. |
| -g     | Generate debug data. |
| -x     | Do not include files and directories starting with ".". |
| -f     | Follow symbolic links. |
| -Var   | Print variables and their values. |
| -D     | Output debugging information. |

## mdimport Parameters:
| Parameter | Description |
|-----------|-------------|
| path      | Specifies the file or directory for metadata import. |
| -h        | Display help message. |
| -V        | Show version information. |
| -M        | Output information about the metadata store. |
| -p        | Specify the indexing priority level. |
| -E        | Erase and rebuild metadata database. |
| -d        | Specify the database to use. |
| -t        | Index the specified URL. |
| query     | Perform a metadata query. |
| -s        | Rescan the specified item to update metadata. |
| -u        | Update all metadata information. |
| -L        | Index the localized string. |
| -a        | Automatically update metadata. |
| pathlist  | Metadata import for files in the path list. |
| -- | End of options. Use this if a file name begins with "-" to ensure it's not treated as an option. |
:::caution
Be cautious when using the mdimport command as it directly interacts with the macOS metadata system and can impact system performance if used incorrectly.
:::
## How to use mdimport command:
### Index a specific file
```bash
mdimport /path/to/file.txt
```
This command is used to manually index a specific file.

### Index all files in a directory
```bash
mdimport /path/to/directory
```
mdimport can be used to index all files in a specified directory.

### Exclude a directory from indexing
```bash
mdimport -x /path/to/excluded_directory
```
With the -x flag, you can exclude a specific directory from being indexed by mdimport.

### Force reindexing of a file
```bash
mdimport -f /path/to/file.pdf
```
Using the -f flag will force the reindexing of a specific file.

### List all metadata attributes
```bash
mdimport -L
```
mdimport can be used with the -L flag to list all metadata attributes supported by Spotlight.

### Index files with a specific content type
```bash
mdimport -c public.audio /path/to/music
```
You can use the -c flag to specify a content type when indexing files.

### Index files with a specific MIME type
```bash
mdimport -m audio/mpeg /path/to/music
```
mdimport allows indexing files based on a specific MIME type with the -m flag.

### Index files by content
```bash
mdimport -p /path/to/directory
```
The -p flag allows mdimport to index files based on their content.
:::tip
When using the `mdimport` command in MacOS, remember to specify the necessary options and values to ensure the desired behavior for metadata import.
:::

### How can I check the version of mdimport in MacOS?
To check the version of `mdimport` in MacOS, use the following command:
```bash
mdimport -v
```

### How do I import metadata for a specific file using mdimport?
To import metadata for a specific file with `mdimport` in MacOS, execute the following command:
```bash
mdimport /path/to/file
```

### What is the purpose of the `-d` option in the mdimport command?
The `-d` option in the `mdimport` command in MacOS is used to specify a debug level for the import process. To use it, run the command with the desired debug level like this:
```bash
mdimport -d 2 /path/to/directory
```

### How can I force mdimport to reimport all metadata in a directory?
To force `mdimport` to reimport all metadata in a directory in MacOS, you can use the following command:
```bash
mdimport -f /path/to/directory
```

### How do I exclude specific directories from mdimport in MacOS?
To exclude specific directories from metadata import with `mdimport` in MacOS, you can use the `-x` option. Here is an example command:
```bash
mdimport -x /path/to/exclude/directory /path/to/directory
```

### Can I schedule regular metadata imports with mdimport in MacOS?
Yes, you can schedule regular metadata imports using `launchd` and creating a plist file. Here is a basic example of a plist file configuration for scheduling metadata imports:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>com.example.mdimport</string>
    <key>ProgramArguments</key>
    <array>
      <string>mdimport</string>
      <string>--option</string>
      <string>value</string>
    </array>
    <key>StartInterval</key>
    <integer>3600</integer>
  </dict>
</plist>
```

### How can I display the list of supported metadata types for mdimport in MacOS?
To display the list of supported metadata types for `mdimport` in MacOS, you can use the following command:
```bash
mdimport -s
```

## Applications of the mdimport command

1. Indexing files for Spotlight search
2. Extracting metadata from various file types
3. Updating metadata information for files
4. Improving search functionality on macOS
5. Integrating with third-party applications for metadata extraction