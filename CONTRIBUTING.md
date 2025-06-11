Thank you for contributing! This guide outlines how we manage branches, file issues, and raise pull requests (PRs) when working from a personal fork to the organization-owned repository.

---

## 📜 Scope

This guide covers the following:

- Repository remotes and setup
- Branch naming conventions
- Standard development and PR workflow
- Issue etiquette and fork hygiene

> **Note:** While this guide focuses on workflow, it also documents our use of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.

---



## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/yourname/guandan-aibot.git
cd guandan-aibot
npm install
```

### 2. Create a Feature Branch

```
git checkout -b feat/engine-legal-checks
```

### 3. Make Your Changes and Commit

```
npm run commit
```

### 4. Push Your Branch and Open a PR

```
git push --set-upstream origin feat/engine-legal-checks
```

> Ensure the PR title also follows the Conventional Commit format.

---

## 📁 Key Remotes

| Remote                  | URL (example)                                            | Purpose                                          |
| ----------------------- | -------------------------------------------------------- | ------------------------------------------------ |
| `upstream` | `https://github.com/Do-not-be-afraid-to-be-knonwn/GuanDan-AIbot.git`    | Canonical repository where releases are tagged   |
| `origin`   | `git@github.com:<your-user>/GuanDan-AIbot.git` | Your personal fork, where you push work branches |

```
# one‑time setup
git clone https://github.com/Do-not-be-afraid-to-be-knonwn/GuanDan-AIbot.git
cd guandan-ai
git remote rename origin upstream
git remote add origin git@github.com:<your-user>/GuanDan-AIbot.git
```

---

## 🌿 Branching Strategy

| Branch Pattern                    | Location | Lifetime     | Purpose                                                          |
| --------------------------------- | -------- | ------------ | ---------------------------------------------------------------- |
| `<span>main</span>`               | upstream | permanent    | Always deployable and production-ready                           |
| `<span>feature/<topic></span>`    | upstream | ≤ 2 weeks    | Aggregates PRs for a larger shared feature effort                |
| `<span>feat/<short-topic></span>` | origin   | short (days) | Individual work targeting `<span>main</span>`or a shared feature |
| `<span>hotfix/<issue></span>`     | upstream | temporary    | Emergency patches outside of feature planning                    |

> Use lowercase and dashes in branch names: e.g., `<span>feat/async-engine</span>`

---

## 🔁 Contribution Flow

### Step-by-Step

1. **Open an Issue** in `<span>upstream</span>` (describe the task or bug)
2. **Determine Target Branch** (`<span>main</span>` or a shared `<span>feature/<topic></span>`)
3. **Start Work Locally**
   ```
   git pull upstream <target-branch>
   git switch -c feat/<short-topic>
   # develop and commit...
   git push origin feat/<short-topic>
   ```
4. **Open a Pull Request**
   - **From**: `<span>your-user:feat/<short-topic></span>`
   - **To**: `<span>acme-org:<target-branch></span>`
   - Use `<span>Fixes #<issue-number></span>` in the PR description to auto-close
5. **Address Review Comments**
   ```
   git pull upstream <target-branch> --rebase
   git push -f origin feat/<short-topic>
   ```
6. **Merge Strategy**: Use **squash merge** once approved and CI passes
7. **Release Note**: Only PRs merged into `<span>main</span>` trigger a release

---

## 🧾 Issue Etiquette

- Keep one issue per concern
- Use labels to track status (`<span>triage</span>`, `<span>in-progress</span>`, `<span>blocked</span>`)
- Link PRs clearly to relevant issues

---

## 🔄 Keeping Your Fork Fresh

```
# Update your local main
git fetch upstream
git switch main
git pull --ff-only upstream main

# Remove merged branches
git fetch -p origin
git branch --merged | grep -v "*" | xargs -I {} git branch -d {}
```

---
## ✅ Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard to ensure clarity and automate release notes.

```
<type>(optional scope): short summary

[optional body]

[optional BREAKING CHANGE: ...]
```

### Common Types

- `<span>feat</span>`: new feature (triggers a minor version bump)
- `<span>fix</span>`: bug fix (triggers a patch bump)
- `<span>docs</span>`: documentation updates
- `<span>chore</span>`: tooling or infrastructure tasks
- `<span>refactor</span>`: non-functional code changes
- `<span>test</span>`: adding or updating tests

### Examples

- `<span>feat(engine): support joker wildcards</span>`
- `<span>fix(policy): prevent out-of-range error</span>`
- `<span>docs: update README with usage instructions</span>`

> Use `<span>npm run commit</span>` (or `<span>git cz</span>`) to launch the interactive commit wizard.

### Linting

Commit messages are checked automatically. Invalid messages will fail local hooks or CI checks.

---
## ❓ Frequently Asked Questions

| Question                                        | Answer                                                                                                |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Can I push directly to `<span>upstream</span>`? | No — use pull requests only                                                                           |
| Can multiple people work on the same feature?   | Yes, but use individual `<span>feat/</span>`branches targeting a shared `<span>feature/</span>`branch |
| How long can a feature branch live?             | Try to limit shared branches to ≤ 2 weeks                                                             |
| What CI runs on forks?                          | Lint and test checks. Release jobs run only on `<span>upstream/main</span>`                           |

---

## 🧰 Useful Scripts

- `<span>npm run commit</span>` — Launch the commit wizard
- `<span>npm run lint</span>` — Run the linter before commits
- `<span>npm test</span>` — Run unit tests

---

## 📚 Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Release](https://semantic-release.gitbook.io/semantic-release/)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Commitlint](https://commitlint.js.org)

---

Happy coding! Keep PRs small, branches short-lived, and issues focused. If anything becomes outdated, feel free to open a PR to update this guide.
