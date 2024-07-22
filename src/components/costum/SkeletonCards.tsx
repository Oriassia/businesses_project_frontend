import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCards() {
  const skeletonArray = Array.from({ length: 10 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {skeletonArray.map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-[300px] w-[280px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonCards;
