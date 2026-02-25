# Node express app in typescript

## Local development setup

### Install dependencies

```shell
nvm use
yarn
```

### Run app in development mode

```shell
yarn dev
```

The server will be available at: [http://localhost:3000](http://localhost:3000)

Curl command - `curl http://localhost:3000/approval`

## API endpoints

| Endpoint | Method | Description |
| ----------------------- | ----------- | ----------- |
| `/approval` | `GET` | Returns a JSON object with approval status (true/false) |
| `*` | `ALL` | Catch-all handler for incorrect routes (returns 404) |

## Deployment

### Build the project

```shell
nvm use
yarn
yarn build
```

### Production execution

```shell
yarn start
```
