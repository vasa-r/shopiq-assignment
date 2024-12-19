import Carousel from "@/components/Carousel";
const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <Carousel autoScroll={true} />
    </div>
  );
};

export default page;
