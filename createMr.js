const axios = require('axios');

/**
 * Construct the request data for the merge request
 * @param {string} source - The source branch
 * @param {string} target - The target branch
 * @param {Object} options - The options for the merge request
 * @returns {Object} The request data
 */
const constructRequestData = (source, target, options) => {
    return {
        source_branch: source,
        target_branch: target,
        title: options.title,
        description: options.description,
        squash: options.squash,
        remove_source_branch: options.removeSourceBranch,
        assignee_id: options.assignee,
        reviewer_id: options.reviewer,
        labels: options.labels
    };
}

/**
 * Make an API call
 * @param {string} url - The URL for the API call
 * @param {Object} requestData - The request data
 * @param {Object} config - The configuration for the API call
 * @returns {Object} The response from the API call
 */
const makeApiCall = async (url, requestData, config) => {
    try {
        const response = await axios.post(url, requestData, config);
        return response;
    } catch (error) {
        console.error('Error making API call:', error);
    }
}

/**
 * Create a merge request
 * @param {string} projectId - The project ID
 * @param {string} source - The source branch
 * @param {string} target - The target branch
 * @param {Object} options - The options for the merge request
 */
const createMr = async (projectId, source, target, options) => {
    const host = options.host ?? 'https://gitlab.com';
    const requestData = constructRequestData(source, target, options);
    const url = `${host}/api/v4/projects/${projectId}/merge_requests?state=opened&source_branch=${source}&target_branch=${target}`;
    const headers = {
        'PRIVATE-TOKEN': options.gitlabPrivateToken
    };
    const config = {
        headers
    };
    const res = await axios.get(url, config)
    if(res.data.length > 0){
        console.log('merge request already exists');
        return;
    }
    Object.keys(requestData).forEach(key => requestData[key] === undefined && delete requestData[key]);
    const res2 = await makeApiCall(url, requestData, config);
    console.log("Merge request created with ID:" + res2.data.id);
}

module.exports = createMr;