# create-t3-nx

![screenshot](./docs/assets/screenshot.png)

Create t3 nx is a starter template that enables you to use t3 stack in Nx monorepo.

## Directory tree

This template has the following directory tree

```
.
├── .vscode - Recommended extensions and settings for VSCode users
├── apps/
│   └── nextjs - NextJs 13
└── libs/
    ├── db/
    │   └── src/
    │       └── lib - Prisma library to contain prisma schema and helper function
    ├── auth/
    │   └── src/
    │       └── lib - auth library for Nextauth helper function and authOptions config
    ├── api/
    │   └── src/
    │       └── lib - tRPC configuration and procedures
    └── env-validator/
        └── src/
            └── lib - Runtime and build time environment variable validator with full type safety
```

## References

The stack originates from [create-t3-app](https://github.com/t3-oss/create-t3-app).

## Contributors

<a href="https://github.com/endalk200/create-t3-nx/graphs/contributors">
  <p>
    <img width="60px" src="https://contrib.rocks/image?repo=endalk200/create-t3-nx" alt="A table of avatars from the project's contributors" />
  </p>
</a>
