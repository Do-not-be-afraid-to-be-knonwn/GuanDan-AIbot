// Conventional Commit rules for Guandan-AI
module.exports = {
  //
  // 1) Base preset – pulls in all the default rules for
  //    feat, fix, docs, refactor, chore, BREAKING CHANGE, etc.
  //
  extends: ["@commitlint/config-conventional"],

  //
  // 2) Project-specific tweaks
  //
  rules: {
    // —— Allowed commit types (add or remove to taste) ————————————
    "type-enum": [
      2, // 0 = disable, 1 = warn, 2 = error
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style", // formatting, white-space
        "refactor",
        "perf",
        "test",
        "build", // tooling, deps
        "ci",
        "chore",
        "revert",
      ],
    ],

    // —— Optional: limit subject line length ————————————————
    "header-max-length": [2, "always", 72],

    // —— Optional: enforce lower-case scope names ————————————
    // e.g. feat(engine): …  ✅   vs.  feat(Engine): … ❌
    "scope-case": [2, "always", "lower-case"],

    // —— Optional: protect main branch name as a scope ————————
    // Avoid commits like feat(main): … which cause confusion
    "scope-enum": [
      2,
      "always",
      ["engine", "policy", "infra", "docs", "ci", "deps"],
    ],

    // —— Optional: blank line before body required ————————————
    // 'body-leading-blank': [2, 'always']
  },
};
