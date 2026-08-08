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
        presetConfig: {
          types: [
            { hidden: false, section: 'Major', type: '!' },
            { hidden: false, section: 'Minor', type: '^' },
            { hidden: false, section: 'Patch', type: '~' },
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
