#!/bin/bash

# Repository in the format "owner/repo"
REPO="https://github.com/zacjactech/tasksphere"

# Read the JSON file and loop through each issue
jq -c '.issues[] | {title, body, labels, assignee, milestone}' github_issues.json | while read issue; do
  TITLE=$(echo $issue | jq -r '.title')
  BODY=$(echo $issue | jq -r '.body')
  LABELS=$(echo $issue | jq -r '.labels | join(",")')
  ASSIGNEE=$(echo $issue | jq -r '.assignee')
  MILESTONE=$(echo $issue | jq -r '.milestone')

  # Create the issue using GitHub CLI
  gh issue create --repo $REPO \
    --title "$TITLE" \
    --body "$BODY" \
    --label "$LABELS" \
    --assignee "$ASSIGNEE" \
    --milestone "$MILESTONE"
done
