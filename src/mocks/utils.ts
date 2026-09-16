import { HttpResponse } from "msw";

interface PaginatedResult<T> {
  data: T[];
  meta: {
    nextCursor: string | null;
    hasMore: boolean;
    total: number;
  };
}

export function paginate<T extends { id: string }>(
  items: T[],
  cursor: string | null,
  limitRaw: string | null,
  defaultLimit = 20
): PaginatedResult<T> {
  const parsedLimit = limitRaw === null ? NaN : Number(limitRaw);
  const limit = Number.isFinite(parsedLimit) && parsedLimit > 0 ? parsedLimit : defaultLimit;

  let startIdx = 0;
  if (cursor) {
    const idx = items.findIndex((item) => item.id === cursor);
    startIdx = idx === -1 ? items.length : idx + 1;
  }

  const page = items.slice(startIdx, startIdx + limit);
  const hasMore = startIdx + page.length < items.length;
  const lastItem = page[page.length - 1];

  return {
    data: page,
    meta: {
      nextCursor: hasMore ? (lastItem?.id ?? null) : null,
      hasMore,
      total: items.length,
    },
  };
}

export async function parseJsonBody<T>(request: Request): Promise<T | null> {
  try {
    return (await request.json()) as T;
  } catch {
    return null;
  }
}

export function validationError(message: string) {
  return HttpResponse.json(
    {
      statusCode: 422,
      error: "VALIDATION_ERROR",
      message,
      correlationId: "mock-corr-422",
      details: null,
    },
    { status: 422 }
  );
}
