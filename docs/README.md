# Project title

## Server API documentation
The basic url to the server is `to be added`

### Authorization
Authorization can currently be done by the following methods:
- Username and password

Af the authorization is successful an jwt-token is received, containing the following:
- Expiration time
- The users guid

The token is to be added to each request against the API.

#### Route - Login 
`POST: /auth/login`

##### Parameters
| Parameter   | value                                      |
| ----------- |:------------------------------------------:|
| clientId    | An id that is distributed by the API-admin |
| password    | The users password.                        |
| username    | The users username                         |

##### Response
**200**
```
{
    token: '<auth key>'
}
```

**400**
```
{
    error: {
        code: 'INVALID_CLIENT_ID'
    }
}
```

**403**
```
{
    error: {
        code: 'LOGIN_FAILED'
    }
}
```

**404**

```
{
    error: {
        code: 'USER_DOES_NOT_EXISTS'
    }
}
```


### User

#### Route - Get User
GET: `/user/{id}`

#### Response

##### 200
```
{
    name: 'Kristoffer',
    guid: "bjbsnjfhdfngjdf4541154dsfds"
    id: 'hgfisds44',
}
```
#### 404
```
{
    error: {
        code: 'USER_DOES_NOT_EXISTS'   
    }
}
```

#### Route - Add User
POST: `baseURL/user`
```
{
    userName: 'Kristoffer',
    guid: 'sdfsdfsf45rers54esr'
}
```

#### Response
##### 200
```
{
    "user": {
        "userName": "Olle",
        "guid": "sdffsdl445dsf4553dsf",
        "id": "-L3j8Vu6teP7R7SDi4hC"
    }
}

```
##### 400
```
{
    error: {
         code: 'INVALID_USERNAME' | INVALID_GUID | INVALID_USER_DATA
    }
}
```

##### 403
```
{
    error: {
         code: USER_NAME_ALREADY_TAKEN
    }
}
```

### Contacts 

#### Route Get contacts
GET: `baseURL/contacts/{userGuid}`

#### Response 

##### 200
```
[
    {
        "user": {
            "userName": "Anna-Karin",
            "guid": "s4f754sd2fsfajfdsda54",
            "id": "-L2WrCY1G-N89gRxxXek"
        }
    },
    {
        "user": {
            "userName": "Anton",
            "guid": "4dfgdfgdfgfdg845453d",
            "id": "-L2lk7TNfL3WzGuyoyM1"
        }
    },
    ...
]
```

#### Route Add contact to user
POST: `baseURL/user/{userGuid}/contacts/contactGuid`

#### Response
##### 200 
```
{
    "contactList": [
        "dfks4sdfsdf854fdsfsd",
        "dsf4dsfg7sdr48g6vdg7fd6",
        "sd45gfd6f4ds68f54ds6f8s4",
        "s54d1fds4fds65f4sd6d531fcd"  // <-- New contact
    ]
}
```

##### 400
```
error {
    code: ALREADY_A_CONTACT
}
```

##### 404 
```
{
    error: {
         code: USER_DOES_NOT_EXISTS | CONTACT_DOES_NOT_EXISTS
    }
}
```


### Memory

#### Route - Get memory data
GET: `baseURL/memory/{memoryGuid}?senderGuid=...`

##### Parameters
| Parameter   | value                     | format            |
| ----------- |:-------------------------:| -----------------:|
| memoryGuid  | the guid for the memory   | A URL-param       |
| senderGuid  | list if memory-ids to get | A url query param |

#### Response

##### 200
```
{
    "memory": {
        "guid": "memory-1516738683172109",
        "filePath": "public\\images\\memory-1516738683172109.png",
        "message": "Hej här sitter vi vid matbordet och chillar!",
        "recipients": [
            "dfhksdfhsidfyh54sdf4ds45",
            "sdffsdf54568ds7f4fd"
        ],
        "sender": "sdkfjjsfuhfsfd4583487fdfsz",
        "senderName": "Kristoffer"
    }
}
``` 

##### 400
```
{
    error: {
        code: INVALID_IMAGE
    }
}
```

##### 403
```
{
    error: {
        code: NOT_ALLOWED_TO_GET_MEMORY 
    }
}
```


#### Route - Get memory image
GET: `baseURL/image/?filePath=....`

##### Parameters
| Parameter   | value                     | format            |
| ----------- |:-------------------------:| -----------------:|
| filePath    | Path to the file on disk  | A URL query param |

#### Response

##### 200
```
image
``` 

##### 400
```
{
    error: {
        code: INVALID_IMAGE
    }
}
```

#### Route - Add memory
POST: `baseURL/memory`

##### Parameters
| Parameter   | value                 | format               |
| ----------- |:---------------------:| --------------------:|
| memory      | Image to be uploaded  | .png or .jpeg - file |
| recipients  | Array of user guids   | [..., ..., ..., ]    |
| sender      | A user guid           | .......              |
| message     | String (Optional      | 'Hello my friend'    |

#### Response

##### 200
```
{
    "failedToSendTo": []
}
``` 

##### 400
```
{
    error: {
        code: INVALID_IMAGE
    }
}
```
##### 404
```
{
    error: {
        code: USER_DOES_NOT_EXISTS
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



## Tests

Use `mocha --recursive` to run all tests




