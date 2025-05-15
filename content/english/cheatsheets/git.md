---
title: "Git"
meta_title: ""
description: "**Git   cheatsheet**"
author: "CodeYodha"
draft: false
---
# Git Cheatsheet - Essential Commands



###  🛠️ Setup & Configuration
- **`git config --global user.name "Your Name"`**: Set your username
- **`git config --global user.email "your.email@example.com"`**: Set your email
- **`git config --global core.editor nano`**: Set default editor (can be vim, code, etc.)
- **`git config --list`**: List all configuration settings



###  📁 Repository Initialization
- **`git init`**: Initialize a new Git repository
- **`git clone <repo_url>`**: Clone an existing repository



###  📄 Staging & Committing
- **`git status`**: Show current changes
- **`git add <file>`**: Stage a file
- **`git add .`**: Stage all changes
- **`git commit -m "commit message"`**: Commit staged changes
- **`git commit -am "commit message"`**: Add and commit in one step



###  🔄 Branching & Merging
- **`git branch`**: List branches
- **`git branch <name>`**: Create a new branch
- **`git checkout <branch>`**: Switch branches
- **`git checkout -b <branch>`**: Create and switch to a new branch
- **`git merge <branch>`**: Merge a branch into the current one
- **`git branch -d <branch>`**: Delete a branch



###  📤 Pushing & Pulling
- **`git push`**: Push changes to remote
- **`git push origin <branch>`**: Push specific branch
- **`git pull`**: Pull latest changes from remote
- **`git fetch`**: Download objects and refs from another repository



###  🕵️ History & Logs
- **`git log`**: View commit history
- **`git log --oneline`**: Compact commit history
- **`git diff`**: Show file differences
- **`git show <commit>`**: Show a specific commit



###  ♻️ Undoing Changes
- **`git checkout -- <file>`**: Discard changes in file
- **`git reset HEAD <file>`**: Unstage file
- **`git revert <commit>`**: Revert a specific commit
- **`git reset --hard`**: Reset working directory and staging area



###  🔗 Remote Repositories
- **`git remote -v`**: Show remotes
- **`git remote add origin <url>`**: Add a remote repository
- **`git remote remove origin`**: Remove a remote



###  📌 Tags
- **`git tag`**: List tags
- **`git tag <name>`**: Create a tag
- **`git push origin <tag>`**: Push a tag



###  📚 Stashing
- **`git stash`**: Stash changes
- **`git stash pop`**: Apply and remove last stash
- **`git stash list`**: List stashes



###  🧪 Miscellaneous
- **`git blame <file>`**: Show who changed what and when
- **`git clean -fd`**: Remove untracked files and directories
- **`git cherry-pick <commit>`**: Apply a commit from another branch

[⬇️ Download the Git Cheatsheet PDF](/downloads/git_cheatsheet_final.pdf)
