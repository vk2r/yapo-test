import { httpClient, token } from '../client';
import { AxiosResponse, CancelTokenSource } from 'axios';

// Definitions
import { Characters } from '../../../../domain/models';

// Resource
const resource = '/characters';

// Dynamic token source
let source: CancelTokenSource;

export default {
  cancel: () => source?.cancel('Marvel service cancelled'),
  get: async (
    limit: number,
    offset: number,
  ): Promise<AxiosResponse<Characters>> => {
    source = token.source();
    const params = `orderBy=name&limit=${limit}&offset=${offset}`;
    return await httpClient.get(`${resource}?${params}`, {
      cancelToken: source.token,
    });
  },
};
