import { getFromCache, storeInCache } from "@/utils/cache";
import { hoursToMillis } from "@/utils/utils";
import { QueryKey, useQuery } from "@tanstack/react-query";

export default function useCachedQuery<T>(
  queryKey: QueryKey,
  queryFn: () => Promise<T>
) {
  return useQuery<T>(queryKey, async () => {
    const cachedValue = getFromCache<T>(queryKey.toString());

    if (cachedValue) return cachedValue;

    const queryData = await queryFn();

    storeInCache(queryKey.toString(), queryData, hoursToMillis(24));

    return queryData;
  });
}
