//#region Global Imports
import 'isomorphic-unfetch';
import getConfig from 'next/config';
import { stringify } from 'query-string';
//#endregion Global Imports

//#region Interface Imports
import { HttpModel } from '@Interfaces';
//#endregion Interface Imports

/**
 * @module Http
 */

const {
	publicRuntimeConfig: { API_KEY, API_URL },
} = getConfig();

const BaseUrl = `${API_URL}/api/v6.0`;

export const Http = {
	Request: async <A>(
		methodType: string,
		url: string,
		params?: HttpModel.IRequestQueryPayload,
		payload?: HttpModel.IRequestPayload,
	): Promise<A> => {
		return new Promise((resolve, reject) => {
			// const query = params ? `?${stringify({ ...params, api_key: API_KEY })}` : '';

			fetch(`${BaseUrl}${url}`, {
				// body: JSON.stringify(payload),
				// cache: 'no-cache',
				// headers: {
				// 	"Accept": 'application/json',
				// 	// "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:68.0) Gecko/20100101 Firefox/68.0",
				// 	'content-type': 'application/json',
				// 	'Content-Type': 'application/json',
				// 	'Access-Control-Allow-Origin': "*",
				// 	// 'Access-Control-Allow-Headers': "Content-Type",
				// 	// 'Access-Control-Allow-Headers': 'application/json',
				// 	// 'Access-Control-Allow-Methods': "GET"
				// },
				// "mode": "cors",
				// method: `${methodType}`,
				body: JSON.stringify(payload),
				cache: 'no-cache',
				headers: {
					'content-type': 'application/json',
				},
				method: `${methodType}`,
			})
				.then(async response => {
					console.log(response);
					if (response.status === 200) {
						return response.json().then(resolve);
					} else {
						return reject(response);
					}
				})
				.catch(e => {
					console.log(e);
					reject(e);
				});
		});
	},
};
