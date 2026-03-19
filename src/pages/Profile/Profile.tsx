import ProfileHeader from "@/pages/Profile/ProfileHeader";
import ProfileOverview from "@/pages/Profile/ProfileOverview";
import PersonalInfor from "@/pages/Profile/PersonalInfor";
import UpcomingSessions from "@/pages/Profile/UpcomingSessions";
import MyPackage from "@/pages/Profile/MyPackage";
import ProgressActivity from "@/pages/Profile/ProgressActivity";
import BillingPage from "@/pages/Profile/BillingPage";
function UserProfile() {
  return (
    <div className="bg-black min-h-screen ">
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