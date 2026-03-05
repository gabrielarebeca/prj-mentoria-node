# CONTRATO RBAC

### Users

- `id` PK, uuid, obrigatório
- `name` varchar, min 3 caracteres, obrigatório
- `email` UNI QUE, varchar, obrigatório
- `password` varchar, min 8 caracteres, obrigatório

### User_role

- `role_id` FK, uuid, obrigatório
- `user_id` FK, uuid, obrigatório

### Role

- `id` PK, uuid, obrigatório
- `name` varchar, min 3 caracteres, obrigatório
- `description` text, regras adicionais

### Role_permission

- `role_id` FK, uuid, obrigatório
- `permission_id` FK, uuid, obrigatório

### Permissions

- `id` PK, uuid, obrigatório
- `key` varchar, min 3 caracteres, obrigatório
- `description` text, regras adicionais
