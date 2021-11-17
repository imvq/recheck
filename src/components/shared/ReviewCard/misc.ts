import { IReviewParsed } from 'commons/types';

/**
 * Parsing review content into object.
 * Since review can be retrieved only from the server its valid format is guaranteed.
 */
export const parseReviewContent = (content: string): IReviewParsed => JSON.parse(content);
