# Looking for maintainers
Contact me with discord (sirandev) or [telegram](https://t.me/sirandev) if you interested in.

# Api Client for [Artifacts](https://artifactsmmo.com)
[![npm](https://img.shields.io/npm/v/artifacts-api-client.svg?maxAge=1000)](https://www.npmjs.com/package/artifacts-api-client)
[![npm](https://img.shields.io/npm/l/artifacts-api-client.svg?maxAge=1000)](https://github.com/siranweb/artifacts-api-client/LICENSE.md)

API wrapper for NodeJS and browsers with TypeScript support

## Installation
```bash
npm i artifacts-api-client
```

## Usage

`artifacts-api-client` fully implements [official API](https://api.artifactsmmo.com/docs). 

```ts
import { ArtifactsApi } from 'artifacts-api-client';

// Initialization
const artifactsApi = ArtifactsApi.create({
  token: 'TOKEN'
});

// Usage
const status = await artifactsApi.getStatus();
const resources = await artifactsApi.resources.getAll({
  min_level: 1,
  max_level: 10,
})
await artifactsApi.myCharacters.fight('name');
```

Alternatively, you can set token later:

```js
import { ArtifactsApi } from 'artifacts-api-client';

const artifactsApi = ArtifactsApi.create();

await artifactsApi.myCharacters.fight('name'); // <-- fail, auth required

const { token } = await artifactsApi.token.generate('username', 'password');
artifactsApi.setToken(token);

await artifactsApi.myCharacters.fight('name'); // <-- now it works
```

## Error handling
All artifacts API errors are wrapped with `ArtifactsError`.
Keep in mind, that the others errors like `NetworkError` left as they are:
```js
import { ArtifactsApi, ArtifactsError } from 'artifacts-api-client';

const artifactsApi = ArtifactsApi.create({
  token: 'TOKEN'
});

try {
  await artifactsApi.myCharacters.fight('name');
} catch (err) {
  if (err instanceof ArtifactsError) {
    console.error('Artifacts error', e.message, e.code, e.data);
  } else {
    throw e;
  }
}
```

## Type bindings
If package being used with TypeScript you'll probably need methods' types.
They are available to import:

```ts
import { ArtifactsApi, GetAllMapsApiResult, GetAllMapsApiQuery } from 'artifacts-api-client';

const artifactsApi = ArtifactsApi.create({
  token: 'TOKEN'
});

function getMaps(params: GetAllMapsApiQuery): Promise<GetAllMapsApiResult> {
  // ... custom logic ...
  return artifactsApi.maps.getAll(params);
};
```

## Develop
Refer to [DEVELOPMENT.md](./DEVELOPMENT.md).
