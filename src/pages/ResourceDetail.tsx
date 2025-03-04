
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResourceDetail } from "@/components/ResourceDetail";

const ResourceDetailPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ResourceDetail />
      </div>
      <Footer />
    </div>
  );
};

export default ResourceDetailPage;
