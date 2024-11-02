import Announcements from "@/components/Announcements";
import Header from "@/components/Header";
import QuickLinks from "@/components/QuickLinks";
import ClassRecordings from "@/components/ClassRecordings";
import ClassSchedule from "@/components/ClassSchedule";
import data from "@/data/data";

export default function Home() {
  const { schedule } = data; 
  const todayClasses = schedule.filter((classItem) => classItem.status === "Today");

  return (
    <main className="h-[100vh] mt-16">
      <Header />
      <div className="container h-[85vh] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Announcements />
          <ClassSchedule />
        </div>
        <div>
          <QuickLinks hasLiveClasses={todayClasses.length > 0} /> 
        </div>
        <div>
          <ClassRecordings />
        </div>
      </div>
    </main>
  );
}
