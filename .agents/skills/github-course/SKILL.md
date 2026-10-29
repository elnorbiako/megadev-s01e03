---
name: github-course
description: Publish course work as a public GitHub repo and manage its issues using gh, with explicit human approval and account checks.
---

# Course GitHub routine

1. Read `gh repo create --help`, `gh issue create --help`, `gh issue close --help` for current flags.
2. Run `gh auth status` and `gh api user --jq .login`. For this project require **elnorbiako**. Never operate as norbert-rozyc-allegro.
3. If missing, ask the human to run `gh auth login --hostname github.com --web` and finish browser authorization. Never request tokens.
4. Ask before making or changing anything on GitHub. Name the owner, repo, public visibility, files and issue operations. Course approval does not authorize unrelated changes.
5. Keep browser profiles, sign-in HTML, logs and credentials outside the repo. Use repository-local Git author settings with the account's GitHub noreply address.
6. After approval: `gh repo create elnorbiako/NAME --public --source=. --remote=origin --push`.
7. Create each issue using explicit `--repo elnorbiako/NAME --title ... --body-file ...`. Save returned URLs locally.
8. Re-read state with `gh issue list --repo elnorbiako/NAME --state all --json number,title,state,body,url`. The desk may change issues while work proceeds.
9. When a later change is needed, show the current state and ask the human for approval. Use `gh issue close NUMBER --repo ... --reason completed` only for an actually completed fix, or `--reason duplicate --duplicate-of NUMBER` for a verified duplicate. Verify with `gh issue view`.
10. Never close a bug merely to make a task look done, overwrite concurrent edits blindly, or claim a publication succeeded without checking the remote.
