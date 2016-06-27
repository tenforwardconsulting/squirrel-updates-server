export default {
  port: process.env.UPDATES_PORT || process.env.PORT || 3000,
  host: process.env.UPDATES_HOST || '0.0.0.0',
  github: {
    token: process.env.GITHUB_TOKEN,
    api: {
      version: '3.0.0',
      headers: {
        'user-agent': 'tenforward/intoxiclock-update-server'
      }
    }
  },
  sentry: {
    dsn: process.env.SENTRY_DSN
  },
  user: process.env.REPO_OWNER || 'tenforwardconsulting',
  repo: process.env.REPO_NAME || 'intoxiclock',
  privateRepo: process.env.UPDATES_PRIVATE_REPO || true,
  patterns: {
    darwin: {
      dmg: /\.dmg/,
      zip: /-mac\.zip/
    },
    win32: {
      installer: /\.exe/,
      zip: /-win32-portable\.zip/
    },
    linux: {
      deb: {
        i386: /-linux-i386\.deb/,
        amd64: /-linux-amd64\.deb/
      },
      rpm: {
        i386: /-linux-i386\.rpm/,
        x86_64: /-linux-x86_64\.rpm/
      }
    }
  },
  mirrors: process.env.MIRROR_NAMES
};
