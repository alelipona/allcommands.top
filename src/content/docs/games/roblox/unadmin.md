---
title: Roblox unadmin command
description: Discover how to use the Roblox unadmin command to remove administrator permissions from players in your game.
---

The Roblox unadmin command is a useful tool for game developers and administrators on the platform. By using this command, you can easily remove administrator permissions from players who no longer need or should have them. This can help maintain the balance of power in your game and ensure a fair and enjoyable experience for all players. The unadmin command is simple to use and can be executed quickly to make necessary adjustments to player permissions. By understanding how to use the Roblox unadmin command effectively, you can keep your game running smoothly and maintain a positive gaming environment for all participants.

## unadmin Syntax:
```console
unadmin [player]
```

## Options:
| Option | Description                            |
|--------|----------------------------------------|
| player | The username of the player to unadmin. |


:::caution
Use this command carefully as it will remove admin privileges from the specified player.
:::
### Remove Admin Permissions
```console
unadmin player123
```
Removes admin permissions from the player with the username "player123".

### Revoke Admin Access
```console
unadmin @player456
```
Revokes admin access from the player mentioned with the handle "@player456".

### Disable Admin Privileges
```console
unadmin 13579
```
Disables admin privileges for the user with the ID "13579".

### Remove Admin Role
```console
unadmin "Player Name"
```
Removes the admin role from the player with the name "Player Name".
:::tip
When using the unadmin command in Roblox, make sure to double-check the username or user ID that you are targeting to ensure that you are removing admin powers from the correct user.
:::

## Common Questions on unadmin Usage:

### How do I use unadmin in Roblox?
To use the unadmin command in Roblox, execute the following command:
```console
unadmin --username exampleUser
```

### Can I unadmin multiple users at once with the Roblox console command?
Yes, you can unadmin multiple users at once by providing a list of usernames or user IDs as arguments. 
```console
unadmin --usernames user1 user2 user3
```

### Is there a way to unadmin a user by their user ID instead of username in Roblox?
Yes, you can unadmin a user by their user ID using the following command:
```console
unadmin --userId 123456789
```

### How can I specify a reason for unadmining a user in Roblox?
You can provide a specific reason for unadmining a user using the --reason option in the command.
```console
unadmin --username exampleUser --reason "Violated community guidelines"
```

### Can I undo the unadmin action if I mistakenly remove admin powers from a user in Roblox?
No, the unadmin command in Roblox is irreversible, so make sure to confirm the action before executing the command.

### Is there a way to check the admin status of a user before unadmining them in Roblox?
Yes, you can verify the admin status of a user before using the unadmin command by checking their admin permissions in the Roblox platform.

### Are there any restrictions on who can use the unadmin command in Roblox?
Only users with appropriate admin privileges or specific permissions can use the unadmin command to remove admin powers from other users.
## Applications of the unadmin command

- Removing administrator privileges
- Revoking admin rights
- De-administering a user