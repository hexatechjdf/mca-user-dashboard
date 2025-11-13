import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserMetaCard from "../components/UserProfile/UserMetaCard";
import PageMeta from "../components/common/PageMeta";
import BusinessInformation from "../components/UserProfile/BusinessInformation";
import OwnerInformation from "../components/UserProfile/OwnerInformation";
import { useGetLeadManageQuery } from "../reduxApi/allApiSlice";
import { AllDocuments } from "../components/files";
import UserProfileSkeleton from "../components/UserProfile/UserProfileSkeleton";

export default function UserProfiles() {
  const {
    data: leadManage,
    isLoading: leadManageLoading,
    isError: leadManageError,
  } = useGetLeadManageQuery();

  if (leadManageLoading) return <UserProfileSkeleton />;

  return (
    <>
      <PageMeta
        title="User Dashboard | SmartLoan Portal"
        description="View and manage your loan applications, monitor approval status, and handle repayments easily through your SmartLoan user dashboard."
      />

      <PageBreadcrumb pageTitle="Profile" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetaCard />
          <BusinessInformation data={leadManage} />
          <OwnerInformation data={leadManage} />
          <AllDocuments data={leadManage} />
        </div>
      </div>
    </>
  );
}
