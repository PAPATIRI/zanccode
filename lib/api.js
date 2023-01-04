import qs from 'qs';

export function getStrapiURL(path = '') {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${path}`;
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
    const mergedOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    };

    //build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`;

    //trigerr api call
    const response = await fetch(requestUrl, mergedOptions);

    //handle response
    if (!response.ok) {
        console.error(response.statusText);
        throw new Error('terjadi error coba lagi setelah beberapa saat');
    }

    const data = await response.json();
    return data;
}
