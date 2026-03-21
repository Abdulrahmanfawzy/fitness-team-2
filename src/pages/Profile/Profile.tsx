import ProfileHeader from "@/pages/Profile/ProfileHeader";
import ProfileOverview from "@/pages/Profile/ProfileOverview";
import PersonalInfor from "@/pages/Profile/PersonalInfor";
import UpcomingSessions from "@/pages/Profile/UpcomingSessions";
import MyPackage from "@/pages/Profile/MyPackage";
import ProgressActivity from "@/pages/Profile/ProgressActivity";
import BillingPage from "@/pages/Profile/BillingPage";
function UserProfile() {
  return (
    <div className="bg-linear-to-b from-[#FF4D4DCC]/15 via-[#FF4D4D]/0.5 to-[#838383]/0.5 px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen ">
      <ProfileHeader />
      <ProfileOverview />
      <PersonalInfor />
      <UpcomingSessions />
      <MyPackage />
      <ProgressActivity />
      <BillingPage />
    </div>
  )
}

export default UserProfile;