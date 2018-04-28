# DVT Rest API

## Overview

This module defines the custom resources to manage application data.

## Defined endpoints

### dvt_todos_resource
```
GET all todos /api/v1/todos

POST a todo /api/v1/todos {"title": ' - - - - ',"status":true/false}

DELETE a todo /api/v1/todos/{todo_id}

PATCH a todo /api/v1/todos/{todo_id} -> {"title": ' - - ',"status":true/false}
```
