### Describe the PR

A clear and concise description of what the pull request does.

### PR checklist

<!-- (Update "[ ]" to "[x]" to check a box) -->

**What kind of change does this PR introduce?** (check at least one)

- [ ] Bugfix (fixes a boo-boo in the code) - `fix(...)`, requires a patch version update
- [ ] Feature (adds a new feature to `v-aspect-ratio`) - `feat(...)`, requires a minor version update
- [ ] Enhancement (augments an existing feature) - `feat(...)`, requires a minor version update
- [ ] Documentation update (improves documentation or typo fixes) - `chore(docs)`, requires a patch version update
- [ ] Other (please describe)

**Does this PR introduce a breaking change?** (check one)

- [ ] No
- [ ] Yes (please describe since breaking changes require a major version update)

**The PR fulfills these requirements:**

- [ ] It's submitted to the `dev` branch, **not** the `master` branch
- [ ] When resolving a specific issue, it's referenced in the PR's title (i.e. `[...] (fixes #xxx[,#xxx])`, where "xxx" is the issue number)
- [ ] It should address only one issue or feature. If adding multiple features or fixing a bug and adding a new feature, break them into separate PRs if at all possible.
- [ ] The title should follow the [**Conventional Commits**](https://www.conventionalcommits.org/) naming convention (i.e. `fix: message`, `docs: message`, `chore: message`, etc.). **This is very important, as the `CHANGELOG` is generated from these messages, and determines the next version type (patch or minor).**

**If new features/enhancement/fixes are added or changed:**

- [ ] Includes documentation updates
- [ ] New/updated tests are included and passing (required for new features and enhancements)
- [ ] Existing test suites are passing

**If adding a new feature, or changing the functionality of an existing feature, the PR's
description above includes:**

- [ ] A convincing reason for adding this feature (to avoid wasting your time, it's best to open a suggestion issue first and wait for approval before working on it)
