const releaseConfig = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          headerCorrespondence: ['type', 'scope', 'subject'],
          headerPattern: /^([!^~])(?: (.*):)? (.*)$/u,
        },
        releaseRules: [
          { release: 'patch', type: '\\~' },
          { release: 'minor', type: '\\^' },
          { release: 'major', type: '\\!' },
        ],
      },
    ],

    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts: {
          headerCorrespondence: ['type', 'scope', 'subject'],
          headerPattern: /^([!^~])(?: (.*):)? (.*)$/u,
        },
        preset: 'conventionalcommits',
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

    '@anolilab/semantic-release-pnpm',
    '@semantic-release/github',

    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
      },
    ],
  ],
}

export default releaseConfig
