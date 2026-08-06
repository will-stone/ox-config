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
    '@anolilab/semantic-release-pnpm',
    '@semantic-release/github',
  ],
}

export default releaseConfig
