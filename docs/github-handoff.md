# GitHub Synchronisation Record

**Target repository:** `https://github.com/leadstar007/Foxmowing`

**Target branch:** `main`

**Audited remote base:** `aa9770636b1b41d9c1968e93f44e941ac01586e9`

## Remote history before synchronisation

| Commit | Description |
|---|---|
| `e12637c` | Initial commit |
| `aa97706` | Update README.md |

The audited remote branch contained only `LICENSE` and `README.md`. The completed local project had one overlapping tracked path: `README.md`.

## History-preserving strategy

The remote repository clone remains the integration worktree. The active Astro/Cloudflare source listed in `docs/github-publish-manifest.txt` is copied into that worktree while retaining its `.git` directory and existing `LICENSE`. Retired React, Express, tRPC, Vite, and Drizzle migration-reference trees remain available in the managed project history but are deliberately excluded from the clean GitHub handoff. The remote README is replaced deliberately with the expanded project README, which preserves the original purpose statement—“This repository is for the Fox Mowing franchise website and enquiry software”—and adds reproducible setup, testing, D1, deployment, security, and owner-documentation guidance.

No force push, history rewrite, branch deletion, or destructive reset is permitted. The completed project is added as one new commit on top of the audited `main` base and pushed with a normal fast-forward update. Generated dependencies, builds, Astro state, Wrangler state, local databases, logs, and credentials are excluded.

## Verification requirements

After the push, the remote `main` branch must contain the two original commits plus the new project commit. Its repository tree must include the preserved `LICENSE`, expanded `README.md`, active `src`, `public`, `migrations`, `tests`, `scripts`, `docs`, Astro and Wrangler configuration, and lockfile. The local integration worktree must be clean and `origin/main` must resolve to the same commit as local `HEAD`.

The pre-copy manifest comparison validated **62 active project paths** against the **2-path remote tree**: **61 additions**, **1 remote-only retained path** (`LICENSE`), and **1 intentional overlap** (`README.md`). No other path conflict exists.
