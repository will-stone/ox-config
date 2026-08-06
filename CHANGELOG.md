## [5.0.1](https://github.com/will-stone/ox-config/compare/v5.0.0...v5.0.1) (2026-08-06)

### Patch

- Testing release
  ([74f64e7](https://github.com/will-stone/ox-config/commit/74f64e7bcd1d63ea9078678fc05ba47ffb3538e1))

# Changelog

## 3.0.0

### Major Changes

- Changed Oxfmt's `tailwindcss` option name to `tailwind` to match Oxlint's config name.

### Minor Changes

- Added support for Oxlint `overrides`.

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
