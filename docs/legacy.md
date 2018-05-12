#### Route - Get single memory data
`GET: /memory/{memoryGuid}?senderGuid=...`

##### Parameters
| Parameter   | value                     | format            |
| ----------- |:-------------------------:| -----------------:|
| memoryGuid  | the guid for the memory   | A URL-param       |
| senderGuid  | list if memory-ids to get | A url query param |

#### Response

##### 200
```json
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