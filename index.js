#!/usr/bin/env node
const { program } = require('commander');
const createMr = require('./createMr')

// Define the 'create-mr' command
program.command('open <projectId> <source> <target>')
    // Define the options for the 'create-mr' command
    .option('-p, --gitlab-private-token <gitlabPrivateToken>', 'Gitlab private token')
    .option('-t, --title <title>', 'Title of the merge request')
    .option('-d, --description <description>', 'Description of the merge request')
    .option('-l, --labels <labels>', 'Labels of the merge request')
    .option('-a, --assignee <assignee>', 'Assignee of the merge request')
    .option('-r, --reviewer <reviewer>', 'Reviewer of the merge request')
    .option('-s, --squash', 'Squash commits when merging')
    .option('-m, --remove-source-branch', 'Remove source branch when merging')
    // Describe what the 'create-mr' command does
    .description('Create a merge request')
    // Call the 'createMr' function when the 'create-mr' command is run
    .action(async (...args) => {
        try {
            await createMr(...args);
        } catch (error) {
            console.error('Error creating merge request:', error);
            process.exit(1);
        }
    });

// Parse the command-line arguments
program.parse(process.argv);
