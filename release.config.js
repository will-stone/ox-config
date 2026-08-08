// oxlint-disable no-template-curly-in-string

const headerPattern = /^([!^~])(?: (.*):)? (.*)$/u
const headerCorrespondence = ['type', 'scope', 'subject']
const parserOpts = { headerCorrespondence, headerPattern }

const releaseConfig = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts,
        releaseRules: [
          // The type can be a glob pattern so the characters need to be escaped.
          { release: 'patch', type: '\\~' },
          { release: 'minor', type: '\\^' },
          { release: 'major', type: '\\!' },
        ],
      },
    ],

    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts,
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { effect: 'breaking', section: 'Major', type: '!' },
            { effect: 'featured', section: 'Minor', type: '^' },
            { effect: 'fixed', section: 'Patch', type: '~' },
          ],
        },
      },
    ],

    // Not compatible with pnpm...
    // https://github.com/semantic-release/npm/issues/280
    // '@semantic-release/npm',

    [
      '@semantic-release/exec',
      {
        prepareCmd: 'pnpm version ${nextRelease.version} --git-tag-version=false',
        publishCmd: 'pnpm publish --no-git-checks',
      },
    ],

    '@semantic-release/github',

    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
      },
    ],

    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'v${nextRelease.version}\n\n[skip ci]',
      },
    ],
  ],
}

export default releaseConfig
