---
title: What is FOR Windows command?
description: Discover how the Windows FOR command can help you efficiently process files and folders within a batch script.
---

The Windows FOR command allows you to iterate over files and folders, perform commands on each item, and automate tasks within a batch script. This versatile command is useful for processing data, executing repetitive tasks, and managing file operations efficiently.

## FOR Syntax:
```cmd
FOR [/D] [/R] variable IN (set) DO command [command-parameters]
FOR /L %%variable IN (start,step,end) DO command [command-parameters]
```

## FOR Options:

| Option   | Description                            |
|----------|----------------------------------------|
| /D       | Process folders as well                |
| /R       | Recursively process directories        |


:::caution
Be cautious when using the FOR command as it can potentially overwrite existing files if not used properly.
:::

## Parameters:

| Parameter          | Description                                             |
|--------------------|---------------------------------------------------------|
| variable           | A single letter that represents the loop variable       |
| set                | A set of one or more files                              |
| command            | The command to execute for each file in the set         |
| command-parameters | Additional parameters to pass to the command            |
| start              | The starting value for a numeric loop (integer)         |
| step               | The increment step value for a numeric loop (integer)   |
| end                | The ending value for a numeric loop (integer)           |
## FOR Command Usage Examples:
### Copy Files in a Directory
```cmd
for %f in (C:\source\*) do copy %f C:\destination\
```
Copies all files from the source folder to the destination folder.
### Rename Files in a Directory
```cmd
for %f in (C:\files\*.txt) do rename %f new_*.txt
```
Renames all.txt files in the specified folder to start with "new_".
### Delete Files in a Directory
```cmd
for %f in (C:\temp\*.tmp) do del %f
```
Deletes all files with the .tmp extension in the temp folder.
### Move Files to Subfolders
```cmd
for %f in (C:\images\*.jpg) do move %f C:\images\processed\
```
Moves all .jpg files from the images folder to the processed subfolder.
### Display File Contents
```cmd
for /f "tokens=*" %f in (C:\textfile.txt) do @echo %f
```
Displays the contents of a text file line by line in the command prompt.
:::tip
When using the for command in Windows CMD, make sure to familiarize yourself with the various options and syntax available. Experiment with different parameters to understand how they affect the behavior of the command.
:::

### How do I use for in Windows?
To use the for command in CMD, execute the following command:
```cmd
for --option <value>
```

### What are some common options used with the for command in Windows?
The for command in Windows CMD supports various options, such as /R for recursive processing of files, /D for folder processing, /F for parsing a text file, and /L for processing a range of numbers.

### How can I iterate over a range of numbers using the for command in Windows CMD?
To iterate over a range of numbers using the for command in Windows CMD, you can use the /L option followed by the starting number, ending number, and optional step value. For example:
```cmd
for /L %i in (1,1,10) do (
    echo %i
)
```

### Can the for command in Windows CMD be used to process files in a directory?
Yes, the for command in Windows CMD can be used to process files in a directory. You can use the /R option to perform recursive processing of files in a specified directory. For example:
```cmd
for /R C:\Directory %i in (*.txt) do (
    echo %i
)
```

### How can I use the for command to process folders in Windows CMD?
To process folders in Windows CMD using the for command, you can use the /D option followed by the directory path. For example:
```cmd
for /D %i in (*) do (
    echo %i
)
```

### How do I iterate over the contents of a text file using the for command in Windows CMD?
You can iterate over the contents of a text file using the for command in Windows CMD by using the /F option followed by the file name. For example:
```cmd
for /F %i in (file.txt) do (
    echo %i
)
```

### Can I use the for command in Windows CMD to execute commands based on conditional expressions?
Yes, you can use conditional expressions with the for command in Windows CMD. By using the if statement within the for loop, you can execute commands based on specific conditions. For example:
```cmd
for /L %i in (1,1,10) do (
    if %i==5 (
        echo Found number 5
    )
)
```
## Applications of the FOR Command

1. Iterating through files in a directory
2. Processing text files line by line
3. Running commands on a set of files
4. Creating loops for repetitive tasks
5. Parsing command output for use in other commands