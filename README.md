# Clients

Multi-client website repository. Each client site lives on its own branch.

## Branches

| Branch | Client | Stack |
|--------|--------|-------|
| `apex-consulting` | Apex Consulting Engineers | Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion |
| `bridgessolicitors` | Bridges Solicitors (Lewisham, London) | Next.js 16, React 19, TypeScript, Tailwind CSS v4 |

## Working on a client

Each client branch is an orphan root (independent history) so you can work on one
without touching the others:

```bash
# Clone once
git clone https://github.com/masterdishaun/Clients.git
cd Clients

# Switch to the client you want
git checkout bridgessolicitors

# Install + run (Next.js clients live under ./site)
cd site
npm install
npm run dev
```

## Adding a new client

1. Create an orphan branch: `git checkout --orphan <client-slug>`
2. Wipe the index: `git rm -rf .` then drop in the client's site scaffold.
3. Commit and push: `git push -u origin <client-slug>`.
4. Add a row to the **Branches** table above on `main`.

