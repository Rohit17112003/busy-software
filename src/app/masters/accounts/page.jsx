import MainLayout from "@/components/templates/MainLayout";
import MainAccountMaster from "@/components/pages/account-master/Index";
export const metadata = {
    title: "Account Master",
    description: "View and manage account information",
};

const page = () => {
    return (
        <div>
            <MainLayout title="Account Master" description="View and manage account information">
                <MainAccountMaster />
            </MainLayout>
        </div>
    )
}

export default page
