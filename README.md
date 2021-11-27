
### Server start
```
npm run start:{environment}
```
### Git commit message 
``` 
# <type>: <subject> 타입과 제목을 아랫줄에 작성하세요

# <body>(추가 설명)을 아랫줄에 작성하세요 //optional

# <type> 작성시 아래 항목을 참고하세요

# feat - A new feature
# fix - A bug fix
# docs - Documentation only changes
# style - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
# refactor - A code change that neither fixes a bug nor adds a feature
# perf - A code change that improves performance
# test - Adding missing tests or correcting existing tests
# build - Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
# ci - Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
# chore - Other changes that don't modify src or test files
# revert - Reverts a previous commit
```

### Status code 
```
Success case 
200 - GET, POST, PATCH, DELETE - 201, 204외 모든 경우 
(GET에서 찾으려는 데이터가 없는 경우도 200) "result": null로 반환
201 - POST - Success created
204 - PATCH - update할 데이터가 없는 경우 

Error case 
400 - BadRequest
401 - Unauthorization
403 - Forbidden
404 - Not Found
500 - Internal Server Error
503 - BadGateWay
504 - 서버 점검, DB 점검 등등 
```
### Response 
**Success**
```
Body
{
  "result": {
    data
  },
  "message": "Success"
}
```

**Error** 
```
Body
{
  "result": null,
  "message": error name,
  "messageCode": error message,
}`
```

### Request method 
``` 
GET - read 
POST - create
PATCH - update
DELETE - delete 
```

### Branch 
mariaDB - mariaDB typeorm setting 
oracleDB - oracleDB create pool setting 