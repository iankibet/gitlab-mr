
# @iankibetsh/gitlab-mr

This is a Node.js application designed to assist in the management and creation of GitLab merge requests. It uses the `axios` library to make API calls to GitLab.

## Installation

To install the package, run the following command:

```bash
npm install -g @iankibetsh/gitlab-mr
```

## Usage

You can use the `createMr` function via the command line as follows:

```bash
gitlab-mr open ${CI_PROJECT_ID} ${CI_COMMIT_REF_NAME} master --title="${CI_COMMIT_REF_NAME} WIP" -p ${PRIVATE_TOKEN}
```

In this command:

- `${CI_PROJECT_ID}` should be replaced with your GitLab project ID.
- `${CI_COMMIT_REF_NAME}` should be replaced with the name of your commit reference.
- `master` is the target branch for the merge request.
- `${CI_COMMIT_REF_NAME} WIP` is the title of the merge request.
- `${PRIVATE_TOKEN}` should be replaced with your GitLab private token.

This command will create a merge request with the specified parameters.

## Docker

A Dockerfile is included in the repository. It uses the `lorisleiva/laravel-docker:8.2` image and installs Node.js version 16.13.0 using `nvm`. The application is then installed and linked using `npm`.

## Dependencies

- `axios`: Used to make HTTP requests.
- `commander`: Used for command-line interfaces.

## License

This project is licensed under the MIT License.


Please replace `${CI_PROJECT_ID}`, `${CI_COMMIT_REF_NAME}`, and `${PRIVATE_TOKEN}` with your actual GitLab project ID, commit reference name, and private token respectively.
