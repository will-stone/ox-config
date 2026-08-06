const releaseConfig = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          headerCorrespondence: ['type', 'scope', 'subject'],
          headerPattern: /^(?<type>[!^~])(?: (?<scope>.*):)? (?<subject>.*)$/u,
        },
        preset: 'conventionalcommits',
        releaseRules: [
          { release: 'major', type: '!' },
          { release: 'minor', type: '^' },
          { release: 'patch', type: '~' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts: {
          headerCorrespondence: ['type', 'scope', 'subject'],
          headerPattern: /^(?<type>[!^~])(?: (?<scope>.*):)? (?<subject>.*)$/u,
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
    // Not compatible with pnpm.
    // https://github.com/semantic-release/npm/issues/280
    // '@semantic-release/npm',
    [
      '@semantic-release/exec',
      {
        // oxlint-disable-next-line no-template-curly-in-string
        prepareCmd: 'pnpm version ${nextRelease.version} --git-tag-version=false',
        publishCmd: 'pnpm publish --no-git-checks',
      },
    ],
    '@semantic-release/github',
  ],
}

export default releaseConfig
