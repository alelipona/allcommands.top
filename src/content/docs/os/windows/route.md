---
title: ROUTE Windows Command Guide
description: Learn how to use the Windows route command to manipulate the network routing table efficiently. Find syntax and options to configure routes effectively.
---

The Windows route command allows users to view and manipulate the local IP routing table. By using this command, you can add static routes, modify existing routes, and remove routes as needed. This tool is essential for network administrators to configure and troubleshoot routing issues efficiently.
## ROUTE Syntax:
```cmd
route PRINT
route ADD destination_network MASK subnet_mask gateway_ip [metric metric] [IF interface_number]
route DELETE destination_network
route CHANGE destination_network MASK subnet_mask gateway_ip [metric metric] [IF interface_number]
```

## Options:
| Option     | Description                               |
|------------|-------------------------------------------|
| PRINT      | Prints a route table                      |
| ADD        | Adds a route                              |
| DELETE     | Deletes a route                           |
| CHANGE     | Modifies an existing route                |

## Parameters:
| Parameter           | Description                                 |
|---------------------|---------------------------------------------|
| destination_network | Specifies the network destination            |
| MASK subnet_mask    | Specifies the subnet mask for the route      |
| gateway_ip          | Specifies the gateway for the route          |
| metric metric       | (Optional) Sets the metric for the route     |
| IF interface_number | (Optional) Specifies the interface number    |

:::caution
Use caution when modifying the route table, as incorrect entries can lead to network connectivity issues.
:::
## ROUTE Command Samples:
### Display the routing table
```cmd
route print
```
Displays the current routing table on the system.

### Add a route to a specific network
```cmd
route add 10.0.0.0 mask 255.0.0.0 192.168.1.1
```
Adds a route to the network 10.0.0.0 with a subnet mask of 255.0.0.0 through the gateway 192.168.1.1.

### Delete a specific route
```cmd
route delete 192.168.1.0
```
Deletes the route to the network 192.168.1.0 from the routing table.

### Change the metrics of a route
```cmd
route change 10.0.0.0 mask 255.0.0.0 192.168.1.1 metric 2
```
Changes the metric value of the route to the network 10.0.0.0 with a subnet mask of 255.0.0.0 through the gateway 192.168.1.1 to 2.

### Add a persistent route
```cmd
route -p add 192.168.10.0 mask 255.255.255.0 192.168.1.1
```
Adds a persistent route to the network 192.168.10.0 with a subnet mask of 255.255.255.0 through the gateway 192.168.1.1.

### Delete all gateway routes
```cmd
route delete 0.0.0.0
```
Deletes all the gateway routes from the routing table.

### Display only IPv4 routes
```cmd
route print -4
```
Displays only the IPv4 routes in the routing table.
:::tip
When using the route command in Windows, make sure to run Command Prompt as an administrator to avoid permission issues and to have full control over network routing configurations.
:::

## ROUTE FAQ: 
### How do I use route in Windows?
To use the route command in Windows, execute the following command:
```cmd
route --option <value>
```

### How can I display the current routing table in Windows?
To display the current routing table in Windows, use the following command:
```cmd
route print
```

### How can I add a new static route in Windows using CMD?
To add a new static route in Windows using CMD, you can use the following command pattern:
```cmd
route add <destination> mask <netmask> <gateway>
```

### How can I delete a specific route in Windows?
To delete a specific route in Windows, you can use the following command:
```cmd
route delete <destination>
```

### How can I change the metric of a route in the Windows routing table?
You can change the metric of a route in the Windows routing table using the following command syntax:
```cmd
route change <destination> mask <netmask> <gateway> metric <metric_value>
```

### How do I flush the entire routing table in Windows CMD?
To flush the entire routing table in Windows CMD, use the following command:
```cmd
route -f
```

## Applications of the ROUTE Command

- Display the routing table: `route print`
- Add a static route: `route add`
- Delete a static route: `route delete`
- Change the metric of a route: `route change`
- Modify the hop count for a route: `route change`
- Display protocol statistics and current TCP/IP network connections: `route print -4`
- Display protocol statistics and current TCP/IP network connections for IPv6: `route print -6`