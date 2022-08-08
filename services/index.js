export const uploadFile = async (image) => {
    const body = new FormData();
    body.append("image", image);
    const response = await fetch('/api/upload', {
        method: 'POST',
        body
    });

    return response.json();
}

export const submitReport = async (data) => {
    const response = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(data),
        header: 'application/json'

    });

    return response.json();
}

export const getReports = async () => {
    const response = await fetch('http://localhost:3000/api/get-reports');

    return response.json();
}

export const getLastReport = async (file) => {
    const response = await fetch(`http://localhost:3000/api/last-report?file=${file}`);

    return response.json();
}