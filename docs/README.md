# Project title

## Server API documentation
The basic url to the server is `to be added`

### Get user

#### Route
GET: `baseURL/user/{id}`

#### Response

##### 200
```
{
    name: 'Kristoffer',
    id: 'hgfisds44',
    contacts: [
        {
            name: 'Arne',
            id: 'dsfdsfd41'
        },
        contacts: {
            name: 'Anka',
            id: 'dfhdfd458'
        }, 
        ...,
        memories: {
            id: 'sdfdfh44',
            image: base64-encoded string,
            greeting: 'Here we are at the beach eating sand',
            toId: [{
                {
                    name: 'Anka'
                    id: dfjkhdshj55
                },
                ...
            }],
        }
    ]
}
```
#### 400
{
    code: 'INVALID_ID'
}

### Get memories

#### Route
GET: `baseURL/memories`

##### Parameters
| Parameter | value                     | format               |
| --------- |:-------------------------:| --------------------:|
| userId    | the users id              |{id: 'dfdfsf44',...}  |
| memoryIds | list if memory-ids to get |[{id: 'sdsds44'},...] |

###### Example request body
```
{
    userId: 'dfdfsf44',
    memoryIds: [
        {
            id: 'fdsdf44'
        },
        ...
    ]
}
```
**If no ids are given, all the users memories will be returned**

#### Response

##### 200
```
{
    memories: [
        {
            id: 'hdfersf44',
            image: base64 encoded string,
            greeting: 'Here we are at the beach eating sand'
        },
        ...
    ],
    from: {
        id: 'dfdf44',
        name: 'Arne'
    }
}
``` 

##### 400
```
{
    error: {
        code: 
    }
}
```

### Add user

#### Route
POST: `baseURL/user`
```
{
    name: 'Kristoffer',
}
```

#### Response

##### 200
```
{
    id: 'srhgsdhfsdf44'
}
```
##### 400
{
    error: {
         code: 'INVALID_USERNAME'
    }
}

### Update user

#### Route
 PUT OR PATCH???

### Send memory

#### Route
POST: `baseURL/memory`
```
{
    fromId: 'dfbhdjbf44',
    toId: [
        {
            id: fggdgg44',
        },
        ...
    ],
    image: base64-incoded string,
    greeting: 'Here we are at the beach eating sand' 
} 
```
#### Response

##### 200
```
{
    ...
}
```

##### 400 
```
{
    error: {
        code: 'INVALID_RECEIVER' | INVALID_SENDER | UNKNOWN_IMAGE_FORMAT | INVALID_GREETING
    }
}
```

### Delete memory

DELETE: `baseURL/memory/{id}`

#### Response

##### 200
Successfully deleted memory

##### 400
```
{
    error: {
        code: 'INVALID_ID'
    }
}
```





