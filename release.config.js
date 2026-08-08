// oxlint-disable no-template-curly-in-string

// Extract the type, optional scope, and subject from the commit message.
const headerPattern = /^([!^~])(?: (.*):)? (.*)$/u
// The order of the extracted items.
const headerCorrespondence = ['type', 'scope', 'subject']
// Shared parserOpts to use with the commit analyzer and the release notes generator.
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
            { hidden: false, section: 'Major', type: '!' },
            { hidden: false, section: 'Minor', type: '^' },
            { hidden: false, section: 'Patch', type: '~' },
          ],
        },
        //         writerOpts: {
        //           // Add commit body to the changelog entry.
        //           commitPartial: `* {{subject}}

        // {{~!-- commit hash --}} {{#if @root.linkReferences}}([{{shortHash}}]({{#if @root.host}}{{@root.host}}/{{/if}}{{#if @root.owner}}{{@root.owner}}/{{/if}}{{@root.repository}}/{{@root.commit}}/{{hash}})){{else}}{{hash~}}{{/if}}{{#if body}}

        //   {{body}}
        // {{/if}}`,
        //         },
      },
    ],

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
