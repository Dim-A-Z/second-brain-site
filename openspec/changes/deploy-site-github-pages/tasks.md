## 1. Change Definition

- [x] 1.1 Create the deployment proposal, design, capability spec, and task plan
- [x] 1.2 Strictly validate the change before implementation

## 2. Pages Configuration

- [x] 2.1 Configure the Astro site origin and repository base while retaining static output
- [x] 2.2 Make the home-to-route and route-to-home links base-aware
- [x] 2.3 Preserve external URLs and fragment-only stop navigation unchanged

## 3. Deployment Workflow

- [x] 3.1 Add the official Astro GitHub Pages workflow for `main` and manual dispatch
- [x] 3.2 Use the committed lockfile, minimum Pages permissions, and no secrets or environment values

## 4. Documentation

- [x] 4.1 Record GitHub Pages delivery and hosting portability in the architecture documentation

## 5. Verification

- [x] 5.1 Strictly validate the completed OpenSpec change
- [x] 5.2 Build the production site successfully
- [x] 5.3 Verify base-aware route output, internal links, unchanged external and fragment links, and static deployment safety
- [x] 5.4 Review Git status and the complete unstaged diff without staging, committing, pushing, or archiving
