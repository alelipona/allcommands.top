---
title: publish Minecraft command
description: Learn how to effectively use the Minecraft publish command to share your creations with others and showcase your builds in the game.
---

The Minecraft publish command allows players to easily share their creations with others by uploading their builds to the Minecraft marketplace. This command is a great way to showcase your designs, worlds, or maps to a wider audience and receive recognition for your hard work. By using the publish command, players can make their creations available for download by other players, enabling them to explore and enjoy your creations in their own Minecraft worlds. This feature is particularly useful for creators who want to share their work with the community or even make a profit by selling their creations on the marketplace.

## publish Syntax:
```console
/publish <world name>
```

## publish Options:
| Option    | Description                   |
|-----------|-------------------------------|
| -f        | Forcefully publish the world  |
| -s        | Set the world as published     |

:::caution
It is recommended to backup your world before using the publish command as it will make your world visible to all other players on the server.
:::

## Parameters:
| Parameter   | Description                  |
|-------------|------------------------------|
| world name  | Specifies the name of the world you want to publish |
### Publish a local folder to a GitHub Pages site
```console
publish . --gh-pages
```
Publishes the content of the current folder to a GitHub Pages site.

### Publish a web application to a hosting service
```console
publish ./myapp --hosting="Firebase"
```
Deploys a web application located in the "myapp" folder to the specified hosting service, such as Firebase.

### Publish a Minecraft server to be accessible online
```console
publish ./server --public
```
Makes a Minecraft server hosted in the "server" folder accessible online.

### Publish a blog post on a website
```console
publish ./blog_post.md --blog
```
Publishes a blog post written in Markdown format to the designated blogging platform.

### Publish a game mod for download
```console
publish ./mod.zip --download
```
Makes a game modification stored in the "mod.zip" file available for download by users.
## How to use publish?:
{Questions}

:::tip
When using the publish command in Minecraft, make sure to specify the correct options and values to successfully publish your content. Double-check your command before executing it to prevent any errors.
:::

### How do I use publish in Minecraft?
To use the publish command in console, execute the following command:
```console
publish --world "MyWorld" --destination "MyWebsite" --port 8080
```

### What are the available options for the publish command in Minecraft?
To see all the available options for the publish command, use:
```console
publish --help
```

### How can I publish a specific world in Minecraft?
You can publish a specific world by using the following command:
```console
publish --world "MyWorld"
```

### How do I specify the destination for my published content in Minecraft?
To specify the destination for your published content, use:
```console
publish --destination "MyWebsite"
```

### How do I set a custom port for publishing in Minecraft?
If you want to set a custom port for publishing, use:
```console
publish --port 8080
```

### Can I publish multiple worlds at once in Minecraft?
Yes, you can publish multiple worlds at once by including all the world names in the command:
```console
publish --world "MyWorld1" "MyWorld2" "MyWorld3"
```

### Is it possible to update previously published content in Minecraft?
To update your previously published content, use the publish command with the desired changes and the same world name:
```console
publish --world "MyWorld" --destination "UpdatedWebsite" --port 8080
```

### How do I cancel a publishing operation in Minecraft?
If you need to cancel a publishing operation, you can do so by stopping the command execution or closing the console window.
## Applications of the publish command

- Streaming gameplay on platforms like Twitch or YouTube
- Showcasing creations in multiplayer servers
- Collaborating with others in real-time
- Hosting events or tournaments
- Sharing content with a broader audience