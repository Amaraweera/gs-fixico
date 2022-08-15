/**
 * Upload damage report image.
 * @param {Object} image - Upload image object.
 */
export const uploadFile = async (image) => {
    const body = new FormData();
    body.append("image", image);
    const response = await fetch('/api/upload', {
        method: 'POST',
        body
    });

    return response.json();
}

/**
 * Submit damage report.
 * @param {Object} data - Damage report details object.
 */
export const submitReport = async (data) => {
    const response = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(data),
        header: 'application/json'

    });

    return response.json();
}

/**
 * Fetch all damage reports.
 */
export const getReports = async () => {
    const response = await fetch('http://localhost:3000/api/get-reports');

    return response.json();
}

/**
 * Fetch last submit report.
 * @param {String} file - Previous submitted report file name.
 */
export const getLastReport = async (file) => {
    const response = await fetch(`http://localhost:3000/api/last-report?file=${file}`);

    return response.json();
}