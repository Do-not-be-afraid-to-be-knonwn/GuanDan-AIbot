module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer", // reads types
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/npm", { npmPublish: false }],
    "@semantic-release/git", // commits updated CHANGELOG
    "@semantic-release/github", // creates GitHub Release
  ],
};
