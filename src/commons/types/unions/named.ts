/**
 * Placeholders for pagination page buttons.
 */
export const paginationDirections = {
  Prev: 'Prev',
  Next: 'Next'
} as const;

export type PaginationDirection = typeof paginationDirections[keyof typeof paginationDirections];
