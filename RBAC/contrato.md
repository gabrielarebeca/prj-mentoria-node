# CONTRATO RBAC

### Users

- `Id` PK, uuid, obrigatório
- `Name` varchar, min 3 caracteres, obrigatório
- `E-mail` UNI QUE, varchar, obrigatório
- `Password` varchar, min 8 caracteres, obrigatório

### User_role

- `role_id` FK, uuid, obrigatório
- `user_id` FK, uuid, obrigatório

### Role

- `Id` PK, uuid, obrigatório
- `Name` varchar, min 3 caracteres, obrigatório
- `Description` text, regras adicionais

### Role_permission

- `role_id` FK, uuid, obrigatório
- `permission_id` FK, uuid, obrigatório

### Permissions

- `Id` PK, uuid, obrigatório
- `Key` varchar, min 3 caracteres, obrigatório
- `Description` text, regras adicionais
