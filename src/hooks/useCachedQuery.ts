import { getFromCache, storeInCache } from "@/utils/cache";
import { QueryFunction, QueryKey, useQuery } from "@tanstack/react-query";

export default function useCachedQuery<T>(
  queryKey: QueryKey,
  queryFn: () => Promise<T>
) {
  return useQuery<T>(queryKey, async () => {
    const cachedValue = getFromCache<T>(queryKey.toString());

    if (cachedValue) return cachedValue;

    const queryData = await queryFn();

    storeInCache(queryKey.toString(), queryData, 24 * 60 * 60 * 1000);

    return queryData;
  });
}
