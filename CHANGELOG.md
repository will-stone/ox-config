# Changelog

## 2.0.0

### Major Changes

- Changed Tailwind options to now require either a `config` entry, for TW v3, or a `stylesheet`
  entry, for TW v4.

### Patch Changes

- Fixed Oxlint options shouldn't all be required.

- Fixed the following error:

  ```
  Invalid configuration for rule `jsx_a11y/control-has-associated-label`:
    │   unknown field `includeRoles`, expected one of `depth`, `labelAttributes`, `controlComponents`, `ignoreElements`, `ignoreRoles`
  ```

## 1.0.1

### Patch Changes

- Set `eslint-plugin-better-tailwindcss` and `eslint-plugin-better-tailwindcss` as peer deps.
